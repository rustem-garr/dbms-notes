window.DBMS_DATA = {
  "version": 2,
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
          "concept": "A database is an organized collection of related facts. A database management system (DBMS) provides software services for defining, accessing and protecting those facts.",
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
          "concept": "Metadata is data about structure and meaning: column types, constraints, object names and privileges. Business records are the data described by that metadata.",
          "question": "Which item describes the structure rather than a particular repair?",
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
          "concept": "When separate applications keep separate copies of the same fact, updates can disagree. Shared management can reduce this problem, but business rules still need implementation.",
          "question": "Billing and scheduling contain different addresses for the same customer. What is the immediate design concern?",
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
          "concept": "A DBMS environment includes hardware, software, data, procedures and people. Procedures here means operating instructions, not only stored SQL routines.",
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
          "concept": "Physical data independence aims to shield applications from changes in storage structures. It does not mean every possible schema change is harmless.",
          "question": "Adding an index without changing a billing screen illustrates which goal?",
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
          "concept": "Authorization decides which operations a user may perform. Integrity rules decide which states and values are valid. These solve different problems.",
          "question": "Reception may view fees but may not change them. Which mechanism addresses that requirement?",
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
          "concept": "Structured Query Language (SQL) expresses requests for relational data. SELECT chooses output columns; WHERE states a row condition.",
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
          "concept": "Data Definition Language (DDL) defines database objects; Data Manipulation Language (DML) reads or changes their contents. SQL includes both categories.",
          "question": "Write a table named Tag with an integer identifier and a required label of up to 40 characters. Identify the statement category.",
          "answer": "CREATE TABLE Tag (\n tagId INTEGER PRIMARY KEY,\n label VARCHAR(40) NOT NULL\n);\n-- CREATE TABLE is DDL (Data Definition Language).",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define Tag with an integer primary key.",
            "Use VARCHAR(40) and NOT NULL for label.",
            "Identify CREATE TABLE as Data Definition Language."
          ]
        },
        {
          "id": "v2n1c9",
          "title": "Shared responsibility",
          "concept": "A data administrator (DA) focuses on data policies and organizational meaning. A database administrator (DBA) focuses on technical operation. Roles may overlap in small organizations.",
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
          "concept": "Central management can improve sharing and consistency while introducing cost, complexity and a larger impact when the shared service is unavailable.",
          "question": "Compare a shared DBMS with independent files for a three-branch repair business. Give benefits, costs and one failure-preparation measure.",
          "answer": "A shared DBMS lets branches use one customer identity and consistent repair history, and supports controlled concurrent updates. It requires administration, training and infrastructure. An outage can affect every branch. Maintain tested backups and a restoration plan; availability design should reflect how much downtime the business can tolerate.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain sharing and consistency benefits.",
            "Name at least two costs or operational tradeoffs.",
            "Propose a concrete recovery or availability measure."
          ]
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
          "concept": "An entity type describes a class of things; an occurrence is one identifiable member. An Entity–Relationship (ER) model captures entity types, properties and associations.",
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
          "concept": "A minimum of zero permits no participation. A maximum of one prohibits several related occurrences. Minimum and maximum answer different questions.",
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
          "concept": "A fact may depend on a particular association rather than either participant alone. A quoted rental rate can belong to a specific rental event.",
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
          "concept": "A composite attribute has components, such as street and city. A multivalued attribute can have several values for one occurrence, such as contact numbers.",
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
          "concept": "A fan trap is an ambiguous path through branching relationships. Sharing a department does not establish a specific association between every pair of its resources.",
          "question": "A depot employs technicians and owns vehicles. Can those two links identify which technician inspected a vehicle?",
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
          "concept": "A chasm trap occurs when optional participation breaks a path needed to recover a fact. Adding the actual missing association can repair the model.",
          "question": "A room belongs to a building but may have no caretaker. A model links Building → Caretaker → Room only. What fact can become unreachable?",
          "answer": "The building of an unassigned room.",
          "kind": "choice",
          "choices": [
            "The building of an unassigned room.",
            "The name of every assigned caretaker.",
            "The type of the building identifier.",
            "The number of attributes in Room."
          ],
          "checks": []
        },
        {
          "id": "v2n2c7",
          "title": "Recursive roles",
          "concept": "A recursive relationship uses one entity type in multiple roles. Distinct aliases give those roles names in SQL.",
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
          "concept": "A foreign key (FK) checks that a referenced row exists. A UNIQUE constraint can enforce a maximum of one relationship occurrence; optional participation allows NULL.",
          "question": "Assume Member(memberId) exists. Create Locker(lockerId, memberId) so a locker may be unassigned and no member is assigned two lockers. Use PostgreSQL.",
          "answer": "CREATE TABLE Locker (\n lockerId INTEGER PRIMARY KEY,\n memberId INTEGER UNIQUE REFERENCES Member(memberId)\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define a primary key for Locker.",
            "Reference Member from memberId.",
            "Allow NULL while enforcing UNIQUE non-NULL assignments."
          ]
        },
        {
          "id": "v2n2c9",
          "title": "Weak identification",
          "concept": "A weak entity needs an owner to establish its identity. Being on the many side of a relationship alone does not make an entity weak.",
          "question": "Compare Parcel identified globally by trackingCode with Seat numbered only within an auditorium. Explain identification and propose keys.",
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
          "concept": "Specialization separates a general type into subtypes. Total/partial describes coverage; disjoint/overlapping describes whether membership can overlap.",
          "question": "An employee can be a driver, a trainer, both, or neither. Describe the specialization constraints and how they change if every employee must have at least one role.",
          "answer": "The initial specialization is partial because some employees have neither role, and overlapping because one employee may have both. Requiring at least one role makes it total while it remains overlapping. Coverage and overlap are independent restrictions.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Identify partial and overlapping initially.",
            "Change coverage to total under the new rule.",
            "Keep overlap separate from coverage."
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Relations, keys and algebra",
      "description": "Reason about rows, identities and query operations.",
      "summary": [
        "A key follows a business rule, not just the current sample.",
        "Relational algebra uses set semantics; SQL often preserves duplicates.",
        "A semijoin tests matching existence without returning the other side’s attributes."
      ],
      "cards": [
        {
          "id": "v2n3c1",
          "title": "Degree and cardinality",
          "concept": "A relation’s degree is its number of attributes; its cardinality is its number of tuples. A tuple is a row and an attribute is a column.",
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
          "concept": "A superkey uniquely identifies a row. A candidate key is a superkey with no unnecessary attribute. A primary key is one candidate key selected for use.",
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
          "concept": "A sample with distinct names does not prove names always identify people. Valid keys must hold across all allowed states of the database.",
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
          "concept": "NULL marks missing, unknown or inapplicable information. Comparisons with NULL normally produce UNKNOWN, which WHERE does not retain.",
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
          "concept": "Selection filters tuples by a condition. Projection keeps chosen attributes and, in pure relational algebra, removes duplicate resulting tuples.",
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
          "concept": "A theta join accepts comparison predicates; an equijoin uses equality. A natural join equates same-named attributes, which can be risky when names coincide accidentally.",
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
          "concept": "A semijoin returns the chosen side’s rows that have a match. SQL EXISTS can express this without multiplying a row by its number of matches.",
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
          "concept": "Set difference returns tuples in the first relation but not the second. NOT EXISTS is useful for expressing absence, including when the other table contains NULL values.",
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
          "concept": "Union combines relations vertically and requires compatible corresponding attributes. A Cartesian product combines every tuple pair horizontally.",
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
          "concept": "Relational algebra composes operations: filter a relation, combine related rows, then project the required attributes.",
          "question": "Carrier(carrierId, name), Route(carrierId, townId, fare), Town(townId, name, distance). Describe algebra steps returning carrier names serving towns within 35 miles for a fare below 12.",
          "answer": "Select Town rows with distance <= 35 and Route rows with fare < 12. Join the filtered relations on townId, then join Carrier on carrierId. Project Carrier.name. Under set semantics, repeated carrier names collapse; include carrierId if distinct carriers with equal names must stay distinguishable.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Filter town distance and route fare correctly.",
            "Join on the two appropriate identifiers.",
            "Project carrier names and discuss duplicate names."
          ]
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
          "concept": "COUNT(*) counts rows, COUNT(x) counts non-NULL x values, and AVG(x) uses only non-NULL values. SQL means Structured Query Language.",
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
          "concept": "WHERE removes individual rows before grouping. HAVING removes groups after aggregate values have been calculated.",
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
          "concept": "A scalar subquery supplies one value. If a condition can match several rows, use a suitable set comparison such as IN or a correlated EXISTS.",
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
          "concept": "A left outer join preserves a left row even when there is no right match. The right-side columns are NULL in the preserved placeholder row.",
          "question": "After an unmatched depot is preserved by LEFT JOIN Staff, which count reports zero staff?",
          "answer": "COUNT(Staff.staffId), assuming staffId is non-NULL for real staff.",
          "kind": "choice",
          "choices": [
            "COUNT(Staff.staffId), assuming staffId is non-NULL for real staff.",
            "COUNT(*).",
            "COUNT(Depot.depotId).",
            "COUNT(1)."
          ],
          "checks": []
        },
        {
          "id": "v2n4c5",
          "title": "Patterns and bounds",
          "concept": "In LIKE, % matches any-length character sequence and _ matches one character. BETWEEN includes both endpoints.",
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
          "concept": "ANY needs at least one successful comparison; ALL needs every comparison to succeed. With no rows, ALL is true and ANY is false. NULLs introduce three-valued logic.",
          "question": "For non-NULL values 10 and 20, what does 15 > ANY mean, and what does 15 > ALL mean?",
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
          "concept": "To retain entities with no activity, start from the complete entity table and left-join its activity. COALESCE supplies a replacement when SUM returns NULL.",
          "question": "Technician(techId, name, depotId), WorkLog(techId, jobId, hours). Write total hours per technician, including zero hours. Sort by depotId, then name.",
          "answer": "SELECT t.depotId, t.techId, t.name,\n COALESCE(SUM(w.hours), 0) AS totalHours\nFROM Technician t\nLEFT JOIN WorkLog w ON w.techId = t.techId\nGROUP BY t.depotId, t.techId, t.name\nORDER BY t.depotId, t.name;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Use Technician as the preserved left side.",
            "Group by technician identity and selected descriptive columns.",
            "Use COALESCE on SUM and the requested sort order."
          ]
        },
        {
          "id": "v2n4c8",
          "title": "Count people, not activity rows",
          "concept": "Several work records may belong to one person. COUNT(DISTINCT personId) counts distinct participants rather than all activity.",
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
          "concept": "Query reasoning requires tracing the data through joins before aggregating. A join can duplicate parent facts when several children match.",
          "question": "Depot 1 has two technicians and Depot 2 has none. Compare counts from Depot LEFT JOIN Technician grouped by depot: COUNT(*), COUNT(techId), and SUM(1). Explain all values.",
          "answer": "For Depot 1, all three expressions return 2. For Depot 2, COUNT(*) and SUM(1) return 1 because the outer join creates one placeholder row. COUNT(techId) returns 0 because the right-side identifier is NULL. Choose a non-NULL child key to count actual matches.",
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
          "concept": "An UPDATE changes every qualifying row. A SELECT using the same predicate helps inspect the target set, but concurrent changes may still require transaction controls.",
          "question": "A technician writes UPDATE Product SET price = price * 1.08 to adjust only category Tools. Diagnose the mistake and outline a safer change-and-check workflow.",
          "answer": "The missing WHERE updates every product. Use WHERE category = Tools with Tools quoted as a string. Inspect matching identifiers and prices, perform the change inside an appropriate transaction, validate affected rows and totals, then commit or roll back. A repeated run applies the increase again, so guard against accidental reruns.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Identify the missing category predicate.",
            "Propose preview, transaction and affected-row verification.",
            "Explain that repeated percentage updates compound."
          ]
        },
        {
          "id": "v2n4c11",
          "title": "Dates and half-open ranges",
          "concept": "A half-open interval includes its start and excludes its end. It works with dates and timestamps without guessing the last instant of a month.",
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
          "concept": "A correlated subquery can compute a reference value for each outer row’s group. Correlation must use the intended grouping attribute.",
          "question": "Technician(techId, name, depotId, salary). Return technicians paid above the average salary in their own depot. depotId is required.",
          "answer": "SELECT t.techId, t.name\nFROM Technician t\nWHERE t.salary > (\n SELECT AVG(t2.salary) FROM Technician t2\n WHERE t2.depotId = t.depotId\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Compare each technician salary to an aggregate subquery.",
            "Correlate by depotId.",
            "Use strict greater-than and handle NULL salaries through SQL semantics."
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "Define tables, constraints and views",
      "description": "Make invalid states harder to store.",
      "summary": [
        "Each constraint enforces a different rule.",
        "Use composite references for identities scoped within a parent.",
        "Views expose a useful interface; ordinary views do not store a second result copy."
      ],
      "cards": [
        {
          "id": "v2n5c1",
          "title": "Required and valid",
          "concept": "NOT NULL rejects missing values. CHECK rejects FALSE; a condition evaluating to UNKNOWN can still pass. Combine the two when both rules matter.",
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
          "concept": "A composite primary key combines attributes to distinguish an occurrence. A foreign key referring to it must match the entire referenced identity.",
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
          "concept": "DDL means Data Definition Language; DML means Data Manipulation Language. ALTER changes a definition; UPDATE changes row values.",
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
          "concept": "A foreign key’s delete action determines what happens to dependent rows when a parent is removed. Cascading is a business choice, not a universal default.",
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
          "concept": "An ordinary view stores a query definition. A materialized view stores a result that needs refresh or maintenance.",
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
          "concept": "WITH CHECK OPTION prevents changes through a qualifying view from moving a row outside the view’s condition. It does not constrain every possible direct base-table update.",
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
          "concept": "PRIMARY KEY identifies rows; FOREIGN KEY preserves valid references. Required components need NOT NULL where not implied by the key.",
          "question": "Store(storeId) exists. Create Shelf(storeId, shelfNo, capacity), identified by store and shelf number, with a required positive capacity.",
          "answer": "CREATE TABLE Shelf (\n storeId INTEGER NOT NULL REFERENCES Store(storeId),\n shelfNo INTEGER NOT NULL,\n capacity INTEGER NOT NULL CHECK (capacity > 0),\n PRIMARY KEY (storeId, shelfNo)\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define the composite primary key.",
            "Reference Store from storeId.",
            "Require a positive, non-NULL capacity."
          ]
        },
        {
          "id": "v2n5c8",
          "title": "Views that preserve empty groups",
          "concept": "A view can encapsulate a report. Filter qualifying child rows in ON when unmatched parents must remain in the result.",
          "question": "Depot(depotId, name), Technician(techId, depotId, role). Create a view counting technicians with role Inspector per depot, including depots with zero inspectors.",
          "answer": "CREATE VIEW InspectorCounts AS\nSELECT d.depotId, d.name, COUNT(t.techId) AS inspectorCount\nFROM Depot d LEFT JOIN Technician t\n ON t.depotId = d.depotId AND t.role = 'Inspector'\nGROUP BY d.depotId, d.name;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Create a named view with a SELECT definition.",
            "Preserve depots and put the role condition in ON.",
            "Count a non-NULL technician key and group by depot."
          ]
        },
        {
          "id": "v2n5c9",
          "title": "Why some views resist updates",
          "concept": "A view is directly updatable only when the system can map the requested change to valid base-table modifications. Aggregation often loses row-level identity.",
          "question": "A view exposes depotId and AVG(salary). Explain why setting the average to 50000 does not specify a unique base-table update. Suggest a clearer operation.",
          "answer": "Many different salary changes can produce an average of 50000, so the requested view update does not identify which employees or amounts should change. Define the policy explicitly, such as increasing each selected salary by a fixed amount, then update identified base rows and verify the resulting average.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain loss of row-level update meaning.",
            "Show that several base-table changes can produce the same average.",
            "Propose an explicit update policy on identified base rows."
          ]
        },
        {
          "id": "v2n5c10",
          "title": "Least privilege",
          "concept": "Granting only required operations reduces accidental and unauthorized changes. A restricted view can also hide columns if users lack direct access to the base table.",
          "question": "A reporting user needs technician names and depots but must not read salaries or change data. Describe the view and privilege arrangement.",
          "answer": "Expose a view selecting technician identity, name and depot only. Grant SELECT on that view and do not grant direct base-table SELECT or write privileges. Check inherited roles and other access paths. A view alone does not protect salary if the user can still query the base table.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Expose only required columns.",
            "Grant read access to the view without write access.",
            "Remove or avoid alternate base-table access paths."
          ]
        }
      ]
    },
    {
      "id": 6,
      "title": "Normalize facts and dependencies",
      "description": "Find what each fact actually depends on.",
      "summary": [
        "Derive functional dependencies from stated rules.",
        "Find every candidate key before deciding which attributes are prime.",
        "Decompose with lossless reconstruction and local constraint checks in mind."
      ],
      "cards": [
        {
          "id": "v2n6c1",
          "title": "Functional dependency",
          "concept": "A functional dependency (FD) X → Y means each X value determines exactly one Y value in every valid state. The dependency need not hold in the reverse direction.",
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
          "concept": "First Normal Form (1NF) requires atomic values in the intended domains and no repeating groups. Lists of separate identifiers in one field usually hide relationships.",
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
          "concept": "Second Normal Form (2NF) requires 1NF and full dependence of every non-prime attribute on every candidate key. Partial dependence uses only part of a key.",
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
          "concept": "A non-key determinant may carry facts that should live in its own relation. Separating those facts removes repeated descriptions and associated anomalies.",
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
          "concept": "The closure X+ is the set of attributes derivable from X using the FDs. A candidate key determines every attribute and has no smaller subset that does so.",
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
          "concept": "Third Normal Form (3NF) allows X → A when X is a superkey or A is prime. Boyce–Codd Normal Form (BCNF) requires a superkey determinant for every nontrivial FD.",
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
          "concept": "A query can reveal violations in existing data, but a clean sample does not prove a dependency will always hold. COUNT(DISTINCT ...) helps detect conflicting non-NULL values.",
          "question": "ImportedTool(toolId, categoryId, categoryName) has all columns non-NULL. Write a query identifying category IDs stored with more than one distinct category name.",
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
          "concept": "Once determinants are separated, foreign keys connect the remaining facts. Primary keys and unique constraints express alternative identifiers.",
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
          "concept": "A repeating work ledger can mix worker facts, job facts, grade rates and hours. Each belongs with the determinant that identifies it.",
          "question": "Ledger(workerId, email, workerName, grade, rate, jobId, jobTitle, hours). email is unique; each grade has one rate; one row exists per worker-job pair. Give FDs, candidate keys and a 3NF design.",
          "answer": "FDs: workerId → email, workerName, grade; email → workerId; grade → rate; jobId → jobTitle; (workerId, jobId) → hours. Candidate keys are (workerId, jobId) and (email, jobId). Use Worker(workerId primary key, email unique, workerName, grade foreign key), GradeRate(grade primary key, rate), Job(jobId primary key, jobTitle), and Work(workerId foreign key, jobId foreign key, hours) with composite primary key (workerId, jobId). Worker and job descriptions have partial dependencies in the original ledger; rate also depends transitively through grade.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give the dependencies and both candidate keys.",
            "Identify partial and grade-rate transitive redundancy.",
            "Provide four relations with appropriate primary and foreign keys."
          ]
        },
        {
          "id": "v2n6c10",
          "title": "Lossless is not the same as preserved",
          "concept": "A lossless decomposition reconstructs exactly the original valid relation. Dependency preservation lets dependencies be checked without recombining the decomposed relations.",
          "question": "R(A,B,C) has A → B and B → C. Compare decompositions AB/BC and AB/AC for losslessness and dependency preservation.",
          "answer": "Both are lossless: AB/BC shares B, which determines BC; AB/AC shares A, which determines AB and, by transitivity, AC. AB/BC preserves A → B and B → C directly. AB/AC retains A → B and A → C, but B → C cannot generally be enforced by checking either component alone. A lossless split can therefore lose local dependency enforceability.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Show the shared-attribute determinant for each lossless split.",
            "Identify the dependencies preserved by AB/BC.",
            "Explain why B → C is not locally preserved in AB/AC."
          ]
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
          "concept": "Transact-SQL (T-SQL) is SQL Server’s procedural extension to Structured Query Language (SQL). Parameters pass values to a named routine.",
          "question": "A routine lists repairs for whichever technician the caller chooses. What should vary as a parameter?",
          "answer": "The technician identifier used by the query predicate.",
          "kind": "choice",
          "choices": [
            "The technician identifier used by the query predicate.",
            "The name of every database table.",
            "The SQL Server installation directory.",
            "The number of columns in the schema."
          ],
          "checks": []
        },
        {
          "id": "v2n7c2",
          "title": "Triggers respond to events",
          "concept": "A trigger runs for a configured data event. SQL Server triggers are statement-level and must handle sets of affected rows; PostgreSQL also supports row-level triggers.",
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
          "concept": "A cursor processes a result one row at a time. Its lifecycle includes declaration, opening, fetching, processing and closing; dialects differ in cleanup syntax.",
          "question": "When a cursor fetch reports that no row remains, what should the loop do?",
          "answer": "Exit rather than reusing the previous row’s values.",
          "kind": "choice",
          "choices": [
            "Exit rather than reusing the previous row’s values.",
            "Update the previous row again forever.",
            "Recreate every table.",
            "Commit a separate unrelated transaction automatically."
          ],
          "checks": []
        },
        {
          "id": "v2n7c4",
          "title": "Order conditional branches",
          "concept": "A searched CASE selects the first matching WHEN. When thresholds overlap, place the most restrictive/highest threshold first.",
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
          "concept": "Procedural validation must cover invalid inputs and boundary values, not only ordinary positive values. Initialization affects zero-iteration cases.",
          "question": "A factorial routine initializes result to 1 and loops from 2 through n. What result should n = 0 produce?",
          "answer": "1, provided the input is accepted as a valid nonnegative integer.",
          "kind": "choice",
          "choices": [
            "1, provided the input is accepted as a valid nonnegative integer.",
            "0 because no multiplication occurred.",
            "2 because the loop starts at 2.",
            "A negative number."
          ],
          "checks": []
        },
        {
          "id": "v2n7c6",
          "title": "Statement success versus business success",
          "concept": "An UPDATE affecting zero rows often completes without a database error. A transaction groups changes; it does not automatically know expected row counts.",
          "question": "A routine marks repair 404 paid, but repair 404 does not exist. What additional check is needed?",
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
          "concept": "A stored procedure can encapsulate a query with explicit input parameters. Use a clear output order if callers need stable results.",
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
          "concept": "A set-based UPDATE can apply different values to many rows using CASE. This often avoids a cursor when each calculation depends only on that row.",
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
          "concept": "Checking a count and then inserting is vulnerable when two transactions both see spare capacity. Maintain the rule while coordinating simultaneous changes.",
          "question": "Each coach may have at most 12 active trainees. Two concurrent requests both see 11 and insert one. Explain a safe approach that also handles reassignment and deletion.",
          "answer": "A check-then-insert without coordination can admit 13. Serialize changes on a coach row, or use a correctly synchronized counter/constraint design, and perform the check plus assignment in one transaction. Reassignment must update the old and new coach consistently; acquire multiple coach locks in a consistent order. Deletion must reduce the count. The same rule must apply to every write path, including multi-row changes.",
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
          "concept": "Moving records into an archive needs an all-or-nothing boundary around copying and removing them. Error handling must undo incomplete movement.",
          "question": "Completed repairs before a cutoff must move from Repair to RepairArchive. Outline the transaction and T-SQL error-handling design, including protection against copying one set and deleting another.",
          "answer": "Begin a transaction inside TRY. Establish the intended repair identifiers under suitable locking or isolation, copy those identified rows with explicit columns, validate the copy, then delete that same identified set and commit. CATCH rolls back an active transaction and rethrows the error. Use a unique archive key to prevent duplicate archival and handle conflicts deliberately. Do not select a moving set twice without coordinating concurrent changes.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Keep copy and delete within one transaction.",
            "Use the same stable identified row set and explicit columns.",
            "Roll back failures and address duplicate archives."
          ]
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
          "concept": "Conceptual design captures business meaning. Logical design chooses relations and constraints. Physical design chooses implementation and access structures.",
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
          "concept": "A current assignment answers who is responsible now. An event reference records who actually participated at that time. One cannot always reconstruct the other.",
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
          "concept": "A UNIQUE foreign key enforces at most one child per referenced parent. It does not alone force every parent to have a child.",
          "question": "Invoice.orderId is UNIQUE NOT NULL and references PurchaseOrder. Which rule is still not guaranteed?",
          "answer": "Every purchase order has an invoice.",
          "kind": "choice",
          "choices": [
            "Every purchase order has an invoice.",
            "Each invoice references an existing order.",
            "An invoice has a non-NULL order reference.",
            "No two invoices reference the same order."
          ],
          "checks": []
        },
        {
          "id": "v2n8c4",
          "title": "Repeated events",
          "concept": "A key must distinguish every permitted occurrence. Participant pairs often identify relationships, but repeated events need time or an event identifier.",
          "question": "A member can rent the same tool on several dates. Is (memberId, toolId) sufficient as the Rental primary key?",
          "answer": "No; repeated rentals need an additional distinguishing attribute or rentalId.",
          "kind": "choice",
          "choices": [
            "No; repeated rentals need an additional distinguishing attribute or rentalId.",
            "Yes, because both columns are foreign keys.",
            "Yes, because dates never affect business rules.",
            "No primary key can identify rentals."
          ],
          "checks": []
        },
        {
          "id": "v2n8c5",
          "title": "Subtype mapping",
          "concept": "A separate subtype table can share the parent’s primary key, with that key also a foreign key to the parent. This guarantees every subtype row has a parent.",
          "question": "Coach(staffId, qualification) references Staff(staffId). What should identify Coach rows?",
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
          "concept": "A schema may satisfy normal forms yet omit a required fact. Walking through user operations tests whether needed data and paths exist.",
          "question": "A normalized scheduling design cannot record cancellations. What does that reveal?",
          "answer": "An incomplete requirement model, even though its existing relations may be normalized.",
          "kind": "choice",
          "choices": [
            "An incomplete requirement model, even though its existing relations may be normalized.",
            "That normalization always fails.",
            "That every relation must be merged.",
            "That more indexes will create the missing fact."
          ],
          "checks": []
        },
        {
          "id": "v2n8c7",
          "title": "Map a multivalued attribute",
          "concept": "A separate relation holds repeated attribute values with an owner reference. A composite key prevents duplicate owner-value pairs.",
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
          "concept": "A report about what happened should join through the event’s historical references rather than current assignments.",
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
          "concept": "Separate a product description from a physical copy and from each rental event. Keys should follow stable identities and repeated-event rules.",
          "question": "Design a tool-rental service with branches, tool models, physical tools, members and repeated rentals. Each rental records its agreed price and dates. List relations, keys and business constraints.",
          "answer": "Branch(branchId primary key, name); ToolModel(modelId primary key, description); Tool(assetId primary key, modelId foreign key, branchId foreign key); Member(memberId primary key, name); Rental(rentalId primary key, assetId foreign key, memberId foreign key, startsAt, endsAt, agreedPrice). Keep price on Rental to preserve the agreement. Enforce valid date order and nonnegative prices; prevent overlapping active rentals of the same asset with an appropriate transactional or database-specific constraint. A tool’s current branch alone does not preserve past pickup location if that is required.",
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
          "concept": "Logical validation checks normal forms, required transactions and constraints. Some cross-row and temporal rules require more than simple foreign keys.",
          "question": "Propose a validation checklist for a coaching center storing coaches, trainees, rooms and sessions. Include history, scheduling and minimum participation.",
          "answer": "Check keys and functional dependencies for each relation; verify required reports can follow the correct joins. Sessions must retain their actual coach and room, not infer them from current assignments. Prevent overlapping sessions for a coach, trainee or room. Ensure referenced rows exist and times are valid. If each active coach must have at least one trainee, an ordinary foreign key from trainee to coach does not enforce that minimum; use a controlled workflow or suitable additional constraint.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Check dependencies and representative reports.",
            "Preserve event history and prevent resource overlaps.",
            "Distinguish parent existence from minimum child participation."
          ]
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
          "concept": "Selectivity describes how much of a relation satisfies a condition. A filter returning very few rows often benefits more from an index than one returning almost everything.",
          "question": "A million-row table has 15 urgent rows. Which predicate is the more promising selective lookup?",
          "answer": "status = Urgent, if an appropriate index and workload justify it.",
          "kind": "choice",
          "choices": [
            "status = Urgent, if an appropriate index and workload justify it.",
            "A predicate returning all million rows.",
            "A predicate with no WHERE clause.",
            "Any predicate merely because it has a longer name."
          ],
          "checks": []
        },
        {
          "id": "v2n9c2",
          "title": "Index write cost",
          "concept": "An index is an additional maintained access structure. Changes to indexed keys or covered data can require extra work during inserts, updates and deletes.",
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
          "concept": "Heap organization leaves rows without an ordering key. Hash organization targets equality access; ordered structures can support useful range access.",
          "question": "A workload frequently asks for values between two dates. Why is pure hashing a poor default access method for that predicate?",
          "answer": "Hash placement does not preserve the date ordering needed for a range.",
          "kind": "choice",
          "choices": [
            "Hash placement does not preserve the date ordering needed for a range.",
            "Hashing automatically sorts dates.",
            "Dates cannot be indexed.",
            "Range predicates only work on text."
          ],
          "checks": []
        },
        {
          "id": "v2n9c4",
          "title": "Measure two outcomes",
          "concept": "Response time measures duration per request. Throughput measures completed work per time unit. Improving one does not automatically improve the other.",
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
          "concept": "Denormalization deliberately stores redundant facts to reduce selected read costs. It must include a way to keep copies consistent or an explicit staleness policy.",
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
          "concept": "Horizontal partitioning separates row subsets; vertical splitting separates attribute subsets while preserving a reconstruction identifier.",
          "question": "Moving large technician biographies into TechnicianBiography(techId, text) is which kind of split?",
          "answer": "Vertical: separating columns while retaining the identifier.",
          "kind": "choice",
          "choices": [
            "Vertical: separating columns while retaining the identifier.",
            "Horizontal: splitting technicians by city.",
            "Replication: keeping all identical columns twice.",
            "A Cartesian product."
          ],
          "checks": []
        },
        {
          "id": "v2n9c7",
          "title": "Composite access paths",
          "concept": "Column order in a composite index matters for common access patterns. Equality on a leading column followed by a range on the next is often useful.",
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
          "concept": "A reconciliation query compares a stored summary with the current detail. LEFT JOIN and COALESCE preserve summaries with no detail rows.",
          "question": "Job(jobId, storedHours), WorkLog(logId, jobId, hours). All numeric values are non-NULL. Return jobs whose storedHours differs from the sum of their logged hours.",
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
          "concept": "Tuning decisions should use a representative workload and repeatable conditions. A single fast query after warming the cache is weak evidence.",
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
          "concept": "Precomputed results can reduce repeated aggregation, but updates and refresh policy determine whether readers see current or stale values.",
          "question": "A manager proposes storing currentRentalCount on every member. Compare computing it on demand with storing it. Explain a safe maintenance plan if stored.",
          "answer": "Computing from rentals avoids a redundant counter but requires query work. Storing the count speeds reads but every rental start, return, cancellation and member reassignment can change it. Maintain the counter in the same transaction as the detail change, coordinate concurrent updates and periodically reconcile against detail. If refreshed periodically instead, label its freshness and do not use a stale count to enforce a hard rental limit.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Explain read-cost versus consistency tradeoffs.",
            "Cover all events that change the count.",
            "Separate approximate reporting from hard-limit enforcement."
          ]
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
          "concept": "Atomicity groups changes into all-or-nothing work. Durability protects committed effects after a failure. A transaction can require both for different reasons.",
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
          "concept": "A stale read followed by a replacement write can erase another transaction’s committed change. Atomic arithmetic or correctly coordinated read-modify-write logic can prevent this.",
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
          "concept": "A dirty read observes a value another transaction has not committed. If the writer aborts, the reader relied on a value that never became valid committed data.",
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
          "concept": "Operations conflict when they belong to different transactions, access the same item and at least one writes. Read-read pairs do not create conflict edges.",
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
          "concept": "Two-Phase Locking (2PL) has a growing phase and a shrinking phase. After a lock is released, no new lock may be acquired. It can still deadlock.",
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
          "concept": "A repeated predicate query can see newly inserted matching rows even if previously read rows are locked. Protecting a predicate or key range addresses that gap.",
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
          "concept": "A conditional atomic UPDATE can combine checking and decrementing a value. A zero-row result must be interpreted as a failed business operation.",
          "question": "SQL Server: Stock(itemId, available). Write a transaction to reserve 3 units of item 8 only if enough stock exists. Reject a missing or insufficient row and roll back on error.",
          "answer": "BEGIN TRY\n BEGIN TRANSACTION;\n UPDATE Stock SET available = available - 3\n WHERE itemId = 8 AND available >= 3;\n IF @@ROWCOUNT <> 1 THROW 50001, 'Item unavailable or insufficient stock', 1;\n COMMIT;\nEND TRY\nBEGIN CATCH\n IF XACT_STATE() <> 0 ROLLBACK;\n THROW;\nEND CATCH;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Combine the availability predicate and decrement.",
            "Check exactly one affected row immediately after UPDATE.",
            "Commit success; roll back an active failed transaction and propagate the error."
          ]
        },
        {
          "id": "v2n10c8",
          "title": "A safe archive pattern",
          "concept": "A transaction must use one stable set when copying and deleting records. Capturing identifiers can prevent accidental mismatch between the two operations.",
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
          "concept": "A schedule is conflict serializable if and only if its precedence graph is acyclic. An equivalent serial order follows a topological ordering of that graph.",
          "question": "Analyze R1(x), W1(x), R2(x), W2(y), R3(y), W3(z). Give all conflict edges and one equivalent serial order. Then explain the effect of appending R1(z).",
          "answer": "Initially W1(x) before R2(x) creates T1 → T2, and W2(y) before R3(y) creates T2 → T3. There is no direct T1–T3 conflict initially. The graph is acyclic with serial order T1, T2, T3. Appending R1(z) after W3(z) adds T3 → T1, making a cycle and destroying conflict serializability.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Give the two initial edges with their operations.",
            "Give serial order T1, T2, T3.",
            "Identify the new edge and cycle after R1(z)."
          ]
        },
        {
          "id": "v2n10c10",
          "title": "Waiting is not ordering",
          "concept": "A wait-for graph (WFG) uses an edge from a blocked transaction to the transaction holding its needed lock. A cycle indicates deadlock in the usual lock model.",
          "question": "T1 waits for T2; T2 waits for T3; T3 waits for T2; T4 waits for T1. Identify the deadlocked transactions, blocked outsiders and a recovery choice.",
          "answer": "T2 and T3 form the cycle and are deadlocked. T1 and T4 are blocked behind that cycle but are not themselves in it. Rolling back T2 or T3 breaks the cycle; rolling back only T4 does not. Choose a victim using rollback cost and fairness, undo its changes, release its locks and allow retry.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Identify the T2–T3 cycle.",
            "Distinguish blocked T1/T4 from cycle participants.",
            "Choose a useful victim and describe undo, release and retry."
          ]
        },
        {
          "id": "v2n10c11",
          "title": "Recoverability matters separately",
          "concept": "A recoverable schedule does not let a reader commit before the transaction whose value it read commits. Avoiding dirty reads is stronger and avoids cascading rollback.",
          "question": "T1 writes x; T2 reads that uncommitted x and commits; T1 then aborts. Explain why conflict serializability alone would not make this safe.",
          "answer": "The operation graph can be acyclic with T1 before T2, yet T2 committed a result based on a value that T1 later removed. The schedule is not recoverable because T2 committed before its source transaction. Prevent T2 from reading uncommitted x, for example by retaining T1’s exclusive lock until completion, rather than relying only on an acyclic graph.",
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
          "concept": "Timestamp ordering fixes a transaction order using unique ordered identifiers. Optimistic control performs work, validates it and then writes if validation succeeds.",
          "question": "Compare basic timestamp ordering with lock-based control for a low-contention workload. Include waiting, restarts, deadlocks and recoverability.",
          "answer": "Basic timestamp ordering rejects operations that violate timestamp order and restarts the transaction, avoiding lock-wait deadlocks but risking repeated restarts or starvation. Locking waits for incompatible locks and may deadlock; 2PL can ensure conflict serializability. Optimistic validation may suit low contention but must restart conflicting work. Recovery safety is a separate requirement: basic timestamp ordering alone does not guarantee recoverability.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Contrast waiting with abort/restart behavior.",
            "Discuss deadlock and starvation tradeoffs.",
            "Keep recoverability distinct and explain optimistic validation."
          ]
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
          "concept": "SQL states the desired result. The optimizer translates a query into an efficient physical plan among alternatives with equivalent meaning.",
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
          "concept": "Pushing a safe selection down reduces tuples before expensive operations. It is not always safe to move predicates across outer joins without checking semantics.",
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
          "concept": "Projection can reduce row width, but it must retain attributes used by later filters, joins, grouping or output.",
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
          "concept": "Under a uniform-distribution assumption, an equality predicate is often estimated as row count divided by distinct-value count. This is an estimate, not a guarantee.",
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
          "concept": "A hash join is suited to equality matching; sort-merge can exploit ordered inputs; indexed nested loops can suit a small outer side with selective inner lookups.",
          "question": "Which case makes indexed nested loops a plausible candidate?",
          "answer": "A few outer rows and a useful inner join-key index.",
          "kind": "choice",
          "choices": [
            "A few outer rows and a useful inner join-key index.",
            "A mandatory Cartesian product of huge tables with no predicate.",
            "A guarantee that no indexes exist.",
            "A query that returns no columns by definition."
          ],
          "checks": []
        },
        {
          "id": "v2n11c6",
          "title": "Streaming versus storing",
          "concept": "Pipelining passes produced tuples to the next operation. Materialization stores an intermediate result. Some operations, such as a full sort, are blocking.",
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
          "concept": "For inner joins, a predicate depending on one input can often be applied before the join. Required join columns must remain available.",
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
          "concept": "If only existence is needed, EXISTS expresses that requirement directly and avoids returning one parent row per matching child.",
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
          "concept": "Cartesian products can create large intermediates. Applying valid selections early can reduce the work even when the final result is unchanged.",
          "question": "R has 800 rows and S has 50. Filters retain 80 R rows and 5 S rows. Compare raw Cartesian-product sizes before and after filtering. Explain what this does not prove about actual execution time.",
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
          "concept": "An optimizer’s cardinality estimates depend on statistics and assumptions about distributions and correlations. Stale or simplistic statistics can favor the wrong plan.",
          "question": "A status column has 990000 Closed rows and 10000 Open rows. Explain why treating its two values as equally frequent can mislead plan selection.",
          "answer": "A uniform estimate predicts 500000 rows for either value. That greatly overestimates Open and underestimates Closed. The resulting access-path and join choices may be inappropriate, especially for an Open-only lookup. Current statistics that capture skew can help, but representative plan and runtime checks are still needed.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Compute the incorrect uniform estimate.",
            "Compare it with both real frequencies.",
            "Connect cardinality errors to access and join choices."
          ]
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
          "concept": "Lock granularity is the size of the protected item: database, table, page, row or field. Small units allow more unrelated work but require more locks.",
          "question": "Two users update different rows. What is a likely benefit of row locks over one table lock?",
          "answer": "They may proceed concurrently, with more lock-management overhead.",
          "kind": "choice",
          "choices": [
            "They may proceed concurrently, with more lock-management overhead.",
            "They are guaranteed never to deadlock.",
            "No lock manager is needed.",
            "Both updates become read-only."
          ],
          "checks": []
        },
        {
          "id": "v2n12c2",
          "title": "Failure scope",
          "concept": "A system crash can lose volatile memory while durable storage survives. A media failure damages the stored data itself and may require restoring a backup.",
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
          "concept": "Write-Ahead Logging (WAL) requires necessary log records to be durable before their associated modified data pages are persisted. Commit acknowledgment also requires appropriate durable log records.",
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
          "concept": "Before-images support reversing changes; after-images support reapplying them. The required operations depend on the update and buffer-management protocol.",
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
          "concept": "In a textbook deferred-update protocol, uncommitted changes do not reach database pages. Committed changes may still require redo after a crash.",
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
          "concept": "A checkpoint records useful recovery state and may flush data under the chosen scheme. An active transaction can have earlier log records still needed for rollback.",
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
          "concept": "ROLLBACK cancels the current transaction’s changes. A savepoint can mark a position inside a transaction, with syntax and error behavior varying by DBMS.",
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
          "concept": "A savepoint allows a transaction to discard later work while retaining earlier changes. It is not a separate durable commit.",
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
          "concept": "Immediate update may put uncommitted changes on disk, while a no-force policy may leave committed pages only in memory. Recovery must address both cases.",
          "question": "Under an immediate-update undo/redo protocol, T1 commits but its changed page is not on disk. T2 has not committed but its changed page is on disk. A crash occurs. Explain the recovery actions.",
          "answer": "Redo T1 as required so its committed effect reaches the database. Undo T2 so its uncommitted effect is removed. T1 needs durability; T2 needs atomicity. Durable log records identify status and supply the necessary change information. Actual algorithms may redo history before undoing incomplete work, so this describes the required final effects.",
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
          "concept": "Backups provide a base state; retained logs can move that base forward. The latest recoverable point depends on what survived, not merely the existence of a backup job.",
          "question": "A midnight backup survives a disk failure at noon. Logs are intact only through 11:40. Describe the recovery sequence and what cannot be promised.",
          "answer": "Restore the midnight backup, then apply the surviving log history according to the recovery protocol through the recoverable point around 11:40. Resolve incomplete transactions at that point. Changes after the retained history cannot be guaranteed recovered from these resources. Test restoration and protect backups and logs independently; checkpointing alone does not supply missing media contents.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Restore the base before applying retained log history.",
            "Identify the limit imposed by the missing later log history.",
            "Explain testing and independent protection of recovery copies."
          ]
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
          "concept": "Online Transaction Processing (OLTP) supports operational changes. Online Analytical Processing (OLAP) explores data across dimensions for analysis.",
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
          "concept": "A data warehouse (DW) integrates subject-oriented historical data for decision support. Nonvolatile means it is not normally updated like an operational transaction store; corrections and managed loads still exist.",
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
          "concept": "Grain defines what one fact row represents. Mixing transaction-level and summary rows can double-count measures unless the model separates them explicitly.",
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
          "concept": "Fact measures are interpreted in dimension context. Dimensions commonly describe time, product and location; a measure’s aggregation behavior must be understood.",
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
          "concept": "Roll-up aggregates to a coarser level; drill-down reveals finer detail. Slice and dice select subsets across dimensions.",
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
          "concept": "Extract, Transform, Load (ETL) prepares source data for an analytical store. Transformation includes reconciling codes, units and missing values.",
          "question": "Two systems record weight in kilograms and pounds. What is needed before combining totals?",
          "answer": "Normalize units during transformation and preserve their meaning.",
          "kind": "choice",
          "choices": [
            "Normalize units during transformation and preserve their meaning.",
            "Add the numbers directly without conversion.",
            "Replace the weight with an arbitrary key.",
            "Remove every source timestamp."
          ],
          "checks": []
        },
        {
          "id": "v2n13c7",
          "title": "Group a fact table",
          "concept": "A star schema links a central fact table to dimensions. Joining through dimension keys supplies readable categories for aggregation.",
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
          "concept": "Window functions operate over result rows without collapsing them like ordinary grouping. DENSE_RANK assigns equal ranks to ties without gaps.",
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
          "concept": "A dimensional model is organized around a business process and its grain. Conformed dimensions support comparison across fact tables that use compatible definitions.",
          "question": "Design a daily rental-revenue star schema for branches and tool categories. Define the grain, dimensions and measures; explain why an average price needs care.",
          "answer": "Define one fact row per day, branch and tool category. Link Date, Branch and ToolCategory dimensions to a fact containing rentalCount and totalRevenue. Average price should be computed as totalRevenue divided by rentalCount at the requested level, guarding zero counts. Averaging stored daily averages can be wrong because days have different rental counts. Historical dimension treatment must preserve the intended category and region at event time.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "State an unambiguous daily branch-category grain.",
            "Identify dimensions and additive measures.",
            "Explain weighted average calculation and historical meaning."
          ]
        },
        {
          "id": "v2n13c10",
          "title": "Mining versus summarizing",
          "concept": "Data mining seeks patterns or predictive structure; descriptive analytical queries summarize defined facts. Association does not establish causation.",
          "question": "A report says weekend rentals earn more revenue, and a model predicts which members will stop renting. Compare the tasks and state two cautions about the predictive model.",
          "answer": "The revenue report is descriptive aggregation; the churn model predicts an outcome using learned patterns. Evaluate the model on appropriate held-out later data and prevent target leakage. Check data quality, imbalance and whether behavior changes over time. A correlation between a feature and churn does not establish that changing the feature will cause retention.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Distinguish descriptive aggregation from prediction.",
            "Mention appropriate validation and leakage prevention.",
            "Explain why prediction or association does not prove causation."
          ]
        }
      ]
    },
    {
      "id": 14,
      "title": "Distributed data",
      "description": "Reason about fragments, copies and network work.",
      "summary": [
        "Fragmentation divides data; replication copies it; allocation chooses locations.",
        "Check completeness, reconstruction and intended disjointness.",
        "Local speed does not remove cross-site consistency and failure problems."
      ],
      "cards": [
        {
          "id": "v2n14c1",
          "title": "Distribution versus remote access",
          "concept": "A Distributed Database Management System (DDBMS) manages logically related data across sites. A remote application accessing one central database is not by itself distributed data storage.",
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
          "concept": "Fragmentation chooses subsets; allocation places them; replication stores copies. A design may combine all three.",
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
          "concept": "Horizontal fragmentation must account for all original rows. Predicates that fail to handle boundary or NULL values can leave gaps.",
          "question": "One fragment uses age < 18 and another age > 18. What is missing for non-NULL ages?",
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
          "concept": "Vertical fragments split columns while keeping an identifier that permits lossless reconstruction. Repeating that identifier is intentional.",
          "question": "PersonContact(personId, email) and PersonProfile(personId, preference) share a unique personId. How are complete rows reconstructed?",
          "answer": "Join the fragments on personId.",
          "kind": "choice",
          "choices": [
            "Join the fragments on personId.",
            "Take a Cartesian product without a predicate.",
            "Union unrelated columns by their positions.",
            "Drop personId before joining."
          ],
          "checks": []
        },
        {
          "id": "v2n14c5",
          "title": "Location transparency",
          "concept": "Location transparency lets users address logical data without embedding its physical site in every request. Moving data should not require rewriting all business queries.",
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
          "concept": "Homogeneous systems use the same DBMS product across sites. Heterogeneous systems may use different products or models and require interoperability work.",
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
          "concept": "UNION ALL preserves every row. It is suitable for reconstructing disjoint horizontal fragments with identical schemas; overlapping copies require a deliberate policy.",
          "question": "RentalNorth(rentalId, region, fee) and RentalSouth(rentalId, region, fee) are complete, disjoint fragments. Create a logical view combining them.",
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
          "concept": "Filtering and aggregation near the stored data can reduce network traffic. The remote result must retain enough information for the final calculation.",
          "question": "RemoteRental(branchId, amount) is at one remote site. Write the query to execute there when the coordinator needs only total revenue by branch for positive amounts.",
          "answer": "SELECT branchId, SUM(amount) AS totalRevenue\nFROM RemoteRental\nWHERE amount > 0\nGROUP BY branchId;",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Apply the positive-amount predicate at the remote site.",
            "Aggregate by the required branch key.",
            "Return branch totals instead of all detail rows."
          ]
        },
        {
          "id": "v2n14c9",
          "title": "Compare allocation strategies",
          "concept": "Replication can improve read locality and availability, while updates must keep copies consistent according to the chosen guarantees. Partitioning may localize work but complicate cross-partition queries.",
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
          "concept": "Distributed query plans should account for data transferred, not only local computation. A semijoin can transmit keys first to restrict remote matches.",
          "question": "Site A has 100 relevant customer IDs. Site B has one million purchases. Explain how sending IDs to B can reduce traffic when A needs only those customers’ purchase totals.",
          "answer": "Send the distinct relevant customer IDs to B, match purchases there and aggregate totals by customerId, then return at most one total per matching customer. This can avoid transferring a million detail rows. Compare the ID-transfer and processing costs with alternatives, and preserve customers with no purchases if the requested report needs zero totals.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Send the relevant identifiers and filter remotely.",
            "Aggregate before returning results.",
            "Address cost tradeoffs and zero-match customers."
          ]
        }
      ]
    },
    {
      "id": 15,
      "title": "Objects and richer data types",
      "description": "Match representation to identity and behavior.",
      "summary": [
        "Object identity is distinct from attribute equality.",
        "Object-relational extensions retain relational ideas while adding richer types.",
        "Persistence still requires transaction, query and recovery services."
      ],
      "cards": [
        {
          "id": "v2n15c1",
          "title": "Object identity",
          "concept": "An Object Identifier (OID) distinguishes an object independently of its current state. Two objects can contain equal values and still be different objects.",
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
          "concept": "Encapsulation groups state with operations and controls access through an interface. It helps preserve invariants rather than exposing every implementation detail.",
          "question": "A Money type validates currency and amount through defined operations. What benefit does encapsulation offer?",
          "answer": "It can centralize rules for valid state and operations.",
          "kind": "choice",
          "choices": [
            "It can centralize rules for valid state and operations.",
            "It removes the need for transactions.",
            "It guarantees no data can ever change.",
            "It makes all values globally unique."
          ],
          "checks": []
        },
        {
          "id": "v2n15c3",
          "title": "Inheritance and polymorphism",
          "concept": "Inheritance reuses and specializes a type’s properties. Polymorphism allows a common operation to have type-specific behavior.",
          "question": "Circle and Rectangle each implement area(). Which idea lets callers request area without using one universal formula?",
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
          "concept": "An Object-Relational Database Management System (ORDBMS) extends relational capabilities. An Object-Oriented Database Management System (OODBMS) manages persistent objects more directly.",
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
          "concept": "Arrays and lists are ordered; a set has no duplicates; a multiset may contain duplicates. Choose according to the meaning, not just convenient syntax.",
          "question": "A collection records the sequence of stops on a delivery route, including repeated visits. What properties must it preserve?",
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
          "concept": "A Binary Large Object (BLOB) stores large binary data; a Character Large Object (CLOB) stores large character data. Type support and names differ across products.",
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
          "concept": "A User-Defined Type (UDT) can group named fields into a domain structure. PostgreSQL composite types are one concrete form.",
          "question": "PostgreSQL: define an address_value type containing street and city text fields, then create Branch(branchId, address) using it.",
          "answer": "CREATE TYPE address_value AS (street TEXT, city TEXT);\nCREATE TABLE Branch (\n branchId INTEGER PRIMARY KEY,\n address address_value\n);",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Define a composite type with the requested fields.",
            "Use the type in Branch.",
            "Define branchId as the primary key and identify PostgreSQL syntax."
          ]
        },
        {
          "id": "v2n15c8",
          "title": "Read a structured attribute",
          "concept": "Structured values can expose components through type-specific SQL syntax. In PostgreSQL, parentheses can disambiguate access to a composite column’s field.",
          "question": "For PostgreSQL Branch(branchId, address address_value), where address_value has street and city, return branchId and street for branches in Delft.",
          "answer": "SELECT branchId, (address).street AS street\nFROM Branch\nWHERE (address).city = 'Delft';",
          "kind": "sql",
          "choices": [],
          "checks": [
            "Access the composite city field in the predicate.",
            "Return the composite street field.",
            "Use PostgreSQL composite-field notation."
          ]
        },
        {
          "id": "v2n15c9",
          "title": "Map an object hierarchy",
          "concept": "Mapping classes to relations requires choosing how common and subtype attributes are stored. The mapping must preserve identity and subtype constraints.",
          "question": "Asset has assetId and name; Vehicle adds registration; Machine adds powerRating. An asset may be both. Propose a relational mapping and explain its tradeoffs.",
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
          "concept": "Saving an object’s bytes is not enough for a database system. Shared durable objects need query, concurrency, integrity and recovery facilities.",
          "question": "A team serializes design objects to individual files and calls the result an object database. Explain what capabilities must be considered before accepting that claim.",
          "answer": "Check stable identity and references, query and indexing support, concurrent updates, transactional atomicity, failure recovery, access control and schema/type evolution. File serialization alone may persist state but does not provide coordinated multi-object changes or safe shared access. An object-oriented DBMS must offer database capabilities in addition to object representation.",
          "kind": "essay",
          "choices": [],
          "checks": [
            "Distinguish serialization from database services.",
            "Discuss identity, querying and concurrent transactions.",
            "Include recovery, access control and evolution concerns."
          ]
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
    "MCQ": "Multiple-Choice Question"
  }
};
