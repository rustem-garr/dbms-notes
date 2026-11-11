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
# Independent models: test semantics rather than a particular SQL spelling.
new = {c['id']: c for c in data['practice']}
def database(schema):
    connection = sqlite3.connect(':memory:')
    connection.execute('PRAGMA foreign_keys=ON')
    connection.executescript(schema)
    return connection

db=database('''CREATE TABLE Candidate(candidateId INTEGER,name TEXT);
CREATE TABLE RequiredSkill(skillId INTEGER);CREATE TABLE CandidateSkill(candidateId INTEGER,skillId INTEGER);
INSERT INTO Candidate VALUES(1,'A'),(2,'B'),(3,'C');INSERT INTO RequiredSkill VALUES(10),(20);
INSERT INTO CandidateSkill VALUES(1,10),(1,20),(2,10),(2,10);''')
assert db.execute(new['p3n3q7']['answer']).fetchall()==[(1,'A')]
db.execute('DELETE FROM RequiredSkill')
assert len(db.execute(new['p3n3q7']['answer']).fetchall())==3

db=database('''CREATE TABLE Visit(visitId INTEGER,siteId INTEGER,visitorId INTEGER,fee INTEGER,completed INTEGER);
INSERT INTO Visit VALUES(1,1,1,40,1),(2,1,2,40,1),(3,1,3,30,1),(4,2,1,50,1),(5,2,1,50,1),(6,2,1,50,1),(7,3,1,500,0);''')
assert db.execute(new['p3n4q8']['answer']).fetchall()==[(1,3,110)]

db=database('''CREATE TABLE Appointment(appointmentId INTEGER,roomId INTEGER,startsAt INTEGER,endsAt INTEGER);
INSERT INTO Appointment VALUES(1,1,10,20),(2,1,20,30),(3,1,15,25),(4,2,15,25);''')
assert db.execute(new['p3n8q8']['answer']).fetchall()==[(1,3),(2,3)]

db=database('''CREATE TABLE Coach(coachId INTEGER PRIMARY KEY);CREATE TABLE Room(roomId INTEGER PRIMARY KEY);
INSERT INTO Coach VALUES(1),(2);INSERT INTO Room VALUES(1),(2);''')
db.executescript(new['p3n6q8']['answer'])
db.execute("INSERT INTO DailyAllocation VALUES(1,'2027-01-01',1)")
for bad in ["INSERT INTO DailyAllocation VALUES(1,'2027-01-01',2)","INSERT INTO DailyAllocation VALUES(2,'2027-01-01',1)","INSERT INTO DailyAllocation VALUES(3,'2027-01-02',2)"]:
    try: db.execute(bad)
    except sqlite3.IntegrityError: pass
    else: raise AssertionError('Constraint did not reject '+bad)

db=database('''CREATE TABLE Basket(basketId INTEGER,storedTotal INTEGER);CREATE TABLE Line(basketId INTEGER,qty INTEGER,unitPrice INTEGER);
INSERT INTO Basket VALUES(1,20),(2,0),(3,9),(4,1);INSERT INTO Line VALUES(1,2,10),(3,2,5);''')
assert db.execute(new['p3n9q8']['answer']).fetchall()==[(3,9,10),(4,1,0)]

db=database('''CREATE TABLE Sale(region TEXT,units INTEGER,revenue INTEGER);
INSERT INTO Sale VALUES('A',2,20),('A',1,25),('B',0,0);''')
assert db.execute(new['p3n13q7']['answer']).fetchall()==[('A',15.0),('B',None)]

db=database('CREATE TABLE Wallet(walletId INTEGER,points INTEGER);INSERT INTO Wallet VALUES(1,10);')
db.executescript(new['p3n10q8']['answer'])
assert db.execute('SELECT points FROM Wallet').fetchone()==(15,)
print('PASS: independent SQL models for relational division/empty sets, grouping/distinctness, overlap boundaries, composite constraints, empty totals, weighted arithmetic and savepoint rollback.')
