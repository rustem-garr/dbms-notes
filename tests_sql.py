"""Execute selected portable model answers against boundary-case data."""
import json, pathlib, sqlite3
text = pathlib.Path(__file__).with_name('content.js').read_text()
data = json.loads(text[text.index('{'):].rstrip().rstrip(';'))
cards = {c['id']: c for n in data['notes'] for c in n['cards']}
db = sqlite3.connect(':memory:')
db.executescript('''
CREATE TABLE Technician(techId INTEGER PRIMARY KEY, name TEXT, depotId INTEGER, salary INTEGER);
CREATE TABLE WorkLog(techId INTEGER, jobId INTEGER, hours INTEGER);
CREATE TABLE Job(jobId INTEGER PRIMARY KEY, title TEXT);
INSERT INTO Technician VALUES(1,'Ada',1,100),(2,'Bo',1,300),(3,'Cal',2,200),(4,'Dee',2,400),(5,'Eli',3,NULL);
INSERT INTO Job VALUES(1,'Repair'),(2,'Inspect'),(3,'Unused');
INSERT INTO WorkLog VALUES(1,1,2),(1,1,3),(2,1,4),(3,1,5),(4,1,6),(1,2,1),(1,2,1),(1,2,1),(1,2,1);
''')
assert db.execute(cards['v2n4c7']['answer']).fetchall() == [(1,1,'Ada',9),(1,2,'Bo',4),(2,3,'Cal',5),(2,4,'Dee',6),(3,5,'Eli',0)]
assert db.execute(cards['v2n4c8']['answer']).fetchall() == [(1,'Repair',4)]
assert db.execute(cards['v2n4c12']['answer']).fetchall() == [(2,'Bo'),(4,'Dee')]
print('PASS: portable SQL models preserve empty entities, count distinct participants, and correlate group averages.')
