import sqlite3

conn = sqlite3.connect(r'backend/.tmp/data.db')
cursor = conn.cursor()

cursor.execute("SELECT id, action FROM up_permissions WHERE action LIKE 'api::worker.worker.%';")
print("Worker actions in db:", cursor.fetchall())

cursor.execute("SELECT id, action FROM up_permissions WHERE action LIKE 'api::supervisor-request.%';")
print("Supervisor request actions in db:", cursor.fetchall())

conn.close()
