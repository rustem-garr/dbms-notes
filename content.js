window.DBMS_DATA = {
  "version": 5,
  "notes": [
    {
      "id": 1,
      "title": "How database systems work",
      "description": "Connect stored facts, rules, people and software.",
      "summary": [
        "Separate the data from the software that manages it.",
        "Explain how shared definitions reduce conflicting copies.",
        "Connect security, integrity, concurrency and recovery to concrete business needs."
      ],
      "cards": [
        {
          "id": "v2n1c1",
          "title": "Data and its manager",
          "concept": "A database stores related information, such as customers and orders. A database management system (DBMS) is the software that lets you create, search, change and protect that information.",
          "question": "A repair shop stores jobs in tables and uses PostgreSQL to manage them. Which part is the DBMS?",
          "answer": "PostgreSQL; the job tables and their contents form the database.",
          "kind": "choice",
          "choices": [
            "PostgreSQL; the job tables and their contents form the database.",
            "The individual repair invoice.",
            "The mechanic entering a job.",
            "Only the rows for completed jobs."
          ],
          "checks": []
        },
        {
          "id": "v2n1c2",
          "title": "Describing the data",
          "concept": "Metadata describes your data. For example, it says that a price column stores numbers and that a customer ID must be unique. The actual prices and customers are the data.",
          "question": "Which choice is a rule about how repair data is stored, rather than information about one repair?",
          "answer": "The rule that completedOn has the DATE type.",
          "kind": "choice",
          "choices": [
            "The rule that completedOn has the DATE type.",
            "Repair 214 finished on Tuesday.",
            "Customer 19 paid 85 dollars.",
            "Mechanic 8 replaced a tire."
          ],
          "checks": []
        },
        {
          "id": "v2n1c3",
          "title": "Independent files",
          "concept": "Imagine two spreadsheets with the same customer's address. If you update only one, they disagree. A shared database can reduce this problem by keeping one agreed place for that fact.",
          "question": "Billing and scheduling contain different addresses for the same customer. What problem does this show?",
          "answer": "Uncontrolled duplication has allowed inconsistent copies.",
          "kind": "choice",
          "choices": [
            "Uncontrolled duplication has allowed inconsistent copies.",
            "There are too few file extensions.",
            "The customer identifier must be numeric.",
            "Every table needs another index."
          ],
          "checks": []
        },
        {
          "id": "v2n1c4",
          "title": "Five components",
          "concept": "A database system needs five things: computers, software, data, instructions and people. Here, procedures means instructions for using and maintaining the system, such as how to restore a backup.",
          "question": "A written restoration checklist belongs to which component?",
          "answer": "Procedures: instructions for operating the system.",
          "kind": "choice",
          "choices": [
            "Procedures: instructions for operating the system.",
            "Hardware: physical devices.",
            "Data: only customer records.",
            "Software: only executable programs."
          ],
          "checks": []
        },
        {
          "id": "v2n1c5",
          "title": "Changing the storage",
          "concept": "You should be able to change how data is stored without rewriting every application. This is called physical data independence. Adding an index can change storage while leaving the application's queries unchanged.",
          "question": "Adding an index without changing a billing screen shows which goal?",
          "answer": "Physical data independence.",
          "kind": "choice",
          "choices": [
            "Physical data independence.",
            "Removal of all business constraints.",
            "Automatic normalization.",
            "Elimination of shared access."
          ],
          "checks": []
        },
        {
          "id": "v2n1c6",
          "title": "Controlled access",
          "concept": "Access rules decide who may do what. Data rules decide what values are allowed. For example, a receptionist may read prices, while a separate rule rejects negative prices.",
          "question": "Reception may view fees but may not change them. Which feature addresses that requirement?",
          "answer": "Authorization privileges.",
          "kind": "choice",
          "choices": [
            "Authorization privileges.",
            "A positive-fee CHECK constraint alone.",
            "A primary key alone.",
            "Alphabetical sorting."
          ],
          "checks": []
        },
        {
          "id": "v2n1c7",
          "title": "Reading selected facts",
          "concept": "SQL means Structured Query Language. You use it to ask a database for information. SELECT chooses the columns to show. WHERE chooses which rows to include.",
          "question": "Using Repair(repairId, status, fee), write SQL returning repairId and fee for repairs with status Closed.",
          "answer": "SELECT repairId, fee\nFROM Repair\nWHERE status = 'Closed';",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Select repairId and fee.",
            "Read Repair.",
            "Filter status with the literal Closed."
          ]
        },
        {
          "id": "v2n1c8",
          "title": "Structure versus contents",
          "concept": "DDL means Data Definition Language: it creates or changes tables and other database objects. DML means Data Manipulation Language: it reads or changes the rows inside those objects.",
          "question": "Write a table named Tag with an integer identifier and a required label of up to 40 characters. Find the statement category.",
          "answer": "CREATE TABLE Tag (\n tagId INTEGER PRIMARY KEY,\n label VARCHAR(40) NOT NULL\n);\n-- CREATE TABLE is DDL (Data Definition Language).",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define Tag with an integer primary key.",
            "Use VARCHAR(40) and NOT NULL for label.",
            "Find CREATE TABLE as Data Definition Language."
          ]
        },
        {
          "id": "v2n1c9",
          "title": "Shared responsibility",
          "concept": "The data administrator decides policies, such as who owns data and what names mean. The database administrator keeps the system running, secure and backed up. One person may do both jobs.",
          "question": "A charity is moving from spreadsheets to a shared system. Explain two policy decisions and two technical operating tasks it must assign.",
          "answer": "Policy decisions include defining the authoritative donor identifier and retention/access rules. Technical tasks include configuring privileges and testing backup restoration. Assign owners to both: shared software does not decide the meaning of data or verify recoverability on its own.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give two data-policy decisions.",
            "Give two technical operating tasks.",
            "Explain why both kinds of responsibility matter."
          ]
        },
        {
          "id": "v2n1c10",
          "title": "Benefits have costs",
          "concept": "A shared database makes it easier for people to use the same information. But it costs money and needs maintenance. If it stops working, several applications may be affected at once.",
          "question": "Compare a shared DBMS with independent files for a three-branch repair business. Give benefits, costs and one failure-preparation measure.",
          "answer": "A shared DBMS lets branches use one customer identity and consistent repair history, and supports controlled concurrent updates. It requires administration, training and infrastructure. An outage can affect every branch. Maintain tested backups and a restoration plan; availability design should reflect how much downtime the business can tolerate.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain sharing and consistency benefits.",
            "Name at least two costs or operational tradeoffs.",
            "Suggest a concrete recovery or availability measure."
          ]
        },
        {
          "id": "v4n1c11",
          "title": "Logical independence",
          "concept": "An application should ideally keep working when you reorganize its tables. A view can sometimes show the old table layout while the real tables change. This is called logical data independence.",
          "question": "A customer table is split into Customer and CustomerAddress. How could an older read-only application keep its old interface?",
          "answer": "Expose a view that joins the new relations into the old column layout, preserving the original meaning and number of rows.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n1c12",
          "title": "Schema versus current contents",
          "concept": "The schema is the database's blueprint: its tables, columns and rules. The instance is the information stored right now. Adding a customer changes the instance; adding a column changes the schema.",
          "question": "Adding a new delivery row and adding a new delivery column change which things?",
          "answer": "Adding a row changes the database instance. Adding a column changes the schema.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 2,
      "title": "Model entities and relationships",
      "description": "Capture meaning before choosing tables.",
      "summary": [
        "Read both ends of every relationship.",
        "Separate maximum cardinality from minimum participation.",
        "Keep relationship-specific facts on the relationship they describe."
      ],
      "cards": [
        {
          "id": "v2n2c1",
          "title": "Entity versus occurrence",
          "concept": "An entity type is a kind of thing, such as Customer. An occurrence is one particular customer. An Entity–Relationship (ER) model shows these things, their properties and how they connect.",
          "question": "In a tool-rental model, how should Tool and the drill with asset number D72 be distinguished?",
          "answer": "Tool is an entity type; D72 identifies one occurrence.",
          "kind": "choice",
          "choices": [
            "Tool is an entity type; D72 identifies one occurrence.",
            "Both are relationship types.",
            "D72 is an attribute domain.",
            "Tool is one occurrence and D72 is its type."
          ],
          "checks": []
        },
        {
          "id": "v2n2c2",
          "title": "Read multiplicities carefully",
          "concept": "For each relationship, ask two questions: must there be a match, and how many matches are allowed? Zero means optional. One means at most one when it is the maximum.",
          "question": "Each locker may be assigned to zero or one member; each member may use zero or one locker. Which description fits?",
          "answer": "An optional one-to-one association on both sides.",
          "kind": "choice",
          "choices": [
            "An optional one-to-one association on both sides.",
            "A mandatory many-to-many association.",
            "Exactly one locker for every member.",
            "Many lockers per member with mandatory participation."
          ],
          "checks": []
        },
        {
          "id": "v2n2c3",
          "title": "Attributes of associations",
          "concept": "Some facts describe a connection between two things. For example, the price agreed for one rental belongs to that rental, not just to the customer or the item.",
          "question": "The same tool is rented at different agreed rates on different dates. Where does the agreed rate belong?",
          "answer": "On the rental event.",
          "kind": "choice",
          "choices": [
            "On the rental event.",
            "Only on the member record.",
            "Only on the tool type.",
            "On the branch address."
          ],
          "checks": []
        },
        {
          "id": "v2n2c4",
          "title": "Composite versus multivalued",
          "concept": "A composite property has parts: an address has a street and city. A multivalued property has several values: one person may have three phone numbers. These are different ideas.",
          "question": "A supplier has an address with street and city and three phone numbers. Which classification is correct?",
          "answer": "Address is composite; phone number is multivalued.",
          "kind": "choice",
          "choices": [
            "Address is composite; phone number is multivalued.",
            "Address is multivalued solely because it has components.",
            "Phone number is derived because there are three numbers.",
            "Both attributes must be primary keys."
          ],
          "checks": []
        },
        {
          "id": "v2n2c5",
          "title": "False associations",
          "concept": "Suppose a branch has several workers and several projects. That does not mean every worker works on every project. Assuming those links exist is a modeling mistake called a fan trap.",
          "question": "A depot employs technicians and owns vehicles. Can those two links find which technician inspected a vehicle?",
          "answer": "No; an inspection association or event is required.",
          "kind": "choice",
          "choices": [
            "No; an inspection association or event is required.",
            "Yes; every technician inspected every vehicle.",
            "Yes; matching depot names proves it.",
            "No; vehicles cannot participate in relationships."
          ],
          "checks": []
        },
        {
          "id": "v2n2c6",
          "title": "Broken paths",
          "concept": "Suppose a parcel belongs to a branch but has no courier yet. If your model can reach its branch only through a courier, that link is missing. This is called a chasm trap.",
          "question": "A room belongs to a building but may have no caretaker. A model links Building → Caretaker → Room only. What fact can become unreachable?",
          "answer": "The building of an unassigned room.",
          "kind": "choice",
          "choices": [
            "The building of an unassigned room.",
            "The name of every assigned caretaker.",
            "The type of the building identifier.",
            "The number of columns in Room."
          ],
          "checks": []
        },
        {
          "id": "v2n2c7",
          "title": "Recursive roles",
          "concept": "A relationship can connect two rows from the same table. For example, one worker mentors another worker. Give each side a clear role, such as mentor and learner.",
          "question": "Using Worker(workerId, name, mentorId), list each worker name and mentor name, including workers with no mentor.",
          "answer": "SELECT w.name AS workerName, m.name AS mentorName\nFROM Worker w\nLEFT JOIN Worker m ON m.workerId = w.mentorId;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Use two aliases for Worker.",
            "Join mentorId to the mentor workerId.",
            "Preserve workers without a mentor with LEFT JOIN."
          ]
        },
        {
          "id": "v2n2c8",
          "title": "Optional unique links",
          "concept": "A foreign key checks that a linked row exists. UNIQUE stops the same value from appearing twice. NULL can mean there is no link yet, if the relationship is optional.",
          "question": "Assume Member(memberId) exists. Create Locker(lockerId, memberId) so a locker may be unassigned and no member is assigned two lockers. Use PostgreSQL.",
          "answer": "CREATE TABLE Locker (\n lockerId INTEGER PRIMARY KEY,\n memberId INTEGER UNIQUE REFERENCES Member(memberId)\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define a primary key for Locker.",
            "Reference Member from memberId.",
            "Allow NULL while enforcing UNIQUE known (not NULL) assignments."
          ]
        },
        {
          "id": "v2n2c9",
          "title": "Weak identification",
          "concept": "A weak entity needs its owner's ID to be identified. Seat 12 is not unique across all theaters, but theater ID plus seat number is. Being on the many side alone does not make an entity weak.",
          "question": "Compare Parcel identified globally by trackingCode with Seat numbered only within an auditorium. Explain identification and suggest keys.",
          "answer": "Parcel can use trackingCode independently. Seat requires the auditorium identifier together with seatNumber because number 12 can occur in several auditoriums. Use Seat(auditoriumId, seatNumber) as a composite primary key and auditoriumId as a foreign key. A large number of parcels per customer does not make Parcel weak.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Distinguish global identity from owner-relative identity.",
            "Give the composite Seat key and owner reference.",
            "Reject the idea that every many-side entity is weak."
          ]
        },
        {
          "id": "v2n2c10",
          "title": "Subtype constraints",
          "concept": "A subtype is a special kind of a general thing, such as Instructor within Staff. Ask whether everyone must have a subtype, and whether someone may belong to more than one subtype.",
          "question": "An employee can be a driver, a trainer, both, or neither. Describe the specialization constraints and how they change if every employee must have at least one role.",
          "answer": "The initial specialization is partial because some employees have neither role, and overlapping because one employee may have both. Requiring at least one role makes it total while it remains overlapping. Coverage and overlap are independent restrictions.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Find partial and overlapping at first.",
            "Change coverage to total under the new rule.",
            "Keep overlap separate from coverage."
          ]
        },
        {
          "id": "v4n2c11",
          "title": "Participation and cardinality",
          "concept": "A relationship's minimum tells you how many matches are required. Its maximum tells you how many are allowed. For example, each team may need at least two players but allow no more than ten.",
          "question": "Each collection must have 2–5 items, and each item belongs to exactly one collection. State the multiplicities in both directions.",
          "answer": "Per collection: 2..5 items. Per item: exactly 1 collection.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c12",
          "title": "Facts belonging to a relationship",
          "concept": "Put a fact where it belongs. Hours volunteered depend on both the person and the event. They belong in the record linking that person to that event.",
          "question": "Where should hours volunteered by a person at a particular event be stored?",
          "answer": "In Participation(personId, eventId, hours), with (personId,eventId) as the key if there is one recorded total per person-event pair.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c13",
          "title": "Derived attributes",
          "concept": "A derived value is calculated from other information. For example, age can be calculated from birth date. Storing age separately means you must keep updating it as time passes.",
          "question": "Why usually work out a person’s current age from dateOfBirth instead of storing age as the authoritative fact?",
          "answer": "Age changes with time even without a new person record. Deriving it from dateOfBirth avoids a stored age becoming stale.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c14",
          "title": "Identifying a weak occurrence",
          "concept": "A number may identify something only within its owner. Floor 2 is unique within one building, but not across all buildings. Combine building ID and floor number to identify the floor.",
          "question": "A building has floors numbered 1,2,3, while other buildings reuse those numbers. What identifies a floor?",
          "answer": "The pair (buildingId,floorNumber), with buildingId also referencing Building.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c15",
          "title": "Recursive relationships need roles",
          "concept": "When one kind of thing connects to itself, name the two roles. In Person mentors Person, one person is the mentor and the other is the learner. The role names show the direction.",
          "question": "In Person mentors Person, what two role names and foreign-key mapping make the direction clear?",
          "answer": "Use mentor and mentee roles. Store mentorId in the mentee’s Person row, referencing Person.personId; allow NULL if a mentor is optional.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c16",
          "title": "Type versus physical copy",
          "concept": "A product type and a physical copy are different things. A book title describes the book; a copy ID identifies the particular copy someone borrows. Several copies can share one title.",
          "question": "A library owns four copies of one title. What separate entity types should be modeled?",
          "answer": "Title(titleId,titleName,...) and Copy(copyId,titleId,...). Each physical copy has its own identifier and references one title.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c17",
          "title": "Repeated associations over time",
          "concept": "The same two people or things can be involved in several events. A customer may rent the same bicycle twice. The rental needs its own ID, or another way to distinguish those two events.",
          "question": "A member can rent the same bicycle many times. Why is (memberId,bicycleId) an insufficient Rental primary key?",
          "answer": "It would allow only one rental for that pair. Use rentalId, or a suitably unique event key that also distinguishes rental items.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n2c18",
          "title": "Overlapping subtypes",
          "concept": "Two subtype rules are separate. Partial means some people have no subtype; total means everyone has one. Overlapping means someone can belong to several subtypes; disjoint means only one.",
          "question": "A staff member may be a manager, an instructor, both or neither. Is this specialization total or partial, and disjoint or overlapping?",
          "answer": "Partial and overlapping.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 3,
      "title": "Relations, keys and algebra",
      "description": "Reason about rows, identities and query operations.",
      "summary": [
        "A key follows a business rule, not just the current sample.",
        "Relational algebra uses set semantics; SQL often keeps duplicates.",
        "A semijoin tests matching existence without returning the other side’s attributes."
      ],
      "cards": [
        {
          "id": "v2n3c1",
          "title": "Degree and cardinality",
          "concept": "A table is also called a relation. A row is a tuple, and a column is an attribute. Degree means the number of columns. Cardinality means the number of rows.",
          "question": "Shipment has 7 attributes and currently 48 tuples. After inserting 2 rows, what are degree and cardinality?",
          "answer": "Degree 7; cardinality 50.",
          "kind": "choice",
          "choices": [
            "Degree 7; cardinality 50.",
            "Degree 50; cardinality 7.",
            "Degree 9; cardinality 48.",
            "Degree 7; cardinality 48."
          ],
          "checks": []
        },
        {
          "id": "v2n3c2",
          "title": "Minimal identifiers",
          "concept": "A key identifies a row. A superkey may contain extra columns. A candidate key has no unnecessary columns. Choose one candidate key as the table's primary key.",
          "question": "Asset(assetId, serialNo, color) has independently unique assetId and serialNo. What is (assetId, color)?",
          "answer": "A superkey, but not a candidate key because color is unnecessary.",
          "kind": "choice",
          "choices": [
            "A superkey, but not a candidate key because color is unnecessary.",
            "A candidate key because it has two columns.",
            "A foreign key automatically.",
            "Not unique because colors repeat."
          ],
          "checks": []
        },
        {
          "id": "v2n3c3",
          "title": "Keys are rules",
          "concept": "A key must work for all valid future rows, not just today's sample. Two people may eventually share the same name, so currently different names do not prove that names are a good key.",
          "question": "All six current volunteers have different names. What can you conclude about name as a candidate key?",
          "answer": "Nothing definitive without a business rule guaranteeing uniqueness and minimality.",
          "kind": "choice",
          "choices": [
            "Nothing definitive without a business rule guaranteeing uniqueness and minimality.",
            "It is permanently a candidate key.",
            "It becomes a key after sorting.",
            "It is a foreign key because there are six values."
          ],
          "checks": []
        },
        {
          "id": "v2n3c4",
          "title": "Unknown is not a value",
          "concept": "NULL means information is missing, unknown or not applicable. It is not the same as zero or an empty string. Ordinary comparisons with NULL give UNKNOWN, which WHERE does not keep.",
          "question": "A row has returnDate NULL. What happens with WHERE returnDate = NULL?",
          "answer": "The row is not selected; use IS NULL.",
          "kind": "choice",
          "choices": [
            "The row is not selected; use IS NULL.",
            "The row is selected because the values match.",
            "NULL becomes today’s date.",
            "The database inserts an empty date."
          ],
          "checks": []
        },
        {
          "id": "v2n3c5",
          "title": "Selection and projection",
          "concept": "Selection chooses rows, such as workers in one branch. Projection chooses columns, such as worker names. In relational algebra, projection also removes duplicate result rows.",
          "question": "Projecting depotId from three rows containing 4, 4 and 9 gives what under relational set semantics?",
          "answer": "Two tuples: 4 and 9.",
          "kind": "choice",
          "choices": [
            "Two tuples: 4 and 9.",
            "Three tuples: 4, 4 and 9.",
            "One tuple: 17.",
            "No tuples unless depotId is a primary key."
          ],
          "checks": []
        },
        {
          "id": "v2n3c6",
          "title": "Join variants",
          "concept": "A join connects matching rows. An equijoin uses equals, such as matching branch IDs. A theta join can use other comparisons, such as less than. A natural join matches all shared column names.",
          "question": "Two tables share depotId and an unrelated status column. What can a natural join accidentally require?",
          "answer": "Equality of both depotId and status.",
          "kind": "choice",
          "choices": [
            "Equality of both depotId and status.",
            "Only equality of primary-key values, regardless of names.",
            "No comparisons at all.",
            "Every row to match every other row."
          ],
          "checks": []
        },
        {
          "id": "v2n3c7",
          "title": "Existence without duplication",
          "concept": "Sometimes you only need to know whether a match exists. EXISTS can return each supplier once even if the supplier has many matching deliveries. This matches the idea of a semijoin.",
          "question": "Using Supplier(supplierId, name) and Delivery(deliveryId, supplierId, damaged), return each supplier with at least one damaged delivery. damaged is 1 for damaged and 0 otherwise.",
          "answer": "SELECT s.supplierId, s.name\nFROM Supplier s\nWHERE EXISTS (\n SELECT 1 FROM Delivery d\n WHERE d.supplierId = s.supplierId AND d.damaged = 1\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Return only supplier attributes.",
            "Correlate Delivery to the current supplier.",
            "Require a damaged match without multiplying suppliers."
          ]
        },
        {
          "id": "v2n3c8",
          "title": "Set difference",
          "concept": "Sometimes you want things with no match, such as tools that were never rented. NOT EXISTS asks whether there is no matching row. It avoids the NULL surprise that can occur with NOT IN.",
          "question": "Using Asset(assetId, name) and Reservation(reservationId, assetId), write SQL listing assets that have never been reserved.",
          "answer": "SELECT a.assetId, a.name\nFROM Asset a\nWHERE NOT EXISTS (\n SELECT 1 FROM Reservation r WHERE r.assetId = a.assetId\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Start from all Asset rows.",
            "Use a correlated match on assetId.",
            "Retain only assets with no matching reservation."
          ]
        },
        {
          "id": "v2n3c9",
          "title": "Union compatibility",
          "concept": "UNION stacks compatible results on top of each other. Corresponding columns need compatible types. A Cartesian product is different: it pairs every row from one table with every row from the other.",
          "question": "R contains 3 distinct one-column values and S contains 4, with exactly 2 shared values. Find the union size and Cartesian-product size, and explain why the operations differ.",
          "answer": "The union has 3 + 4 - 2 = 5 distinct one-column tuples. The Cartesian product has 3 × 4 = 12 two-column tuples. Union combines compatible sets of values; the product constructs pairs and therefore has a different schema.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Calculate union size 5.",
            "Calculate product size 12.",
            "Explain compatibility and different output schemas."
          ]
        },
        {
          "id": "v2n3c10",
          "title": "Algebra in plain language",
          "concept": "Relational algebra is a small set of table operations. You can combine them: first choose rows, then join tables, then keep the columns you want. Each step produces another table-like result.",
          "question": "Carrier(carrierId, name), Route(carrierId, townId, fare), Town(townId, name, distance). Describe algebra steps returning carrier names serving towns within 35 miles for a fare below 12.",
          "answer": "Select Town rows with distance <= 35 and Route rows with fare < 12. Join the filtered relations on townId, then join Carrier on carrierId. Project Carrier.name. Under set semantics, repeated carrier names collapse; include carrierId if distinct carriers with equal names must stay distinguishable.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Filter town distance and route fare correctly.",
            "Join on the two appropriate identifiers.",
            "Project carrier names and discuss duplicate names."
          ]
        },
        {
          "id": "v4n3c11",
          "title": "A relation’s attribute domain",
          "concept": "A domain is the set of allowed values for a column. For example, a rating might allow only whole numbers from 1 to 5. A data type and a CHECK rule can express this.",
          "question": "How would you constrain a required rating to the integers 1 through 5?",
          "answer": "Declare an integer column with NOT NULL and CHECK (rating BETWEEN 1 AND 5).",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n3c12",
          "title": "Candidate versus superkey",
          "concept": "A candidate key identifies a row without extra columns. If serialNumber alone identifies a device, adding color still identifies it, but the pair is no longer a minimal key.",
          "question": "serialNumber alone identifies each device. If we add color to it, is (serialNumber,color) still a candidate key? Why?",
          "answer": "No. It is a superkey but is not minimal, because serialNumber alone identifies the row.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n3c13",
          "title": "Cartesian product",
          "concept": "A Cartesian product tries every possible pair of rows. If one table has 4 rows and another has 3, the result has 4 × 3 = 12 row pairs before filtering.",
          "question": "Relation A has 5 rows and B has 3 rows. How many row pairs are in A × B?",
          "answer": "15 row pairs.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n3c14",
          "title": "Natural joins can surprise",
          "concept": "A natural join matches every column name shared by two tables. If both tables gain a status column, the join may start matching status too. An explicit ON condition avoids this surprise.",
          "question": "Two tables share id and status, but the intended link is only id. Why prefer an explicit ON condition?",
          "answer": "ON a.id=b.id expresses the intended relationship without accidentally also requiring a.status=b.status.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n3c15",
          "title": "Set projection versus SQL bags",
          "concept": "In relational algebra, results are sets, so duplicate rows disappear. SQL normally keeps duplicates. Add DISTINCT when you want SQL to return each result row only once.",
          "question": "A column contains X,X,Y. Compare algebraic projection, SELECT column, and SELECT DISTINCT column.",
          "answer": "Algebraic projection returns X,Y. SELECT returns X,X,Y. SELECT DISTINCT returns X,Y.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n3c16",
          "title": "Relational division",
          "concept": "To find people who have every required skill, look for people with no missing required skill. This is the idea behind relational division. If no skills are required, everyone meets the requirement.",
          "question": "If no skills are required, which candidates satisfy “has every required skill”?",
          "answer": "Every candidate: there is no required skill that any candidate is missing.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 4,
      "title": "Write and reason about SQL",
      "description": "Build queries from required output back to the data.",
      "summary": [
        "Work out row filtering before grouped filtering.",
        "Specify whether zero-match entities must appear.",
        "Trace duplicates and NULL values through every join and aggregate."
      ],
      "cards": [
        {
          "id": "v2n4c1",
          "title": "Aggregate inputs",
          "concept": "COUNT(*) counts all rows. COUNT(price) counts only rows with a known price. SUM and AVG also ignore NULL values. For prices 10,20,NULL, the average is 15, not 10.",
          "question": "Measurements are 6, NULL, 12 and 12. What are COUNT(*), COUNT(value) and AVG(value)?",
          "answer": "4, 3 and 10.",
          "kind": "choice",
          "choices": [
            "4, 3 and 10.",
            "4, 4 and 7.5.",
            "3, 3 and 10.",
            "4, 2 and 9."
          ],
          "checks": []
        },
        {
          "id": "v2n4c2",
          "title": "Group filters",
          "concept": "WHERE filters individual rows before totals are calculated. GROUP BY makes groups. HAVING filters those groups after the totals are calculated. Use each one at the right stage.",
          "question": "A report totals completed repairs per technician, keeping totals above 900. Where do the two filters belong?",
          "answer": "status = Closed in WHERE; SUM(fee) > 900 in HAVING.",
          "kind": "choice",
          "choices": [
            "status = Closed in WHERE; SUM(fee) > 900 in HAVING.",
            "Both conditions must go in ORDER BY.",
            "The aggregate condition belongs in WHERE.",
            "The row status condition must be applied after every group is counted."
          ],
          "checks": []
        },
        {
          "id": "v2n4c3",
          "title": "More than one subquery result",
          "concept": "A scalar subquery must return at most one value. If several values are valid, use IN to accept any value in that list, or use EXISTS to check for a match.",
          "question": "WHERE depotId = (SELECT depotId FROM Depot WHERE city = Lyon) fails when two depots match. Which change expresses membership?",
          "answer": "Use IN instead of = for that subquery.",
          "kind": "choice",
          "choices": [
            "Use IN instead of = for that subquery.",
            "Add a random LIMIT 1 and ignore the other depot.",
            "Replace depotId with NULL.",
            "Remove the city condition and keep scalar equality."
          ],
          "checks": []
        },
        {
          "id": "v2n4c4",
          "title": "Outer-join counting",
          "concept": "A LEFT JOIN keeps every row from the left table. When nothing matches on the right, the right-side columns become NULL. This lets you show customers who have no orders.",
          "question": "After an unmatched depot is preserved by LEFT JOIN Staff, which count reports zero staff?",
          "answer": "COUNT(Staff.staffId), assuming staffId is known (not NULL) for real staff.",
          "kind": "choice",
          "choices": [
            "COUNT(Staff.staffId), assuming staffId is known (not NULL) for real staff.",
            "COUNT(*).",
            "COUNT(Depot.depotId).",
            "COUNT(1)."
          ],
          "checks": []
        },
        {
          "id": "v2n4c5",
          "title": "Patterns and bounds",
          "concept": "LIKE searches text patterns: % means any number of characters, and _ means one character. BETWEEN includes both ends, so BETWEEN 10 AND 20 includes 10 and 20.",
          "question": "Which expression matches codes starting AB followed by exactly two characters?",
          "answer": "code LIKE AB__ with the pattern enclosed in single quotes.",
          "kind": "choice",
          "choices": [
            "code LIKE AB__ with the pattern enclosed in single quotes.",
            "code LIKE %AB with the pattern enclosed in single quotes.",
            "code = AB% with the value enclosed in single quotes.",
            "code LIKE AB% which limits the suffix to two characters."
          ],
          "checks": []
        },
        {
          "id": "v2n4c6",
          "title": "Quantified comparisons",
          "concept": "ANY means a comparison must succeed for at least one returned value. ALL means it must hold for all of them. Empty results and NULL values need special care.",
          "question": "For known (not NULL) values 10 and 20, what does 15 > ANY mean, and what does 15 > ALL mean?",
          "answer": "ANY is true; ALL is false.",
          "kind": "choice",
          "choices": [
            "ANY is true; ALL is false.",
            "Both are true.",
            "Both are false.",
            "ANY is false; ALL is true."
          ],
          "checks": []
        },
        {
          "id": "v2n4c7",
          "title": "A zero-inclusive report",
          "concept": "To show workers with no work yet, start with all workers and LEFT JOIN their work records. SUM may then be NULL. COALESCE(total,0) replaces that missing total with zero.",
          "question": "Technician(techId, name, depotId), WorkLog(techId, jobId, hours). Write total hours per technician, including zero hours. Sort by depotId, then name.",
          "answer": "SELECT t.depotId, t.techId, t.name,\n COALESCE(SUM(w.hours), 0) AS totalHours\nFROM Technician t\nLEFT JOIN WorkLog w ON w.techId = t.techId\nGROUP BY t.depotId, t.techId, t.name\nORDER BY t.depotId, t.name;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Use Technician as the preserved left side.",
            "Group by technician identity and other columns shown in SELECT.",
            "Use COALESCE on SUM and the requested sort order."
          ]
        },
        {
          "id": "v2n4c8",
          "title": "Count people, not activity rows",
          "concept": "One person can have several work records. COUNT(*) counts those records. COUNT(DISTINCT personId) counts each different person once, which is useful when you want a headcount.",
          "question": "Job(jobId, title), WorkLog(techId, jobId, hours). A technician may have multiple logs for one job. Return jobs with at least four different technicians and show their participant count.",
          "answer": "SELECT j.jobId, j.title, COUNT(DISTINCT w.techId) AS technicians\nFROM Job j JOIN WorkLog w ON w.jobId = j.jobId\nGROUP BY j.jobId, j.title\nHAVING COUNT(DISTINCT w.techId) >= 4;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Join jobs to their work records.",
            "Count distinct technicians per job.",
            "Use HAVING with the inclusive threshold of four."
          ]
        },
        {
          "id": "v2n4c9",
          "title": "Explain the result",
          "concept": "A join can repeat a row once for each match. Before counting or adding numbers, check what one joined row represents. Otherwise a total may count the same fact several times.",
          "question": "Depot 1 has two technicians and Depot 2 has none. Compare counts from Depot LEFT JOIN Technician grouped by depot: COUNT(*), COUNT(techId), and SUM(1). Explain all values.",
          "answer": "For Depot 1, all three expressions return 2. For Depot 2, COUNT(*) and SUM(1) return 1 because the outer join creates one placeholder row. COUNT(techId) returns 0 because the right-side identifier is NULL. Choose a known (not NULL) child key to count actual matches.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give all three results for Depot 1.",
            "Give 1, 0 and 1 for Depot 2.",
            "Explain the NULL-extended placeholder row."
          ]
        },
        {
          "id": "v2n4c10",
          "title": "Safer data changes",
          "concept": "UPDATE changes every row that meets its WHERE condition. Without WHERE, it can change the whole table. Preview the condition and use a transaction when related changes must stay together.",
          "question": "A technician writes UPDATE Product SET price = price * 1.08 to adjust only category Tools. Explain the mistake and describe the steps for a safer change-and-check workflow.",
          "answer": "The missing WHERE updates every product. Use WHERE category = Tools with Tools quoted as a string. Inspect matching identifiers and prices, perform the change inside an appropriate transaction, validate affected rows and totals, then commit or roll back. A repeated run applies the increase again, so guard against accidental reruns.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Find the missing category condition.",
            "Suggest preview, transaction and affected-row verification.",
            "Explain that repeated percentage updates compound."
          ]
        },
        {
          "id": "v2n4c11",
          "title": "Dates and half-open ranges",
          "concept": "For a date range, include the start and exclude the start of the next period. This includes every time on the final day without guessing its last second.",
          "question": "Booking(bookingId, startsAt). Write a filter for all bookings beginning in March 2027, including any time on March 31. Use standard SQL date literals.",
          "answer": "SELECT bookingId, startsAt\nFROM Booking\nWHERE startsAt >= DATE '2027-03-01'\n AND startsAt < DATE '2027-04-01';",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Include the first instant of March.",
            "Exclude April 1 rather than guessing an end-of-day time.",
            "Return the specified columns."
          ]
        },
        {
          "id": "v2n4c12",
          "title": "Above a group average",
          "concept": "A correlated subquery uses a value from the row being checked. For example, it can compare each worker's pay with the average pay in that worker's own branch.",
          "question": "Technician(techId, name, depotId, salary). Return technicians paid above the average salary in their own depot. depotId is required.",
          "answer": "SELECT t.techId, t.name\nFROM Technician t\nWHERE t.salary > (\n SELECT AVG(t2.salary) FROM Technician t2\n WHERE t2.depotId = t.depotId\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Compare each technician salary to an aggregate subquery.",
            "Correlate by depotId.",
            "Use strict greater-than and handle NULL salaries through SQL semantics."
          ]
        },
        {
          "id": "v4n4c13",
          "title": "SQL evaluation order",
          "concept": "A useful reading order is: find and join rows, filter rows, group them, filter groups, choose output columns, then sort. This explains why a group-total condition belongs in HAVING.",
          "question": "Can a group total condition replace a row-level completed=1 condition when totaling completed work?",
          "answer": "No. Filter completed rows with WHERE before grouping; use HAVING only for conditions on the resulting groups.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c14",
          "title": "Empty aggregates",
          "concept": "If an ungrouped query finds no rows, COUNT returns 0 and SUM usually returns NULL. With GROUP BY, no input rows means no groups, so there are no result rows.",
          "question": "What does SELECT COUNT(*), SUM(fee) FROM Repair WHERE 1=0 return?",
          "answer": "One row containing 0 and NULL.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c15",
          "title": "NULL and NOT IN",
          "concept": "NOT IN can be surprising when its list contains NULL. The database cannot know whether a value differs from an unknown value. The result can be UNKNOWN instead of TRUE.",
          "question": "Does 7 NOT IN (3,NULL) evaluate to TRUE?",
          "answer": "No. It evaluates to UNKNOWN, so it does not pass a WHERE filter.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c16",
          "title": "Safe multirow membership",
          "concept": "If several branch IDs are valid, compare a worker's branchId with IN, not with a single-value equals test. IN asks whether the value appears anywhere in the returned list.",
          "question": "Write a condition selecting staff from any branch located in Oslo, using Staff.branchId and Branch(branchId,city).",
          "answer": "WHERE branchId IN (SELECT branchId FROM Branch WHERE city='Oslo')",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c17",
          "title": "Sorting ties deliberately",
          "concept": "ORDER BY controls the result's order. Add a second column to sort ties in the first, and a third if needed. Without ORDER BY, do not rely on rows appearing in a particular order.",
          "question": "Write the ordering clause for workers by surname, then given name, then workerId to break remaining ties.",
          "answer": "ORDER BY lastName, firstName, workerId;",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c18",
          "title": "Date windows",
          "concept": "A timestamp includes a date and time. To include a whole month, use at least its first day and less than the next month's first day. A last-day midnight cutoff would miss most of that day.",
          "question": "Write a standard SQL condition for timestamps in December 2027.",
          "answer": "WHERE happenedAt >= DATE '2027-12-01'\n  AND happenedAt < DATE '2028-01-01'",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c19",
          "title": "Quantifiers and empty sets",
          "concept": "ANY needs a matching value. With no values, it is false. ALL looks for no failed comparison; with no values to compare, it is true. These empty-set rules can affect a query's result.",
          "question": "For an empty subquery, what do x > ANY(subquery) and x > ALL(subquery) evaluate to?",
          "answer": "x > ANY(empty set) is FALSE. x > ALL(empty set) is TRUE.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n4c20",
          "title": "Delete only intended rows",
          "concept": "DELETE removes rows while leaving the table itself. WHERE chooses the rows to remove. Without WHERE, DELETE targets every row, so check the condition carefully.",
          "question": "Write SQL deleting only cancelled reservations from Reservation(reservationId,status).",
          "answer": "DELETE FROM Reservation WHERE status='Cancelled';",
          "kind": "sql",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 5,
      "title": "Define tables, constraints and views",
      "description": "Make invalid states harder to store.",
      "summary": [
        "Each constraint checks a different rule.",
        "Use composite references for identities scoped within a parent.",
        "Views expose a useful interface; ordinary views do not store a second result copy."
      ],
      "cards": [
        {
          "id": "v2n5c1",
          "title": "Required and valid",
          "concept": "NOT NULL means a value is required. CHECK tests whether a value follows a rule, such as price being positive. CHECK alone does not usually reject NULL, so you may need both rules.",
          "question": "Does CHECK (quantity > 0) alone reject quantity NULL?",
          "answer": "No; also use NOT NULL when quantity must be present.",
          "kind": "choice",
          "choices": [
            "No; also use NOT NULL when quantity must be present.",
            "Yes, CHECK always rejects NULL.",
            "Only if the table has more than one row.",
            "Only if quantity is an integer."
          ],
          "checks": []
        },
        {
          "id": "v2n5c2",
          "title": "Identity within a parent",
          "concept": "Sometimes one column is not enough to identify a row. Room number 5 can exist in several buildings. Building ID plus room number forms a composite key: a key made of several columns.",
          "question": "Shelf numbers repeat in different stores. Which reference identifies shelf 4 in store 9 without ambiguity?",
          "answer": "The pair (storeId, shelfNo).",
          "kind": "choice",
          "choices": [
            "The pair (storeId, shelfNo).",
            "shelfNo alone.",
            "storeName alone with no uniqueness rule.",
            "The price of the item on the shelf."
          ],
          "checks": []
        },
        {
          "id": "v2n5c3",
          "title": "Changing objects versus rows",
          "concept": "ALTER changes the table's design, such as adding a column. UPDATE changes values in existing rows. Changing the container and changing its contents are different operations.",
          "question": "A database needs a new inspectedOn column, while one existing inspection date needs correction. Which statement pair fits?",
          "answer": "ALTER TABLE to add the column; UPDATE to correct the row.",
          "kind": "choice",
          "choices": [
            "ALTER TABLE to add the column; UPDATE to correct the row.",
            "UPDATE to add the column; ALTER to correct the row.",
            "DELETE for both tasks.",
            "SELECT for both tasks."
          ],
          "checks": []
        },
        {
          "id": "v2n5c4",
          "title": "Referential actions",
          "concept": "When you delete a parent row, its foreign-key rules decide what happens to linked rows. The system might reject the deletion, delete the linked rows too, or clear an optional link.",
          "question": "Repair records must remain when a technician leaves. Which design is better than deleting the technician with cascading repair deletion?",
          "answer": "Retain the technician identity and mark it inactive.",
          "kind": "choice",
          "choices": [
            "Retain the technician identity and mark it inactive.",
            "Always delete all historical repairs.",
            "Replace all repair identifiers with NULL.",
            "Disable all foreign keys."
          ],
          "checks": []
        },
        {
          "id": "v2n5c5",
          "title": "A virtual interface",
          "concept": "A normal view is a saved query that you can use much like a table. A materialized view also stores the query's result, so that stored result needs to be kept up to date.",
          "question": "A user changes a base-table price. Which statement best describes an ordinary view of that column?",
          "answer": "Later queries through the view use the underlying data, subject to transaction visibility.",
          "kind": "choice",
          "choices": [
            "Later queries through the view use the underlying data, subject to transaction visibility.",
            "The view never changes unless it is recreated.",
            "The view must contain a separate disk copy of every row.",
            "Every view is automatically an index."
          ],
          "checks": []
        },
        {
          "id": "v2n5c6",
          "title": "Updates through a filtered view",
          "concept": "A filtered view shows only some rows. WITH CHECK OPTION can stop changes made through that view from producing a row that no longer matches its filter. Direct table changes are a separate matter.",
          "question": "A view exposes only active assets and uses WITH CHECK OPTION. What happens when an update through it sets an exposed asset inactive?",
          "answer": "The update is rejected because the resulting row fails the view condition.",
          "kind": "choice",
          "choices": [
            "The update is rejected because the resulting row fails the view condition.",
            "The row is silently deleted from the base table.",
            "All inactive assets become active.",
            "The view becomes materialized."
          ],
          "checks": []
        },
        {
          "id": "v2n5c7",
          "title": "Composite constraints",
          "concept": "A primary key identifies a row. A foreign key links it to an existing row in another table. A composite key uses more than one column, and every part of the link must match.",
          "question": "Store(storeId) exists. Create Shelf(storeId, shelfNo, capacity), identified by store and shelf number, with a required positive capacity.",
          "answer": "CREATE TABLE Shelf (\n storeId INTEGER NOT NULL REFERENCES Store(storeId),\n shelfNo INTEGER NOT NULL,\n capacity INTEGER NOT NULL CHECK (capacity > 0),\n PRIMARY KEY (storeId, shelfNo)\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define the composite primary key.",
            "Reference Store from storeId.",
            "Require a positive, known (not NULL) capacity."
          ]
        },
        {
          "id": "v2n5c8",
          "title": "Views that preserve empty groups",
          "concept": "You can save a useful report as a view. If you want to keep branches with no matching workers, use LEFT JOIN and put the worker filter in the join's ON condition.",
          "question": "Depot(depotId, name), Technician(techId, depotId, role). Create a view counting technicians with role Inspector per depot, including depots with zero inspectors.",
          "answer": "CREATE VIEW InspectorCounts AS\nSELECT d.depotId, d.name, COUNT(t.techId) AS inspectorCount\nFROM Depot d LEFT JOIN Technician t\n ON t.depotId = d.depotId AND t.role = 'Inspector'\nGROUP BY d.depotId, d.name;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Create a named view with a SELECT definition.",
            "Preserve depots and put the role condition in ON.",
            "Count a known (not NULL) technician key and group by depot."
          ]
        },
        {
          "id": "v2n5c9",
          "title": "Why some views resist updates",
          "concept": "Some view rows combine many table rows, such as one total for a whole branch. Changing that total does not tell the database which original row to change. Such views are usually not directly updatable.",
          "question": "A view exposes depotId and AVG(salary). Explain why setting the average to 50000 does not specify a unique base-table update. Suggest a clearer operation.",
          "answer": "Many different salary changes can produce an average of 50000, so the requested view update does not find which employees or amounts should change. Define the policy explicitly, such as increasing each selected salary by a fixed amount, then update identified base rows and verify the resulting average.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain loss of row-level update meaning.",
            "Show that several base-table changes can produce the same average.",
            "Suggest an explicit update policy on identified base rows."
          ]
        },
        {
          "id": "v2n5c10",
          "title": "Least privilege",
          "concept": "Give users only the permissions they need. Someone who only reads a report should not automatically be allowed to delete its data. A limited view helps only if users cannot bypass it.",
          "question": "A reporting user needs technician names and depots but must not read salaries or change data. Describe the view and privilege arrangement.",
          "answer": "Expose a view selecting technician identity, name and depot only. Grant SELECT on that view and do not grant direct base-table SELECT or write privileges. Check inherited roles and other access paths. A view alone does not protect salary if the user can still query the base table.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Expose only required columns.",
            "Grant read access to the view without write access.",
            "Remove or avoid alternate base-table access paths."
          ]
        },
        {
          "id": "v4n5c11",
          "title": "Required alternate identifiers",
          "concept": "A table may have several valid unique identifiers. You choose one as the primary key. Other required identifiers still need UNIQUE and NOT NULL so duplicates and missing values are rejected.",
          "question": "A member uses memberId as the primary key but also has a unique required membershipCode. Which constraints belong on membershipCode?",
          "answer": "UNIQUE and NOT NULL.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n5c12",
          "title": "CHECK and UNKNOWN",
          "concept": "CHECK rejects a condition that is FALSE. A test involving NULL may be UNKNOWN instead. Add NOT NULL when you need to reject missing values, rather than relying on CHECK alone.",
          "question": "Does CHECK (amount >= 0) alone prevent an unknown amount? What is needed if an amount is mandatory?",
          "answer": "No. Add NOT NULL to require a value, alongside CHECK (amount >= 0).",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n5c13",
          "title": "Changing a schema",
          "concept": "ALTER TABLE changes an existing table. A new rule must also make sense for rows already stored. For example, a no-negative-prices rule may fail until old negative prices are fixed.",
          "question": "What must be checked before adding CHECK (quantity >= 0) to an existing required quantity column?",
          "answer": "Verify that no existing quantity is negative; correct or otherwise resolve violating rows before validating the constraint.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n5c14",
          "title": "Keys across several columns",
          "concept": "A composite foreign key checks a combination of values. Linking to an order and a product separately does not prove that this product appears on this order. The whole order-line pair must match.",
          "question": "Shipment(orderId,itemId) must reference OrderLine whose key is (orderId,itemId). What reference is needed?",
          "answer": "FOREIGN KEY (orderId,itemId) REFERENCES OrderLine(orderId,itemId).",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n5c15",
          "title": "Views do not automatically secure tables",
          "concept": "A view can leave private columns out of a report. But if the user can also read the full original table, those columns are not protected. Permissions must match the intended access.",
          "question": "A user has SELECT on both a limited view and its full base table. Does the view alone prevent access to hidden columns?",
          "answer": "No. Remove inappropriate direct base-table privileges and grant only the intended interface access.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n5c16",
          "title": "Copying data with explicit columns",
          "concept": "INSERT…SELECT copies the rows found by a query into another table. List the target and source columns explicitly, so it is clear which value goes into which column.",
          "question": "Copy id and closedOn from Ticket into TicketArchive for rows with a known closing date, without deleting originals.",
          "answer": "INSERT INTO TicketArchive(id,closedOn)\nSELECT id,closedOn FROM Ticket WHERE closedOn IS NOT NULL;",
          "kind": "sql",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 6,
      "title": "Normalize facts and dependencies",
      "description": "Find what each fact actually depends on.",
      "summary": [
        "Derive functional dependencies from stated rules.",
        "Find every candidate key before deciding which columns are prime.",
        "Decompose with lossless putting the pieces back together and local constraint checks in mind."
      ],
      "cards": [
        {
          "id": "v2n6c1",
          "title": "Functional dependency",
          "concept": "A functional dependency is a rule linking values. X → Y means knowing X tells you exactly one Y. For example, a department ID tells you its name; the name may not uniquely identify the department.",
          "question": "Each badge belongs to one technician, but a technician can have several badges. Which dependency follows?",
          "answer": "badgeNo → technicianId.",
          "kind": "choice",
          "choices": [
            "badgeNo → technicianId.",
            "technicianId → badgeNo.",
            "badgeNo → every table in the database.",
            "Neither direction can ever hold."
          ],
          "checks": []
        },
        {
          "id": "v2n6c2",
          "title": "First normal form",
          "concept": "First Normal Form (1NF) means each cell holds one value of the intended kind, with no repeating lists hidden inside it. Store a person's different phone numbers in separate rows, not one comma-separated cell.",
          "question": "A Rental row stores toolIds as 3,8,11 in one text cell. What is the useful redesign?",
          "answer": "Store one rental-tool association per row in a related table.",
          "kind": "choice",
          "choices": [
            "Store one rental-tool association per row in a related table.",
            "Add more comma-separated IDs to the same cell.",
            "Rename the cell to primaryKey.",
            "Sort the text list alphabetically."
          ],
          "checks": []
        },
        {
          "id": "v2n6c3",
          "title": "Second normal form",
          "concept": "Second Normal Form (2NF) builds on 1NF. Every non-key fact must depend on the whole of each possible key, not just part of it. A student's name depends on studentId, not on a student-course pair.",
          "question": "Usage(memberId, toolId, memberName, hours) has sole candidate key (memberId, toolId). memberId determines memberName. What fails?",
          "answer": "2NF, because memberName depends on only part of the key.",
          "kind": "choice",
          "choices": [
            "2NF, because memberName depends on only part of the key.",
            "1NF solely because the key is composite.",
            "Referential integrity necessarily.",
            "No rule, because the full pair also determines memberName."
          ],
          "checks": []
        },
        {
          "id": "v2n6c4",
          "title": "Transitive redundancy",
          "concept": "A fact may depend on another non-key fact. If workerId tells you grade, and grade tells you pay rate, store each grade's rate once in a Grade table instead of repeating it for every worker.",
          "question": "Tool(toolId, categoryId, categoryName) has toolId → categoryId and categoryId → categoryName, with categoryId not unique. What should be split off?",
          "answer": "Category(categoryId, categoryName).",
          "kind": "choice",
          "choices": [
            "Category(categoryId, categoryName).",
            "A table containing only categoryName with no identifier.",
            "Every tool into its own separate table.",
            "The toolId column from all tables."
          ],
          "checks": []
        },
        {
          "id": "v2n6c5",
          "title": "Closure and minimality",
          "concept": "A closure answers: what can I work out from these columns? Keep applying the dependency rules. A candidate key must reach every column, and it must not contain any unnecessary columns.",
          "question": "R(P,Q,R,S) has P → Q and QR → S. Which set is the only candidate key?",
          "answer": "PR.",
          "kind": "choice",
          "choices": [
            "PR.",
            "P.",
            "QR.",
            "PS."
          ],
          "checks": []
        },
        {
          "id": "v2n6c6",
          "title": "3NF versus BCNF",
          "concept": "Third Normal Form (3NF) allows a dependency if its left side identifies the whole row, or its right-side column belongs to a possible key. Boyce–Codd Normal Form (BCNF) is stricter: the left side must identify the row. Ignore trivial rules like AB → A.",
          "question": "R(A,B,C) has AB → C and C → B. Candidate keys are AB and AC. Which statement is correct?",
          "answer": "It is in 3NF but not BCNF: C is not a superkey and B is prime.",
          "kind": "choice",
          "choices": [
            "It is in 3NF but not BCNF: C is not a superkey and B is prime.",
            "It is automatically in BCNF because every attribute is prime.",
            "It cannot be in 1NF because keys overlap.",
            "C is the only candidate key."
          ],
          "checks": []
        },
        {
          "id": "v2n6c7",
          "title": "Expose inconsistent copies",
          "concept": "If the same category ID has two different category names, the data breaks the rule that the ID determines the name. COUNT(DISTINCT name) can find this. A clean sample alone does not prove the rule always holds.",
          "question": "ImportedTool(toolId, categoryId, categoryName) has all columns known (not NULL). Write a query identifying category IDs stored with more than one distinct category name.",
          "answer": "SELECT categoryId\nFROM ImportedTool\nGROUP BY categoryId\nHAVING COUNT(DISTINCT categoryName) > 1;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Group by the proposed determinant categoryId.",
            "Count distinct categoryName values.",
            "Keep groups with more than one dependent value."
          ]
        },
        {
          "id": "v2n6c8",
          "title": "Represent a decomposed design",
          "concept": "After you split a large table into smaller ones, foreign keys connect them again. Keep the rules for all valid identifiers, including an alternate identifier such as a unique required email address.",
          "question": "Grade(gradeCode, hourlyRate) exists. Create Technician with techId as primary key, unique required email, required name and required gradeCode referring to Grade.",
          "answer": "CREATE TABLE Technician (\n techId INTEGER PRIMARY KEY,\n email VARCHAR(120) NOT NULL UNIQUE,\n name VARCHAR(80) NOT NULL,\n gradeCode VARCHAR(10) NOT NULL REFERENCES Grade(gradeCode)\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Declare techId as the primary key.",
            "Make email a required alternate unique identifier.",
            "Reference Grade instead of repeating hourlyRate."
          ]
        },
        {
          "id": "v2n6c9",
          "title": "Normalize a work ledger",
          "concept": "A work record can mix several facts: who a worker is, what a job is, what a grade pays, and how many hours were worked. Put each fact in the table for the thing it describes.",
          "question": "Ledger(workerId, email, workerName, grade, rate, jobId, jobTitle, hours). email is unique; each grade has one rate; one row exists per worker-job pair. Give FDs, candidate keys and a 3NF design.",
          "answer": "FDs: workerId → email, workerName, grade; email → workerId; grade → rate; jobId → jobTitle; (workerId, jobId) → hours. Candidate keys are (workerId, jobId) and (email, jobId). Use Worker(workerId primary key, email unique, workerName, grade foreign key), GradeRate(grade primary key, rate), Job(jobId primary key, jobTitle), and Work(workerId foreign key, jobId foreign key, hours) with composite primary key (workerId, jobId). Worker and job descriptions have partial dependencies in the original ledger; rate also depends transitively through grade.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give the dependencies and both candidate keys.",
            "Find partial and grade-rate transitive redundancy.",
            "Provide four relations with appropriate primary and foreign keys."
          ]
        },
        {
          "id": "v2n6c10",
          "title": "Lossless is not the same as preserved",
          "concept": "Two checks matter when splitting a table. Lossless means joining the pieces gives back exactly the original rows. Dependency preservation means you can check the original rules within the smaller tables, without joining them.",
          "question": "R(A,B,C) has A → B and B → C. Compare decompositions AB/BC and AB/AC for losslessness and dependency preservation.",
          "answer": "Both are lossless: AB/BC shares B, which determines BC; AB/AC shares A, which determines AB and, by transitivity, AC. AB/BC keeps A → B and B → C directly. AB/AC keeps A → B and A → C, but B → C cannot generally be enforced by checking either component alone. A lossless split can therefore lose local dependency enforceability.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Show the shared-attribute determinant for each lossless split.",
            "Find the dependencies preserved by AB/BC.",
            "Explain why B → C is not locally preserved in AB/AC."
          ]
        },
        {
          "id": "v4n6c11",
          "title": "Anomalies have three forms",
          "concept": "Repeating facts causes three common problems. You may be unable to add one fact without another, lose a fact when deleting a row, or need to update the same fact in many places. These are anomalies.",
          "question": "A supplier’s details exist only in shipment rows. What anomaly occurs when deleting its last shipment removes all knowledge of the supplier?",
          "answer": "A deletion anomaly.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c12",
          "title": "Observed rows are not the rule",
          "concept": "Today's rows may look unique by chance. That does not prove the same rule will hold tomorrow. Use the stated business rules to find dependencies, and use sample rows to look for violations.",
          "question": "Every current employee has a different city. Is city therefore a valid candidate key for future employee data?",
          "answer": "No. Accidental uniqueness in current rows does not establish an identifying business rule.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c13",
          "title": "Attribute closure",
          "concept": "To find a set of columns' closure, start with those columns. Use each dependency whose left side you already know to add more columns. Repeat until nothing new can be added.",
          "question": "For A→B, B→C, and CD→E, compute (AD)+.",
          "answer": "Start with A,D; add B using A→B, then C using B→C, then E using CD→E. Thus (AD)+={A,B,C,D,E}.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c14",
          "title": "Finding necessary key attributes",
          "concept": "A column that never appears on the right side of any dependency cannot be worked out from the other columns using those rules. You must include it in every key.",
          "question": "R(A,B,C,D) has A→B and B→C. Which attributes must every candidate key contain, and what is the key?",
          "answer": "A and D must be included. AD determines all four attributes and is minimal, so AD is the sole candidate key.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c15",
          "title": "Check every candidate key",
          "concept": "A table may have several possible keys. When checking Second Normal Form, check all of them. Choosing a convenient primary key does not make a problem with another key disappear.",
          "question": "A table has more than one possible key. Why must you check all of them before saying the table is in Second Normal Form (2NF)?",
          "answer": "A column that is not part of any candidate key could depend on a proper subset of another candidate key even when no partial dependency appears against the selected primary key.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c16",
          "title": "Prime attributes",
          "concept": "A prime column is a column that appears in at least one candidate key. A non-prime column appears in none. This distinction is used in the precise rule for Third Normal Form.",
          "question": "If candidate keys are AB and AC, which columns are prime?",
          "answer": "A, B and C are all prime. A prime column is any column that belongs to at least one candidate key: A and B appear in AB, and A and C appear in AC.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c17",
          "title": "A 3NF exception",
          "concept": "A table can meet Third Normal Form without meeting Boyce–Codd Normal Form. 3NF allows a right-side column that belongs to a candidate key, even if the dependency's left side is not a key.",
          "question": "R(A,B,C) has AB→C and C→B. Its keys are AB and AC. Why can it satisfy 3NF but fail BCNF?",
          "answer": "C alone does not identify a whole row, so C → B breaks BCNF. But B belongs to the candidate key AB, so it is a prime column. That exception lets the table meet 3NF.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c18",
          "title": "Lossless reconstruction",
          "concept": "Splitting a table is lossless when joining the pieces gives exactly the original valid rows. You must not lose rows or create new combinations that were never present.",
          "question": "R(A,B,C) follows A → B and B → C. We split it into AB and BC. Why can we join these tables back together without creating incorrect rows?",
          "answer": "The two tables share B. The rule B → C means B identifies a row in BC. Joining AB to BC on B therefore adds the correct C value without inventing extra combinations.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c19",
          "title": "Dependency preservation",
          "concept": "After splitting a table, ask whether each original dependency can still be checked using rules inside the smaller tables. If checking a rule needs a join, that dependency may not be preserved.",
          "question": "R(A,B,C) follows A → B and B → C. We split it into AB and AC. Which original rule can no longer be checked using only the separate tables?",
          "answer": "The rule B → C. AB does not contain C, and AC does not contain B. Their separate rules cannot check that each B always has the same C; you would need to look across the two tables.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n6c20",
          "title": "Staged normalization",
          "concept": "Normalize in steps. First remove facts that depend on only part of a combined key to reach 2NF. Then separate facts such as grade → rate that belong to their own thing to reach 3NF.",
          "question": "Work(personId,taskId,personName,band,rate,hours) has personId→personName,band and band→rate. After separating person facts at 2NF, what further split is needed?",
          "answer": "Create Person(personId,personName,band) and Band(band,rate). Store each band’s rate once in Band. Keep band in Person as a foreign key, so you can look up the person’s rate when needed.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 7,
      "title": "Procedural SQL and safe changes",
      "description": "Write routines, validate inputs and handle failure.",
      "summary": [
        "Use parameters to express reusable operations.",
        "Distinguish a called procedure from an event-driven trigger.",
        "Treat multi-statement changes and their error handling as one design."
      ],
      "cards": [
        {
          "id": "v2n7c1",
          "title": "Procedures and parameters",
          "concept": "A stored procedure is a saved set of SQL instructions you can run by name. A parameter is an input, such as a worker ID. Transact-SQL (T-SQL) adds variables, loops and other programming features to SQL Server.",
          "question": "A routine lists repairs for whichever technician the caller chooses. What should vary as a parameter?",
          "answer": "The technician ID. The procedure uses that input to decide which technician’s repair rows to return.",
          "kind": "choice",
          "choices": [
            "The technician ID. The procedure uses that input to decide which technician’s repair rows to return.",
            "The name of every database table.",
            "The SQL Server installation directory.",
            "The number of columns in the schema."
          ],
          "checks": []
        },
        {
          "id": "v2n7c2",
          "title": "Triggers respond to events",
          "concept": "A trigger runs automatically when a chosen event happens, such as an insert. In SQL Server, one trigger call may need to handle many changed rows. Do not assume every call means just one row.",
          "question": "Why is assuming a trigger receives exactly one inserted customer unsafe in SQL Server?",
          "answer": "One INSERT statement can insert many rows.",
          "kind": "choice",
          "choices": [
            "One INSERT statement can insert many rows.",
            "SQL Server never supports INSERT.",
            "Every trigger runs only at login.",
            "A trigger is the same object as a view."
          ],
          "checks": []
        },
        {
          "id": "v2n7c3",
          "title": "Cursor lifecycle",
          "concept": "A cursor lets you work through query results one row at a time. You open it, fetch a row, process that row, and repeat until there are no more rows. Then close it.",
          "question": "When a cursor fetch reports that no row remains, what should the loop do?",
          "answer": "Stop the loop. There is no new row to process, so do not process the previous row again.",
          "kind": "choice",
          "choices": [
            "Stop the loop. There is no new row to process, so do not process the previous row again.",
            "Update the previous row again forever.",
            "Recreate every table.",
            "Commit a separate unrelated transaction automatically."
          ],
          "checks": []
        },
        {
          "id": "v2n7c4",
          "title": "Order conditional branches",
          "concept": "CASE picks the first matching rule. If both more than 20 and more than 40 could match, check more than 40 first. Otherwise the lower rule can hide the higher one.",
          "question": "A distance of 42 meets >15, >25 and >40. Which CASE order applies only the highest intended surcharge?",
          "answer": "Check >40, then >25, then >15.",
          "kind": "choice",
          "choices": [
            "Check >40, then >25, then >15.",
            "Check >15 first and stop there.",
            "Add every matching surcharge without regard to the specification.",
            "Use ELSE before all WHEN branches."
          ],
          "checks": []
        },
        {
          "id": "v2n7c5",
          "title": "Validate the boundary",
          "concept": "Check unusual inputs as well as normal ones. For factorial, zero is valid and gives 1, but negative input is invalid. Starting the answer at 1 also handles a loop that runs zero times.",
          "question": "A factorial routine starts result to 1 and loops from 2 through n. What result should n = 0 produce?",
          "answer": "1. By definition, 0! = 1. Starting result at 1 gives the right answer even though the loop does not run.",
          "kind": "choice",
          "choices": [
            "1. By definition, 0! = 1. Starting result at 1 gives the right answer even though the loop does not run.",
            "0 because no multiplication occurred.",
            "2 because the loop starts at 2.",
            "A negative number."
          ],
          "checks": []
        },
        {
          "id": "v2n7c6",
          "title": "Statement success versus business success",
          "concept": "An UPDATE can finish without error even when it changes no rows. If your task requires changing one specific row, check the affected-row count. No error does not always mean the task succeeded.",
          "question": "A routine marks repair 404 paid, but repair 404 does not exist. What else should the procedure check?",
          "answer": "Verify that the expected row was affected and raise an error otherwise.",
          "kind": "choice",
          "choices": [
            "Verify that the expected row was affected and raise an error otherwise.",
            "Assume COMMIT proves that repair 404 exists.",
            "Add ORDER BY to the UPDATE.",
            "Remove the WHERE clause to guarantee a changed row."
          ],
          "checks": []
        },
        {
          "id": "v2n7c7",
          "title": "Parameterized retrieval",
          "concept": "A procedure can reuse one query with different inputs. For example, pass in a technician ID and return only that technician's repairs. Sort the output explicitly when its order matters.",
          "question": "SQL Server: Repair(repairId, techId, startedAt, fee). Write a procedure ListRepairs taking @techId and returning that technician’s repairs ordered by startedAt then repairId.",
          "answer": "CREATE PROCEDURE ListRepairs @techId INTEGER\nAS\nBEGIN\n SET NOCOUNT ON;\n SELECT repairId, techId, startedAt, fee\n FROM Repair\n WHERE techId = @techId\n ORDER BY startedAt, repairId;\nEND;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Declare a typed input parameter.",
            "Filter using the parameter.",
            "Return the requested columns in deterministic order."
          ]
        },
        {
          "id": "v2n7c8",
          "title": "Set-based conditional change",
          "concept": "One UPDATE can change many rows using different rules. CASE chooses the amount for each row. This is often simpler than using a cursor when each calculation depends only on that row.",
          "question": "Trip(tripId, distance, fee). Add 12 to fee above 40 miles, 7 above 25, 3 above 15, otherwise zero. Write one UPDATE; strict greater-than thresholds apply.",
          "answer": "UPDATE Trip\nSET fee = fee + CASE\n WHEN distance > 40 THEN 12\n WHEN distance > 25 THEN 7\n WHEN distance > 15 THEN 3\n ELSE 0 END;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Use a row-wise CASE inside one UPDATE.",
            "Check thresholds in descending order with strict greater-than.",
            "Add one surcharge to the existing fee; note that rerunning adds it again."
          ]
        },
        {
          "id": "v2n7c9",
          "title": "Capacity needs concurrency control",
          "concept": "Two people may try to claim the last available place at the same time. Checking the count separately is not enough. The check and change must be coordinated so both cannot take that last place.",
          "question": "Each coach may have at most 12 active trainees. Two requests made at the same time both see 11 and insert one. Explain a safe approach that also handles reassignment and deletion.",
          "answer": "Both requests could see 11 trainees and add one, leaving 13 instead of the allowed 12. Make the check and change one protected transaction, using a lock on the coach row or another correctly synchronized limit. When a trainee changes coaches, update both coaches’ counts together. Deleting a trainee must reduce the old coach’s count. Handle all changed rows, and take multiple coach locks in a consistent order to reduce deadlocks.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain the race from two readers seeing 11.",
            "Coordinate the check and write transactionally.",
            "Handle reassignment, deletion and multi-row writes consistently."
          ]
        },
        {
          "id": "v2n7c10",
          "title": "Atomic archive movement",
          "concept": "Moving rows to an archive has two linked steps: copy them, then delete the originals. Use one transaction and the same chosen row IDs for both steps. A failure should undo the whole move.",
          "question": "Completed repairs before a cutoff must move from Repair to RepairArchive. Describe the steps for the transaction and T-SQL error-handling design, including protection against copying one set and deleting another.",
          "answer": "1. Start one transaction inside TRY.\n2. Choose and protect the exact repair IDs to move.\n3. Copy those rows to RepairArchive, naming the columns explicitly.\n4. Check that the copy succeeded, then delete only those same IDs from Repair.\n5. COMMIT when both steps succeed.\nIf something fails, CATCH should roll back the active transaction and report the error again. A unique archive key stops duplicate archived rows. Do not run two separate searches that could select different rows while other users make changes.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Keep copy and delete within one transaction.",
            "Use the same stable identified row set and explicit columns.",
            "Roll back failures and address duplicate archives."
          ]
        },
        {
          "id": "v4n7c11",
          "title": "Local versus global temporary tables",
          "concept": "SQL Server uses # for a temporary table local to a session and ## for a global temporary table. Use a local table when other users should not share your temporary working data.",
          "question": "Which prefix is normally appropriate for an intermediate table intended only for the current session?",
          "answer": "A single # prefix, such as #PendingRows.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c12",
          "title": "Variables and loop progress",
          "concept": "A loop needs a way to move toward its stopping point. If a counter never changes, the loop may run forever. Update both the result you are building and the loop counter.",
          "question": "A WHILE @i <= @n loop multiplies @result by @i. What other update is needed each iteration?",
          "answer": "SET @i = @i + 1;",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c13",
          "title": "Factorial boundaries and overflow",
          "concept": "Factorial multiplies whole numbers: 4! = 4 × 3 × 2 × 1. Also, 0! = 1. SQL Server's BIGINT can store 20!, but 21! is too large, so validate the input.",
          "question": "For a SQL Server BIGINT factorial procedure, why allow 0 through 20 and reject 21?",
          "answer": "0! is 1, and 20! fits BIGINT. 21! exceeds BIGINT’s maximum value and would overflow.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c14",
          "title": "Progressive bands",
          "concept": "In a banded fee, each rate applies only to its own part of the amount. Reaching a higher band does not mean applying the highest rate to the entire amount.",
          "question": "A fictional fee is 5% of the first 100 units, 10% of the next 100, and 20% above 200. What is the fee for 250 units?",
          "answer": "5 + 10 + 10 = 25 units.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c15",
          "title": "Cursor exhaustion",
          "concept": "A cursor fetch can succeed or reach the end. Check that result before using the fetched values. In SQL Server, @@FETCH_STATUS = 0 means the most recent fetch succeeded.",
          "question": "In SQL Server, what condition commonly controls a cursor loop after FETCH NEXT?",
          "answer": "WHILE @@FETCH_STATUS = 0",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c16",
          "title": "Cursor cleanup",
          "concept": "A cursor uses database resources. In SQL Server, CLOSE ends access to its current result. DEALLOCATE removes the cursor reference. Use both when you finish with it.",
          "question": "Which two statements normally finish a SQL Server cursor named trips?",
          "answer": "CLOSE trips;\nDEALLOCATE trips;",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c17",
          "title": "Triggers may see many rows",
          "concept": "One SQL Server UPDATE can change dozens of rows. Its trigger gets sets of old and new rows in deleted and inserted. The trigger must handle every changed row, not just one.",
          "question": "An UPDATE changes 25 employees’ departments. What must a department-count trigger calculate?",
          "answer": "Set-based count changes for every affected department using all rows in inserted and deleted, rather than assuming one changed employee.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c18",
          "title": "Reassignment affects two totals",
          "concept": "Moving a child from one parent to another changes two counts. Reduce the old parent's count and increase the new parent's count together. If either change fails, undo the whole move.",
          "question": "A person moves from mentor A to mentor B. Which counts must change, and what if B is already full?",
          "answer": "Decrement A and increase B as one all-or-nothing operation. If B cannot accept another person, reject and roll back the whole reassignment, including the decrease of A.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c19",
          "title": "Repeated calls can repeat effects",
          "concept": "Some procedures add a charge every time you run them. Calling one twice may charge twice. Test inside a transaction that you roll back, or build an explicit rule to apply the charge only once.",
          "question": "A fee adjustment adds 5 on each call. Starting at 40, what happens after two committed calls, and how could you test without keeping the change?",
          "answer": "The fee becomes 50. Test inside a transaction and roll it back, or design an explicit once-only adjustment rule.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n7c20",
          "title": "Error reporting is not rollback",
          "concept": "Printing an error message does not undo earlier changes. A transaction you started may still need ROLLBACK. After handling the failure, THROW can tell the caller that the operation failed.",
          "question": "What should a SQL Server CATCH block do for a failed multi-statement transaction it owns?",
          "answer": "Roll back if a transaction remains active, then report the failure to the caller with THROW; do not report success after only printing an error.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 8,
      "title": "From model to relational design",
      "description": "Build a schema that supports real operations.",
      "summary": [
        "Map identity, multiplicity and participation separately.",
        "Retain historical facts on the event where they occurred.",
        "Validate both dependencies and the operations users need."
      ],
      "cards": [
        {
          "id": "v2n8c1",
          "title": "Design stages",
          "concept": "Design has three levels. Conceptual design identifies the things and relationships. Logical design turns them into tables and keys. Physical design chooses storage and indexes to make the system work efficiently.",
          "question": "Which decision belongs primarily to physical design?",
          "answer": "Choosing an index to speed up a frequent reservation lookup.",
          "kind": "choice",
          "choices": [
            "Choosing an index to speed up a frequent reservation lookup.",
            "Deciding whether a member may reserve several tools.",
            "Identifying a rental event.",
            "Defining what returnDate means."
          ],
          "checks": []
        },
        {
          "id": "v2n8c2",
          "title": "Current versus historical facts",
          "concept": "A current link tells you what is true now. A historical event tells you what happened then. Keep the actual coach on an old session, even if the trainee later changes coaches.",
          "question": "A trainee changes coaches. Where should the coach who conducted an earlier session be stored?",
          "answer": "On that session event.",
          "kind": "choice",
          "choices": [
            "On that session event.",
            "Only in the trainee’s current coach field.",
            "Only in a temporary screen value.",
            "Nowhere; all past sessions should switch to the new coach."
          ],
          "checks": []
        },
        {
          "id": "v2n8c3",
          "title": "One-to-one maximums",
          "concept": "UNIQUE on an invoice's order ID stops two invoices from referring to the same order. It does not force every order to have an invoice. At most one and exactly one are different rules.",
          "question": "Invoice.orderId is UNIQUE NOT NULL and references PurchaseOrder. Which rule is still not guaranteed?",
          "answer": "Every purchase order has an invoice.",
          "kind": "choice",
          "choices": [
            "Every purchase order has an invoice.",
            "Each invoice references an existing order.",
            "An invoice has a known (not NULL) order reference.",
            "No two invoices reference the same order."
          ],
          "checks": []
        },
        {
          "id": "v2n8c4",
          "title": "Repeated events",
          "concept": "A person can repeat the same activity with the same item. Their IDs alone will not distinguish those events. Give each event its own ID, or another key that separates the occurrences.",
          "question": "A member can rent the same tool on several dates. Is (memberId, toolId) enough as the Rental primary key?",
          "answer": "No; repeated rentals need an additional distinguishing attribute or rentalId.",
          "kind": "choice",
          "choices": [
            "No; repeated rentals need an additional distinguishing attribute or rentalId.",
            "Yes, because both columns are foreign keys.",
            "Yes, because dates never affect business rules.",
            "No primary key can find rentals."
          ],
          "checks": []
        },
        {
          "id": "v2n8c5",
          "title": "Subtype mapping",
          "concept": "A subtype adds details about a more general thing. For example, Coach adds qualifications to Staff. Reusing the staff ID links the coach record to the same person.",
          "question": "Coach(staffId, qualification) references Staff(staffId). What should find Coach rows?",
          "answer": "staffId as both primary key and foreign key.",
          "kind": "choice",
          "choices": [
            "staffId as both primary key and foreign key.",
            "qualification alone without a uniqueness rule.",
            "A list of all staff names in one row.",
            "No identifier because Coach is a subtype."
          ],
          "checks": []
        },
        {
          "id": "v2n8c6",
          "title": "Validation by use",
          "concept": "A tidy set of tables is not enough. Check whether it can handle every required action and report. For example, a booking system must be able to record a cancellation, not just a booking.",
          "question": "A normalized scheduling design cannot record cancellations. What does that reveal?",
          "answer": "The design is missing a required action. Its tables may be well organized, but it still needs a way to record cancellations.",
          "kind": "choice",
          "choices": [
            "The design is missing a required action. Its tables may be well organized, but it still needs a way to record cancellations.",
            "That normalization always fails.",
            "That every relation must be merged.",
            "That more indexes will create the missing fact."
          ],
          "checks": []
        },
        {
          "id": "v2n8c7",
          "title": "Map a multivalued attribute",
          "concept": "One supplier can have several phone numbers. A separate SupplierPhone table stores one number per row, linked to the supplier. A combined key prevents repeating the same number for that supplier.",
          "question": "Supplier(supplierId) exists. Create SupplierPhone for multiple phone numbers per supplier, disallowing the same number twice for that supplier.",
          "answer": "CREATE TABLE SupplierPhone (\n supplierId INTEGER NOT NULL REFERENCES Supplier(supplierId),\n phone VARCHAR(30) NOT NULL,\n PRIMARY KEY (supplierId, phone)\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Reference the owning Supplier.",
            "Store one phone value per row.",
            "Use a composite key to reject repeated owner-phone pairs."
          ]
        },
        {
          "id": "v2n8c8",
          "title": "Query historical events",
          "concept": "To report who handled an old session, use the coach recorded on that session. Looking up the trainee's current coach could give the wrong person for a past event.",
          "question": "Session(sessionId, traineeId, coachId, heldOn), Coach(coachId, name). List each session ID, date and actual coach name for trainee 27.",
          "answer": "SELECT s.sessionId, s.heldOn, c.name\nFROM Session s JOIN Coach c ON c.coachId = s.coachId\nWHERE s.traineeId = 27\nORDER BY s.heldOn, s.sessionId;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Join Coach through Session.coachId.",
            "Filter the specified trainee.",
            "Return session identity, date and coach name."
          ]
        },
        {
          "id": "v2n8c9",
          "title": "Design a rental service",
          "concept": "For a rental business, separate the branch, product model, physical item, member and rental. The rental records what happened: who rented which item, when, and at what agreed price.",
          "question": "Design a tool-rental service with branches, tool models, physical tools, members and repeated rentals. Each rental records its agreed price and dates. List relations, keys and business constraints.",
          "answer": "Branch(branchId primary key, name); ToolModel(modelId primary key, description); Tool(assetId primary key, modelId foreign key, branchId foreign key); Member(memberId primary key, name); Rental(rentalId primary key, assetId foreign key, memberId foreign key, startsAt, endsAt, agreedPrice). Keep price on Rental to keep the agreement. Enforce valid date order and zero or greater prices; prevent overlapping active rentals of the same asset with an appropriate transactional or database-specific constraint. A tool’s current branch alone does not keep past pickup location if that is required.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Separate models, copies, members, branches and rental events.",
            "State primary keys and relationship references.",
            "Address repeated rentals, historical price and overlapping bookings."
          ]
        },
        {
          "id": "v2n8c10",
          "title": "Validate a coaching model",
          "concept": "Check both stored facts and real actions. A scheduling design needs valid links, correct times, preserved history and rules preventing double-booking. Some of these rules need more than a foreign key.",
          "question": "Suggest a validation checklist for a coaching center storing coaches, trainees, rooms and sessions. Include history, scheduling and minimum participation.",
          "answer": "Check keys and functional dependencies for each relation; verify required reports can follow the correct joins. Sessions must keep their actual coach and room, not work out them from current assignments. Prevent overlapping sessions for a coach, trainee or room. Ensure referenced rows exist and times are valid. If each active coach must have at least one trainee, an ordinary foreign key from trainee to coach does not apply that minimum; use a controlled workflow or suitable additional constraint.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Check dependencies and representative reports.",
            "Preserve event history and prevent resource overlaps.",
            "Distinguish parent existence from minimum child participation."
          ]
        },
        {
          "id": "v4n8c11",
          "title": "Mapping a strong entity",
          "concept": "A strong entity has its own identifier. Give it a table, choose its key, and store its simple properties as columns. Split a structured name into first and last names when you need those parts separately.",
          "question": "Map Member(memberNumber, Name(first,last), birthDate) to a relational schema.",
          "answer": "Member(memberNumber PRIMARY KEY, firstName, lastName, birthDate).",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c12",
          "title": "Mapping an optional one-to-one",
          "concept": "If every badge belongs to one person but a person may have no badge, put personId in Badge. Make it required and unique so a badge has an owner and a person cannot have two badges.",
          "question": "Every badge has an owner; a person may have no badge and may own at most one. Where should the required unique foreign key go?",
          "answer": "Badge.personId should be a UNIQUE NOT NULL foreign key to Person.personId.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c13",
          "title": "At least one child is a separate rule",
          "concept": "A foreign key can require each coach to belong to a club. It cannot, by itself, require every club to have a coach. That rule must be checked separately.",
          "question": "If each active club must have at least one coach, is Coach.clubId NOT NULL REFERENCES Club enough?",
          "answer": "No. It ensures every coach has a club, not that every active club has a coach. Enforce the minimum through an additional constraint mechanism or controlled workflow.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c14",
          "title": "Transaction prices are historical facts",
          "concept": "A product's current price and the price charged last month are different facts. Store the agreed price with each sale so changing the current price does not rewrite history.",
          "question": "Should updating Product.currentPrice also update the price charged on old SaleLine rows?",
          "answer": "No. Old SaleLine rows should keep the price agreed for those sales.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c15",
          "title": "Bookings and scheduled events",
          "concept": "A customer can buy a package before choosing dates. Store the package count and price in Booking. Store each actual date, teacher and room in Session.",
          "question": "What belongs in Booking, and what belongs in its individual Session rows?",
          "answer": "Booking stores the purchaser, purchased session count and agreed price. Session stores the actual scheduled time, tutor, room and status for each occurrence.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c16",
          "title": "Resource overlap",
          "concept": "Two appointments overlap if each starts before the other ends. With half-open intervals, one may start exactly when the other ends. Check the room or other resource as well as the times.",
          "question": "Give the condition for appointments a and b in the same room to overlap.",
          "answer": "a.roomId=b.roomId AND a.startsAt<b.endsAt AND b.startsAt<a.endsAt",
          "kind": "sql",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c17",
          "title": "Required one-to-one lifecycle",
          "concept": "If an order and invoice must always exist together, think about how both are created. You can combine their tables or use a controlled transaction with rules that check the completed pair.",
          "question": "Every order must have one invoice, and every invoice must have one order. Give two ways to make sure the pair stays complete.",
          "answer": "Merge them while keeping both identifiers as candidate keys, or create and validate both in one controlled transaction using appropriate deferred or additional consistency checks.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n8c18",
          "title": "Composite relationships must stay intact",
          "concept": "An order line is a specific product on a specific order. A shipment must link to that exact pair. Separate links to an order and a product do not prove that the product was ordered.",
          "question": "What key should Shipment reference if OrderLine has primary key (orderId,productId)?",
          "answer": "Shipment must have a composite foreign key (orderId,productId) referencing OrderLine(orderId,productId).",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 9,
      "title": "Physical design and tuning",
      "description": "Choose storage and access paths for a workload.",
      "summary": [
        "Measure representative reads and writes before and after a change.",
        "Indexes accelerate some access patterns but add storage and maintenance.",
        "Controlled redundancy needs an explicit consistency strategy."
      ],
      "cards": [
        {
          "id": "v2n9c1",
          "title": "Selective access",
          "concept": "An index is like a book's index: it helps find a small set of matching rows. If you need almost every row, reading the whole table may be faster than making many separate lookups.",
          "question": "A million-row table has 15 urgent rows. Which condition is the more promising selective lookup?",
          "answer": "status = Urgent, if an appropriate index and workload justify it.",
          "kind": "choice",
          "choices": [
            "status = Urgent, if an appropriate index and workload justify it.",
            "A condition returning all million rows.",
            "A condition with no WHERE clause.",
            "Any condition merely because it has a longer name."
          ],
          "checks": []
        },
        {
          "id": "v2n9c2",
          "title": "Index write cost",
          "concept": "Indexes speed up some searches, but they are extra structures to maintain. Adding, changing or deleting data can also require index updates. More indexes are not always better.",
          "question": "A write-heavy service becomes slower after adding twelve indexes. What plausible cost should be investigated?",
          "answer": "The added index maintenance and storage overhead.",
          "kind": "choice",
          "choices": [
            "The added index maintenance and storage overhead.",
            "SQL has stopped supporting writes.",
            "The primary key automatically disappeared.",
            "More indexes must always reduce every operation’s time."
          ],
          "checks": []
        },
        {
          "id": "v2n9c3",
          "title": "Storage organization",
          "concept": "A heap stores rows without a chosen key order. Hashing helps look up an exact value. Ordered structures can help find a range, such as all dates in one month.",
          "question": "A workload frequently asks for values between two dates. Why is pure hashing a poor default access method for that condition?",
          "answer": "Hash placement does not keep the date ordering needed for a range.",
          "kind": "choice",
          "choices": [
            "Hash placement does not keep the date ordering needed for a range.",
            "Hashing automatically sorts dates.",
            "Dates cannot be indexed.",
            "Range predicates only work on text."
          ],
          "checks": []
        },
        {
          "id": "v2n9c4",
          "title": "Measure two outcomes",
          "concept": "Response time is how long one request takes. Throughput is how many requests finish in a period. A change that makes one request faster may not help the whole system finish more work.",
          "question": "A batch handles 600 requests in one minute while one request waits 20 seconds. Which statement follows?",
          "answer": "Throughput is 10 requests per second; that one response time is 20 seconds.",
          "kind": "choice",
          "choices": [
            "Throughput is 10 requests per second; that one response time is 20 seconds.",
            "Every request took exactly 0.1 seconds.",
            "Throughput is 20 seconds.",
            "The system has zero latency."
          ],
          "checks": []
        },
        {
          "id": "v2n9c5",
          "title": "Controlled redundancy",
          "concept": "Denormalization means deliberately keeping an extra copy or summary of a fact to speed up reads. You also need a reliable way to update it, or a clear rule about how old it may be.",
          "question": "A dashboard stores a daily revenue total beside detailed sales. What extra responsibility appears?",
          "answer": "Refresh or maintain the total and define its freshness.",
          "kind": "choice",
          "choices": [
            "Refresh or maintain the total and define its freshness.",
            "Delete the sales table immediately.",
            "Remove the date key.",
            "Assume stored totals can never become stale."
          ],
          "checks": []
        },
        {
          "id": "v2n9c6",
          "title": "Horizontal and vertical splits",
          "concept": "Horizontal splitting puts different rows in different pieces, such as orders by region. Vertical splitting puts different columns in different pieces. Keep an ID so you can join vertical pieces back together.",
          "question": "Moving large technician biographies into TechnicianBiography(techId, text) is which kind of split?",
          "answer": "Vertical: separating columns while keeping the identifier.",
          "kind": "choice",
          "choices": [
            "Vertical: separating columns while keeping the identifier.",
            "Horizontal: splitting technicians by city.",
            "Replication: keeping all identical columns twice.",
            "A Cartesian product."
          ],
          "checks": []
        },
        {
          "id": "v2n9c7",
          "title": "Composite access paths",
          "concept": "The order of columns in a combined index matters. For searches by one customer and then a date range, an index starting with customer ID and then date is often worth testing.",
          "question": "Reservation(reservationId, assetId, startsAt). Frequent queries filter assetId to one value and startsAt to a range. Write a candidate index and state what to verify.",
          "answer": "CREATE INDEX idx_reservation_asset_start\nON Reservation(assetId, startsAt);\n-- Compare plans, elapsed time and write overhead on representative data.",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Put assetId first and startsAt second.",
            "Use CREATE INDEX on Reservation.",
            "Treat the index as a measured candidate, not a guaranteed improvement."
          ]
        },
        {
          "id": "v2n9c8",
          "title": "Detect drift in a stored total",
          "concept": "A stored total can become wrong if detail rows change without updating it. Compare the stored total with a freshly calculated total. Include items with no details, whose total should often be zero.",
          "question": "Job(jobId, storedHours), WorkLog(logId, jobId, hours). All numeric values are known (not NULL). Return jobs whose storedHours differs from the sum of their logged hours.",
          "answer": "SELECT j.jobId, j.storedHours, COALESCE(SUM(w.hours), 0) AS actualHours\nFROM Job j LEFT JOIN WorkLog w ON w.jobId = j.jobId\nGROUP BY j.jobId, j.storedHours\nHAVING j.storedHours <> COALESCE(SUM(w.hours), 0);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Preserve jobs with no work records.",
            "Compute actual hours with SUM and a zero fallback.",
            "Compare the aggregate against storedHours in HAVING."
          ]
        },
        {
          "id": "v2n9c9",
          "title": "Design a fair measurement",
          "concept": "Test performance using realistic queries and similar conditions. One fast run may simply mean the data was already in memory. Measure several runs and check the cost of updates too.",
          "question": "Explain how you would evaluate an index for a booking service with frequent inserts and a daily availability report.",
          "answer": "Measure baseline query plans, timings and insert throughput with representative data volumes and parameters. Add the proposed index and repeat under comparable conditions, considering warm and cold caches and concurrency. Compare report improvements against storage and write costs. Keep the index only when the overall tradeoff supports the workload.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Establish a representative baseline.",
            "Control conditions and inspect plans as well as timings.",
            "Include insert throughput, storage and maintenance costs."
          ]
        },
        {
          "id": "v2n9c10",
          "title": "Redundancy tradeoffs",
          "concept": "Saving a precomputed total can make reports faster. But new data can make that total out of date. Decide how and when it will be recalculated, and whether users can tolerate a delay.",
          "question": "A manager proposes storing currentRentalCount on every member. Compare computing it on demand with storing it. Explain a safe maintenance plan if stored.",
          "answer": "Computing from rentals avoids a redundant counter but requires query work. Storing the count speeds reads but every rental start, return, cancellation and member reassignment can change it. Maintain the counter in the same transaction as the detail change, coordinate concurrent updates and periodically reconcile against detail. If refreshed periodically instead, label its freshness and do not use a stale count to apply a hard rental limit.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain read-cost versus consistency tradeoffs.",
            "Cover all events that change the count.",
            "Separate approximate reporting from hard-limit enforcement."
          ]
        },
        {
          "id": "v4n9c11",
          "title": "Partition pruning",
          "concept": "Partition pruning means skipping pieces of a table that cannot match the query. If orders are stored by month, a one-month query may be able to avoid reading the other months.",
          "question": "Monthly partitions hold orders. What can a query restricted to one month avoid when pruning is supported?",
          "answer": "Reading partitions that cannot contain dates in the requested month.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n9c12",
          "title": "Covering access",
          "concept": "A covering index contains everything a query needs, so it may avoid extra table lookups. Adding those columns still costs space and update work, so test whether the benefit is worthwhile.",
          "question": "Why might a covering index speed a frequent narrow report while still being a poor choice for every report?",
          "answer": "It can reduce base-row lookups for that report, but extra indexed columns increase storage and write maintenance; broad or infrequent reports may not justify that cost.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 10,
      "title": "Transactions and concurrent work",
      "description": "Analyze interleavings instead of memorizing definitions.",
      "summary": [
        "ACID means Atomicity, Consistency, Isolation and Durability.",
        "A precedence graph tracks conflicting operation order; a wait-for graph tracks blocked locks.",
        "Serializability, recoverability and deadlock freedom are different properties."
      ],
      "cards": [
        {
          "id": "v2n10c1",
          "title": "Atomicity and durability",
          "concept": "A transaction groups related work. Atomicity means all its changes happen or none do. Durability means a successful commit survives a later failure. One protects incomplete work; the other protects completed work.",
          "question": "A rental operation reserves a tool and creates an invoice. Why should both changes share a transaction?",
          "answer": "An incomplete operation should not leave only one of the two related changes.",
          "kind": "choice",
          "choices": [
            "An incomplete operation should not leave only one of the two related changes.",
            "It guarantees every statement runs faster.",
            "It makes indexes unnecessary.",
            "It means a committed invoice can be rolled back at any later time."
          ],
          "checks": []
        },
        {
          "id": "v2n10c2",
          "title": "Lost updates",
          "concept": "A lost update happens when one writer overwrites another writer's change using an old value. Coordinate updates, or use a safe arithmetic UPDATE, so both changes are taken into account.",
          "question": "Stock begins at 30. Two sessions both read 30; one writes 27 and the other writes 26. Both withdrawals should apply. What is wrong?",
          "answer": "The correct result is 23, but one update has been lost.",
          "kind": "choice",
          "choices": [
            "The correct result is 23, but one update has been lost.",
            "26 is correct because the later writer wins.",
            "The correct result is 56.",
            "The only issue is an absent ORDER BY."
          ],
          "checks": []
        },
        {
          "id": "v2n10c3",
          "title": "Reading uncommitted work",
          "concept": "A dirty read means reading another transaction's change before it commits. If that transaction later rolls back, you used a value that was never successfully saved.",
          "question": "One session changes a fee to 90, another reads 90, then the first rolls back to 70. Which anomaly occurred?",
          "answer": "A dirty read, also called an uncommitted dependency.",
          "kind": "choice",
          "choices": [
            "A dirty read, also called an uncommitted dependency.",
            "A phantom caused by inserting rows.",
            "A primary-key collision.",
            "A serial schedule with no interference."
          ],
          "checks": []
        },
        {
          "id": "v2n10c4",
          "title": "Conflict edges",
          "concept": "Two operations conflict if they come from different transactions, use the same item, and at least one writes. Their order matters. Two reads alone do not conflict.",
          "question": "For R1(a), W1(a), R2(a), W2(b), which precedence edge is required?",
          "answer": "T1 → T2 from W1(a) before R2(a).",
          "kind": "choice",
          "choices": [
            "T1 → T2 from W1(a) before R2(a).",
            "T2 → T1 from W2(b).",
            "Both directions merely because two transactions exist.",
            "No edge because reads never conflict with writes."
          ],
          "checks": []
        },
        {
          "id": "v2n10c5",
          "title": "Two-phase locking",
          "concept": "Two-Phase Locking (2PL) has two parts: first acquire locks, then release them. Once you release a lock, you cannot acquire a new one. This controls operation order, but deadlocks are still possible.",
          "question": "A transaction obtains a lock on x, releases it, then first requests a lock on y. Does it obey basic 2PL?",
          "answer": "No; it acquires a new lock after entering the shrinking phase.",
          "kind": "choice",
          "choices": [
            "No; it acquires a new lock after entering the shrinking phase.",
            "Yes, because x and y differ.",
            "Yes, as long as both are shared locks.",
            "No transaction can ever lock more than one item."
          ],
          "checks": []
        },
        {
          "id": "v2n10c6",
          "title": "Phantoms require range protection",
          "concept": "Locking the rows you found does not always stop someone inserting another matching row. That new match is called a phantom. Protect the searched range or condition when you need to prevent it.",
          "question": "A transaction locks five current rentals matching a member, but another inserts a sixth. What extra protection may be needed?",
          "answer": "Predicate or key-range protection, or an equivalent serializable mechanism.",
          "kind": "choice",
          "choices": [
            "Predicate or key-range protection, or an equivalent serializable mechanism.",
            "Only a lock on an unrelated existing row.",
            "Changing every primary key to text.",
            "Sorting the first five rows."
          ],
          "checks": []
        },
        {
          "id": "v2n10c7",
          "title": "Guard an inventory change",
          "concept": "Reserve stock with an UPDATE that also checks there is enough. If it changes zero rows, the item was missing or there was not enough stock. Treat that as a failed reservation.",
          "question": "SQL Server: Stock(itemId, available). Write a transaction to reserve 3 units of item 8 only if enough stock exists. Reject a missing or insufficient row and roll back on error.",
          "answer": "BEGIN TRY\n BEGIN TRANSACTION;\n UPDATE Stock SET available = available - 3\n WHERE itemId = 8 AND available >= 3;\n IF @@ROWCOUNT <> 1 THROW 50001, 'Item unavailable or insufficient stock', 1;\n COMMIT;\nEND TRY\nBEGIN CATCH\n IF XACT_STATE() <> 0 ROLLBACK;\n THROW;\nEND CATCH;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Combine the availability condition and decrease.",
            "Check exactly one affected row immediately after UPDATE.",
            "Commit success; roll back an active failed transaction and propagate the error."
          ]
        },
        {
          "id": "v2n10c8",
          "title": "A safe archive pattern",
          "concept": "When archiving, decide exactly which rows to move. Copy and delete that same set inside one transaction. Otherwise another user's changes could make you copy one set and delete a different set.",
          "question": "SQL Server: Repair(repairId, status), RepairArchive(repairId, status) with matching types and primary keys. Archive rows whose status is Closed using a captured identifier set. Roll back if any copy fails.",
          "answer": "BEGIN TRY\n BEGIN TRANSACTION;\n SELECT repairId INTO #Move\n FROM Repair WITH (UPDLOCK, HOLDLOCK) WHERE status = 'Closed';\n INSERT INTO RepairArchive(repairId, status)\n SELECT r.repairId, r.status FROM Repair r JOIN #Move m ON m.repairId = r.repairId;\n DELETE r FROM Repair r JOIN #Move m ON m.repairId = r.repairId;\n DROP TABLE #Move;\n COMMIT;\nEND TRY\nBEGIN CATCH\n IF XACT_STATE() <> 0 ROLLBACK;\n THROW;\nEND CATCH;\n-- UPDLOCK: update locks. HOLDLOCK: serializable semantics for this reference.\n-- Run in a session without an existing #Move temporary table.",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Capture and protect one identifier set.",
            "Copy and delete that same set with explicit columns.",
            "Keep both operations in one error-handled transaction."
          ]
        },
        {
          "id": "v2n10c9",
          "title": "Construct a precedence graph",
          "concept": "Draw an arrow when one transaction's operation must come before another's conflicting operation. A loop of arrows means there is no equivalent one-at-a-time order. No loop means you can find such an order.",
          "question": "Analyze R1(x), W1(x), R2(x), W2(y), R3(y), W3(z). Give all conflict edges and one equivalent serial order. Then explain the effect of appending R1(z).",
          "answer": "Initially W1(x) before R2(x) creates T1 → T2, and W2(y) before R3(y) creates T2 → T3. There is no direct T1–T3 conflict at first. The graph is acyclic with serial order T1, T2, T3. Appending R1(z) after W3(z) adds T3 → T1, making a cycle and destroying conflict serializability.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give the two initial edges with their operations.",
            "Give serial order T1, T2, T3.",
            "Find the new edge and cycle after R1(z)."
          ]
        },
        {
          "id": "v2n10c10",
          "title": "Waiting is not ordering",
          "concept": "A wait-for graph shows who is waiting for whose lock. If the arrows form a loop, each transaction in that loop is waiting for another to let go. That is a deadlock.",
          "question": "T1 waits for T2; T2 waits for T3; T3 waits for T2; T4 waits for T1. Find the deadlocked transactions, blocked outsiders and a recovery choice.",
          "answer": "T2 and T3 form the cycle and are deadlocked. T1 and T4 are blocked behind that cycle but are not themselves in it. Rolling back T2 or T3 breaks the cycle; rolling back only T4 does not. Choose a victim using rollback cost and fairness, undo its changes, release its locks and allow retry.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Find the T2–T3 cycle.",
            "Distinguish blocked T1/T4 from cycle participants.",
            "Choose a useful victim and describe undo, release and retry."
          ]
        },
        {
          "id": "v2n10c11",
          "title": "Recoverability matters separately",
          "concept": "If you use data written by another transaction, do not commit before that writer commits. Otherwise the writer could roll back after you have saved work based on its cancelled value.",
          "question": "T1 writes x; T2 reads that uncommitted x and commits; T1 then aborts. Explain why conflict serializability alone would not make this safe.",
          "answer": "The operation graph can be acyclic with T1 before T2, yet T2 committed a result based on a value that T1 later removed. The schedule is not recoverable because T2 committed before its source transaction. Prevent T2 from reading uncommitted x, for example by keeping T1’s exclusive lock until completion, rather than relying only on an acyclic graph.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain the committed dependency on an aborted write.",
            "Distinguish serializability from recoverability.",
            "Describe prevention of access to uncommitted writes."
          ]
        },
        {
          "id": "v2n10c12",
          "title": "Alternative concurrency controls",
          "concept": "Timestamp ordering gives transactions an order and rejects operations that break it. Optimistic control lets work proceed, then checks for conflicts before saving. Both are alternatives to simply waiting for locks.",
          "question": "Compare basic timestamp ordering with lock-based control for a low-contention workload. Include waiting, restarts, deadlocks and recoverability.",
          "answer": "Basic timestamp ordering rejects operations that violate timestamp order and restarts the transaction, avoiding lock-wait deadlocks but risking repeated restarts or starvation. Locking waits for incompatible locks and may deadlock; 2PL can ensure conflict serializability. Optimistic validation may suit low contention but must restart conflicting work. Recovery safety is a separate requirement: basic timestamp ordering alone does not guarantee recoverability.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Contrast waiting with abort/restart behavior.",
            "Discuss deadlock and starvation tradeoffs.",
            "Keep recoverability distinct and explain optimistic validation."
          ]
        },
        {
          "id": "v4n10c13",
          "title": "Four transaction properties",
          "concept": "ACID means Atomicity, Consistency, Isolation and Durability. Think: all-or-nothing work, valid rules, controlled interference between users, and committed changes that survive failures.",
          "question": "Which property stops a half-completed reservation, and which keeps its committed result after a crash?",
          "answer": "Atomicity stops the half-completed reservation. Durability keeps its committed result.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c14",
          "title": "Nonrepeatable reads",
          "concept": "A nonrepeatable read happens when you read the same row twice and get different values because another transaction changed and committed it between your reads.",
          "question": "T1 reads price 30, T2 changes it to 35 and commits, then T1 reads 35. What is this problem called?",
          "answer": "A nonrepeatable read.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c15",
          "title": "Inconsistent analysis",
          "concept": "A report can be wrong even when each number it reads was once correct. It may combine an old value from one row with a new value from another, showing a total that never really existed.",
          "question": "Stock is moved between two bins with an unchanged total. A reader totals one bin before the move and the other afterward. What can go wrong?",
          "answer": "It may report a total that never existed as a committed consistent state, because it combined values from different moments.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c16",
          "title": "Serial versus serializable",
          "concept": "Serial means one transaction finishes before the next starts. Serializable means mixed-together work still gives an equivalent valid one-at-a-time result. Interleaving is not automatically a problem.",
          "question": "Can an interleaved schedule still be conflict serializable?",
          "answer": "Yes. Mixed-together operations can still have the same effect as a valid one-at-a-time order. For conflict serializability, draw the required order arrows: if there is no cycle, such an order exists.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c17",
          "title": "Read-read pairs do not conflict",
          "concept": "Two people can read the same value without changing it. Those reads do not conflict. To add a conflict arrow, at least one operation must write the shared item.",
          "question": "Do R1(x) followed by R2(x) create a precedence edge?",
          "answer": "No. Two reads do not conflict.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c18",
          "title": "Strict versus rigorous locking",
          "concept": "Strict two-phase locking keeps write locks until the transaction ends. Rigorous two-phase locking keeps both read and write locks until the end. The extra read-lock rule is the difference.",
          "question": "Which keeps read locks until the transaction ends: strict two-phase locking or rigorous two-phase locking?",
          "answer": "Rigorous two-phase locking.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c19",
          "title": "Lock upgrades can deadlock",
          "concept": "Two transactions may both hold permission to read a row, then both ask to change it. Each can wait for the other to release its read lock. This lock upgrade can cause a deadlock.",
          "question": "Why does two-phase locking not eliminate the need for deadlock handling?",
          "answer": "It can still permit cycles of incompatible lock requests, including upgrades. A lock manager must prevent or detect such cycles and resolve them, often by rolling back a victim.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n10c20",
          "title": "Commit order and recoverability",
          "concept": "If T2 reads a value written by T1 before T1 commits, T2 must wait for T1's successful commit before committing itself. If T1 rolls back, T2 must not save work based on that cancelled value.",
          "question": "T2 reads a value written by T1. What commit order is required for recoverability if the read was allowed before T1 completed?",
          "answer": "T1 must commit before T2 commits. If T1 aborts, T2 must not commit its dependent work.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 11,
      "title": "How queries become plans",
      "description": "Reason about equivalent strategies and their costs.",
      "summary": [
        "Preserve query meaning while reducing intermediate work.",
        "Statistics estimate cardinalities; skew can undermine assumptions.",
        "Choose join methods based on available ordering, indexes, memory and data size."
      ],
      "cards": [
        {
          "id": "v2n11c1",
          "title": "Declarative requests",
          "concept": "SQL tells the database what result you want. The optimizer chooses how to get it, such as which index and join method to use. Different plans can produce the same correct result.",
          "question": "Two plans use different join orders but return the same required tuples. What is the optimizer comparing?",
          "answer": "Execution costs of equivalent strategies.",
          "kind": "choice",
          "choices": [
            "Execution costs of equivalent strategies.",
            "Which plan changes the business question most.",
            "Which plan has longer table names.",
            "Which plan removes required output columns."
          ],
          "checks": []
        },
        {
          "id": "v2n11c2",
          "title": "Early restriction",
          "concept": "Filtering early can mean fewer rows to join or sort later. But moving a filter can change the result of an outer join, so check that the meaning stays the same.",
          "question": "An inner join has one depot in Oslo among 200 depots. Why filter depots before joining their repairs?",
          "answer": "The join may process fewer candidate rows.",
          "kind": "choice",
          "choices": [
            "The join may process fewer candidate rows.",
            "The query should deliberately lose matching repairs.",
            "Filtering always changes the answer.",
            "It guarantees every possible index is used."
          ],
          "checks": []
        },
        {
          "id": "v2n11c3",
          "title": "Keep needed columns",
          "concept": "Keeping only needed columns can reduce the amount of data passed between steps. Do not remove a column too early if a later join, filter, group or result still needs it.",
          "question": "A plan needs to join WorkLog to Job on jobId. Can it discard jobId from WorkLog before that join?",
          "answer": "No; the join still needs jobId.",
          "kind": "choice",
          "choices": [
            "No; the join still needs jobId.",
            "Yes, because projection never changes usefulness.",
            "Yes, if hours is numeric.",
            "Only if both tables have equal row counts."
          ],
          "checks": []
        },
        {
          "id": "v2n11c4",
          "title": "Uniformity estimates",
          "concept": "An optimizer sometimes assumes values are spread evenly. With 1,000 rows and 10 equally common categories, it estimates about 100 rows per category. Real data may be uneven, so this is only an estimate.",
          "question": "A table has 24000 rows and 120 equally frequent depot IDs. Estimate rows for one depot ID.",
          "answer": "200.",
          "kind": "choice",
          "choices": [
            "200.",
            "120.",
            "24000.",
            "2880000."
          ],
          "checks": []
        },
        {
          "id": "v2n11c5",
          "title": "Join algorithms",
          "concept": "There are several ways to join tables. A hash join groups matching keys. A merge join uses ordered inputs. An indexed nested loop looks up matches for each row from a smaller input.",
          "question": "Which case makes indexed nested loops a plausible candidate?",
          "answer": "A few outer rows and a useful inner join-key index.",
          "kind": "choice",
          "choices": [
            "A few outer rows and a useful inner join-key index.",
            "A mandatory Cartesian product of huge tables with no condition.",
            "A guarantee that no indexes exist.",
            "A query that returns no columns by definition."
          ],
          "checks": []
        },
        {
          "id": "v2n11c6",
          "title": "Streaming versus storing",
          "concept": "Pipelining sends each produced row straight to the next step. Materialization saves an intermediate result first. Some tasks, such as fully sorting a result, need to collect data before producing the final output.",
          "question": "Why may ORDER BY delay the first output row even when earlier operators stream?",
          "answer": "The sort may need to collect input before producing ordered output.",
          "kind": "choice",
          "choices": [
            "The sort may need to collect input before producing ordered output.",
            "ORDER BY permanently deletes rows.",
            "Pipelining forbids SELECT.",
            "Every aggregate is an index."
          ],
          "checks": []
        },
        {
          "id": "v2n11c7",
          "title": "Equivalent filtering",
          "concept": "For an inner join, you can often filter one table before joining it. This can reduce work without changing the answer. Keep the columns needed to connect the tables.",
          "question": "Repair(repairId, depotId, fee), Depot(depotId, city). Write a query returning repair IDs and fees from depots in Oslo, then an equivalent version with the depot filter in a derived table.",
          "answer": "SELECT r.repairId, r.fee\nFROM Repair r JOIN Depot d ON d.depotId = r.depotId\nWHERE d.city = 'Oslo';\n\nSELECT r.repairId, r.fee\nFROM Repair r\nJOIN (SELECT depotId FROM Depot WHERE city = 'Oslo') d\n ON d.depotId = r.depotId;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Keep the inner-join relationship on depotId.",
            "Filter Depot by city in both versions.",
            "Retain depotId in the derived table."
          ]
        },
        {
          "id": "v2n11c8",
          "title": "Avoid needless row multiplication",
          "concept": "If you only need to know whether a match exists, use EXISTS. You do not need to return every matching child row, which could repeat the same parent many times.",
          "question": "Asset(assetId, name), Inspection(inspectionId, assetId, passed). Replace a join-plus-DISTINCT query with EXISTS to return assets having at least one passed inspection (passed = 1).",
          "answer": "SELECT a.assetId, a.name\nFROM Asset a\nWHERE EXISTS (\n SELECT 1 FROM Inspection i\n WHERE i.assetId = a.assetId AND i.passed = 1\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Correlate inspection assetId to the outer asset.",
            "Require passed = 1.",
            "Return each qualifying asset without child-driven duplicates."
          ]
        },
        {
          "id": "v2n11c9",
          "title": "Estimate intermediate work",
          "concept": "Pairing every row with every other row can create a huge temporary result. Apply valid filters early so later steps have less data to process, while keeping the answer unchanged.",
          "question": "R has 800 rows and S has 50. Filters keep 80 R rows and 5 S rows. Compare raw Cartesian-product sizes before and after filtering. Explain what this does not prove about actual execution time.",
          "answer": "Before filtering, the product has 800 × 50 = 40000 pairs. After filtering, it has 80 × 5 = 400 pairs. This is a 100-fold reduction in candidate pairs, not necessarily a 100-fold time improvement: filtering costs, indexes, join algorithms, memory, parallelism and output work affect runtime.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Compute 40000 and 400 pairs.",
            "Explain the factor of 100.",
            "Avoid equating pair-count reduction directly with runtime speedup."
          ]
        },
        {
          "id": "v2n11c10",
          "title": "Why estimates can be wrong",
          "concept": "A plan is based on estimates about how many rows will match. Old statistics or uneven data can make those estimates wrong. The optimizer may then choose a poor strategy.",
          "question": "A status column has 990000 Closed rows and 10000 Open rows. Explain why treating its two values as equally frequent can mislead plan selection.",
          "answer": "A uniform estimate predicts 500000 rows for either value. That greatly overestimates Open and underestimates Closed. The resulting access-path and join choices may be inappropriate, especially for an Open-only lookup. Current statistics that capture skew can help, but representative plan and runtime checks are still needed.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Compute the incorrect uniform estimate.",
            "Compare it with both real frequencies.",
            "Connect cardinality errors to access and join choices."
          ]
        },
        {
          "id": "v4n11c11",
          "title": "Stages of query processing",
          "concept": "The database first checks the query's spelling, structure and references. It then considers equivalent ways to run it, picks a plan and executes it. A nonexistent column should be caught before execution.",
          "question": "At what stage should a query referring to a nonexistent column be rejected?",
          "answer": "During semantic validation of the parsed query, before executing a physical plan.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n11c12",
          "title": "Outer joins constrain rewrites",
          "concept": "A LEFT JOIN keeps unmatched left-side rows. Moving a right-side filter between ON and WHERE can change whether those rows survive. Do not assume this rewrite is harmless.",
          "question": "Does moving child.active=1 from WHERE to ON in a LEFT JOIN necessarily keep the result?",
          "answer": "No. Putting it in ON can keep parents with no qualifying child, while WHERE usually rejects their NULL-extended rows.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n11c13",
          "title": "Nested loops versus hashing",
          "concept": "For a few selected customers, looking up their orders through an index can work well. For almost all customers, scanning and joining the larger sets may be cheaper.",
          "question": "Why might a plan for 10 selected customers differ from a plan for almost every customer?",
          "answer": "Ten selective customers may need only a few indexed lookups. Most customers may require so many lookups that scanning and joining larger inputs is cheaper.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n11c14",
          "title": "Statistics are estimates",
          "concept": "Statistics summarize stored data so the optimizer can estimate work. They are not exact predictions. Uneven values, related columns and outdated statistics can make a plan process far more rows than expected.",
          "question": "A plan expects 10 rows but actually processes 100,000. What could make the estimate so wrong?",
          "answer": "The relevant statistics, value distribution, condition selectivity and column correlations, then whether the resulting plan choice remains suitable.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 12,
      "title": "Recovery and lock granularity",
      "description": "Explain what survives, what is undone and why.",
      "summary": [
        "Write-Ahead Logging (WAL) protects recovery information before changed data pages.",
        "Undo and redo solve different failure cases.",
        "Checkpoints shorten recovery work but do not replace backups."
      ],
      "cards": [
        {
          "id": "v2n12c1",
          "title": "Granularity tradeoffs",
          "concept": "Lock granularity means how much data one lock covers. A row lock blocks less unrelated work but needs more management. A table lock uses fewer locks but can block many other users.",
          "question": "Two users update different rows. What is a likely benefit of row locks over one table lock?",
          "answer": "They may proceed at the same time, with more lock-management overhead.",
          "kind": "choice",
          "choices": [
            "They may proceed at the same time, with more lock-management overhead.",
            "They are guaranteed never to deadlock.",
            "No lock manager is needed.",
            "Both updates become read-only."
          ],
          "checks": []
        },
        {
          "id": "v2n12c2",
          "title": "Failure scope",
          "concept": "A crash may lose work held in memory while leaving disk data intact. A broken disk can destroy the stored data itself. These failures need different recovery steps.",
          "question": "A failed drive destroys database files. Why is simply restarting the process insufficient?",
          "answer": "The durable data may be missing or damaged and must be restored.",
          "kind": "choice",
          "choices": [
            "The durable data may be missing or damaged and must be restored.",
            "Restarting always recreates all business records from SQL text.",
            "A primary key contains a complete backup.",
            "Only sorting order can be lost."
          ],
          "checks": []
        },
        {
          "id": "v2n12c3",
          "title": "Write ahead",
          "concept": "Write-Ahead Logging (WAL) means saving the recovery log before writing the changed data page to disk. Before confirming a commit, the database must also make the required commit information durable.",
          "question": "What is unsafe about persisting an uncommitted changed page before its undo information is durable?",
          "answer": "A crash can leave a change on disk without the information required to undo it.",
          "kind": "choice",
          "choices": [
            "A crash can leave a change on disk without the information required to undo it.",
            "It automatically normalizes the relation.",
            "It makes all updates read-only.",
            "It eliminates the need for commit markers."
          ],
          "checks": []
        },
        {
          "id": "v2n12c4",
          "title": "Undo and redo images",
          "concept": "A before-image is the old value; an after-image is the new value. Recovery can use the old value to undo a change and the new value to redo it.",
          "question": "A value changes from 14 to 19. Which value is used to undo that change?",
          "answer": "14, the before-image.",
          "kind": "choice",
          "choices": [
            "14, the before-image.",
            "19, the after-image.",
            "33, their sum.",
            "Always NULL."
          ],
          "checks": []
        },
        {
          "id": "v2n12c5",
          "title": "Deferred updates",
          "concept": "With deferred update, uncommitted changes are not written to the database pages. Cancelling them needs no page undo. A committed change may still need to be redone after a crash.",
          "question": "Which recovery classification matches that deferred-update model?",
          "answer": "No undo of uncommitted database changes; redo may be needed.",
          "kind": "choice",
          "choices": [
            "No undo of uncommitted database changes; redo may be needed.",
            "Undo only, with no possible redo.",
            "Neither logging nor backups ever needed.",
            "Always undo every committed transaction."
          ],
          "checks": []
        },
        {
          "id": "v2n12c6",
          "title": "Checkpoints and active work",
          "concept": "A checkpoint gives recovery a useful starting point. But a transaction may have started earlier and still be unfinished, so its older log records can still be needed.",
          "question": "May recovery always discard every log record before the most recent checkpoint?",
          "answer": "No; active transactions or other recovery requirements may still need earlier records.",
          "kind": "choice",
          "choices": [
            "No; active transactions or other recovery requirements may still need earlier records.",
            "Yes, regardless of transaction state and backup needs.",
            "Only because all rows have primary keys.",
            "Yes, a checkpoint ends every transaction."
          ],
          "checks": []
        },
        {
          "id": "v2n12c7",
          "title": "Practice rollback safely",
          "concept": "ROLLBACK cancels a transaction's changes. A savepoint marks a place inside the transaction, so you may be able to cancel only the work done after that point.",
          "question": "PostgreSQL: Stock(itemId, available). Begin a transaction, set item 4 to 99, inspect it, then undo the entire transaction.",
          "answer": "BEGIN;\nUPDATE Stock SET available = 99 WHERE itemId = 4;\nSELECT itemId, available FROM Stock WHERE itemId = 4;\nROLLBACK;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Begin before changing the row.",
            "Inspect the intended item within the transaction.",
            "End with ROLLBACK rather than COMMIT."
          ]
        },
        {
          "id": "v2n12c8",
          "title": "Partial rollback with a savepoint",
          "concept": "A savepoint is a bookmark inside a transaction. Rolling back to it keeps earlier changes and removes later ones. It does not permanently save the earlier changes; you still need COMMIT.",
          "question": "PostgreSQL: Counter(counterId, value). Increase counter 1 by 2, set a savepoint, increase it by another 100, undo only the second increase and commit.",
          "answer": "BEGIN;\nUPDATE Counter SET value = value + 2 WHERE counterId = 1;\nSAVEPOINT keep_first;\nUPDATE Counter SET value = value + 100 WHERE counterId = 1;\nROLLBACK TO SAVEPOINT keep_first;\nCOMMIT;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Place the savepoint after the first update.",
            "Roll back to that savepoint after the second.",
            "Commit the retained net increase of 2."
          ]
        },
        {
          "id": "v2n12c9",
          "title": "Classify crash recovery work",
          "concept": "After a crash, two things may be wrong: an unfinished change may already be on disk, and a committed change may not be there yet. Recovery may need to undo the first and redo the second.",
          "question": "Under an immediate-update undo/redo protocol, T1 commits but its changed page is not on disk. T2 has not committed but its changed page is on disk. A crash occurs. Explain the recovery actions.",
          "answer": "Redo T1 as required so its committed effect reaches the database. Undo T2 so its uncommitted effect is removed. T1 needs durability; T2 needs atomicity. Durable log records find status and supply the needed change information. Actual algorithms may redo history before undoing incomplete work, so this describes the required final effects.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Retain or redo T1’s committed effect.",
            "Remove or undo T2’s uncommitted effect.",
            "Connect the actions to durability, atomicity and durable log information."
          ]
        },
        {
          "id": "v2n12c10",
          "title": "Restore from surviving copies",
          "concept": "A backup gives you an earlier copy of the database. Surviving logs may let you replay later committed work. You can restore only as far as the available backup and logs allow.",
          "question": "A midnight backup survives a disk failure at noon. Logs are intact only through 11:40. Describe the recovery sequence and what cannot be promised.",
          "answer": "Restore the midnight backup, then apply the surviving log history according to the recovery protocol through the recoverable point around 11:40. Resolve incomplete transactions at that point. Changes after the retained history cannot be guaranteed recovered from these resources. Test restoration and protect backups and logs independently; checkpointing alone does not supply missing media contents.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Restore the base before applying retained log history.",
            "Find the limit imposed by the missing later log history.",
            "Explain testing and independent protection of recovery copies."
          ]
        },
        {
          "id": "v4n12c11",
          "title": "Commit does not require every page to be flushed",
          "concept": "A commit does not always write every changed data page to disk immediately. Durable log records can protect the change until the page is written. Recovery can replay it if a crash happens first.",
          "question": "What must be durable before a successful commit is acknowledged in a write-ahead logging system?",
          "answer": "The transaction’s required log records, including its commit record, must be durable.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n12c12",
          "title": "Undo order matters",
          "concept": "Undo changes in reverse order. If a transaction changes a value twice, undo the second change first, then the first. This takes the value back through its earlier states correctly.",
          "question": "A transaction changes x from 4 to 7, then from 7 to 9, and aborts. In what order should those changes be undone?",
          "answer": "Undo 9→7 first, then 7→4, restoring x to 4.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n12c13",
          "title": "Redo preserves committed work",
          "concept": "REDO replays a change that must survive, such as a committed update missing from a data page. It does not make an unfinished transaction committed.",
          "question": "A committed change from 12 to 18 is durable in the log, but the data page still contains 12 after a crash. What recovery action is needed?",
          "answer": "Redo the committed change so the page contains 18.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n12c14",
          "title": "Checkpoint limits",
          "concept": "A checkpoint does not finish active transactions for them. It also does not mean every older log record can be discarded. Some unfinished work may still need those records for undo.",
          "question": "Why might recovery need log records from before the latest checkpoint?",
          "answer": "A transaction still active at the checkpoint may have earlier changes that must be undone if it later fails or remains incomplete at the crash.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n12c15",
          "title": "Lock hierarchy and intention",
          "concept": "An intention lock is a warning at a larger level: this transaction plans to lock something inside it. It helps the database coordinate a whole-table lock with locks on individual rows.",
          "question": "Why might a row writer take an intention-exclusive lock on the containing table?",
          "answer": "To signal lower-level exclusive locking so incompatible table-level lock requests can be detected without examining every row lock.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n12c16",
          "title": "Recovery needs recoverable copies",
          "concept": "A checkpoint is not a backup copy of all your data. If the data disk is destroyed, recovery needs a usable backup and any surviving logs needed to bring it up to date.",
          "question": "What restores a database when its data disk is destroyed but a recent backup and later logs survive?",
          "answer": "Restore the backup, then roll forward the required committed changes using the surviving logs.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 13,
      "title": "Warehousing and analytical queries",
      "description": "Turn operational events into useful summaries.",
      "summary": [
        "Declare what one fact row represents before aggregating it.",
        "Dimensions describe context; facts store measures at a grain.",
        "Use analytical operations without confusing totals, rates and predictions."
      ],
      "cards": [
        {
          "id": "v2n13c1",
          "title": "Operational versus analytical work",
          "concept": "Online Transaction Processing (OLTP) handles daily work, such as placing an order. Online Analytical Processing (OLAP) explores summaries, such as comparing sales across regions and years.",
          "question": "Which request is analytical rather than a typical operational update?",
          "answer": "Compare quarterly tool-rental revenue by region over three years.",
          "kind": "choice",
          "choices": [
            "Compare quarterly tool-rental revenue by region over three years.",
            "Record one returned tool.",
            "Change one member phone number.",
            "Insert one booking."
          ],
          "checks": []
        },
        {
          "id": "v2n13c2",
          "title": "Warehouse characteristics",
          "concept": "A data warehouse brings historical information together for analysis. It is usually loaded in planned batches or flows rather than changed like a live order system. Corrections can still be made.",
          "question": "Why keep historical category and location meaning in analytical design?",
          "answer": "Historical reports should not silently reinterpret past events using changed current descriptions.",
          "kind": "choice",
          "choices": [
            "Historical reports should not silently reinterpret past events using changed current descriptions.",
            "All operational updates must be forbidden forever.",
            "A warehouse cannot contain dates.",
            "Every dimension must be a transaction log."
          ],
          "checks": []
        },
        {
          "id": "v2n13c3",
          "title": "Fact grain",
          "concept": "Grain means what one fact-table row represents: one sale, one sale line, or one daily total. Choose it clearly. Mixing detailed rows and their totals can make you count the same amount twice.",
          "question": "A fact table has one row per daily store-product total. Is adding a monthly total as another ordinary row safe for SUM(revenue)?",
          "answer": "No; the same underlying sales can be counted twice.",
          "kind": "choice",
          "choices": [
            "No; the same underlying sales can be counted twice.",
            "Yes, because both rows contain numbers.",
            "Yes, if the monthly row is last.",
            "Only if the table has a short name."
          ],
          "checks": []
        },
        {
          "id": "v2n13c4",
          "title": "Dimensions and measures",
          "concept": "A measure is a number you analyze, such as revenue. Dimensions describe it, such as date, product and branch. Check whether adding the measure makes sense across the dimensions you choose.",
          "question": "Which measure is usually unsafe to SUM across dates for a stock-level snapshot?",
          "answer": "Inventory balance, because successive snapshots repeat stock state.",
          "kind": "choice",
          "choices": [
            "Inventory balance, because successive snapshots repeat stock state.",
            "Units sold during disjoint periods.",
            "Revenue earned during disjoint periods.",
            "Number of distinct nonoverlapping events."
          ],
          "checks": []
        },
        {
          "id": "v2n13c5",
          "title": "Roll up and drill down",
          "concept": "Roll up means combine details into a bigger summary, such as months into years. Drill down means look at finer detail. Slice and dice means select parts of the data to explore.",
          "question": "Moving from national revenue to regions and then stores is which direction?",
          "answer": "Drill-down.",
          "kind": "choice",
          "choices": [
            "Drill-down.",
            "Roll-up.",
            "Transaction rollback.",
            "Referential cascade."
          ],
          "checks": []
        },
        {
          "id": "v2n13c6",
          "title": "ETL quality",
          "concept": "ETL means Extract, Transform, Load: collect data, clean or convert it, then store it for analysis. For example, convert different date formats and make sure branch codes mean the same thing.",
          "question": "Two systems record weight in kilograms and pounds. What is needed before combining totals?",
          "answer": "Normalize units during transformation and keep their meaning.",
          "kind": "choice",
          "choices": [
            "Normalize units during transformation and keep their meaning.",
            "Add the numbers directly without conversion.",
            "Replace the weight with an arbitrary key.",
            "Remove every source timestamp."
          ],
          "checks": []
        },
        {
          "id": "v2n13c7",
          "title": "Group a fact table",
          "concept": "A star schema has a fact table in the middle and descriptive dimension tables around it. Join them by their keys to report numbers under useful labels such as region or quarter.",
          "question": "FactRental(dayKey, branchKey, revenue), DimDay(dayKey, year, quarter), DimBranch(branchKey, region). Return revenue by region and quarter for year 2027.",
          "answer": "SELECT b.region, d.quarter, SUM(f.revenue) AS revenue\nFROM FactRental f\nJOIN DimDay d ON d.dayKey = f.dayKey\nJOIN DimBranch b ON b.branchKey = f.branchKey\nWHERE d.year = 2027\nGROUP BY b.region, d.quarter\nORDER BY b.region, d.quarter;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Join facts to both dimensions by their keys.",
            "Filter the desired year.",
            "Group and sum at region-quarter grain."
          ]
        },
        {
          "id": "v2n13c8",
          "title": "Rank aggregates",
          "concept": "A window function adds calculations while keeping result rows. DENSE_RANK gives tied values the same rank and does not skip the next rank. Totals 100,100,80 receive ranks 1,1,2.",
          "question": "Sales(branchId, amount). Write SQL returning each branch total and a dense rank from highest total to lowest.",
          "answer": "SELECT branchId, SUM(amount) AS total,\n DENSE_RANK() OVER (ORDER BY SUM(amount) DESC) AS revenueRank\nFROM Sales\nGROUP BY branchId;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Aggregate sales by branch.",
            "Rank those totals in descending order.",
            "Use DENSE_RANK so ties share a rank without gaps."
          ]
        },
        {
          "id": "v2n13c9",
          "title": "Design a dimensional model",
          "concept": "Start an analytical design by deciding what one row means. Use consistent definitions for shared details, such as dates and products, so reports from different fact tables can be compared fairly.",
          "question": "Design a daily rental-revenue star schema for branches and tool categories. Define the grain, dimensions and measures; explain why an average price needs care.",
          "answer": "Define one fact row per day, branch and tool category. Link Date, Branch and ToolCategory dimensions to a fact containing rentalCount and totalRevenue. Average price should be computed as totalRevenue divided by rentalCount at the requested level, guarding zero counts. Averaging stored daily averages can be wrong because days have different rental counts. Historical dimension treatment must keep the intended category and region at event time.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "State an unambiguous daily branch-category grain.",
            "Find dimensions and additive measures.",
            "Explain weighted average calculation and historical meaning."
          ]
        },
        {
          "id": "v2n13c10",
          "title": "Mining versus summarizing",
          "concept": "A summary answers a defined question, such as total sales by month. Data mining looks for patterns or useful predictions. Finding two things together does not prove one caused the other.",
          "question": "A report says weekend rentals earn more revenue, and a model predicts which members will stop renting. Compare the tasks and state two cautions about the predictive model.",
          "answer": "The revenue report is descriptive aggregation; the churn model predicts an outcome using learned patterns. Evaluate the model on appropriate held-out later data and prevent target leakage. Check data quality, imbalance and whether behavior changes over time. A correlation between a feature and churn does not establish that changing the feature will cause retention.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Distinguish descriptive aggregation from prediction.",
            "Mention appropriate validation and leakage prevention.",
            "Explain why prediction or association does not prove causation."
          ]
        },
        {
          "id": "v4n13c11",
          "title": "Semi-additive measures",
          "concept": "Some numbers describe a state, such as stock at the end of a day. You may add stock across branches on that day, but adding snapshots from many days does not give month-end stock.",
          "question": "Why is summing daily ending inventory across a month usually not the month-end stock?",
          "answer": "It adds repeated snapshots from different days. Month-end stock is the ending snapshot at the required date, not the sum of all daily balances.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n13c12",
          "title": "Weighted ratios",
          "concept": "To combine rates fairly, add their original totals first. For revenue per unit, divide total revenue by total units. Simply averaging two averages can give the wrong result when their group sizes differ.",
          "question": "One sale has 1 unit for 20 and another has 9 units for 90. What is the combined revenue per unit?",
          "answer": "(20+90)/(1+9) = 11 per unit.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 14,
      "title": "Distributed data",
      "description": "Reason about fragments, copies and network work.",
      "summary": [
        "Fragmentation divides data; replication copies it; allocation chooses locations.",
        "Check completeness, putting the pieces back together and intended disjointness.",
        "Local speed does not remove cross-site consistency and failure problems."
      ],
      "cards": [
        {
          "id": "v2n14c1",
          "title": "Distribution versus remote access",
          "concept": "A distributed database stores related data at several sites and manages it as one logical system. A website calling one central database from far away is not, by itself, distributed storage.",
          "question": "Ten branch applications connect to a single database server holding all data. What does that alone establish?",
          "answer": "Remote/distributed processing, not necessarily a distributed database.",
          "kind": "choice",
          "choices": [
            "Remote/distributed processing, not necessarily a distributed database.",
            "Every row is replicated at ten sites.",
            "Vertical fragmentation is guaranteed.",
            "Each branch owns an autonomous database."
          ],
          "checks": []
        },
        {
          "id": "v2n14c2",
          "title": "Different placement decisions",
          "concept": "Three decisions are different: fragmentation divides data into pieces, allocation chooses where each piece lives, and replication keeps extra copies. One design can use all three.",
          "question": "A North rental fragment is stored at two sites for availability. Which two ideas are present?",
          "answer": "Horizontal fragmentation and replication.",
          "kind": "choice",
          "choices": [
            "Horizontal fragmentation and replication.",
            "Only vertical fragmentation.",
            "Only a primary-key definition.",
            "No allocation decision."
          ],
          "checks": []
        },
        {
          "id": "v2n14c3",
          "title": "Completeness",
          "concept": "When splitting a table into row groups, include every valid row somewhere. Check boundaries and NULL values. Otherwise some rows may fit none of the groups and disappear from the combined result.",
          "question": "One fragment uses age < 18 and another age > 18. What is missing for known (not NULL) ages?",
          "answer": "Rows where age = 18.",
          "kind": "choice",
          "choices": [
            "Rows where age = 18.",
            "Every row below 18.",
            "Every row above 18.",
            "No rows; the predicates are complete."
          ],
          "checks": []
        },
        {
          "id": "v2n14c4",
          "title": "Vertical reconstruction",
          "concept": "Vertical splitting puts different columns in different tables. Keep a shared identifier in each piece, so you can match the right rows and put the original information back together.",
          "question": "PersonContact(personId, email) and PersonProfile(personId, preference) share a unique personId. How are complete rows reconstructed?",
          "answer": "Join the fragments on personId.",
          "kind": "choice",
          "choices": [
            "Join the fragments on personId.",
            "Take a Cartesian product without a condition.",
            "Union unrelated columns by their positions.",
            "Drop personId before joining."
          ],
          "checks": []
        },
        {
          "id": "v2n14c5",
          "title": "Location transparency",
          "concept": "Location transparency means users can ask for logical data without knowing which site stores it. Moving the data to another site should not force every business query to change.",
          "question": "What breaks location transparency most directly?",
          "answer": "Every application hard-codes which site stores each customer.",
          "kind": "choice",
          "choices": [
            "Every application hard-codes which site stores each customer.",
            "A logical Customer relation.",
            "A query that uses a stable identifier.",
            "A DBMS that resolves locations internally."
          ],
          "checks": []
        },
        {
          "id": "v2n14c6",
          "title": "Heterogeneous sites",
          "concept": "Homogeneous sites use the same database product. Heterogeneous sites may use different products or models. Connecting different systems requires extra work to translate formats, queries and meanings.",
          "question": "One site uses PostgreSQL and another an object-oriented database. Which integration challenge is especially relevant?",
          "answer": "Translating differing models, types and query capabilities.",
          "kind": "choice",
          "choices": [
            "Translating differing models, types and query capabilities.",
            "All schemas must already be identical.",
            "Network transfer has no cost.",
            "Foreign keys automatically span any vendor boundary."
          ],
          "checks": []
        },
        {
          "id": "v2n14c7",
          "title": "Reconstruct horizontal fragments",
          "concept": "UNION ALL stacks rows without removing duplicates. It can rebuild a table split into non-overlapping row groups. If the pieces overlap or contain replicas, decide how to handle repeated rows.",
          "question": "RentalNorth(rentalId, region, fee) and RentalSouth(rentalId, region, fee) are complete, fragments with no overlapping rows. Create a logical view combining them.",
          "answer": "CREATE VIEW RentalAll AS\nSELECT rentalId, region, fee FROM RentalNorth\nUNION ALL\nSELECT rentalId, region, fee FROM RentalSouth;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Use matching column order and compatible schemas.",
            "Combine both fragments with UNION ALL.",
            "Rely on the stated disjointness rather than silently removing duplicates."
          ]
        },
        {
          "id": "v2n14c8",
          "title": "Reduce transferred results",
          "concept": "Send less data over the network when possible. A remote site can filter rows or calculate totals before sending the result, as long as the receiver still gets everything it needs.",
          "question": "RemoteRental(branchId, amount) is at one remote site. Write the query to execute there when the coordinator needs only total revenue by branch for positive amounts.",
          "answer": "SELECT branchId, SUM(amount) AS totalRevenue\nFROM RemoteRental\nWHERE amount > 0\nGROUP BY branchId;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Apply the positive-amount condition at the remote site.",
            "Aggregate by the required branch key.",
            "Return branch totals instead of all detail rows."
          ]
        },
        {
          "id": "v2n14c9",
          "title": "Compare allocation strategies",
          "concept": "Copies can make local reads faster and help when a site is unavailable. But updates must keep copies consistent enough for the business. Splitting data can also make queries across sites more complicated.",
          "question": "Compare storing every rental at every branch with storing each region’s rentals only in that region. Discuss reads, writes, failure and company-wide reports.",
          "answer": "Full replication can make many reads local and survive a site failure if another usable copy exists, but every change needs a propagation and conflict policy. Regional partitioning reduces redundant storage and can localize regional operations; losing the only copy of a region is a serious availability risk without replication/backups. Company-wide reports need cross-region work or an analytical consolidation strategy. Neither placement alone guarantees atomic cross-site updates.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Compare local reads and update propagation.",
            "Discuss loss of a site and available copies.",
            "Explain cross-region reporting and coordination requirements."
          ]
        },
        {
          "id": "v2n14c10",
          "title": "Network cost changes plans",
          "concept": "A remote query pays for network transfer as well as calculation. Sometimes you can send just the needed IDs first, ask the other site to find matches, and transfer fewer full rows.",
          "question": "Site A has 100 relevant customer IDs. Site B has one million purchases. Explain how sending IDs to B can reduce traffic when A needs only those customers’ purchase totals.",
          "answer": "Send the distinct relevant customer IDs to B, match purchases there and aggregate totals by customerId, then return at most one total per matching customer. This can avoid transferring a million detail rows. Compare the ID-transfer and processing costs with alternatives, and keep customers with no purchases if the requested report needs zero totals.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Send the relevant identifiers and filter remotely.",
            "Aggregate before returning results.",
            "Address cost tradeoffs and zero-match customers."
          ]
        },
        {
          "id": "v4n14c11",
          "title": "Disjointness and completeness differ",
          "concept": "Non-overlapping pieces are not necessarily complete. East and West rows do not overlap, but they leave out Central rows. Check both duplicate coverage and missing coverage.",
          "question": "A table allows East, West and Central regions, but fragments contain only East and West rows. Which requirement fails?",
          "answer": "Completeness: Central rows are missing from all fragments.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n14c12",
          "title": "Replication consistency",
          "concept": "Copies may temporarily disagree when updates arrive at different times. A replicated system needs rules for who may write, how changes spread and how conflicting edits are handled.",
          "question": "Two disconnected sites edit the same row. What must happen when they reconnect?",
          "answer": "Detect conflicting versions and apply an explicit resolution or coordination policy; replication by itself does not determine which edit is correct.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n14c13",
          "title": "Local work can reduce network cost",
          "concept": "If you need only totals per branch, ask the remote site to calculate those totals. Sending a small summary can be much cheaper than sending every original row.",
          "question": "A coordinator needs only revenue totals per branch. What should the remote site ideally send?",
          "answer": "The grouped branch totals after applying the required filters, rather than every raw revenue row.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n14c14",
          "title": "Distributed atomic commitment",
          "concept": "Two-phase commit coordinates one commit-or-abort decision across several sites. Two-phase locking controls conflicting work between transactions. Their names sound similar, but they solve different problems.",
          "question": "Both names start with “two-phase.” What does two-phase commit do, and what does two-phase locking do?",
          "answer": "Two-phase commit coordinates one commit/abort outcome across sites. Two-phase locking controls access by several users at the same time to produce conflict-serializable schedules.",
          "kind": "concept",
          "choices": [],
          "checks": []
        }
      ]
    },
    {
      "id": 15,
      "title": "Objects and richer data types",
      "description": "Match representation to identity and behavior.",
      "summary": [
        "Object identity is distinct from attribute equality.",
        "Object-relational extensions keep relational ideas while adding richer types.",
        "Persistence still requires transaction, query and recovery services."
      ],
      "cards": [
        {
          "id": "v2n15c1",
          "title": "Object identity",
          "concept": "An Object Identifier (OID) tells you which object you mean, even when its details change. Two objects can have identical values and still be two different objects.",
          "question": "Two stored shape objects have identical color and dimensions. Must they be the same object?",
          "answer": "No; they can have distinct object identities despite equal state.",
          "kind": "choice",
          "choices": [
            "No; they can have distinct object identities despite equal state.",
            "Yes, equal values always imply one identity.",
            "Only if their method names are short.",
            "Neither object can be persisted."
          ],
          "checks": []
        },
        {
          "id": "v2n15c2",
          "title": "Encapsulation",
          "concept": "Encapsulation keeps an object's data and the operations that use it together. Users work through allowed operations instead of changing every internal detail directly. This helps protect rules.",
          "question": "A Money type validates currency and amount through defined operations. What benefit does encapsulation offer?",
          "answer": "It can centralize rules for allowed contents and operations.",
          "kind": "choice",
          "choices": [
            "It can centralize rules for allowed contents and operations.",
            "It removes the need for transactions.",
            "It guarantees no data can ever change.",
            "It makes all values globally unique."
          ],
          "checks": []
        },
        {
          "id": "v2n15c3",
          "title": "Inheritance and polymorphism",
          "concept": "Inheritance lets a special type reuse a general type's properties. Polymorphism lets the same operation behave differently for different types, such as drawing a circle versus drawing a square.",
          "question": "Circle and Rectangle each write area(). Which idea lets callers request area without using one universal formula?",
          "answer": "Polymorphism.",
          "kind": "choice",
          "choices": [
            "Polymorphism.",
            "Referential cascade.",
            "Horizontal fragmentation.",
            "A dirty read."
          ],
          "checks": []
        },
        {
          "id": "v2n15c4",
          "title": "Two object database approaches",
          "concept": "An object-relational database adds richer types to a relational table system. An object-oriented database stores persistent objects more directly. Both can store complex information, but their main models differ.",
          "question": "Which description fits an ORDBMS?",
          "answer": "Relations and SQL extended with richer types and related features.",
          "kind": "choice",
          "choices": [
            "Relations and SQL extended with richer types and related features.",
            "A system that necessarily eliminates all relations.",
            "Any plain text file containing braces.",
            "An object cache with no persistence."
          ],
          "checks": []
        },
        {
          "id": "v2n15c5",
          "title": "Collections have different semantics",
          "concept": "Choose a collection that matches the rule. A list or array has an order. A set does not repeat values. A multiset can repeat values. These differences affect what the data means.",
          "question": "A collection records the sequence of stops on a delivery route, including repeated visits. What properties must it keep?",
          "answer": "Order and duplicates.",
          "kind": "choice",
          "choices": [
            "Order and duplicates.",
            "No order and no duplicates.",
            "Only unique stop names in alphabetical order.",
            "Only the final stop."
          ],
          "checks": []
        },
        {
          "id": "v2n15c6",
          "title": "Large values",
          "concept": "A BLOB, or Binary Large Object, stores bytes such as an image. A CLOB, or Character Large Object, stores large text. Database products differ in the exact types they provide.",
          "question": "Which conceptual type is appropriate for arbitrary encoded image bytes rather than a long text description?",
          "answer": "A BLOB (Binary Large Object).",
          "kind": "choice",
          "choices": [
            "A BLOB (Binary Large Object).",
            "A CLOB solely because the image has a title.",
            "A foreign key with no referenced object.",
            "An integer count of image pixels only."
          ],
          "checks": []
        },
        {
          "id": "v2n15c7",
          "title": "A user-defined structured value",
          "concept": "A user-defined type lets you create a useful data shape. For example, an address type can contain street and city fields. PostgreSQL calls this kind of grouped value a composite type.",
          "question": "PostgreSQL: define an address_value type containing street and city text fields, then create Branch(branchId, address) using it.",
          "answer": "CREATE TYPE address_value AS (street TEXT, city TEXT);\nCREATE TABLE Branch (\n branchId INTEGER PRIMARY KEY,\n address address_value\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define a composite type with the requested fields.",
            "Use the type in Branch.",
            "Define branchId as the primary key and find PostgreSQL syntax."
          ]
        },
        {
          "id": "v2n15c8",
          "title": "Read a structured attribute",
          "concept": "A structured column contains named parts. You can ask for one part, such as the city inside an address. Each database has its own syntax for accessing those parts.",
          "question": "For PostgreSQL Branch(branchId, address address_value), where address_value has street and city, return branchId and street for branches in Delft.",
          "answer": "SELECT branchId, (address).street AS street\nFROM Branch\nWHERE (address).city = 'Delft';",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Access the composite city field in the condition.",
            "Return the composite street field.",
            "Use PostgreSQL composite-field notation."
          ]
        },
        {
          "id": "v2n15c9",
          "title": "Map an object hierarchy",
          "concept": "When storing object types in tables, decide where shared and special details go. For example, Person stores common details and Mechanic stores extra details, linked by the same person ID.",
          "question": "Asset has assetId and name; Vehicle adds registration; Machine adds powerRating. An asset may be both. Suggest a relational mapping and explain its tradeoffs.",
          "answer": "Use Asset(assetId primary key, name), Vehicle(assetId primary key and foreign key to Asset, registration), and Machine(assetId primary key and foreign key to Asset, powerRating). A row may appear in both subtype tables, supporting overlap. Common attributes occur once, but retrieving all subtype details requires joins. Additional rules are needed if every asset must belong to at least one subtype.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give the parent and two shared-key subtype relations.",
            "Allow overlapping subtype membership.",
            "Discuss joins and any required total-coverage rule."
          ]
        },
        {
          "id": "v2n15c10",
          "title": "Persistence is more than serialization",
          "concept": "Saving an object's bytes to a file is not a complete database system. Shared stored objects also need searching, rules, safe concurrent changes and recovery after failures.",
          "question": "A team serializes design objects to individual files and calls the result an object database. Explain what capabilities must be considered before accepting that claim.",
          "answer": "Check stable identity and references, query and indexing support, concurrent updates, transactional atomicity, failure recovery, access control and schema/type evolution. File serialization alone may persist state but does not provide coordinated multi-object changes or safe shared access. An object-oriented DBMS must offer database capabilities in addition to object representation.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Distinguish serialization from database services.",
            "Discuss identity, querying and concurrent transactions.",
            "Include recovery, access control and evolution concerns."
          ]
        },
        {
          "id": "v4n15c11",
          "title": "Identity is not equal state",
          "concept": "Equal details do not mean the same identity. Two people can share a name and address but still be different people. Changing one person's address should not create a new person.",
          "question": "Two people have the same name and address. Must they share the same object identifier?",
          "answer": "No. Equal column values do not imply identical objects.",
          "kind": "concept",
          "choices": [],
          "checks": []
        },
        {
          "id": "v4n15c12",
          "title": "Structured fields remain queryable",
          "concept": "A composite value groups fields without making them impossible to query. For example, an address has a city field that PostgreSQL can return separately in a SELECT statement.",
          "question": "PostgreSQL Branch has address with a city component. Write a projection returning branchId and city.",
          "answer": "SELECT branchId, (address).city AS city FROM Branch;",
          "kind": "sql",
          "choices": [],
          "checks": []
        }
      ]
    }
  ],
  "glossary": {
    "DBMS": "Database Management System",
    "SQL": "Structured Query Language",
    "DDL": "Data Definition Language",
    "DML": "Data Manipulation Language",
    "DA": "Data Administrator",
    "DBA": "Database Administrator",
    "ER": "Entity–Relationship",
    "ERD": "Entity–Relationship Diagram",
    "PK": "Primary Key",
    "FK": "Foreign Key",
    "FD": "Functional Dependency",
    "FDs": "Functional Dependencies",
    "1NF": "First Normal Form",
    "2NF": "Second Normal Form",
    "3NF": "Third Normal Form",
    "BCNF": "Boyce–Codd Normal Form",
    "T-SQL": "Transact-SQL",
    "ACID": "Atomicity, Consistency, Isolation, Durability",
    "2PL": "Two-Phase Locking",
    "WFG": "Wait-For Graph",
    "WAL": "Write-Ahead Logging",
    "OLTP": "Online Transaction Processing",
    "OLAP": "Online Analytical Processing",
    "DW": "Data Warehouse",
    "ETL": "Extract, Transform, Load",
    "DDBMS": "Distributed Database Management System",
    "OID": "Object Identifier",
    "ORDBMS": "Object-Relational Database Management System",
    "OODBMS": "Object-Oriented Database Management System",
    "UDT": "User-Defined Type",
    "BLOB": "Binary Large Object",
    "CLOB": "Character Large Object",
    "NULL": "Not an abbreviation: a marker for missing, unknown or inapplicable information",
    "COALESCE": "Not an abbreviation: returns the first non-NULL argument",
    "I/O": "Input/Output",
    "MCQ": "Multiple-Choice Question",
    "CSV": "Comma-Separated Values",
    "CPU": "Central Processing Unit",
    "API": "Application Programming Interface",
    "RAID": "Redundant Array of Independent Disks",
    "PDF": "Portable Document Format",
    "PL/pgSQL": "Procedural Language/PostgreSQL Structured Query Language",
    "BIGINT": "Big integer data type",
    "S lock": "Shared lock",
    "X lock": "Exclusive lock",
    "UI": "User Interface",
    "2PC": "Two-Phase Commit"
  },
  "practice": [
    {
      "id": "p3n1q1",
      "note": 1,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A shop stores the same customer address in three separate spreadsheets. One changes and two do not. Which issue is demonstrated?",
      "answer": "Inconsistency caused by duplicated facts",
      "choices": [
        "Inconsistency caused by duplicated facts",
        "A foreign-key broken rule is certain",
        "A deadlock",
        "Physical data independence"
      ],
      "concept": "Multiple copies of one fact can diverge when updates are not coordinated.",
      "checks": []
    },
    {
      "id": "p3n1q2",
      "note": 1,
      "title": "Reason it through",
      "kind": "choice",
      "question": "An administrator replaces a heap file with an index without changing application queries. Which separation helped?",
      "answer": "Physical data independence",
      "choices": [
        "Physical data independence",
        "Logical data independence only",
        "Loss of integrity",
        "Application-file dependence"
      ],
      "concept": "Changing storage without changing the logical interface is physical data independence.",
      "checks": []
    },
    {
      "id": "p3n1q3",
      "note": 1,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Where would you look up the declared type and nullability of a column?",
      "answer": "The system catalog",
      "choices": [
        "The system catalog",
        "Only the application screen",
        "Only a backup tape",
        "A transaction result row"
      ],
      "concept": "The catalog stores metadata: definitions of the stored data.",
      "checks": []
    },
    {
      "id": "p3n1q4",
      "note": 1,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Who primarily sets organization-wide data ownership policies?",
      "answer": "Data administrator",
      "choices": [
        "Data administrator",
        "End user",
        "Query optimizer",
        "Lock manager"
      ],
      "concept": "Data administration focuses on policies and governance; database administration emphasizes technical operation.",
      "checks": []
    },
    {
      "id": "p3n1q5",
      "note": 1,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which is a procedure in a database environment?",
      "answer": "A documented backup-and-restore process",
      "choices": [
        "A documented backup-and-restore process",
        "A CPU",
        "A customer record",
        "A database administrator"
      ],
      "concept": "Procedures include operational instructions; hardware, data and people are distinct components.",
      "checks": []
    },
    {
      "id": "p3n1q6",
      "note": 1,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A shared database service goes down and several applications stop together. What tradeoff does this illustrate?",
      "answer": "Concentrated impact of a shared service failure",
      "choices": [
        "Concentrated impact of a shared service failure",
        "Guaranteed zero redundancy",
        "No need for recovery",
        "Elimination of application dependence"
      ],
      "concept": "Shared management has benefits but requires resilience because failure can affect many users.",
      "checks": []
    },
    {
      "id": "p3n2q1",
      "note": 2,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Each museum wing has exactly three galleries; every gallery belongs to one wing. Which description is accurate?",
      "answer": "Per wing: 3 galleries; per gallery: 1 wing",
      "choices": [
        "Per wing: 3 galleries; per gallery: 1 wing",
        "Per wing: 1 gallery; per gallery: 3 wings",
        "Both directions are optional",
        "The relationship is many-to-many"
      ],
      "concept": "Read each multiplicity as the number of opposite-side items allowed for one occurrence.",
      "checks": []
    },
    {
      "id": "p3n2q2",
      "note": 2,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Device has a globally unique serial number and belongs to one cabinet. Is Device necessarily weak?",
      "answer": "No; it has an independent identifier",
      "choices": [
        "No; it has an independent identifier",
        "Yes, because it is on the many side",
        "Yes, because every device has an owner",
        "Only if its name is composite"
      ],
      "concept": "Being a child in a relationship does not by itself make an entity weak.",
      "checks": []
    },
    {
      "id": "p3n2q3",
      "note": 2,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Address contains street, city and postalCode. What property does this illustrate?",
      "answer": "Composite attribute",
      "choices": [
        "Composite attribute",
        "Necessarily multivalued attribute",
        "Derived identifier",
        "Relationship degree"
      ],
      "concept": "Composite describes internal structure; multivalued describes how many values an occurrence can have.",
      "checks": []
    },
    {
      "id": "p3n2q4",
      "note": 2,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A member can supply several contact numbers. What relational mapping fits?",
      "answer": "MemberPhone(memberId, phone) with a composite key",
      "choices": [
        "MemberPhone(memberId, phone) with a composite key",
        "A comma-separated list in Member.phone",
        "Exactly four nullable phone columns",
        "Duplicate the whole member row for each phone"
      ],
      "concept": "A separate relation represents an unbounded set without repeating owner facts.",
      "checks": []
    },
    {
      "id": "p3n2q5",
      "note": 2,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Venue has many Performers and many Events. Joining both through Venue proves which performer appeared at an event?",
      "answer": "It does not; an Appearance relationship is needed",
      "choices": [
        "It does not; an Appearance relationship is needed",
        "Every performer appeared at every event",
        "The lowest performer ID appeared",
        "Only events with one performer are valid"
      ],
      "concept": "Two relationships through a shared parent do not establish an event-level association.",
      "checks": []
    },
    {
      "id": "p3n2q6",
      "note": 2,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A parcel belongs directly to a hub but may have no courier. A report reaches hubs only through couriers. Why are some parcels absent?",
      "answer": "The optional courier path leaves a connection gap",
      "choices": [
        "The optional courier path leaves a connection gap",
        "The parcel key must be composite",
        "The hub needs a multivalued name",
        "All joins are invalid"
      ],
      "concept": "An optional intermediate relationship cannot represent a required direct connection reliably.",
      "checks": []
    },
    {
      "id": "p3n3q1",
      "note": 3,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R contains (1,A),(2,A). What does relational-algebra projection onto the second attribute produce?",
      "answer": "One tuple: (A)",
      "choices": [
        "One tuple: (A)",
        "Two tuples: (A),(A)",
        "No tuples",
        "The number 2"
      ],
      "concept": "Classical relational algebra uses sets; projection removes duplicate tuples.",
      "checks": []
    },
    {
      "id": "p3n3q2",
      "note": 3,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R has 3 tuples and S has 4 tuples. How many tuples are in their Cartesian product?",
      "answer": "12",
      "choices": [
        "12",
        "7",
        "4",
        "3"
      ],
      "concept": "The Cartesian product pairs every tuple in R with every tuple in S.",
      "checks": []
    },
    {
      "id": "p3n3q3",
      "note": 3,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which join condition makes a theta join that is not an equijoin?",
      "answer": "Offer.price < Budget.limit",
      "choices": [
        "Offer.price < Budget.limit",
        "Offer.code = Budget.code",
        "Offer.id = Budget.id",
        "Offer.category = Budget.category"
      ],
      "concept": "A theta join permits comparisons such as less-than; an equijoin uses equality conditions.",
      "checks": []
    },
    {
      "id": "p3n3q4",
      "note": 3,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which result best describes a left semijoin of R with S?",
      "answer": "Matching R tuples with only R attributes",
      "choices": [
        "Matching R tuples with only R attributes",
        "All attributes from matching R and S tuples",
        "Only unmatched R tuples",
        "All R tuples regardless of matches"
      ],
      "concept": "A semijoin tests for matches while keeping only attributes from one operand.",
      "checks": []
    },
    {
      "id": "p3n3q5",
      "note": 3,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A nullable foreign key has value NULL. Does that alone prove an orphan record?",
      "answer": "No; optional participation may allow it",
      "choices": [
        "No; optional participation may allow it",
        "Yes, NULL must match a parent row",
        "Yes, foreign keys must always be primary keys",
        "No, foreign keys never apply references"
      ],
      "concept": "A permitted NULL denotes no specified reference; a known (not NULL) value must match the referenced key.",
      "checks": []
    },
    {
      "id": "p3n3q6",
      "note": 3,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R(A integer,B text) and S(C integer,D date) are to be unioned. What must be compatible?",
      "answer": "Corresponding attribute domains must be compatible",
      "choices": [
        "Corresponding attribute domains must be compatible",
        "Both tables must have the same row count",
        "Each table must contain a foreign key",
        "Their primary-key names must match"
      ],
      "concept": "Set union requires the same degree and compatible corresponding domains.",
      "checks": []
    },
    {
      "id": "p3n4q1",
      "note": 4,
      "title": "Reason it through",
      "kind": "choice",
      "question": "For values 8, NULL, 12, what are COUNT(*), COUNT(value), SUM(value), AVG(value)?",
      "answer": "3, 2, 20, 10",
      "choices": [
        "3, 2, 20, 10",
        "3, 3, 20, 6.67",
        "2, 2, 20, 10",
        "3, 2, NULL, NULL"
      ],
      "concept": "COUNT(*) counts rows; other listed aggregates ignore NULL inputs.",
      "checks": []
    },
    {
      "id": "p3n4q2",
      "note": 4,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which values satisfy amount BETWEEN 10 AND 20?",
      "answer": "10, 15 and 20",
      "choices": [
        "10, 15 and 20",
        "Only 15",
        "Only 10 and 15",
        "Only 15 and 20"
      ],
      "concept": "BETWEEN includes both endpoints.",
      "checks": []
    },
    {
      "id": "p3n4q3",
      "note": 4,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which pattern matches strings beginning with R followed by exactly two characters?",
      "answer": "LIKE 'R__'",
      "choices": [
        "LIKE 'R__'",
        "LIKE 'R%'",
        "LIKE '%R'",
        "LIKE 'R_'"
      ],
      "concept": "An underscore matches one character; percent matches any sequence.",
      "checks": []
    },
    {
      "id": "p3n4q4",
      "note": 4,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A scalar subquery unexpectedly returns two branch identifiers. What is the correct repair when either branch is acceptable?",
      "answer": "Use IN with the subquery",
      "choices": [
        "Use IN with the subquery",
        "Remove one result arbitrarily",
        "Replace WHERE with HAVING",
        "Use = and DISTINCT even if two remain"
      ],
      "concept": "A scalar comparison requires at most one value; IN supports multiple allowed values.",
      "checks": []
    },
    {
      "id": "p3n4q5",
      "note": 4,
      "title": "Reason it through",
      "kind": "choice",
      "question": "For a nonempty, known (not NULL) set {4,9}, which x satisfies x > ALL(set)?",
      "answer": "10",
      "choices": [
        "10",
        "9",
        "5",
        "4"
      ],
      "concept": "Greater than ALL must exceed every member; ANY requires only one successful comparison.",
      "checks": []
    },
    {
      "id": "p3n4q6",
      "note": 4,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A LEFT JOIN keeps sites without inspectors, but WHERE inspector.role = 'Inspector' follows it. What happens?",
      "answer": "Unmatched sites are removed",
      "choices": [
        "Unmatched sites are removed",
        "Unmatched sites are counted as one inspector",
        "The condition creates inspectors",
        "The join becomes a Cartesian product"
      ],
      "concept": "A WHERE condition rejecting NULL removes null-extended rows; put the child filter in ON when keeping empty parents.",
      "checks": []
    },
    {
      "id": "p3n5q1",
      "note": 5,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A table has UNIQUE(email) but email is nullable. What extra constraint is needed for email to be a required possible identifier?",
      "answer": "NOT NULL",
      "choices": [
        "NOT NULL",
        "ORDER BY",
        "A nonunique index",
        "DEFAULT NULL"
      ],
      "concept": "A required identifier must be unique and known (not NULL). Nullable UNIQUE behavior also varies by database.",
      "checks": []
    },
    {
      "id": "p3n5q2",
      "note": 5,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What does CHECK(price > 0) alone generally do with NULL?",
      "answer": "Allows UNKNOWN; add NOT NULL to require a value",
      "choices": [
        "Allows UNKNOWN; add NOT NULL to require a value",
        "Always rejects NULL",
        "Replaces NULL with zero",
        "Turns NULL into one"
      ],
      "concept": "SQL check constraints reject FALSE, not UNKNOWN; nullability must be constrained separately.",
      "checks": []
    },
    {
      "id": "p3n5q3",
      "note": 5,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which action changes a column definition rather than stored values?",
      "answer": "ALTER TABLE",
      "choices": [
        "ALTER TABLE",
        "UPDATE",
        "DELETE",
        "SELECT"
      ],
      "concept": "Data Definition Language changes schema; Data Manipulation Language operates on data.",
      "checks": []
    },
    {
      "id": "p3n5q4",
      "note": 5,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why might a grouped view with SUM(total) not be directly updatable?",
      "answer": "A result row does not find one underlying row to change",
      "choices": [
        "A result row does not find one underlying row to change",
        "Views cannot contain numbers",
        "SUM requires a foreign key",
        "All views are always read-only"
      ],
      "concept": "Aggregated results combine several base rows, making update mapping ambiguous.",
      "checks": []
    },
    {
      "id": "p3n5q5",
      "note": 5,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Deleting a referenced parent with NO ACTION and existing children normally does what?",
      "answer": "Fails unless references are resolved as required by constraint timing",
      "choices": [
        "Fails unless references are resolved as required by constraint timing",
        "Always deletes all children",
        "Silently nulls the child key",
        "Deletes the foreign-key definition"
      ],
      "concept": "Referential actions determine behavior; NO ACTION does not imply cascading deletion.",
      "checks": []
    },
    {
      "id": "p3n5q6",
      "note": 5,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which constraint stops two invoice rows referring to the same shipment?",
      "answer": "UNIQUE on invoice.shipmentId",
      "choices": [
        "UNIQUE on invoice.shipmentId",
        "Only a foreign key on invoice.shipmentId",
        "Only an index on invoice.date",
        "CHECK(invoiceId > 0)"
      ],
      "concept": "A foreign key checks existence, while UNIQUE checks the maximum of one child per referenced value.",
      "checks": []
    },
    {
      "id": "p3n6q1",
      "note": 6,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R(A,B,C) has A → B and B → C, with A the only candidate key. Which decomposition is appropriate?",
      "answer": "AB and BC",
      "choices": [
        "AB and BC",
        "AC and BC only",
        "A and BC",
        "ABC unchanged is necessarily in BCNF"
      ],
      "concept": "Splitting at B → C removes a transitive dependency; B is a key of BC, yielding a lossless join.",
      "checks": []
    },
    {
      "id": "p3n6q2",
      "note": 6,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R(A,B,C) has AB → C and C → B. What are its candidate keys?",
      "answer": "AB and AC",
      "choices": [
        "AB and AC",
        "A only",
        "C only",
        "AB only"
      ],
      "concept": "AB determines C; AC determines B. Neither component alone determines the entire relation.",
      "checks": []
    },
    {
      "id": "p3n6q3",
      "note": 6,
      "title": "Reason it through",
      "kind": "choice",
      "question": "For R(A,B,C), keys AB and AC, and C → B, which normal form can hold while BCNF fails?",
      "answer": "3NF",
      "choices": [
        "3NF",
        "Only unnormalized form",
        "No form above 1NF",
        "BCNF automatically"
      ],
      "concept": "B is prime, so C → B can satisfy 3NF although C is not a superkey, violating BCNF.",
      "checks": []
    },
    {
      "id": "p3n6q4",
      "note": 6,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A sample of five rows has no repeated color. Can this prove color is a candidate key for all future rows?",
      "answer": "No; a business rule is needed",
      "choices": [
        "No; a business rule is needed",
        "Yes, uniqueness in a sample proves it",
        "Yes, if rows are sorted",
        "No attribute can ever be a key"
      ],
      "concept": "Observed data can disprove a dependency but cannot by itself establish a rule for all allowed contents.",
      "checks": []
    },
    {
      "id": "p3n6q5",
      "note": 6,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R(P,Q,R) has key PQ and P → R, where R is non-prime. What fails?",
      "answer": "2NF because of partial dependence",
      "choices": [
        "2NF because of partial dependence",
        "1NF because every composite key is invalid",
        "3NF only; 2NF holds",
        "Referential integrity necessarily"
      ],
      "concept": "A column that is not part of any candidate key depends on a proper subset of a candidate key.",
      "checks": []
    },
    {
      "id": "p3n6q6",
      "note": 6,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What test establishes a binary decomposition R1,R2 is lossless under functional dependencies?",
      "answer": "Their common attributes determine all of R1 or all of R2",
      "choices": [
        "Their common attributes determine all of R1 or all of R2",
        "Both have equal row counts",
        "Their names are different",
        "They share any attribute regardless of dependencies"
      ],
      "concept": "The intersection must functionally determine one complete component relation.",
      "checks": []
    },
    {
      "id": "p3n7q1",
      "note": 7,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A variable used to accumulate a factorial is initialized to 0. What goes wrong?",
      "answer": "Multiplication keeps the result zero",
      "choices": [
        "Multiplication keeps the result zero",
        "Only negative inputs fail",
        "It computes powers of two",
        "The loop necessarily deadlocks"
      ],
      "concept": "A multiplicative accumulator starts at one; zero factorial is also one.",
      "checks": []
    },
    {
      "id": "p3n7q2",
      "note": 7,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A fee rule says >50 adds 9, >30 adds 5. Which order is correct in CASE?",
      "answer": "Check >50 before >30",
      "choices": [
        "Check >50 before >30",
        "Check >30 before >50",
        "Both must be added",
        "Check equality only"
      ],
      "concept": "CASE returns the first matching branch; wider low thresholds must not hide stricter high thresholds.",
      "checks": []
    },
    {
      "id": "p3n7q3",
      "note": 7,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A trigger maintains a mentor client count only on INSERT. Which change can make the count wrong?",
      "answer": "Reassigning a client to another mentor",
      "choices": [
        "Reassigning a client to another mentor",
        "Selecting the mentor",
        "Ordering clients by name",
        "Reading the count twice"
      ],
      "concept": "Deletion and reassignment also affect totals and need corresponding maintenance.",
      "checks": []
    },
    {
      "id": "p3n7q4",
      "note": 7,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Two sessions both count 7 bookings then insert the eighth under an 8-booking limit. What is missing?",
      "answer": "Coordination covering the check and insert",
      "choices": [
        "Coordination covering the check and insert",
        "A longer column name",
        "An ORDER BY alone",
        "A COMMIT before checking"
      ],
      "concept": "A check-then-write race can violate a limit unless users changing data at the same time are coordinated.",
      "checks": []
    },
    {
      "id": "p3n7q5",
      "note": 7,
      "title": "Reason it through",
      "kind": "choice",
      "question": "When should a cursor fetch loop terminate?",
      "answer": "When a fetch reports no next row",
      "choices": [
        "When a fetch reports no next row",
        "After every successful fetch",
        "Only after a COMMIT",
        "When the first column equals zero"
      ],
      "concept": "Fetch status controls exhaustion; ordinary data values do not define the end of a cursor.",
      "checks": []
    },
    {
      "id": "p3n7q6",
      "note": 7,
      "title": "Reason it through",
      "kind": "choice",
      "question": "An UPDATE trigger receives a statement that changes 50 rows in SQL Server. What must the logic handle?",
      "answer": "Sets of rows in inserted and deleted",
      "choices": [
        "Sets of rows in inserted and deleted",
        "Exactly one row in inserted",
        "Only the first row ordered by ID",
        "A separate commit for each row"
      ],
      "concept": "SQL Server DML triggers fire per statement; inserted/deleted may contain many rows.",
      "checks": []
    },
    {
      "id": "p3n8q1",
      "note": 8,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A tutor may own no badge; each badge belongs to exactly one tutor, with at most one badge each. Which mapping checks this?",
      "answer": "Badge.tutorId UNIQUE NOT NULL FK",
      "choices": [
        "Badge.tutorId UNIQUE NOT NULL FK",
        "Tutor.badgeIds comma-separated",
        "Badge.tutorId nullable without UNIQUE",
        "Only badge color as a key"
      ],
      "concept": "Put the required unique reference on Badge to apply its mandatory and maximum-one participation.",
      "checks": []
    },
    {
      "id": "p3n8q2",
      "note": 8,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why store the sale price in SaleLine even if Product has currentPrice?",
      "answer": "It keeps the price agreed at that sale",
      "choices": [
        "It keeps the price agreed at that sale",
        "It always breaks 3NF",
        "It replaces the product key",
        "It guarantees all prices stay equal"
      ],
      "concept": "Current catalog price and historical transaction price are distinct facts.",
      "checks": []
    },
    {
      "id": "p3n8q3",
      "note": 8,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Every team must have at least one player. Does Player.teamId NOT NULL FK alone apply that?",
      "answer": "No; it constrains each player, not the existence of players for every team",
      "choices": [
        "No; it constrains each player, not the existence of players for every team",
        "Yes, both directions are enforced",
        "Yes, if teamId is an integer",
        "No, because foreign keys never constrain anything"
      ],
      "concept": "Minimum child counts need additional enforcement beyond a child-to-parent reference.",
      "checks": []
    },
    {
      "id": "p3n8q4",
      "note": 8,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Two specialist types share Person attributes and can overlap. Which mapping supports this?",
      "answer": "Person plus two subtype tables with shared primary keys",
      "choices": [
        "Person plus two subtype tables with shared primary keys",
        "One exclusive category that allows only one specialist type",
        "Duplicate people for each specialty",
        "Delete the supertype"
      ],
      "concept": "Shared primary-key subtype relations allow a person to occur in either, both, or neither subtype as permitted.",
      "checks": []
    },
    {
      "id": "p3n8q5",
      "note": 8,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which work belongs primarily to logical design?",
      "answer": "Mapping relationships to relations and keys",
      "choices": [
        "Mapping relationships to relations and keys",
        "Choosing page size",
        "Selecting RAID hardware",
        "Measuring disk seek latency"
      ],
      "concept": "Logical design creates relational structures; physical design chooses storage and access mechanisms.",
      "checks": []
    },
    {
      "id": "p3n8q6",
      "note": 8,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A valid-looking schema cannot answer a required historical-resource report. What does this tell you?",
      "answer": "It needs validation against required transactions and possibly another relationship",
      "choices": [
        "It needs validation against required transactions and possibly another relationship",
        "Normalization guarantees the report is possible",
        "Add DISTINCT to every query",
        "All historical data must be derived from current allocation"
      ],
      "concept": "Normalization alone does not prove that the modeled relationships capture all required information.",
      "checks": []
    },
    {
      "id": "p3n9q1",
      "note": 9,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A query filters accountId by equality then createdAt by a range. Which index is a sensible candidate?",
      "answer": "(accountId, createdAt)",
      "choices": [
        "(accountId, createdAt)",
        "(createdAt, accountId) is always superior",
        "Only a random text column",
        "Every column in arbitrary order"
      ],
      "concept": "An equality prefix followed by a range often supports a useful contiguous search; verify actual plans.",
      "checks": []
    },
    {
      "id": "p3n9q2",
      "note": 9,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why can adding many indexes slow inserts?",
      "answer": "Each affected index must be maintained",
      "choices": [
        "Each affected index must be maintained",
        "Indexes prevent all parallelism",
        "Indexes always lock the whole database",
        "The optimizer executes all indexes as queries"
      ],
      "concept": "Indexes trade read access benefits against space and write maintenance.",
      "checks": []
    },
    {
      "id": "p3n9q3",
      "note": 9,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A condition selects 95% of a table. Why might a scan beat repeated index lookups?",
      "answer": "Reading most pages sequentially can be cheaper",
      "choices": [
        "Reading most pages sequentially can be cheaper",
        "The primary key is necessarily corrupt",
        "Indexes cannot handle percentages",
        "A scan always produces sorted rows"
      ],
      "concept": "For unselective queries, random row lookups can cost more than scanning.",
      "checks": []
    },
    {
      "id": "p3n9q4",
      "note": 9,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A stored total disagrees with detail rows. Which design tradeoff caused this risk?",
      "answer": "Maintained redundancy",
      "choices": [
        "Maintained redundancy",
        "Projection",
        "Attribute renaming",
        "A candidate key alone"
      ],
      "concept": "Denormalized values require reliable maintenance and reconciliation.",
      "checks": []
    },
    {
      "id": "p3n9q5",
      "note": 9,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What evidence should guide an index change?",
      "answer": "Representative workload measurements and query plans",
      "choices": [
        "Representative workload measurements and query plans",
        "Only the number of tables",
        "Only column-name length",
        "A universal rule to index every foreign key twice"
      ],
      "concept": "Workload frequency, selectivity, update cost and measured plans inform physical design.",
      "checks": []
    },
    {
      "id": "p3n9q6",
      "note": 9,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Partitioning orders by month most directly helps which operation when supported by the engine?",
      "answer": "Pruning irrelevant months for a date-range query",
      "choices": [
        "Pruning irrelevant months for a date-range query",
        "Making every join free",
        "Removing all integrity constraints",
        "Guaranteeing global uniqueness without keys"
      ],
      "concept": "Partition pruning can avoid reading partitions outside the requested range.",
      "checks": []
    },
    {
      "id": "p3n10q1",
      "note": 10,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R1(x), R2(y), W1(x), W2(y): is there a cross-transaction conflict?",
      "answer": "No; the transactions access different items",
      "choices": [
        "No; the transactions access different items",
        "Yes, every write conflicts with every other write",
        "Yes, both transactions have reads",
        "Only if they commit"
      ],
      "concept": "Conflicts require the same item, different transactions, and at least one write.",
      "checks": []
    },
    {
      "id": "p3n10q2",
      "note": 10,
      "title": "Reason it through",
      "kind": "choice",
      "question": "R1(x), W2(x), W1(y), R2(y): which graph edges result?",
      "answer": "Only T1 → T2",
      "choices": [
        "Only T1 → T2",
        "Only T2 → T1",
        "Both directions",
        "No edges"
      ],
      "concept": "Both conflicting pairs order T1 before T2, so a serial order T1 then T2 is possible.",
      "checks": []
    },
    {
      "id": "p3n10q3",
      "note": 10,
      "title": "Reason it through",
      "kind": "choice",
      "question": "W1(x), R2(x), C2, A1: what is the recovery problem?",
      "answer": "T2 committed based on data later aborted by T1",
      "choices": [
        "T2 committed based on data later aborted by T1",
        "No problem because reads never affect recovery",
        "Only a phantom read",
        "T1 must be committed automatically"
      ],
      "concept": "A dependent transaction must not commit before the transaction whose value it read.",
      "checks": []
    },
    {
      "id": "p3n10q4",
      "note": 10,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Two transactions each hold an S lock on x and both request X on x. What can occur?",
      "answer": "A lock-upgrade deadlock",
      "choices": [
        "A lock-upgrade deadlock",
        "Guaranteed immediate success for both",
        "A foreign-key broken rule",
        "Only a dirty read"
      ],
      "concept": "Each upgrade may wait for the other shared lock to be released.",
      "checks": []
    },
    {
      "id": "p3n10q5",
      "note": 10,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which extra protection is needed when repeated range queries must exclude new matching rows?",
      "answer": "Predicate or key-range protection at an appropriate isolation level",
      "choices": [
        "Predicate or key-range protection at an appropriate isolation level",
        "Only row locks on currently returned rows",
        "Only a column alias",
        "Only a backup"
      ],
      "concept": "Existing-row locks alone need not protect gaps where matching new rows can appear.",
      "checks": []
    },
    {
      "id": "p3n10q6",
      "note": 10,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A basic timestamp-ordering transaction requests a forbidden operation. What normally happens?",
      "answer": "It aborts and may restart",
      "choices": [
        "It aborts and may restart",
        "It waits forever for a lock by definition",
        "It bypasses ordering",
        "It deletes the timestamp of the data item"
      ],
      "concept": "Basic timestamp ordering resolves ordering violations by aborting rather than lock waiting.",
      "checks": []
    },
    {
      "id": "p3n11q1",
      "note": 11,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why push a selective filter below an inner join when equivalent?",
      "answer": "Fewer intermediate rows may reduce work",
      "choices": [
        "Fewer intermediate rows may reduce work",
        "It changes the requested result deliberately",
        "It removes all indexes",
        "It forces duplicate elimination"
      ],
      "concept": "Equivalent early filtering can reduce join input sizes and intermediate results.",
      "checks": []
    },
    {
      "id": "p3n11q2",
      "note": 11,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Can a child-side WHERE condition always move into ON for a LEFT JOIN without changing results?",
      "answer": "No; unmatched-row behavior can change",
      "choices": [
        "No; unmatched-row behavior can change",
        "Yes, all predicates commute with all joins",
        "Only if table names are short",
        "Yes, because SQL is declarative"
      ],
      "concept": "Outer joins introduce NULL-extended rows; condition placement affects which survive.",
      "checks": []
    },
    {
      "id": "p3n11q3",
      "note": 11,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What information helps estimate join result sizes?",
      "answer": "Statistics on cardinality and value distributions",
      "choices": [
        "Statistics on cardinality and value distributions",
        "Only the query text length",
        "Only the disk brand",
        "Only the primary-key name"
      ],
      "concept": "Cost models rely on estimated row counts and selectivity derived from statistics.",
      "checks": []
    },
    {
      "id": "p3n11q4",
      "note": 11,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which strategy is suited to an equality join with enough memory for one input?",
      "answer": "Hash join",
      "choices": [
        "Hash join",
        "A sort-free merge of arbitrary unsorted inputs",
        "Only Cartesian product",
        "Only a non-equality nested loop"
      ],
      "concept": "Hashing equality keys can match rows efficiently; memory and data distribution still matter.",
      "checks": []
    },
    {
      "id": "p3n11q5",
      "note": 11,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why can stale statistics cause a poor plan?",
      "answer": "The optimizer may misestimate selectivity and intermediate sizes",
      "choices": [
        "The optimizer may misestimate selectivity and intermediate sizes",
        "They change logical query semantics",
        "They remove table constraints",
        "They force every result to be empty"
      ],
      "concept": "Plan choice depends on estimates; outdated distributions can make costs inaccurate.",
      "checks": []
    },
    {
      "id": "p3n11q6",
      "note": 11,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which statement is true of two equivalent SQL formulations?",
      "answer": "The optimizer may produce the same physical plan",
      "choices": [
        "The optimizer may produce the same physical plan",
        "The longer text must be slower",
        "They must use different indexes",
        "Both must have identical runtime in every run"
      ],
      "concept": "Logical syntax is transformed into physical plans; text length is not a cost measure.",
      "checks": []
    },
    {
      "id": "p3n12q1",
      "note": 12,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A page is written before its change log is durable. Which rule is violated?",
      "answer": "Write-ahead logging",
      "choices": [
        "Write-ahead logging",
        "First normal form",
        "Referential integrity",
        "Set union compatibility"
      ],
      "concept": "Recovery information must survive before the corresponding changed page reaches persistent storage.",
      "checks": []
    },
    {
      "id": "p3n12q2",
      "note": 12,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A committed update is absent from a restored data page. What operation restores it from after-images?",
      "answer": "REDO",
      "choices": [
        "REDO",
        "UNDO",
        "Projection",
        "Lock upgrade"
      ],
      "concept": "REDO reapplies required committed changes.",
      "checks": []
    },
    {
      "id": "p3n12q3",
      "note": 12,
      "title": "Reason it through",
      "kind": "choice",
      "question": "An uncommitted update reached disk before a crash. What is needed in immediate-update recovery?",
      "answer": "UNDO of the incomplete transaction",
      "choices": [
        "UNDO of the incomplete transaction",
        "COMMIT of every active transaction",
        "Ignore the page forever",
        "Delete all committed records"
      ],
      "concept": "Before-images or equivalent recovery information remove incomplete changes.",
      "checks": []
    },
    {
      "id": "p3n12q4",
      "note": 12,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Does a checkpoint remove the need for backups after disk destruction?",
      "answer": "No; backup plus surviving logs may still be needed",
      "choices": [
        "No; backup plus surviving logs may still be needed",
        "Yes, every checkpoint duplicates the entire database offsite",
        "Yes, checkpoints prevent hardware failures",
        "Only if there were no readers"
      ],
      "concept": "Checkpoints primarily shorten recovery work; they do not replace recoverable copies of lost data.",
      "checks": []
    },
    {
      "id": "p3n12q5",
      "note": 12,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which locking choice generally has lower lock-management overhead but less concurrency?",
      "answer": "Table-level locking",
      "choices": [
        "Table-level locking",
        "Individual-row locking",
        "Individual-field locking",
        "No locking with guaranteed serializability"
      ],
      "concept": "Coarser units use fewer locks but block more unrelated work.",
      "checks": []
    },
    {
      "id": "p3n12q6",
      "note": 12,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Under deferred update with no uncommitted database writes, what is needed after a pre-commit abort?",
      "answer": "No database UNDO for those deferred changes",
      "choices": [
        "No database UNDO for those deferred changes",
        "UNDO every row of the database",
        "REDO the aborted transaction",
        "Force COMMIT"
      ],
      "concept": "Deferred changes not installed in the database do not require database-page undo.",
      "checks": []
    },
    {
      "id": "p3n13q1",
      "note": 13,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What must be defined before choosing fact-table measures?",
      "answer": "The grain: what one fact row represents",
      "choices": [
        "The grain: what one fact row represents",
        "The dashboard font",
        "The file extension",
        "Only the number of users"
      ],
      "concept": "Grain determines valid dimensions and aggregation behavior.",
      "checks": []
    },
    {
      "id": "p3n13q2",
      "note": 13,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which measure is usually not additive across time?",
      "answer": "End-of-day inventory balance",
      "choices": [
        "End-of-day inventory balance",
        "Daily revenue",
        "Units sold per day",
        "Daily shipment cost"
      ],
      "concept": "Balances at different times represent states and should not normally be summed across time.",
      "checks": []
    },
    {
      "id": "p3n13q3",
      "note": 13,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Grouping monthly sales into yearly totals is what OLAP operation?",
      "answer": "Roll-up",
      "choices": [
        "Roll-up",
        "Drill-down",
        "Row deletion",
        "Key generation"
      ],
      "concept": "Roll-up aggregates to a coarser level in a hierarchy.",
      "checks": []
    },
    {
      "id": "p3n13q4",
      "note": 13,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What is the usual purpose of ETL?",
      "answer": "Extract, transform and load analytical data",
      "choices": [
        "Extract, transform and load analytical data",
        "Execute, transfer and lock rows",
        "Encrypt, truncate and link",
        "Eliminate transaction logs"
      ],
      "concept": "ETL integrates and cleans source data before loading a target store.",
      "checks": []
    },
    {
      "id": "p3n13q5",
      "note": 13,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A star schema typically puts descriptive attributes where?",
      "answer": "In dimension tables linked to a fact table",
      "choices": [
        "In dimension tables linked to a fact table",
        "Only in transaction logs",
        "Only in composite primary keys",
        "In no persistent storage"
      ],
      "concept": "Dimension tables describe the context of measurements stored in facts.",
      "checks": []
    },
    {
      "id": "p3n13q6",
      "note": 13,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why can joining facts at incompatible grains inflate totals?",
      "answer": "One fact row may match multiple rows and be counted repeatedly",
      "choices": [
        "One fact row may match multiple rows and be counted repeatedly",
        "SUM always eliminates duplicates",
        "Dimensions forbid every join",
        "All numerical facts are nonadditive"
      ],
      "concept": "Join multiplicity must respect grain; preaggregate or join compatible levels.",
      "checks": []
    },
    {
      "id": "p3n14q1",
      "note": 14,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Splitting a table by rows in East and West regions is what?",
      "answer": "Horizontal fragmentation",
      "choices": [
        "Horizontal fragmentation",
        "Vertical fragmentation",
        "Normalization into 1NF",
        "Full replication"
      ],
      "concept": "Horizontal fragments divide tuples using predicates.",
      "checks": []
    },
    {
      "id": "p3n14q2",
      "note": 14,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What is normally retained in each vertical fragment for putting the pieces back together?",
      "answer": "The key identifying corresponding rows",
      "choices": [
        "The key identifying corresponding rows",
        "Only the longest text column",
        "A random row number assigned separately",
        "No common attributes"
      ],
      "concept": "A shared identifier supports joining fragments back into complete rows.",
      "checks": []
    },
    {
      "id": "p3n14q3",
      "note": 14,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Two disjoint horizontal fragments are reconstructed with what?",
      "answer": "UNION ALL",
      "choices": [
        "UNION ALL",
        "Cartesian product",
        "An inequality join",
        "Only INTERSECT"
      ],
      "concept": "UNION ALL combines the disjoint row sets without unnecessary duplicate removal.",
      "checks": []
    },
    {
      "id": "p3n14q4",
      "note": 14,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What tradeoff does replication introduce?",
      "answer": "More local availability/read options but coordination of updates",
      "choices": [
        "More local availability/read options but coordination of updates",
        "No storage overhead",
        "Guaranteed zero network traffic",
        "Automatic elimination of failures"
      ],
      "concept": "Maintaining copies requires consistency mechanisms and extra storage.",
      "checks": []
    },
    {
      "id": "p3n14q5",
      "note": 14,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A user runs the same query after a table moves to another site. Which transparency is illustrated?",
      "answer": "Location transparency",
      "choices": [
        "Location transparency",
        "Lock granularity",
        "Prime-attribute transparency",
        "Projection"
      ],
      "concept": "Location transparency hides physical placement from the user interface.",
      "checks": []
    },
    {
      "id": "p3n14q6",
      "note": 14,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Why aggregate a remote dataset before sending results to a coordinator?",
      "answer": "To reduce network transfer when only grouped results are needed",
      "choices": [
        "To reduce network transfer when only grouped results are needed",
        "To guarantee lossless decomposition",
        "To eliminate all remote failures",
        "To remove every join"
      ],
      "concept": "Shipping a compact enough result can reduce communication cost.",
      "checks": []
    },
    {
      "id": "p3n15q1",
      "note": 15,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What can distinguish object identity from equality of column values?",
      "answer": "Two objects may have equal values yet distinct identities",
      "choices": [
        "Two objects may have equal values yet distinct identities",
        "Equal values always imply identical object identifiers",
        "Identity must be the current address",
        "Identity changes whenever any attribute changes"
      ],
      "concept": "An object identifier identifies an object independently of its current column values.",
      "checks": []
    },
    {
      "id": "p3n15q2",
      "note": 15,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which feature packages state with behavior?",
      "answer": "Encapsulation",
      "choices": [
        "Encapsulation",
        "Cartesian product",
        "Referential action",
        "Checkpointing"
      ],
      "concept": "Objects combine data with operations exposed through an interface.",
      "checks": []
    },
    {
      "id": "p3n15q3",
      "note": 15,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Calling the same operation on different subtype objects can invoke different implementations. What is this?",
      "answer": "Polymorphism",
      "choices": [
        "Polymorphism",
        "Atomicity",
        "Fragmentation",
        "A transitive dependency"
      ],
      "concept": "Polymorphism permits type-specific behavior behind a common operation.",
      "checks": []
    },
    {
      "id": "p3n15q4",
      "note": 15,
      "title": "Reason it through",
      "kind": "choice",
      "question": "What does an object-relational system generally extend?",
      "answer": "A relational model with richer types and related capabilities",
      "choices": [
        "A relational model with richer types and related capabilities",
        "Only flat text files",
        "Only a spreadsheet UI",
        "Only physical storage addresses"
      ],
      "concept": "Object-relational systems keep relational foundations while adding richer modeling features.",
      "checks": []
    },
    {
      "id": "p3n15q5",
      "note": 15,
      "title": "Reason it through",
      "kind": "choice",
      "question": "Which type conventionally holds a large binary payload?",
      "answer": "BLOB",
      "choices": [
        "BLOB",
        "CLOB",
        "INTEGER",
        "DATE"
      ],
      "concept": "BLOB means Binary Large Object; CLOB means Character Large Object.",
      "checks": []
    },
    {
      "id": "p3n15q6",
      "note": 15,
      "title": "Reason it through",
      "kind": "choice",
      "question": "A composite address type contains city and street. What does selecting its city field do?",
      "answer": "Accesses a component of a structured value",
      "choices": [
        "Accesses a component of a structured value",
        "Creates a new table automatically",
        "Converts all addresses to object identifiers",
        "Deletes the street field"
      ],
      "concept": "Structured types can expose named components; exact access syntax is database-specific.",
      "checks": []
    },
    {
      "id": "p3n1q7",
      "note": 1,
      "title": "Insert a complete row",
      "kind": "sql",
      "question": "Item(itemId, label, quantity). Write an INSERT for item 41 named Cable with quantity 6. Use an explicit column list.",
      "answer": "INSERT INTO Item(itemId, label, quantity)\nVALUES (41, 'Cable', 6);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Name all target columns.",
        "Match values to the column order.",
        "Use a quoted text literal."
      ]
    },
    {
      "id": "p3n1q8",
      "note": 1,
      "title": "Change only the intended rows",
      "kind": "sql",
      "question": "Item(itemId, label, quantity). Increase quantity by 4 for items currently below 3. Do not change other items.",
      "answer": "UPDATE Item\nSET quantity = quantity + 4\nWHERE quantity < 3;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use UPDATE with a row filter.",
        "Add to the old value rather than replace it.",
        "Keep the strict threshold of 3."
      ]
    },
    {
      "id": "p3n1q9",
      "note": 1,
      "title": "Separate facts from software",
      "kind": "essay",
      "question": "A team says its CSV file is a DBMS because it contains customer rows. Explain the distinction and give two reasons to move to a shared DBMS.",
      "answer": "The file contains data; a Database Management System is software that defines, manages and controls database access. A shared DBMS can apply constraints and coordinate concurrent updates. It can also centralize access control and recovery. Migration adds operational complexity and does not automatically correct bad data.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Distinguish stored data from management software.",
        "Explain two concrete benefits.",
        "Acknowledge a cost or limitation."
      ]
    },
    {
      "id": "p3n1q10",
      "note": 1,
      "title": "Two kinds of independence",
      "kind": "essay",
      "question": "An application survives a new disk layout but breaks when a column is split into two. Find the two independence issues and suggest an interface strategy.",
      "answer": "Surviving the disk change shows physical data independence. The schema change challenges logical data independence. A stable view or API can present the old shape while underlying relations evolve, provided its semantics remain valid. Independence is an architectural goal, not a promise that every change is invisible.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find physical independence correctly.",
        "Find logical independence correctly.",
        "Explain a stable view or interface."
      ]
    },
    {
      "id": "p3n2q7",
      "note": 2,
      "title": "Enforce a one-to-one limit",
      "kind": "sql",
      "question": "Person(personId) exists. Write PostgreSQL DDL for Permit(permitId, personId, expiresOn): each permit needs one person; a person has at most one permit; expiry is required.",
      "answer": "CREATE TABLE Permit (\n permitId INTEGER PRIMARY KEY,\n personId INTEGER NOT NULL UNIQUE REFERENCES Person(personId),\n expiresOn DATE NOT NULL\n);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use a primary key for Permit.",
        "Use a required unique foreign key to Person.",
        "Require the expiry date."
      ]
    },
    {
      "id": "p3n2q8",
      "note": 2,
      "title": "Detect broken direct reporting",
      "kind": "sql",
      "question": "Worker(workerId, supervisorId), where supervisorId is optional. Write a query finding workers whose known (not NULL) supervisorId has no corresponding Worker. Assume no foreign key currently exists.",
      "answer": "SELECT w.workerId, w.supervisorId\nFROM Worker w\nWHERE w.supervisorId IS NOT NULL\n AND NOT EXISTS (SELECT 1 FROM Worker s\n WHERE s.workerId = w.supervisorId);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Exclude the permitted NULL case.",
        "Correlate the supervisor to another Worker row.",
        "Return missing references rather than valid ones."
      ]
    },
    {
      "id": "p3n2q9",
      "note": 2,
      "title": "Read both ends of a relationship",
      "kind": "essay",
      "question": "Each club has 2–6 coaches. Each coach belongs to exactly one club. Members may attend many sessions and sessions may have many members. Describe both relationships and map attendance with a recorded arrival time.",
      "answer": "Club–Coach is one-to-many: per club 2..6 coaches, per coach exactly 1 club. Coach has a required clubId foreign key, but the 2..6 count needs extra enforcement. Member–Session is many-to-many. Attendance(memberId, sessionId, arrivedAt) uses the pair as primary key and both as foreign keys, assuming one attendance per member per session.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "State multiplicity in both directions.",
        "Map attendance and its relationship attribute.",
        "Explain why a foreign key does not apply the coach count."
      ]
    },
    {
      "id": "p3n2q10",
      "note": 2,
      "title": "Repair an ambiguous model",
      "kind": "essay",
      "question": "Branch employs Agent; Branch hosts Event. An agent can work at several events. Explain why joining through Branch produces false participation and suggest a corrected schema.",
      "answer": "The shared branch does not show which agent worked at which event. Introduce EventAgent(eventId, agentId, role) with a composite primary key and foreign keys to Event and Agent, assuming one role per pair. Keep Branch references for location and employment. Enforce same-branch participation separately only if that is a business rule.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find the false association.",
        "Introduce an explicit association relation.",
        "State keys and an assumption."
      ]
    },
    {
      "id": "p3n3q7",
      "note": 3,
      "title": "Every required capability",
      "kind": "sql",
      "question": "Candidate(candidateId, name), RequiredSkill(skillId), CandidateSkill(candidateId, skillId). Return candidates possessing every required skill, including all candidates when no skills are required.",
      "answer": "SELECT c.candidateId, c.name FROM Candidate c\nWHERE NOT EXISTS (\n SELECT 1 FROM RequiredSkill r\n WHERE NOT EXISTS (SELECT 1 FROM CandidateSkill s\n  WHERE s.candidateId = c.candidateId AND s.skillId = r.skillId)\n);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find absence of any missing required skill.",
        "Correlate both candidate and skill.",
        "Handle the empty requirement set correctly."
      ]
    },
    {
      "id": "p3n3q8",
      "note": 3,
      "title": "Union with a deliberate duplicate policy",
      "kind": "sql",
      "question": "CurrentMember(memberId) and FormerMember(memberId) may overlap. Write SQL returning each identifier once. Explain the alternative that keeps duplicates.",
      "answer": "SELECT memberId FROM CurrentMember\nUNION\nSELECT memberId FROM FormerMember;\n-- UNION removes duplicates; UNION ALL retains them.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Select compatible columns.",
        "Use UNION to remove duplicates.",
        "Distinguish UNION ALL."
      ]
    },
    {
      "id": "p3n3q9",
      "note": 3,
      "title": "Work through relational algebra",
      "kind": "essay",
      "question": "R(id, team) has (1,A),(2,A),(3,B). S(team, city) has (A,Oslo),(C,Rome). Give the result of selecting team=A from R, projecting team from R, and equijoining R to S on team.",
      "answer": "Selection returns (1,A),(2,A). Set projection returns (A),(B). The equijoin returns two matched rows: (1,A,A,Oslo) and (2,A,A,Oslo) if both team columns are retained. A natural join instead presents a single common team column. No row for id 3 matches.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Compute selection and duplicate-free projection.",
        "Compute matching join rows.",
        "Explain the retained common columns."
      ]
    },
    {
      "id": "p3n3q10",
      "note": 3,
      "title": "Keys and nullable references",
      "kind": "essay",
      "question": "Parcel(parcelId, trackingCode, lockerId) has a unique required trackingCode and optional lockerId referring to Locker. Find candidate keys, choose a primary key, and explain entity and the rule that foreign keys must point to existing rows or allowed NULL values.",
      "answer": "Assuming parcelId is a unique required identifier, candidate keys are parcelId and trackingCode. Choose parcelId as the primary key and trackingCode as an alternate key. Entity integrity forbids NULL in the primary key. A known (not NULL) lockerId must reference an existing Locker; NULL permits an unallocated parcel. Uniqueness and nullability must be declared, not inferred from a sample.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find both candidate keys under stated assumptions.",
        "Distinguish primary and alternate keys.",
        "Explain both integrity rules."
      ]
    },
    {
      "id": "p3n4q7",
      "note": 4,
      "title": "A manager through two joins",
      "kind": "sql",
      "question": "Staff(staffId, name, unitId), Unit(unitId, managerId). Return the number of staff in units managed by staffId 9. Include the manager if that person is also a staff member of a managed unit.",
      "answer": "SELECT COUNT(*) AS staffCount\nFROM Staff s JOIN Unit u ON u.unitId = s.unitId\nWHERE u.managerId = 9;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Join each staff member to their unit.",
        "Filter by a stable manager identifier.",
        "Count staff rows without an unintended manager exclusion."
      ]
    },
    {
      "id": "p3n4q8",
      "note": 4,
      "title": "A compound group condition",
      "kind": "sql",
      "question": "Visit(visitId, siteId, visitorId, fee, completed). Return sites with at least 3 distinct visitors and total fees above 100, considering only completed=1 visits.",
      "answer": "SELECT siteId, COUNT(DISTINCT visitorId) AS visitors, SUM(fee) AS totalFees\nFROM Visit WHERE completed = 1\nGROUP BY siteId\nHAVING COUNT(DISTINCT visitorId) >= 3 AND SUM(fee) > 100;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Filter completed rows before grouping.",
        "Use distinct visitors and sum fees.",
        "Apply both group thresholds in HAVING."
      ]
    },
    {
      "id": "p3n4q9",
      "note": 4,
      "title": "Debug a report",
      "kind": "essay",
      "question": "A developer groups Sale(shopId, amount) by shopId, selects shopId and SUM(amount), but writes WHERE SUM(amount)>500. Explain the error, repair it, and describe the empty-input behavior of SUM and COUNT.",
      "answer": "WHERE filters individual rows before aggregation and cannot use that group SUM directly. Use SELECT shopId, SUM(amount) FROM Sale GROUP BY shopId HAVING SUM(amount)>500. COUNT returns zero for an ungrouped empty input, while SUM returns NULL. A grouped query over empty input returns no groups.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain clause order.",
        "Move the aggregate condition to HAVING.",
        "Distinguish empty aggregate results from no grouped rows."
      ]
    },
    {
      "id": "p3n4q10",
      "note": 4,
      "title": "Boundaries and three-valued logic",
      "kind": "essay",
      "question": "A query uses price NOT IN (10,NULL). Does a row with price=12 qualify? Explain. Then explain why startsAt < April 1 is safer than <= March 31 for timestamp filtering.",
      "answer": "12=10 is false, but 12=NULL is unknown, so NOT IN is unknown rather than true; WHERE excludes it. Prefer NOT EXISTS with an appropriate correlation when NULL can occur, while deciding separately how outer NULL values should behave. A timestamp literal for March 31 typically denotes midnight and misses the rest of that day; a half-open range ending before April 1 includes the full final day.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain UNKNOWN and WHERE behavior.",
        "Offer a NULL-aware alternative.",
        "Explain the timestamp boundary."
      ]
    },
    {
      "id": "p3n5q7",
      "note": 5,
      "title": "Add and verify a constraint",
      "kind": "sql",
      "question": "Stock(itemId, quantity) already exists and quantity is NOT NULL. Write standard ALTER TABLE SQL adding a named constraint disallowing negative quantities. What must be checked before applying it?",
      "answer": "ALTER TABLE Stock\nADD CONSTRAINT stock_quantity_nonnegative CHECK (quantity >= 0);\n-- Existing rows must satisfy the constraint; correct invalid data first.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use ALTER TABLE ADD CONSTRAINT.",
        "Use an inclusive zero or greater check.",
        "Mention existing-data validation."
      ]
    },
    {
      "id": "p3n5q8",
      "note": 5,
      "title": "Use explicit archival columns",
      "kind": "sql",
      "question": "ClosedTicket(ticketId, closedOn) and Ticket(ticketId, closedOn) have matching types. Write INSERT…SELECT copying Ticket rows closed before 2025-01-01. Use standard SQL date literals. Do not delete anything.",
      "answer": "INSERT INTO ClosedTicket(ticketId, closedOn)\nSELECT ticketId, closedOn FROM Ticket\nWHERE closedOn < DATE '2025-01-01';",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "List target and source columns explicitly.",
        "Use the strict date boundary.",
        "Do not perform a deletion."
      ]
    },
    {
      "id": "p3n5q9",
      "note": 5,
      "title": "Design referential actions",
      "kind": "essay",
      "question": "A member has historical rentals and optional current locker allocation. Explain why deleting a member with CASCADE can be inappropriate for rentals, and suggest a retention approach.",
      "answer": "Cascading deletion could erase transaction history that must be retained. Keep the member row with an inactive status, or use a deliberately designed archival/anonymization policy that keeps required references. For an optional current allocation, SET NULL may be appropriate if permitted by the business rule and column nullability. Choose actions by relationship meaning rather than applying one rule everywhere.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain the history-loss risk.",
        "Suggest a consistent retention approach.",
        "Distinguish optional current state from historical facts."
      ]
    },
    {
      "id": "p3n5q10",
      "note": 5,
      "title": "View behavior",
      "kind": "essay",
      "question": "A view lists active members and another view groups rentals by member. Compare their likely updatability and explain what WITH CHECK OPTION can apply on a supported simple view.",
      "answer": "A simple single-table view may be updatable when rows map unambiguously to base rows. A grouped aggregate view usually cannot map a result edit to one base row. WITH CHECK OPTION can require inserts or updates made through an eligible view to remain visible under its condition, such as active=1. Vendor rules apply; it does not generally constrain writes made directly to the base table.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain row mapping.",
        "Explain aggregate ambiguity.",
        "State the scope of WITH CHECK OPTION."
      ]
    },
    {
      "id": "p3n6q7",
      "note": 6,
      "title": "Find contradictory facts",
      "kind": "sql",
      "question": "Import(assetId, categoryCode, categoryLabel). categoryCode and categoryLabel are NOT NULL. Write SQL returning category codes that violate categoryCode → categoryLabel in the current data.",
      "answer": "SELECT categoryCode\nFROM Import\nGROUP BY categoryCode\nHAVING COUNT(DISTINCT categoryLabel) > 1;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Group by the determinant.",
        "Count distinct dependent values.",
        "Find groups with more than one value."
      ]
    },
    {
      "id": "p3n6q8",
      "note": 6,
      "title": "Enforce an alternate composite key",
      "kind": "sql",
      "question": "Coach(coachId) and Room(roomId) exist. Create DailyAllocation(coachId, dayDate, roomId): one room per coach per day and one coach per room per day. All fields are required.",
      "answer": "CREATE TABLE DailyAllocation (\n coachId INTEGER NOT NULL REFERENCES Coach(coachId),\n dayDate DATE NOT NULL,\n roomId INTEGER NOT NULL REFERENCES Room(roomId),\n PRIMARY KEY (coachId, dayDate),\n UNIQUE (roomId, dayDate)\n);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use a coach-and-date primary key.",
        "Use a room-and-date alternate key.",
        "Declare required fields and references."
      ]
    },
    {
      "id": "p3n6q9",
      "note": 6,
      "title": "Normalize a full working relation",
      "kind": "essay",
      "question": "Work(personId, email, personName, band, rate, taskId, taskName, hours). personId and email each find a person; band determines rate; taskId determines taskName; each person-task pair determines hours. Find all candidate keys and decompose through 2NF to 3NF.",
      "answer": "Candidate keys are (personId,taskId) and (email,taskId). At 2NF: Person2(personId,email,personName,band,rate), Task(taskId,taskName), Work(personId,taskId,hours). Person2 still has band → rate. At 3NF: Person(personId PK,email UNIQUE NOT NULL,personName,band FK), Band(band PK,rate), Task(taskId PK,taskName), Work(personId PK/FK,taskId PK/FK,hours). Partial person and task facts are separated first; then the transitive rate fact is separated. Email remains an alternate key.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find both minimal candidate keys.",
        "Separate partial dependencies at 2NF.",
        "Separate band-rate at 3NF and keep keys."
      ]
    },
    {
      "id": "p3n6q10",
      "note": 6,
      "title": "Compute closures, do not guess",
      "kind": "essay",
      "question": "R(K,L,M,N) has K → L, L → M, and MN → K. Find all candidate keys and explain whether BCNF holds.",
      "answer": "N never appears on a right-hand side, so every key includes N. KN gives L and M; LN gives M, then K via MN; MN gives K then L. Thus KN, LN and MN are the minimal keys. N alone is not a key and these exhaust the options. BCNF fails because K → L and L → M have determinants that are not superkeys. All columns are prime, so the given dependencies satisfy 3NF.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use closure and minimality to find all three keys.",
        "Explain why N is needed.",
        "Distinguish 3NF from BCNF."
      ]
    },
    {
      "id": "p3n7q7",
      "note": 7,
      "title": "Write a controlled loop",
      "kind": "sql",
      "question": "SQL Server: write a procedure ProductToN taking integer @n from 0 through 20 and returning n factorial as BIGINT. Reject NULL, negative values and values over 20.",
      "answer": "CREATE PROCEDURE ProductToN @n INTEGER\nAS\nBEGIN\n SET NOCOUNT ON;\n IF @n IS NULL OR @n < 0 OR @n > 20\n  THROW 50001, 'Use an integer from 0 through 20', 1;\n DECLARE @i INTEGER = 2, @result BIGINT = 1;\n WHILE @i <= @n\n BEGIN\n  SET @result = @result * @i;\n  SET @i = @i + 1;\n END;\n SELECT @result AS factorial;\nEND;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Validate input including BIGINT overflow range.",
        "Initialize to one and handle zero.",
        "Advance the loop and return the result."
      ]
    },
    {
      "id": "p3n7q8",
      "note": 7,
      "title": "Write an explicit cursor",
      "kind": "sql",
      "question": "PostgreSQL: Trip(tripId primary key, miles NOT NULL, fee NOT NULL). Write a procedure using a cursor to add 6 to fees above 40 miles, 3 above 20, otherwise zero. Exactly one increase applies per call.",
      "answer": "CREATE PROCEDURE AdjustTripFees() LANGUAGE plpgsql AS $$\nDECLARE\n trips CURSOR FOR SELECT tripId, miles FROM Trip ORDER BY tripId FOR UPDATE;\n row_data RECORD;\n delta NUMERIC;\nBEGIN\n OPEN trips;\n LOOP\n  FETCH trips INTO row_data;\n  EXIT WHEN NOT FOUND;\n  delta := CASE WHEN row_data.miles > 40 THEN 6\n                WHEN row_data.miles > 20 THEN 3 ELSE 0 END;\n  UPDATE Trip SET fee = fee + delta WHERE CURRENT OF trips;\n END LOOP;\n CLOSE trips;\nEND;\n$$;\n-- Try CALL AdjustTripFees() inside BEGIN; ... ROLLBACK; to avoid permanent repeat increments.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Open, fetch, terminate and close the cursor.",
        "Check the higher strict threshold first.",
        "Update the current row and recognize repeat-call effects."
      ]
    },
    {
      "id": "p3n7q9",
      "note": 7,
      "title": "Design the entire trigger invariant",
      "kind": "essay",
      "question": "Mentor(mentorId,totalPeople) and Person(personId,mentorId) must stay consistent, with at most 8 people per mentor. Describe a trigger design covering insertion, deletion, reassignment and users changing data at the same time.",
      "answer": "Start with correct counts. On insert increase the new mentor; on delete decrease the old mentor; on reassignment decrease old and increase new. A no-change update must not alter counts. Coordinate mentor-row updates in the same transaction, acquire old/new locks in a consistent identifier order where practical, and conditionally increase only below 8. Reject the change if the increase fails so all effects roll back. Multi-row statements must be handled; retries may still be needed after deadlocks. Prevent unauthorized direct counter edits and test rollback.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Cover all changes including no-op reassignment.",
        "Make count and row changes atomic with a synchronized limit check.",
        "Address multi-row changes, direct edits and boundary tests."
      ]
    },
    {
      "id": "p3n7q10",
      "note": 7,
      "title": "Choose procedural or set-based work",
      "kind": "essay",
      "question": "A cursor visits every invoice to set overdue=1 when dueOn is before a cutoff and paid=0. Give a simpler statement and explain one situation where a cursor could still be justified.",
      "answer": "UPDATE Invoice SET overdue=1 WHERE dueOn < :cutoff AND paid=0; here :cutoff denotes a client-bound parameter, not portable literal syntax. A single set-based statement expresses this rule clearly. A cursor may be justified for genuinely sequential, state-dependent logic or a required row-oriented interface, but must be measured and properly closed. Do not choose row-by-row work merely because the table has many rows.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Provide the equivalent filtered UPDATE.",
        "Explain why the simple rule is set-based.",
        "Give a justified cursor use and cleanup requirement."
      ]
    },
    {
      "id": "p3n8q7",
      "note": 8,
      "title": "Preserve a historical resource",
      "kind": "sql",
      "question": "Equipment(equipmentId) and Member(memberId) exist. Create Hire(hireId, memberId, equipmentId, startsAt, endsAt, agreedRate), with required references/start/rate, optional end, zero or greater rate, and end later than start when given.",
      "answer": "CREATE TABLE Hire (\n hireId INTEGER PRIMARY KEY,\n memberId INTEGER NOT NULL REFERENCES Member(memberId),\n equipmentId INTEGER NOT NULL REFERENCES Equipment(equipmentId),\n startsAt TIMESTAMP NOT NULL,\n endsAt TIMESTAMP,\n agreedRate DECIMAL(10,2) NOT NULL CHECK (agreedRate >= 0),\n CHECK (endsAt IS NULL OR endsAt > startsAt)\n);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Keep actual equipment and agreed rate on the historical event.",
        "Declare references and nullability.",
        "Check rate and interval validity."
      ]
    },
    {
      "id": "p3n8q8",
      "note": 8,
      "title": "Find an overlap",
      "kind": "sql",
      "question": "Appointment(appointmentId, roomId, startsAt, endsAt), all known (not NULL). Return each pair of different appointments sharing a room whose half-open intervals overlap. Return a pair only once.",
      "answer": "SELECT a.appointmentId, b.appointmentId\nFROM Appointment a JOIN Appointment b\n ON a.roomId = b.roomId\n AND a.appointmentId < b.appointmentId\n AND a.startsAt < b.endsAt\n AND b.startsAt < a.endsAt;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Match the same resource.",
        "Use both strict overlap inequalities.",
        "Eliminate self-pairs and reversed duplicates."
      ]
    },
    {
      "id": "p3n8q9",
      "note": 8,
      "title": "Design a booking lifecycle",
      "kind": "essay",
      "question": "A workshop sells a booking for 1 or more sessions at an agreed total price. Sessions may be scheduled later with different tutors and rooms. Suggest relations and rules without losing historical facts.",
      "answer": "Booking(bookingId PK,memberId FK,sessionCount,totalPrice,bookedOn) stores the purchase. Session(sessionId PK,bookingId FK,tutorId FK,roomId FK,startsAt,status) stores each scheduled occurrence. Booking.sessionCount must be positive and price zero or greater. Non-cancelled sessions must not exceed the purchased count; completed bookings must satisfy the agreed completion rule. Check tutor, member and room overlaps across schedules. Store the actual tutor and room per session; current allocations cannot put back together history.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Separate booking terms from scheduled items.",
        "Keep actual historical resource references.",
        "Find count and overlap rules needing extra enforcement."
      ]
    },
    {
      "id": "p3n8q10",
      "note": 8,
      "title": "Validate beyond normalization",
      "kind": "essay",
      "question": "A design has a required UNIQUE invoice.orderId foreign key, and every order must have exactly one invoice. Explain the constraint gap and two design options.",
      "answer": "The required UNIQUE foreign key gives each invoice exactly one existing order and each order at most one invoice. It does not force an invoice to exist for every order. Either merge the mandatory one-to-one entities while preserving both identifiers as candidate keys, or keep separate tables and apply complete creation in a controlled transaction with an appropriate deferred check or other rule. Also validate reports and lifecycle transitions.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Distinguish at most one from exactly one.",
        "Explain merging with preserved identifiers.",
        "Explain consistent enforcement for separate tables."
      ]
    },
    {
      "id": "p3n9q7",
      "note": 9,
      "title": "Cover a common access path",
      "kind": "sql",
      "question": "Message(messageId, accountId, sentAt, subject). Write a standard index candidate for queries filtering one account and ordering by sentAt. Explain why you would still inspect the plan.",
      "answer": "CREATE INDEX message_account_time ON Message(accountId, sentAt);\n-- Verify selectivity, sort elimination, actual read cost and write overhead.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Put the equality column first.",
        "Include the time column in the access order.",
        "State measured verification criteria."
      ]
    },
    {
      "id": "p3n9q8",
      "note": 9,
      "title": "Reconcile a redundant total",
      "kind": "sql",
      "question": "Basket(basketId, storedTotal), Line(basketId, qty, unitPrice). All numbers are NOT NULL. Return baskets whose stored total differs from SUM(qty*unitPrice), including empty baskets as zero.",
      "answer": "SELECT b.basketId, b.storedTotal, COALESCE(SUM(l.qty*l.unitPrice),0) AS actualTotal\nFROM Basket b LEFT JOIN Line l ON l.basketId=b.basketId\nGROUP BY b.basketId,b.storedTotal\nHAVING b.storedTotal <> COALESCE(SUM(l.qty*l.unitPrice),0);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Preserve empty baskets.",
        "Compute quantity times price per line before summing.",
        "Compare grouped totals with COALESCE."
      ]
    },
    {
      "id": "p3n9q9",
      "note": 9,
      "title": "Evaluate a denormalization request",
      "kind": "essay",
      "question": "A report is slow, so a team proposes copying customer names into all payment rows. Give a sequence for evaluating this proposal and keeping it correct if adopted.",
      "answer": "Measure the representative report and inspect its plan, indexes, joins and statistics first. Estimate read benefit against storage and write cost. Decide whether the copied name means current customer name or name at payment time; these are different facts. If maintaining a redundant current name, use atomic update rules and reconciliation checks. Preserve normalized authoritative data and test concurrent updates.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Measure before changing the model.",
        "Distinguish historical from redundant current facts.",
        "Explain maintenance and reconciliation."
      ]
    },
    {
      "id": "p3n9q10",
      "note": 9,
      "title": "Balance concurrency and throughput",
      "kind": "essay",
      "question": "A bulk operation touches almost every row; a lookup edits one row. Compare table and row locks for these workloads and explain why one choice is not universally best.",
      "answer": "A table lock can reduce lock count and overhead for bulk work but blocks unrelated accesses. Row locks permit concurrent work on different rows but cost memory and lock-management effort. The best policy depends on contention, isolation, operation size and escalation behavior. Measure latency for other users as well as bulk throughput.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain the overhead tradeoff.",
        "Explain the concurrency tradeoff.",
        "Relate choices to actual workloads."
      ]
    },
    {
      "id": "p3n10q7",
      "note": 10,
      "title": "Atomic booking with inventory",
      "kind": "sql",
      "question": "SQL Server: SeatPool(eventId primary key, available NOT NULL), Booking(bookingId primary key,eventId,seats). Reserve 2 seats for event 5 and insert booking 77 in one transaction. Reject insufficient or missing inventory and roll back if insertion fails.",
      "answer": "BEGIN TRY\n BEGIN TRANSACTION;\n UPDATE SeatPool SET available=available-2\n WHERE eventId=5 AND available>=2;\n IF @@ROWCOUNT <> 1 THROW 50001, 'Insufficient or missing inventory', 1;\n INSERT INTO Booking(bookingId,eventId,seats) VALUES(77,5,2);\n COMMIT;\nEND TRY\nBEGIN CATCH\n IF XACT_STATE() <> 0 ROLLBACK;\n THROW;\nEND CATCH;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use a conditional atomic decrease and check affected rows.",
        "Include both changes in one transaction.",
        "Roll back and propagate failures."
      ]
    },
    {
      "id": "p3n10q8",
      "note": 10,
      "title": "Undo just the optional change",
      "kind": "sql",
      "question": "PostgreSQL: Wallet(walletId, points) has row (1,10). Add 5, set a savepoint, subtract 3, roll back to the savepoint and commit. Write the SQL and state the final value.",
      "answer": "BEGIN;\nUPDATE Wallet SET points=points+5 WHERE walletId=1;\nSAVEPOINT bonus_kept;\nUPDATE Wallet SET points=points-3 WHERE walletId=1;\nROLLBACK TO SAVEPOINT bonus_kept;\nCOMMIT;\n-- Final points: 15.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Place the savepoint after the first change.",
        "Roll back to the savepoint, not the entire transaction.",
        "Commit and work out 15."
      ]
    },
    {
      "id": "p3n10q9",
      "note": 10,
      "title": "Construct a precedence graph",
      "kind": "essay",
      "question": "Analyze R1(a), W2(a), R2(b), W3(b), R3(c), W1(c). List every graph edge and decide conflict serializability. Then explain whether removing the final W1(c) changes the conclusion.",
      "answer": "The conflicting pairs give T1→T2 on a, T2→T3 on b, and T3→T1 on c. The cycle means no conflict-equivalent serial order. Removing W1(c) removes T3→T1, leaving a chain with serial order T1,T2,T3. Reads on different items do not introduce additional edges.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "List all three edges with causing items.",
        "Detect the cycle.",
        "Recompute the acyclic graph after the change."
      ]
    },
    {
      "id": "p3n10q10",
      "note": 10,
      "title": "Separate blocking from deadlock",
      "kind": "essay",
      "question": "T1 waits for T2; T2 waits for T3; T3 waits for T2; T4 waits for T1. Find the cycle, blocked non-cycle transactions, and a recovery action.",
      "answer": "T2→T3→T2 is the cycle. T1 and T4 are blocked behind it but are not cycle members. Roll back T2 or T3 as a victim, undo its uncommitted changes and release locks; remaining transactions can proceed subject to other conflicts. Retry the victim safely. Rolling back T4 alone does not break the cycle.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find cycle members.",
        "Distinguish indirectly blocked transactions.",
        "Choose a victim that breaks the cycle and explain undo/retry."
      ]
    },
    {
      "id": "p3n11q7",
      "note": 11,
      "title": "Existence without row multiplication",
      "kind": "sql",
      "question": "Author(authorId,name), Publication(pubId,authorId,accepted). Return authors with an accepted publication without duplicates, even when they have many accepted rows.",
      "answer": "SELECT a.authorId,a.name FROM Author a\nWHERE EXISTS (SELECT 1 FROM Publication p\n WHERE p.authorId=a.authorId AND p.accepted=1);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use an existence condition.",
        "Correlate authorId.",
        "Avoid multiplying author rows."
      ]
    },
    {
      "id": "p3n11q8",
      "note": 11,
      "title": "Reduce rows before aggregation",
      "kind": "sql",
      "question": "Sale(saleId,branchId,amount,refunded). Return total non-refunded revenue per branch. Show where the row condition belongs.",
      "answer": "SELECT branchId,SUM(amount) AS revenue\nFROM Sale\nWHERE refunded=0\nGROUP BY branchId;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Filter individual sales before grouping.",
        "Group by branch.",
        "Sum only retained rows."
      ]
    },
    {
      "id": "p3n11q9",
      "note": 11,
      "title": "Choose a join strategy",
      "kind": "essay",
      "question": "A query joins 20 selected customer rows to a million indexed orders. Compare indexed nested loops with scanning and hashing all orders. State what could reverse your preference.",
      "answer": "Indexed nested loops can seek matching orders for each of the 20 customers, avoiding a full scan when matches are selective and lookups efficient. If those customers own most orders, lookup costs may dominate and a scan/hash plan may be better. Consider clustering, cache, output size, statistics and available memory. Verify estimated versus actual row counts.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain why small selective outer input helps nested loops.",
        "Describe a case where a scan/hash is better.",
        "Use plan and workload evidence."
      ]
    },
    {
      "id": "p3n11q10",
      "note": 11,
      "title": "Safe and unsafe transformations",
      "kind": "essay",
      "question": "Explain why filtering an inner-join input early is often safe but moving a right-side condition from WHERE into ON of a LEFT JOIN can change results. Give an unmatched-parent example.",
      "answer": "For an inner join, an applicable input filter can discard rows that could not survive the final condition. For a left join, a child filter in ON still keeps a parent with no qualifying child. The same child filter in WHERE rejects the parent’s NULL-extended row. A shop with no paid sale appears with a zero count under the ON-filtered version but disappears under WHERE sale.paid=1.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain inner-join equivalence.",
        "Explain null extension.",
        "Give a concrete changed result."
      ]
    },
    {
      "id": "p3n12q7",
      "note": 12,
      "title": "Rollback leaves no committed update",
      "kind": "sql",
      "question": "PostgreSQL: Meter(meterId,reading) has row (3,50). Write a transaction changing it to 70, inspect the row, then cancel the transaction. State the persistent value.",
      "answer": "BEGIN;\nUPDATE Meter SET reading=70 WHERE meterId=3;\nSELECT reading FROM Meter WHERE meterId=3;\nROLLBACK;\n-- The transaction sees 70; the persistent value returns to 50.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Begin before the change.",
        "Inspect before rolling back.",
        "Distinguish in-transaction and final values."
      ]
    },
    {
      "id": "p3n12q8",
      "note": 12,
      "title": "Inspect a checkpointed recovery queue",
      "kind": "sql",
      "question": "RecoveryTask(taskId, committed, pageFlushed). Both flags are 0 or 1. Write SQL returning committed tasks whose changed pages were not flushed, as candidates for redo in a simplified model.",
      "answer": "SELECT taskId FROM RecoveryTask\nWHERE committed=1 AND pageFlushed=0;\n-- Real recovery also uses log sequence information and its recovery algorithm.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Require committed work.",
        "Select missing page writes.",
        "Recognize that this is a simplified model."
      ]
    },
    {
      "id": "p3n12q9",
      "note": 12,
      "title": "Trace before and after images",
      "kind": "essay",
      "question": "Initially x=5 and y=10. Durable log: T1 changes x 5→8, commits; T2 changes y 10→17, does not commit. At crash the disk has x=5,y=17. Under simple immediate-update recovery, work out the final values and operations.",
      "answer": "Redo committed T1 changes x to 8 because its page update is missing. Undo incomplete T2 restores y to 10 because its uncommitted value reached disk. Final x=8,y=10. Durable log records are essential; redo uses after-images and undo uses before-images in the required recovery order.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find the committed winner and incomplete loser.",
        "Apply REDO and UNDO to the right values.",
        "State final values and logging requirements."
      ]
    },
    {
      "id": "p3n12q10",
      "note": 12,
      "title": "Failure types and recovery tools",
      "kind": "essay",
      "question": "Contrast a transaction constraint error, a crash losing memory, and disk destruction. Explain the roles of rollback, logging, checkpoints and backups.",
      "answer": "A transaction error normally rolls back that transaction. A crash may require undo of incomplete work and redo of committed changes according to the recovery protocol. Checkpoints reduce the amount of history recovery must examine, though older records for active transactions may remain needed. Disk destruction requires a usable backup and surviving logs to restore and roll forward. A checkpoint is not a replacement for a backup.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Distinguish all three failure scopes.",
        "Explain log/checkpoint recovery.",
        "Explain why lost media needs backups."
      ]
    },
    {
      "id": "p3n13q7",
      "note": 13,
      "title": "Weighted price, not average of averages",
      "kind": "sql",
      "question": "Sale(region, units, revenue), units and revenue NOT NULL. Return revenue divided by units per region, avoiding integer division and division by zero.",
      "answer": "SELECT region, 1.0*SUM(revenue)/NULLIF(SUM(units),0) AS revenuePerUnit\nFROM Sale GROUP BY region;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Sum numerator and denominator separately.",
        "Avoid integer division.",
        "Handle zero total units."
      ]
    },
    {
      "id": "p3n13q8",
      "note": 13,
      "title": "Drill from region to branch",
      "kind": "sql",
      "question": "Fact(dayId,branchId,revenue), DayDim(dayId,year), BranchDim(branchId,region). Return 2027 revenue by region and branch, ordered by those dimensions.",
      "answer": "SELECT b.region,b.branchId,SUM(f.revenue) AS revenue\nFROM Fact f JOIN DayDim d ON d.dayId=f.dayId\nJOIN BranchDim b ON b.branchId=f.branchId\nWHERE d.year=2027\nGROUP BY b.region,b.branchId\nORDER BY b.region,b.branchId;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Join on dimension keys.",
        "Filter the year.",
        "Group and sort at the requested grain."
      ]
    },
    {
      "id": "p3n13q9",
      "note": 13,
      "title": "Choose the grain",
      "kind": "essay",
      "question": "A rental company wants revenue by day, item type and branch, and also daily stock on hand. Suggest fact grains and explain which measures can be added across days.",
      "answer": "Use a transaction fact with one row per rental charge or rental line, linked to date, item and branch dimensions; revenue is additive when charges do not overlap. Use a separate inventory snapshot fact with one row per item/branch/day. Stock balances can be added across items or branches at one instant, but summing daily balances is usually meaningless. State currency and snapshot-time assumptions.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Define explicit separate grains.",
        "Find additive revenue.",
        "Explain why inventory balance is not additive across days."
      ]
    },
    {
      "id": "p3n13q10",
      "note": 13,
      "title": "Explain an analytical workflow",
      "kind": "essay",
      "question": "Describe a path from operational rental records to a dashboard that compares quarterly revenue. Include data-quality checks and distinguish reporting from data mining.",
      "answer": "Extract operational records; transform currencies, dates and identifiers consistently; validate missing keys, duplicates and reconciliation totals; load dimensions and facts at a defined grain. Aggregate by quarter for reporting and drill into branches for explanation. Data mining seeks patterns or predictive relationships rather than just presenting known grouped totals.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Describe ETL and a defined grain.",
        "Include concrete quality checks.",
        "Distinguish reporting from pattern discovery."
      ]
    },
    {
      "id": "p3n14q7",
      "note": 14,
      "title": "Reconstruct vertical fragments",
      "kind": "sql",
      "question": "ProfileCore(userId,name) and ProfileContact(userId,email) contain exactly one row per user in each fragment. Reconstruct complete profiles.",
      "answer": "SELECT c.userId,c.name,p.email\nFROM ProfileCore c JOIN ProfileContact p ON p.userId=c.userId;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Join on the common identifier.",
        "Select each desired field.",
        "State the completeness/one-row assumptions."
      ]
    },
    {
      "id": "p3n14q8",
      "note": 14,
      "title": "Check horizontal disjointness",
      "kind": "sql",
      "question": "EastTicket(ticketId) and WestTicket(ticketId) should be disjoint, and each has a unique key. Return identifiers accidentally present in both.",
      "answer": "SELECT e.ticketId FROM EastTicket e\nJOIN WestTicket w ON w.ticketId=e.ticketId;",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Compare the same identifier.",
        "Return the overlap rather than the union.",
        "Rely on declared uniqueness to avoid duplicate pairs."
      ]
    },
    {
      "id": "p3n14q9",
      "note": 14,
      "title": "Validate a fragmentation plan",
      "kind": "essay",
      "question": "Orders are split into region=East and region=West, but region may also be Central or NULL. Discuss completeness, disjointness and putting the pieces back together.",
      "answer": "The fragments are disjoint for known (not NULL) region values but incomplete because Central and NULL orders are omitted. Add appropriate fragment predicates or restrict the valid domain deliberately. Reconstruction requires all valid rows to appear in at least one fragment; UNION ALL is appropriate only when the chosen fragments are disjoint. Verify boundary and NULL cases explicitly.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find the omitted values.",
        "Separate completeness from disjointness.",
        "Explain a valid putting the pieces back together and repair."
      ]
    },
    {
      "id": "p3n14q10",
      "note": 14,
      "title": "Think through replicated writes",
      "kind": "essay",
      "question": "Two sites accept offline edits to the same customer record and later reconnect. Explain why replication alone does not guarantee consistency and find decisions the design must make.",
      "answer": "Concurrent disconnected edits can conflict. The system needs an explicit policy for write authority, ordering/versioning, conflict detection and resolution, plus user-visible handling when information cannot be merged safely. Synchronous coordination trades latency/availability for stronger consistency; asynchronous replication allows temporary divergence. The choice depends on requirements and cannot eliminate every tradeoff.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Find conflicting concurrent writes.",
        "Describe explicit coordination or resolution decisions.",
        "Explain a consistency/availability or latency tradeoff."
      ]
    },
    {
      "id": "p3n15q7",
      "note": 15,
      "title": "Structured value construction",
      "kind": "sql",
      "question": "PostgreSQL: Location(address address_value) where address_value has street TEXT and city TEXT. Insert one row for street Oak Lane and city Bergen using an explicit composite cast.",
      "answer": "INSERT INTO Location(address)\nVALUES (ROW('Oak Lane','Bergen')::address_value);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Construct both components in type order.",
        "Cast to the declared composite type.",
        "Use quoted text literals."
      ]
    },
    {
      "id": "p3n15q8",
      "note": 15,
      "title": "Use a relational subtype",
      "kind": "sql",
      "question": "Person(personId,name) exists. Create Mechanic with the same personId as its primary key and foreign key plus a required licenseCode.",
      "answer": "CREATE TABLE Mechanic (\n personId INTEGER PRIMARY KEY REFERENCES Person(personId),\n licenseCode VARCHAR(40) NOT NULL\n);",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Use a shared primary key.",
        "Reference the supertype.",
        "Require the subtype-specific attribute."
      ]
    },
    {
      "id": "p3n15q9",
      "note": 15,
      "title": "Compare richer models",
      "kind": "essay",
      "question": "Compare a relational key, an object identifier and a mutable object attribute. Explain why changing an address should not normally create a new identity.",
      "answer": "A relational candidate key uniquely identifies a tuple using column values; it may be a stable surrogate. An object identifier provides identity independently of ordinary state. Address is mutable state, so its change should keep the same person or object identity. Equality of visible attributes does not necessarily imply two objects are identical.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Explain value-based relational keys.",
        "Explain identity independent of state.",
        "Separate mutation from replacement of identity."
      ]
    },
    {
      "id": "p3n15q10",
      "note": 15,
      "title": "Pick an appropriate representation",
      "kind": "essay",
      "question": "A catalog stores searchable titles and large scanned manuals. Compare a CLOB, a BLOB and structured columns; explain why putting everything in one binary object can harm querying.",
      "answer": "Structured columns suit typed, searchable facts such as title and publication date. A Character Large Object holds large text; a Binary Large Object holds bytes such as scanned image or PDF content. A binary payload may require extraction/indexing before its contents can be searched. Keep queryable metadata in structured fields and manage payload storage and access deliberately.",
      "choices": [],
      "concept": "State assumptions, follow the required relationships, and check boundary cases.",
      "checks": [
        "Expand CLOB and BLOB correctly.",
        "Choose structured fields for queryable facts.",
        "Explain search/indexing limitations of opaque bytes."
      ]
    },
    {
      "id": "p3n4q11",
      "note": 4,
      "title": "A date comparison against a set",
      "question": "Booking(bookingId,startsAt,siteId). startsAt is NOT NULL. Write standard SQL returning bookings starting later than every booking at site 7. Explain the result when site 7 has no bookings.",
      "answer": "SELECT bookingId,startsAt FROM Booking\nWHERE startsAt > ALL (SELECT startsAt FROM Booking WHERE siteId=7);\n-- If the subquery is empty, > ALL is true, so every row qualifies.",
      "checks": [
        "Compare dates using ALL.",
        "Use the required site subquery.",
        "Explain the empty-set result."
      ],
      "kind": "sql",
      "choices": [],
      "concept": "Read the exact boundary conditions and name the SQL dialect before implementing the rule."
    },
    {
      "id": "p3n4q12",
      "note": 4,
      "title": "Birth-date boundaries",
      "question": "SQL Server: Worker(workerId,lastName,firstName,bornOn,role). List managers whose 65th birthday falls in 2027, sorted by lastName then firstName. State the birth-date interval rather than subtracting years from today.",
      "answer": "SELECT * FROM Worker\nWHERE role='Manager'\n AND bornOn >= '19620101' AND bornOn < '19630101'\nORDER BY lastName,firstName;\n-- Birth dates in 1962 reach age 65 during 2027.",
      "checks": [
        "Filter the role.",
        "Use the correct inclusive/exclusive birth-year interval.",
        "Sort by both name fields."
      ],
      "kind": "sql",
      "choices": [],
      "concept": "Read the exact boundary conditions and name the SQL dialect before implementing the rule."
    },
    {
      "id": "p3n7q11",
      "note": 7,
      "title": "Marginal bands, not one flat rate",
      "question": "A fictional service fee is 5% of the first 100 chargeable units, 10% of the next 100, and 20% above 200. Invoice(invoiceId,chargeable) has zero or greater values. Write a SQL Server procedure that returns the computed fee per invoice. This is an arithmetic exercise.",
      "answer": "CREATE PROCEDURE ComputeServiceFee\nAS\nBEGIN\n SET NOCOUNT ON;\n SELECT invoiceId, CASE\n WHEN chargeable <= 100 THEN chargeable*0.05\n WHEN chargeable <= 200 THEN 5+(chargeable-100)*0.10\n ELSE 15+(chargeable-200)*0.20 END AS fee\n FROM Invoice;\nEND;\n-- Boundary values 0,100,200,250 give 0,5,15,25.",
      "checks": [
        "Apply each rate only to its own band.",
        "Carry forward completed lower-band fees.",
        "Verify boundary values."
      ],
      "kind": "sql",
      "choices": [],
      "concept": "Read the exact boundary conditions and name the SQL dialect before implementing the rule."
    },
    {
      "id": "p3n7q12",
      "note": 7,
      "title": "SQL Server cursor cleanup",
      "question": "SQL Server: Trip(tripId primary key,miles NOT NULL,fee NOT NULL). Use a LOCAL FAST_FORWARD cursor to add 4 to fees for trips over 30 miles and zero otherwise. Include normal cleanup.",
      "answer": "DECLARE @id INTEGER, @miles DECIMAL(10,2);\nDECLARE trips CURSOR LOCAL FAST_FORWARD FOR SELECT tripId,miles FROM Trip;\nOPEN trips;\nFETCH NEXT FROM trips INTO @id,@miles;\nWHILE @@FETCH_STATUS=0\nBEGIN\n UPDATE Trip SET fee=fee+CASE WHEN @miles>30 THEN 4 ELSE 0 END\n WHERE tripId=@id;\n FETCH NEXT FROM trips INTO @id,@miles;\nEND;\nCLOSE trips;\nDEALLOCATE trips;\n-- Assumes stable input during this exercise. Add transaction/error handling for concurrent or failing work.",
      "checks": [
        "Declare/open and fetch before the loop.",
        "Check fetch status and fetch again each iteration.",
        "Close and deallocate on the normal path."
      ],
      "kind": "sql",
      "choices": [],
      "concept": "Read the exact boundary conditions and name the SQL dialect before implementing the rule."
    }
  ],
  "timedCases": [
    {
      "id": "caseA6",
      "note": 6,
      "title": "Design a rental catalog",
      "kind": "essay",
      "question": "A center rents physical tool copies. Each tool type has a title and standard daily rate; each copy has a unique copyId and condition. A member may rent the same copy repeatedly over time. Each rental records start, optional return, and the rate agreed at rental time. Design relations with keys, explain two anomalies avoided, and find how you prevent at the same time active rentals of one copy.",
      "answer": "ToolType(typeId PK,title,currentRate); Copy(copyId PK,typeId FK,condition); Member(memberId PK,name); Rental(rentalId PK,copyId FK,memberId FK,startedAt,returnedAt,agreedRate). Separate type details from individual copies and transaction facts. A rentalId distinguishes repeated rentals. Repeating type titles/rates causes update inconsistency; storing only rented copies can lose catalog facts when the last rental is removed. Historical agreedRate is distinct from currentRate. Require valid references, zero or greater prices and returnedAt after startedAt. Enforce one active rental per copy using an appropriate database constraint or synchronized transactional check; check historical overlaps if backdated intervals are allowed.",
      "checks": [
        "Separate type, copy, member and rental relations.",
        "Declare all primary and foreign keys and distinguish repeated rentals.",
        "Explain two concrete anomalies.",
        "Preserve agreed rate and valid interval/nullability.",
        "Explain concurrency-safe active-rental enforcement."
      ],
      "concept": "Build your answer step by step and justify each choice.",
      "choices": []
    },
    {
      "id": "caseA10",
      "note": 10,
      "title": "Explain and implement atomic work",
      "kind": "essay",
      "question": "SQL Server: Bin(binId primary key,units NOT NULL) has bin 1 with 9 units and bin 2 with 4. Move 3 units from bin 1 to bin 2. The second update might fail or match no row. Explain the failure risk, write transactional SQL with affected-row checks, and state the successful and rolled-back totals.",
      "answer": "Independent updates can lose units if the source decrement commits without the destination increment.\nBEGIN TRY\n BEGIN TRANSACTION;\n UPDATE Bin SET units=units-3 WHERE binId=1 AND units>=3;\n IF @@ROWCOUNT<>1 THROW 50001, 'Source unavailable', 1;\n UPDATE Bin SET units=units+3 WHERE binId=2;\n IF @@ROWCOUNT<>1 THROW 50002, 'Destination missing', 1;\n COMMIT;\nEND TRY\nBEGIN CATCH\n IF XACT_STATE()<>0 ROLLBACK;\n THROW;\nEND CATCH;\nSuccess gives 6 and 7, total 13. Failure restores 9 and 4, total 13. Conditional updates and locks coordinate writers; consistent resource ordering can reduce deadlocks.",
      "checks": [
        "Explain the partial-update risk.",
        "Begin and commit one transaction containing both updates.",
        "Check source availability and destination affected rows.",
        "Roll back on error and propagate failure.",
        "Derive both outcomes and explain concurrency."
      ],
      "concept": "Build your answer step by step and justify each choice.",
      "choices": []
    },
    {
      "id": "caseB6",
      "note": 6,
      "title": "Normalize a service record",
      "kind": "essay",
      "question": "Service(workerId,email,workerName,tier,hourlyRate,jobId,jobTitle,hours). workerId and email each uniquely find a worker; tier determines hourlyRate; jobId determines jobTitle; a worker-job pair determines hours. Find both candidate keys, name partial and transitive dependencies, and give a 3NF design with keys. Explain how to put back together a work report.",
      "answer": "Candidate keys: (workerId,jobId) and (email,jobId). Worker facts and jobTitle depend on parts of each composite key. workerId→tier→hourlyRate is transitive. Worker(workerId PK,email UNIQUE NOT NULL,workerName,tier FK); Tier(tier PK,hourlyRate); Job(jobId PK,jobTitle); Service(workerId PK/FK,jobId PK/FK,hours). Join Service to Worker and Job, then Worker to Tier. Declared unique identifiers make these joins keep each service fact; separating facts stops repeated rates and names from drifting.",
      "checks": [
        "Find both candidate keys with minimality.",
        "Find partial dependencies.",
        "Find tier-rate transitivity.",
        "Give four relations with primary/alternate/foreign keys.",
        "Explain putting the pieces back together and reduced anomalies."
      ],
      "concept": "Build your answer step by step and justify each choice.",
      "choices": []
    },
    {
      "id": "caseB10",
      "note": 10,
      "title": "Diagnose schedules and recovery",
      "kind": "essay",
      "question": "Part 1: analyze R1(x), W2(x), R2(y), W1(y); list edges and decide conflict serializability. Part 2: T3 writes z=30 over 20, T4 reads 30 and commits, then T3 aborts. Explain the recovery defect and a locking discipline that stops it. Distinguish deadlock from non-serializability.",
      "answer": "Part 1: T1→T2 on x and T2→T1 on y form a cycle, so the schedule is not conflict serializable. Part 2: T4 committed after reading uncommitted T3 data, making this history unrecoverable through ordinary cascading rollback. Strict two-phase locking holds exclusive locks until commit/abort, preventing T4 from reading the uncommitted write under lock-based reads. Rigorous two-phase locking also keeps shared locks. Deadlock is a current cycle of waits for resources; non-serializability is a cycle of precedence constraints. They are different graphs and properties.",
      "checks": [
        "Give both precedence edges and their operations.",
        "Use the cycle to reject conflict serializability.",
        "Explain the committed dirty dependency.",
        "Explain exclusive-lock retention and rollback before release.",
        "Distinguish wait-for and precedence graphs."
      ],
      "concept": "Build your answer step by step and justify each choice.",
      "choices": []
    }
  ],
  "timedSets": [
    {
      "id": "A",
      "title": "Focused set A",
      "choiceIds": [
        "p3n1q1",
        "p3n1q3",
        "p3n1q5",
        "p3n2q1",
        "p3n2q3",
        "p3n2q5",
        "p3n3q1",
        "p3n3q3",
        "p3n3q5",
        "p3n4q1",
        "p3n4q3",
        "p3n4q5",
        "p3n5q1",
        "p3n5q3",
        "p3n5q5",
        "p3n6q1",
        "p3n6q3",
        "p3n6q5",
        "p3n7q1",
        "p3n7q3",
        "p3n7q5",
        "p3n8q1",
        "p3n8q3",
        "p3n8q5",
        "p3n10q1",
        "p3n10q3",
        "p3n10q5",
        "p3n12q1",
        "p3n12q3",
        "p3n12q5"
      ],
      "caseIds": [
        "caseA6",
        "caseA10"
      ]
    },
    {
      "id": "B",
      "title": "Focused set B",
      "choiceIds": [
        "p3n1q2",
        "p3n1q4",
        "p3n1q6",
        "p3n2q2",
        "p3n2q4",
        "p3n2q6",
        "p3n3q2",
        "p3n3q4",
        "p3n3q6",
        "p3n4q2",
        "p3n4q4",
        "p3n4q6",
        "p3n5q2",
        "p3n5q4",
        "p3n5q6",
        "p3n6q2",
        "p3n6q4",
        "p3n6q6",
        "p3n7q2",
        "p3n7q4",
        "p3n7q6",
        "p3n8q2",
        "p3n8q4",
        "p3n8q6",
        "p3n10q2",
        "p3n10q4",
        "p3n10q6",
        "p3n12q2",
        "p3n12q4",
        "p3n12q6"
      ],
      "caseIds": [
        "caseB6",
        "caseB10"
      ]
    }
  ],
  "beginnerHelp": "Table notation: Worker(workerId, name) means a table named Worker with columns workerId and name. An ID identifies a row. A → B means each A value tells you one B value. R1(x) means transaction 1 reads x; W1(x) means it writes x. C1 means commit and A1 means abort."
};
