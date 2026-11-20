import sqlite3

conn = sqlite3.connect(r'backend/.tmp/data.db')
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%permission%';")
print("Permission tables:", cursor.fetchall())

cursor.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name LIKE '%permission%';")
for row in cursor.fetchall():
    print(row[0])

conn.close()
