import sqlite3

conn = sqlite3.connect(r'backend/.tmp/data.db')
cursor = conn.cursor()

# Check permissions for workers and supervisor-requests
cursor.execute("""
    SELECT p.action, r.name 
    FROM up_permissions p 
    JOIN up_permissions_role_lnk l ON p.id = l.permission_id 
    JOIN up_roles r ON l.role_id = r.id 
    WHERE p.action LIKE '%worker%' OR p.action LIKE '%supervisor-request%' OR p.action LIKE '%attendance%'
    ORDER BY p.action, r.name;
""")
perms = cursor.fetchall()
print(f"Total relevant permissions: {len(perms)}")
for action, role in perms:
    print(f"{action} -> {role}")

conn.close()
