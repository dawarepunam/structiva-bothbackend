import sqlite3

conn = sqlite3.connect(r'backend/.tmp/data.db')
cursor = conn.cursor()

print("--- WORKERS (FIRST 5) ---")
cursor.execute("SELECT id, name, code, status, category, daily_wage, assigned_project FROM workers LIMIT 5;")
for w in cursor.fetchall():
    print(w)

print("\n--- SUPERVISOR REQUESTS / TASKS (FIRST 5) ---")
cursor.execute("SELECT id, title, request_type, status, assigned_worker_name FROM supervisor_requests LIMIT 5;")
for r in cursor.fetchall():
    print(r)

print("\n--- ATTENDANCES COUNT ---")
cursor.execute("SELECT count(*) FROM attendances;")
print("Total attendance records:", cursor.fetchone()[0])

print("\n--- EXPENSES COUNT ---")
cursor.execute("SELECT count(*) FROM expenses;")
print("Total expense records:", cursor.fetchone()[0])

conn.close()
