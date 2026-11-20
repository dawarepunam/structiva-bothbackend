import sqlite3
import uuid

conn = sqlite3.connect(r'backend/.tmp/data.db')
cursor = conn.cursor()

# Get roles
cursor.execute("SELECT id, name, type FROM up_roles;")
roles = cursor.fetchall()
print("Roles:", roles)

public_role = next((r for r in roles if r[2] == 'public'), None)
authenticated_role = next((r for r in roles if r[2] == 'authenticated'), None)

actions_to_ensure = [
    'api::worker-site.worker-site.find',
    'api::worker-site.worker-site.update',
    'api::worker-site.worker-site.delete',
]

for role in [public_role, authenticated_role]:
    if not role:
        continue
    role_id = role[0]
    for action in actions_to_ensure:
        cursor.execute("SELECT id FROM up_permissions WHERE action = ?", (action,))
        row = cursor.fetchone()
        if not row:
            doc_id = uuid.uuid4().hex[:16]
            cursor.execute("INSERT INTO up_permissions (document_id, action, created_at, updated_at) VALUES (?, ?, datetime('now'), datetime('now'))", (doc_id, action))
            perm_id = cursor.lastrowid
        else:
            perm_id = row[0]

        cursor.execute("SELECT * FROM up_permissions_role_lnk WHERE permission_id = ? AND role_id = ?", (perm_id, role_id))
        if not cursor.fetchone():
            cursor.execute("INSERT INTO up_permissions_role_lnk (permission_id, role_id) VALUES (?, ?)", (perm_id, role_id))
            print(f"Granted {action} to role {role[1]}")

conn.commit()

cursor.execute("SELECT p.action, r.name FROM up_permissions p JOIN up_permissions_role_lnk l ON p.id = l.permission_id JOIN up_roles r ON l.role_id = r.id WHERE p.action LIKE '%worker-site%'")
print("Configured Worker-Site permissions:", cursor.fetchall())

conn.close()
