import sqlite3
import uuid

conn = sqlite3.connect(r'backend/.tmp/data.db')
cursor = conn.cursor()

# Get Public role
cursor.execute("SELECT id FROM up_roles WHERE type = 'public';")
public_role_id = cursor.fetchone()[0]

read_actions = [
    'api::worker.worker.find',
    'api::worker.worker.findOne',
    'api::attendance.attendance.find',
    'api::attendance.attendance.findOne',
    'api::supervisor-request.supervisor-request.find',
    'api::supervisor-request.supervisor-request.findOne',
    'api::supervisor-request.supervisor-request.update'
]

for action in read_actions:
    cursor.execute("SELECT id FROM up_permissions WHERE action = ?", (action,))
    row = cursor.fetchone()
    if not row:
        doc_id = uuid.uuid4().hex[:16]
        cursor.execute("INSERT INTO up_permissions (document_id, action, created_at, updated_at) VALUES (?, ?, datetime('now'), datetime('now'))", (doc_id, action))
        perm_id = cursor.lastrowid
    else:
        perm_id = row[0]

    cursor.execute("SELECT * FROM up_permissions_role_lnk WHERE permission_id = ? AND role_id = ?", (perm_id, public_role_id))
    if not cursor.fetchone():
        cursor.execute("INSERT INTO up_permissions_role_lnk (permission_id, role_id) VALUES (?, ?)", (perm_id, public_role_id))
        print(f"Granted {action} to Public role")

conn.commit()
print("Public permissions successfully synced.")
conn.close()
