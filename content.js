window.DBMS_NOTES = [
  {
    "id": 1,
    "title": "Database foundations",
    "description": "Understand the system before memorizing the syntax.",
    "focus": true,
    "summary": [
      "A database stores related data and metadata; the DBMS is the software that manages it.",
      "A catalog describes tables, columns, constraints and other database objects.",
      "Sharing data requires integrity, security, concurrency control and recovery."
    ],
    "example": "Bank transfer: one business action may require several SQL statements. The DBMS coordinates access and recovery so the stored balances remain meaningful.",
    "items": [
      {
        "id": "n1q1",
        "q": "What distinguishes a DBMS from a database?",
        "answer": "A DBMS is the software that manages the stored data.",
        "choices": [
          "A DBMS is the software that manages the stored data.",
          "A DBMS is one row.",
          "A database is the SQL language.",
          "They are identical terms."
        ],
        "explanation": "The database is the collection of data; the DBMS defines, accesses and controls it."
      },
      {
        "id": "n1q2",
        "q": "Which item is metadata?",
        "answer": "The definition of Employee.salary as DECIMAL.",
        "choices": [
          "The definition of Employee.salary as DECIMAL.",
          "An employee salary of 75000.",
          "A customer purchase.",
          "A particular account balance."
        ],
        "explanation": "Metadata describes data structure, types and constraints."
      },
      {
        "id": "n1q3",
        "q": "Why can independent application files cause inconsistency?",
        "answer": "The same fact may be copied and updated differently.",
        "choices": [
          "The same fact may be copied and updated differently.",
          "Files automatically enforce foreign keys.",
          "Every file is read only.",
          "Each fact exists exactly once."
        ],
        "explanation": "Uncontrolled duplication lets copies diverge."
      },
      {
        "id": "n1q4",
        "q": "Which task belongs to DDL?",
        "answer": "Creating a table with constraints.",
        "choices": [
          "Creating a table with constraints.",
          "Selecting employees.",
          "Updating a salary.",
          "Deleting an order row."
        ],
        "explanation": "DDL defines structures; DML retrieves or changes their data."
      },
      {
        "id": "n1q5",
        "q": "Which task belongs to DML?",
        "answer": "Updating an employee salary.",
        "choices": [
          "Updating an employee salary.",
          "Defining a new table.",
          "Adding a column definition.",
          "Dropping a schema."
        ],
        "explanation": "UPDATE manipulates existing data."
      },
      {
        "id": "n1q6",
        "q": "Why offer different database views to users?",
        "answer": "To simplify access and limit exposed data.",
        "choices": [
          "To simplify access and limit exposed data.",
          "To force everyone to see all columns.",
          "To duplicate the entire database for every user.",
          "To remove all integrity rules."
        ],
        "explanation": "Views can present relevant rows and columns for a user's task."
      },
      {
        "id": "n1q7",
        "q": "What is data independence intended to reduce?",
        "answer": "Application dependence on storage or schema details.",
        "choices": [
          "Application dependence on storage or schema details.",
          "The need for any data.",
          "The ability to share information.",
          "The use of constraints."
        ],
        "explanation": "Separating data definitions from programs can reduce the impact of changes."
      },
      {
        "id": "n1q8",
        "q": "Which responsibility is typical of a DBA?",
        "answer": "Managing authorization, backups and performance.",
        "choices": [
          "Managing authorization, backups and performance.",
          "Entering every business transaction personally.",
          "Eliminating all application programmers.",
          "Choosing every employee's salary."
        ],
        "explanation": "A DBA administers database operation rather than making all business decisions."
      },
      {
        "id": "n1q9",
        "q": "Which DBMS service coordinates simultaneous updates?",
        "answer": "Concurrency control.",
        "choices": [
          "Concurrency control.",
          "Text formatting.",
          "Data entry validation only.",
          "Report printing."
        ],
        "explanation": "Concurrency control prevents harmful interference between transactions."
      },
      {
        "id": "n1q10",
        "q": "Which is a real DBMS tradeoff?",
        "answer": "Greater capability can introduce cost and complexity.",
        "choices": [
          "Greater capability can introduce cost and complexity.",
          "A DBMS eliminates all failures.",
          "A DBMS always makes every query faster.",
          "A DBMS makes backups unnecessary."
        ],
        "explanation": "Benefits do not eliminate administration costs or failure risks."
      }
    ]
  },
  {
    "id": 2,
    "title": "ER modeling & relationships",
    "description": "Turn business rules into an accurate model.",
    "focus": true,
    "summary": [
      "Entity types describe things; attributes describe their properties; relationships connect them.",
      "Multiplicity combines the minimum participation and maximum cardinality.",
      "Fan traps imply ambiguous associations; chasm traps leave missing paths through optional relationships."
    ],
    "example": "Customer 1 → many Orders: each order references its customer. Student many ↔ many Course: Enrollment records the association and its grade. Employee supervises Employee: label the supervisor and subordinate roles.",
    "items": [
      {
        "id": "n2q1",
        "q": "One customer places many orders. Where should customerId go?",
        "answer": "As a foreign key in Order.",
        "choices": [
          "As a foreign key in Order.",
          "As a list of order IDs in Customer.",
          "Only in a view.",
          "In an unrelated lookup table."
        ],
        "explanation": "The many side references the one side."
      },
      {
        "id": "n2q2",
        "q": "Which relationship is recursive?",
        "answer": "Employee supervises Employee.",
        "choices": [
          "Employee supervises Employee.",
          "Employee belongs to Department.",
          "Student enrolls in Course.",
          "Order contains Product."
        ],
        "explanation": "One entity type participates in two roles."
      },
      {
        "id": "n2q3",
        "q": "What does 0..1 participation mean?",
        "answer": "An occurrence may have zero or one related occurrence.",
        "choices": [
          "An occurrence may have zero or one related occurrence.",
          "Exactly one related occurrence.",
          "One or more related occurrences.",
          "Unlimited mandatory occurrences."
        ],
        "explanation": "Zero makes participation optional; one is the maximum."
      },
      {
        "id": "n2q4",
        "q": "A student can take many courses and each course has many students. What is this?",
        "answer": "Many-to-many.",
        "choices": [
          "Many-to-many.",
          "One-to-one.",
          "Many-to-one only.",
          "No relationship."
        ],
        "explanation": "Both sides can have multiple related occurrences."
      },
      {
        "id": "n2q5",
        "q": "Where should the grade of a student in a course be modeled?",
        "answer": "On the enrollment relationship.",
        "choices": [
          "On the enrollment relationship.",
          "On Student alone.",
          "On Course alone.",
          "On Instructor alone."
        ],
        "explanation": "The grade depends on the particular student-course association."
      },
      {
        "id": "n2q6",
        "q": "What is a fan trap?",
        "answer": "An ambiguous association through relationships sharing an entity.",
        "choices": [
          "An ambiguous association through relationships sharing an entity.",
          "A missing path caused by optional participation.",
          "A duplicate primary key.",
          "A physical index problem."
        ],
        "explanation": "Knowing a staff member and a property share a branch does not prove that staff member manages the property."
      },
      {
        "id": "n2q7",
        "q": "What is a chasm trap?",
        "answer": "An expected connection disappears through optional relationships.",
        "choices": [
          "An expected connection disappears through optional relationships.",
          "Every entity has too many attributes.",
          "A join always returns every combination.",
          "Two keys have the same name."
        ],
        "explanation": "An optional intermediate association can leave no path to a fact that still exists."
      },
      {
        "id": "n2q8",
        "q": "What is a composite attribute?",
        "answer": "An attribute with meaningful components, such as an address.",
        "choices": [
          "An attribute with meaningful components, such as an address.",
          "A primary key with no columns.",
          "An attribute that must contain NULL.",
          "A relationship with three entities."
        ],
        "explanation": "An address can be separated into street, city and postal code."
      },
      {
        "id": "n2q9",
        "q": "Which is a derived attribute?",
        "answer": "Age calculated from date of birth.",
        "choices": [
          "Age calculated from date of birth.",
          "An independently assigned employee ID.",
          "An entered birth date.",
          "A stored legal name with no derivation."
        ],
        "explanation": "Derived values can be calculated; stored copies need consistency maintenance."
      },
      {
        "id": "n2q10",
        "q": "What distinguishes a weak entity in the identification sense?",
        "answer": "Its identification depends on an owner entity.",
        "choices": [
          "Its identification depends on an owner entity.",
          "It has no attributes.",
          "It always has exactly one row.",
          "It cannot appear in a relational design."
        ],
        "explanation": "A dependent may be identified by owner ID plus a partial key."
      },
      {
        "id": "n2q11",
        "q": "What does disjoint specialization require?",
        "answer": "An instance belongs to at most one of the specified subtypes.",
        "choices": [
          "An instance belongs to at most one of the specified subtypes.",
          "Every instance belongs to every subtype.",
          "Every subtype has no attributes.",
          "The superclass has no key."
        ],
        "explanation": "Disjointness concerns overlap; completeness is a separate constraint."
      },
      {
        "id": "n2q12",
        "q": "What does total specialization require?",
        "answer": "Every superclass instance belongs to at least one subtype.",
        "choices": [
          "Every superclass instance belongs to at least one subtype.",
          "No superclass instance belongs to a subtype.",
          "Every instance belongs to all subtypes.",
          "Each subtype has one instance."
        ],
        "explanation": "Total describes coverage; overlapping versus disjoint describes membership restrictions."
      }
    ]
  },
  {
    "id": 3,
    "title": "Relational model & algebra",
    "description": "Keys, NULL, integrity and the language behind queries.",
    "focus": true,
    "summary": [
      "A relation has attributes (columns), tuples (rows), a degree (column count) and a cardinality (row count).",
      "A candidate key is a minimal superkey. The primary key is the chosen candidate key.",
      "Selection filters rows; projection selects columns; joins combine related tuples."
    ],
    "example": "Employee(employeeId PK, name, departmentId FK)\nDepartment(departmentId PK, departmentName)\n\nσ salary > 80000 (Employee) filters rows.\nπ name (Employee) keeps names and removes duplicates under relational set semantics.",
    "items": [
      {
        "id": "n3q1",
        "q": "A relation has 5 columns and 200 rows. What is its degree?",
        "answer": "5.",
        "choices": [
          "5.",
          "200.",
          "205.",
          "1000."
        ],
        "explanation": "Degree counts attributes; cardinality counts tuples."
      },
      {
        "id": "n3q2",
        "q": "Which is a candidate key?",
        "answer": "A minimal set of attributes that uniquely identifies a tuple.",
        "choices": [
          "A minimal set of attributes that uniquely identifies a tuple.",
          "Any set of columns including unnecessary ones.",
          "Any column with duplicate values.",
          "Every foreign key."
        ],
        "explanation": "Minimal means no proper subset still uniquely identifies tuples."
      },
      {
        "id": "n3q3",
        "q": "What is a primary key?",
        "answer": "The candidate key chosen to identify rows.",
        "choices": [
          "The candidate key chosen to identify rows.",
          "Every numeric column.",
          "A nullable nonunique identifier.",
          "An ordering instruction."
        ],
        "explanation": "Primary keys are unique and have no NULL components."
      },
      {
        "id": "n3q4",
        "q": "Enrollment allows one row per student-course pair. Choose its key.",
        "answer": "(studentId, courseId).",
        "choices": [
          "(studentId, courseId).",
          "studentId only.",
          "courseId only.",
          "grade only."
        ],
        "explanation": "Neither single ID uniquely identifies an enrollment under these rules."
      },
      {
        "id": "n3q5",
        "q": "What must a non-NULL foreign key value normally match?",
        "answer": "A referenced candidate key value.",
        "choices": [
          "A referenced candidate key value.",
          "Any arbitrary text value.",
          "Only a nonunique attribute.",
          "Its own row number."
        ],
        "explanation": "Referential integrity prevents references to nonexistent parent keys; self-references are also possible."
      },
      {
        "id": "n3q6",
        "q": "Which operation violates a customer foreign key?",
        "answer": "Insert an order referencing a nonexistent customer.",
        "choices": [
          "Insert an order referencing a nonexistent customer.",
          "Insert a customer without orders.",
          "Delete an order.",
          "Change an existing order date."
        ],
        "explanation": "The child must reference an existing parent unless a permitted NULL is used."
      },
      {
        "id": "n3q7",
        "q": "Which statement about NULL is correct?",
        "answer": "It represents missing, unknown or inapplicable information.",
        "choices": [
          "It represents missing, unknown or inapplicable information.",
          "It is always zero.",
          "It is the same as an empty string.",
          "It equals every other NULL."
        ],
        "explanation": "Use IS NULL to test for NULL; ordinary equality does not yield TRUE."
      },
      {
        "id": "n3q8",
        "q": "Which relational algebra operation filters rows?",
        "answer": "Selection.",
        "choices": [
          "Selection.",
          "Projection.",
          "Union.",
          "Rename."
        ],
        "explanation": "Selection applies a predicate to tuples."
      },
      {
        "id": "n3q9",
        "q": "Which operation keeps specified columns?",
        "answer": "Projection.",
        "choices": [
          "Projection.",
          "Selection.",
          "Cartesian product.",
          "Difference."
        ],
        "explanation": "Pure relational projection removes duplicate resulting tuples."
      },
      {
        "id": "n3q10",
        "q": "R has 3 rows and S has 4 rows. How many rows in R × S?",
        "answer": "12.",
        "choices": [
          "12.",
          "7.",
          "4.",
          "3."
        ],
        "explanation": "The Cartesian product pairs each R row with every S row."
      },
      {
        "id": "n3q11",
        "q": "Which operation permits a comparison such as R.x < S.y?",
        "answer": "Theta join.",
        "choices": [
          "Theta join.",
          "Only natural join.",
          "Projection alone.",
          "Union."
        ],
        "explanation": "A theta join uses a comparison predicate; equijoin is the equality case."
      },
      {
        "id": "n3q12",
        "q": "What does a semijoin R with S return?",
        "answer": "Only R attributes for R tuples that have a match in S.",
        "choices": [
          "Only R attributes for R tuples that have a match in S.",
          "All attributes from both relations.",
          "Only unmatched S tuples.",
          "Every possible R-S pair."
        ],
        "explanation": "A semijoin tests existence of a matching tuple without adding S columns."
      },
      {
        "id": "n3q13",
        "q": "What is required for union compatibility?",
        "answer": "Equal column counts and compatible corresponding domains.",
        "choices": [
          "Equal column counts and compatible corresponding domains.",
          "Identical row counts.",
          "The same primary-key name only.",
          "Identical table names."
        ],
        "explanation": "Set operations align corresponding attributes, not arbitrary columns."
      },
      {
        "id": "n3q14",
        "q": "What distinguishes a normal view from a base table?",
        "answer": "A normal view defines a virtual table through a query.",
        "choices": [
          "A normal view defines a virtual table through a query.",
          "A normal view always stores a separate physical copy.",
          "A view cannot contain joins.",
          "A view is an index."
        ],
        "explanation": "Materialized views are a separate concept that stores query results."
      }
    ]
  },
  {
    "id": 4,
    "title": "SQL queries & data changes",
    "description": "Practice the highest-yield exam skill: reading SQL.",
    "focus": true,
    "summary": [
      "Think in this order: FROM/JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
      "COUNT(*) counts rows; COUNT(column) counts non-NULL values.",
      "LEFT JOIN preserves unmatched left rows. A right-side WHERE filter can remove them."
    ],
    "example": "SELECT d.deptNo, COUNT(e.empID) AS employees\nFROM Department d\nLEFT JOIN Employee e ON e.deptNo = d.deptNo\nGROUP BY d.deptNo;\n\n-- COUNT(e.empID), not COUNT(*), gives zero for an empty department.",
    "items": [
      {
        "id": "n4q1",
        "q": "What does SELECT name FROM Employee WHERE salary > 80000 return?",
        "answer": "Names of employees earning more than 80000.",
        "choices": [
          "Names of employees earning more than 80000.",
          "Every employee.",
          "Salaries instead of names.",
          "Names earning exactly 80000."
        ],
        "explanation": "SELECT chooses output columns; WHERE restricts rows."
      },
      {
        "id": "n4q2",
        "q": "Which condition includes both salary endpoints?",
        "answer": "salary BETWEEN 50000 AND 80000.",
        "choices": [
          "salary BETWEEN 50000 AND 80000.",
          "salary > 50000 AND salary < 80000.",
          "salary = 50000 AND salary = 80000.",
          "salary NOT BETWEEN 50000 AND 80000."
        ],
        "explanation": "BETWEEN includes its lower and upper endpoints."
      },
      {
        "id": "n4q3",
        "q": "Which pattern matches names beginning with John?",
        "answer": "name LIKE 'John%'.",
        "choices": [
          "name LIKE 'John%'.",
          "name = 'John%'.",
          "name LIKE '%John'.",
          "name LIKE '_John'."
        ],
        "explanation": "Percent matches zero or more characters after John."
      },
      {
        "id": "n4q4",
        "q": "What does underscore mean in a LIKE pattern?",
        "answer": "Exactly one character.",
        "choices": [
          "Exactly one character.",
          "Zero or more characters.",
          "A literal space only.",
          "End of the string."
        ],
        "explanation": "Percent is the multi-character wildcard; underscore matches one character."
      },
      {
        "id": "n4q5",
        "q": "Which statement updates only employee 101?",
        "answer": "UPDATE Employee SET salary = 75000 WHERE employeeId = 101;",
        "choices": [
          "UPDATE Employee SET salary = 75000 WHERE employeeId = 101;",
          "UPDATE Employee SET salary = 75000;",
          "DELETE FROM Employee WHERE employeeId = 101;",
          "SELECT salary FROM Employee;"
        ],
        "explanation": "The WHERE clause limits the update to the requested row."
      },
      {
        "id": "n4q6",
        "q": "What is the danger of DELETE FROM Employee without WHERE?",
        "answer": "It deletes every row in Employee.",
        "choices": [
          "It deletes every row in Employee.",
          "It deletes the table definition.",
          "It deletes only NULL rows.",
          "It does nothing."
        ],
        "explanation": "DELETE affects rows; DROP TABLE removes the table object."
      },
      {
        "id": "n4q7",
        "q": "Which expression counts every result row?",
        "answer": "COUNT(*).",
        "choices": [
          "COUNT(*).",
          "COUNT(salary).",
          "SUM(salary).",
          "AVG(salary)."
        ],
        "explanation": "COUNT(column) skips NULL values, so it may count fewer rows."
      },
      {
        "id": "n4q8",
        "q": "A salary column contains 10, 20, NULL. What is AVG(salary)?",
        "answer": "15.",
        "choices": [
          "15.",
          "10.",
          "30.",
          "NULL always."
        ],
        "explanation": "AVG ignores NULL values: (10 + 20) / 2."
      },
      {
        "id": "n4q9",
        "q": "What is the main difference between WHERE and HAVING?",
        "answer": "WHERE filters rows; HAVING filters groups.",
        "choices": [
          "WHERE filters rows; HAVING filters groups.",
          "WHERE filters groups; HAVING filters rows.",
          "Both only sort results.",
          "HAVING can never use aggregates."
        ],
        "explanation": "WHERE is evaluated before grouping; HAVING tests group-level conditions."
      },
      {
        "id": "n4q10",
        "q": "What does GROUP BY departmentId with COUNT(*) produce?",
        "answer": "An employee count for each department represented in Employee.",
        "choices": [
          "An employee count for each department represented in Employee.",
          "One row for every employee.",
          "Only departments with no staff.",
          "A single global count only."
        ],
        "explanation": "Grouping creates one result per distinct departmentId in the input."
      },
      {
        "id": "n4q11",
        "q": "Which condition keeps departments with at least five employees?",
        "answer": "HAVING COUNT(*) >= 5.",
        "choices": [
          "HAVING COUNT(*) >= 5.",
          "WHERE COUNT(*) >= 5.",
          "HAVING COUNT(*) = 4.",
          "ORDER BY COUNT(*) >= 5."
        ],
        "explanation": "Group totals belong in HAVING, and at least means greater than or equal."
      },
      {
        "id": "n4q12",
        "q": "What does an INNER JOIN retain?",
        "answer": "Pairs of rows satisfying the join condition.",
        "choices": [
          "Pairs of rows satisfying the join condition.",
          "All unmatched rows from both sides.",
          "Only unmatched left rows.",
          "Only the join-column definitions."
        ],
        "explanation": "Unmatched rows are excluded by an inner join."
      },
      {
        "id": "n4q13",
        "q": "Which join includes departments with zero employees?",
        "answer": "Department LEFT JOIN Employee on department ID.",
        "choices": [
          "Department LEFT JOIN Employee on department ID.",
          "Department INNER JOIN Employee.",
          "Employee INNER JOIN Department.",
          "Department CROSS JOIN Employee."
        ],
        "explanation": "Put the side whose unmatched rows must survive on the left."
      },
      {
        "id": "n4q14",
        "q": "How do you test a missing commission?",
        "answer": "commission IS NULL.",
        "choices": [
          "commission IS NULL.",
          "commission = NULL.",
          "commission = 0.",
          "commission = ''."
        ],
        "explanation": "NULL comparisons use IS NULL or IS NOT NULL."
      },
      {
        "id": "n4q15",
        "q": "Which clause guarantees output ordering?",
        "answer": "ORDER BY.",
        "choices": [
          "ORDER BY.",
          "GROUP BY alone.",
          "WHERE.",
          "SELECT DISTINCT alone."
        ],
        "explanation": "Without ORDER BY, row order is not guaranteed."
      },
      {
        "id": "n4q16",
        "q": "Which query finds employees earning above the overall average?",
        "answer": "WHERE salary > (SELECT AVG(salary) FROM Employee).",
        "choices": [
          "WHERE salary > (SELECT AVG(salary) FROM Employee).",
          "WHERE salary > AVG(salary).",
          "HAVING salary = salary.",
          "WHERE AVG(*) > salary."
        ],
        "explanation": "Compute the aggregate in a subquery, then compare each salary."
      },
      {
        "id": "n4q17",
        "q": "What distinguishes UNION from UNION ALL?",
        "answer": "UNION removes duplicate result rows; UNION ALL retains them.",
        "choices": [
          "UNION removes duplicate result rows; UNION ALL retains them.",
          "UNION ALL always sorts rows.",
          "UNION joins columns horizontally.",
          "UNION allows incompatible column counts."
        ],
        "explanation": "Both combine row sets vertically; duplicate handling differs."
      },
      {
        "id": "n4q18",
        "q": "How should Lab 1 total hours for each project be calculated?",
        "answer": "GROUP BY projNo with SUM(hoursWorked).",
        "choices": [
          "GROUP BY projNo with SUM(hoursWorked).",
          "GROUP BY empID with COUNT(*).",
          "SELECT MAX(empID).",
          "ORDER BY hoursWorked alone."
        ],
        "explanation": "The grouping level must match the requested per-project total."
      },
      {
        "id": "n4q19",
        "q": "How should Lab 1 sort employees by surname then first name?",
        "answer": "ORDER BY lName, fName.",
        "choices": [
          "ORDER BY lName, fName.",
          "ORDER BY fName, lName.",
          "GROUP BY lName.",
          "WHERE lName < fName."
        ],
        "explanation": "Sort keys are applied left to right."
      },
      {
        "id": "n4q20",
        "q": "Why can a right-table WHERE filter undermine a LEFT JOIN?",
        "answer": "It can reject the NULL-extended unmatched rows.",
        "choices": [
          "It can reject the NULL-extended unmatched rows.",
          "It always creates a FULL JOIN.",
          "It removes the need for an ON condition.",
          "It changes all foreign keys."
        ],
        "explanation": "For zero-inclusive counts, put the right-side qualifying predicate in ON when appropriate."
      }
    ]
  },
  {
    "id": 5,
    "title": "DDL, constraints & views",
    "description": "Build reliable tables and understand view behavior.",
    "focus": true,
    "summary": [
      "Use PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL and CHECK to express different rules.",
      "Choose referential actions deliberately: reject, cascade, set NULL or set a valid default.",
      "Simple views may be updatable; grouped or computed results usually do not map directly to one base row."
    ],
    "example": "CREATE TABLE Enrollment (\n studentId INTEGER NOT NULL,\n courseId INTEGER NOT NULL,\n grade VARCHAR(2),\n PRIMARY KEY (studentId, courseId),\n FOREIGN KEY (studentId) REFERENCES Student(studentId),\n FOREIGN KEY (courseId) REFERENCES Course(courseId)\n);",
    "items": [
      {
        "id": "n5q1",
        "q": "Which constraint prohibits missing values?",
        "answer": "NOT NULL.",
        "choices": [
          "NOT NULL.",
          "DEFAULT.",
          "ORDER BY.",
          "GROUP BY."
        ],
        "explanation": "A default supplies an omitted value but does not itself prohibit explicit NULL."
      },
      {
        "id": "n5q2",
        "q": "Which statement changes an existing table structure?",
        "answer": "ALTER TABLE.",
        "choices": [
          "ALTER TABLE.",
          "UPDATE table rows.",
          "SELECT.",
          "COMMIT."
        ],
        "explanation": "ALTER changes the definition; UPDATE changes stored row values."
      },
      {
        "id": "n5q3",
        "q": "Which constraint enforces a positive fee when the fee is present?",
        "answer": "CHECK (fee > 0).",
        "choices": [
          "CHECK (fee > 0).",
          "DEFAULT 0.",
          "ORDER BY fee.",
          "FOREIGN KEY (fee) only."
        ],
        "explanation": "Add NOT NULL too if missing fees must also be rejected; CHECK alone allows UNKNOWN from NULL."
      },
      {
        "id": "n5q4",
        "q": "What does ON DELETE CASCADE do?",
        "answer": "Deletes matching child rows when the parent is deleted.",
        "choices": [
          "Deletes matching child rows when the parent is deleted.",
          "Always deletes the entire child table.",
          "Sets every primary key to NULL.",
          "Blocks every parent deletion."
        ],
        "explanation": "Cascading follows the declared parent-child relationship."
      },
      {
        "id": "n5q5",
        "q": "When is ON DELETE SET NULL appropriate?",
        "answer": "When the child relationship is optional and its FK allows NULL.",
        "choices": [
          "When the child relationship is optional and its FK allows NULL.",
          "When the FK is NOT NULL.",
          "When the child must always have a parent.",
          "When deleting all child records is required."
        ],
        "explanation": "The column constraints must permit the referential action."
      },
      {
        "id": "n5q6",
        "q": "What does CREATE VIEW store for a normal view?",
        "answer": "A query definition.",
        "choices": [
          "A query definition.",
          "A guaranteed independent copy of all results.",
          "Only a numeric index.",
          "A backup of every table."
        ],
        "explanation": "Normal views derive their result from base data when queried."
      },
      {
        "id": "n5q7",
        "q": "What does WITH CHECK OPTION protect?",
        "answer": "Updates through a view must satisfy its qualifying condition.",
        "choices": [
          "Updates through a view must satisfy its qualifying condition.",
          "All SELECT results are sorted.",
          "Every base-table update must use the view.",
          "All views become materialized."
        ],
        "explanation": "It prevents a change through the view from making the affected row fail the view predicate."
      },
      {
        "id": "n5q8",
        "q": "Why is an aggregate view generally not directly updatable?",
        "answer": "A total may not identify a unique base row to change.",
        "choices": [
          "A total may not identify a unique base row to change.",
          "Views cannot contain numbers.",
          "Aggregates always contain primary keys.",
          "The DBMS forbids all views."
        ],
        "explanation": "Changing a SUM does not specify which underlying values should change."
      },
      {
        "id": "n5q9",
        "q": "Which command grants a user SELECT permission?",
        "answer": "GRANT SELECT ON Employee TO reader;",
        "choices": [
          "GRANT SELECT ON Employee TO reader;",
          "REVOKE SELECT ON Employee FROM reader;",
          "DROP VIEW Employee;",
          "SELECT GRANT FROM Employee;"
        ],
        "explanation": "GRANT adds privileges; REVOKE withdraws them."
      },
      {
        "id": "n5q10",
        "q": "Rooms are numbered independently within each hotel. Choose a key.",
        "answer": "(hotelNo, roomNo).",
        "choices": [
          "(hotelNo, roomNo).",
          "roomNo alone.",
          "roomType alone.",
          "price alone."
        ],
        "explanation": "The same room number can occur in different hotels; the pair identifies a room."
      },
      {
        "id": "n5q11",
        "q": "What is a materialized view?",
        "answer": "Stored query results that require maintenance or refresh.",
        "choices": [
          "Stored query results that require maintenance or refresh.",
          "Only a query definition with no stored results.",
          "A foreign key.",
          "A table with no columns."
        ],
        "explanation": "Stored results trade storage and maintenance for potentially faster reads."
      },
      {
        "id": "n5q12",
        "q": "Which command removes a table definition?",
        "answer": "DROP TABLE.",
        "choices": [
          "DROP TABLE.",
          "DELETE without WHERE.",
          "UPDATE.",
          "ROLLBACK."
        ],
        "explanation": "DELETE removes rows but leaves the table structure."
      }
    ]
  },
  {
    "id": 6,
    "title": "Normalization & dependencies",
    "description": "Spot anomalies, find keys and defend your decomposition.",
    "focus": true,
    "summary": [
      "Start with business rules and functional dependencies, not accidental patterns in sample data.",
      "1NF: atomic values. 2NF: no non-prime attribute partially depends on a candidate key.",
      "3NF: for each nontrivial X → A, X is a superkey or A is prime. BCNF requires X to be a superkey.",
      "Decompose without losing information; preserve dependencies where possible."
    ],
    "example": "Lab 2: EmpNo → EmpName, EmpEmail, EmpGrade; EmpGrade → HrlyRate; ProjNo → ProjName; (EmpNo, ProjNo) → HrsWorked.\n\n3NF design: Employee(EmpNo PK, EmpEmail UNIQUE, EmpName, EmpGrade FK), Grade(EmpGrade PK, HrlyRate), Project(ProjNo PK, ProjName), WorksOn(EmpNo PK/FK, ProjNo PK/FK, HrsWorked).",
    "items": [
      {
        "id": "n6q1",
        "q": "What does A → B mean?",
        "answer": "Each A value determines one B value in every valid state.",
        "choices": [
          "Each A value determines one B value in every valid state.",
          "B always determines A.",
          "A and B must have the same value.",
          "A is always a primary key."
        ],
        "explanation": "Functional dependency is a business rule, not merely coincidence in current data."
      },
      {
        "id": "n6q2",
        "q": "What is the practical goal of normalization?",
        "answer": "Reduce unnecessary redundancy and related anomalies.",
        "choices": [
          "Reduce unnecessary redundancy and related anomalies.",
          "Eliminate every foreign key.",
          "Make each table contain one row.",
          "Guarantee no joins are needed."
        ],
        "explanation": "Separate facts according to their dependencies."
      },
      {
        "id": "n6q3",
        "q": "A manager name appears in 100 employee rows and must be changed everywhere. Which anomaly?",
        "answer": "Update anomaly.",
        "choices": [
          "Update anomaly.",
          "Insertion anomaly only.",
          "Deletion anomaly only.",
          "Fan trap."
        ],
        "explanation": "One fact has multiple copies that may be updated inconsistently."
      },
      {
        "id": "n6q4",
        "q": "You cannot record a new department until it has an employee. Which anomaly?",
        "answer": "Insertion anomaly.",
        "choices": [
          "Insertion anomaly.",
          "Update anomaly only.",
          "Chasm trap.",
          "Lost update."
        ],
        "explanation": "A poorly combined relation forces an unrelated fact to exist first."
      },
      {
        "id": "n6q5",
        "q": "Deleting the last employee erases the department address. Which anomaly?",
        "answer": "Deletion anomaly.",
        "choices": [
          "Deletion anomaly.",
          "Partial-key collision.",
          "Dirty read.",
          "Deadlock."
        ],
        "explanation": "Deleting one fact unintentionally destroys another."
      },
      {
        "id": "n6q6",
        "q": "What is required by 1NF?",
        "answer": "One atomic value at each row-column intersection, with no repeating groups.",
        "choices": [
          "One atomic value at each row-column intersection, with no repeating groups.",
          "No foreign keys.",
          "No transitive dependencies at all.",
          "Every column must be numeric."
        ],
        "explanation": "Atomicity is interpreted relative to the intended relational domains."
      },
      {
        "id": "n6q7",
        "q": "With key (studentId, courseId), studentId → studentName is what?",
        "answer": "A partial dependency of a non-prime attribute.",
        "choices": [
          "A partial dependency of a non-prime attribute.",
          "A full dependency on the entire key only.",
          "A join condition only.",
          "A recursive relationship."
        ],
        "explanation": "A proper subset of the composite key determines studentName."
      },
      {
        "id": "n6q8",
        "q": "EmployeeId → departmentId → departmentName illustrates what?",
        "answer": "A transitive dependency.",
        "choices": [
          "A transitive dependency.",
          "A partial dependency on a single-attribute key.",
          "A many-to-many relationship.",
          "A view definition."
        ],
        "explanation": "departmentName depends on the key indirectly through departmentId."
      },
      {
        "id": "n6q9",
        "q": "Which change takes a typical enrollment table toward 2NF?",
        "answer": "Separate student and course facts from enrollment-specific facts.",
        "choices": [
          "Separate student and course facts from enrollment-specific facts.",
          "Remove only transitive dependencies.",
          "Combine all student names into one cell.",
          "Remove the composite key."
        ],
        "explanation": "Student and course descriptions depend on only part of the enrollment key."
      },
      {
        "id": "n6q10",
        "q": "Which redesign removes employee-to-department transitive redundancy?",
        "answer": "Employee(empId, deptId) and Department(deptId, deptName).",
        "choices": [
          "Employee(empId, deptId) and Department(deptId, deptName).",
          "Keep deptName in every employee row.",
          "Delete deptId from every table.",
          "Put all employees in one department column."
        ],
        "explanation": "Department facts belong with the department determinant."
      },
      {
        "id": "n6q11",
        "q": "Does a single-attribute primary key guarantee 3NF?",
        "answer": "No; transitive dependencies can remain.",
        "choices": [
          "No; transitive dependencies can remain.",
          "Yes, always.",
          "Only if the table has no foreign keys.",
          "Only if all values are numbers."
        ],
        "explanation": "A single chosen key does not eliminate non-key-to-non-key dependencies."
      },
      {
        "id": "n6q12",
        "q": "What is an attribute closure X+ used for?",
        "answer": "Finding all attributes functionally determined by X.",
        "choices": [
          "Finding all attributes functionally determined by X.",
          "Counting NULL cells.",
          "Sorting attributes alphabetically.",
          "Deleting redundant rows."
        ],
        "explanation": "Apply dependencies repeatedly; if closure includes every attribute, X is a superkey."
      },
      {
        "id": "n6q13",
        "q": "R(A,B,C,D) has AB → C, C → D, D → A. Which are all candidate keys?",
        "answer": "AB, BC and BD.",
        "choices": [
          "AB, BC and BD.",
          "A and B.",
          "C and D.",
          "AB only."
        ],
        "explanation": "B never appears on a right side, so every key needs B. Pairing it with A, C or D reaches all attributes."
      },
      {
        "id": "n6q14",
        "q": "For that relation, is C → D a BCNF violation?",
        "answer": "Yes, because C is not a superkey.",
        "choices": [
          "Yes, because C is not a superkey.",
          "No, because D is prime.",
          "No, because C is one attribute.",
          "Yes, because every dependency violates BCNF."
        ],
        "explanation": "C+ contains C, D and A, but not B. Prime right-hand attributes may satisfy 3NF, not BCNF."
      },
      {
        "id": "n6q15",
        "q": "What makes a binary decomposition lossless under FDs?",
        "answer": "The shared attributes determine all attributes of at least one component.",
        "choices": [
          "The shared attributes determine all attributes of at least one component.",
          "Both components have equal row counts.",
          "The shared columns have different names.",
          "No attributes are shared."
        ],
        "explanation": "The common attributes must functionally determine one component, under the dependency closure."
      },
      {
        "id": "n6q16",
        "q": "Why is dependency preservation valuable?",
        "answer": "Constraints can be checked on component relations without joining them.",
        "choices": [
          "Constraints can be checked on component relations without joining them.",
          "It removes every constraint.",
          "It guarantees every query is faster.",
          "It forces duplicate attributes everywhere."
        ],
        "explanation": "A lossless decomposition need not preserve all dependencies locally."
      },
      {
        "id": "n6q17",
        "q": "In Lab 2, why separate Grade(EmpGrade, HrlyRate)?",
        "answer": "EmpGrade determines HrlyRate, creating transitive redundancy in Employee.",
        "choices": [
          "EmpGrade determines HrlyRate, creating transitive redundancy in Employee.",
          "Each employee must have a unique rate.",
          "A grade cannot be a foreign key.",
          "Hours worked determine employee grade."
        ],
        "explanation": "Employees of one grade share a rate; store that fact once."
      },
      {
        "id": "n6q18",
        "q": "Under Lab 2's unique-email assumption, what is another WorksOn source candidate key?",
        "answer": "(EmpEmail, ProjNo).",
        "choices": [
          "(EmpEmail, ProjNo).",
          "EmpName alone.",
          "HrlyRate alone.",
          "ProjName alone."
        ],
        "explanation": "If email uniquely identifies an employee, email plus project identifies the employee-project fact."
      }
    ]
  },
  {
    "id": 7,
    "title": "Procedures, triggers & transactions",
    "description": "Connect SQL statements into safe units of work.",
    "focus": true,
    "summary": [
      "A stored procedure is explicitly called; a trigger responds to a database event.",
      "BEGIN TRANSACTION starts a unit; COMMIT completes it; ROLLBACK undoes its changes.",
      "T-SQL and PostgreSQL PL/pgSQL have different procedure and error-handling syntax."
    ],
    "example": "-- SQL Server / T-SQL, conceptual transfer pattern\nBEGIN TRY\n BEGIN TRANSACTION;\n UPDATE Account SET balance = balance - 500 WHERE accountId = 'A';\n UPDATE Account SET balance = balance + 500 WHERE accountId = 'B';\n COMMIT;\nEND TRY\nBEGIN CATCH\n IF XACT_STATE() <> 0 ROLLBACK;\n THROW;\nEND CATCH;\n-- A real transfer also validates accounts, funds, row counts and concurrency.",
    "items": [
      {
        "id": "n7q1",
        "q": "What is a stored procedure?",
        "answer": "A named routine of SQL and procedural statements stored in the database.",
        "choices": [
          "A named routine of SQL and procedural statements stored in the database.",
          "A temporary SELECT result only.",
          "A primary key.",
          "A table alias."
        ],
        "explanation": "Procedures can accept parameters and encapsulate a task."
      },
      {
        "id": "n7q2",
        "q": "How does a trigger differ from a normally called procedure?",
        "answer": "A trigger runs in response to a configured database event.",
        "choices": [
          "A trigger runs in response to a configured database event.",
          "A trigger must be manually called for each row.",
          "A trigger is always a SELECT view.",
          "A trigger replaces all constraints."
        ],
        "explanation": "Triggers can enforce event-driven behavior but should not replace simple declarative constraints unnecessarily."
      },
      {
        "id": "n7q3",
        "q": "Why put a bank debit and credit in one transaction?",
        "answer": "Both changes should commit together or neither should persist.",
        "choices": [
          "Both changes should commit together or neither should persist.",
          "To guarantee every SQL statement runs faster.",
          "To avoid checking balances.",
          "To force both accounts to have identical balances."
        ],
        "explanation": "This is atomicity: prevent a half-completed transfer."
      },
      {
        "id": "n7q4",
        "q": "What does BEGIN TRANSACTION do?",
        "answer": "Starts a transaction boundary for a unit of work.",
        "choices": [
          "Starts a transaction boundary for a unit of work.",
          "Permanently saves changes.",
          "Undoes the last transaction.",
          "Defines a new table."
        ],
        "explanation": "Subsequent changes belong to the unit until completed or rolled back, subject to DBMS behavior."
      },
      {
        "id": "n7q5",
        "q": "What does COMMIT normally mean?",
        "answer": "Successfully complete the transaction and retain its changes.",
        "choices": [
          "Successfully complete the transaction and retain its changes.",
          "Undo all its changes.",
          "Start a stored procedure definition.",
          "Pause without deciding."
        ],
        "explanation": "Committed effects are protected by durability."
      },
      {
        "id": "n7q6",
        "q": "What does ROLLBACK do?",
        "answer": "Undoes changes in the transaction being rolled back.",
        "choices": [
          "Undoes changes in the transaction being rolled back.",
          "Drops all database tables.",
          "Reverses every committed transaction in history.",
          "Only sorts pending results."
        ],
        "explanation": "A normal rollback cannot undo an already committed transaction."
      },
      {
        "id": "n7q7",
        "q": "What is the role of CATCH in the transfer pattern?",
        "answer": "Handle an error and roll back an active transaction.",
        "choices": [
          "Handle an error and roll back an active transaction.",
          "Always commit the debit alone.",
          "Ignore all errors and keep partial updates.",
          "Create an index."
        ],
        "explanation": "Error handling must preserve atomicity rather than silently accept partial work."
      },
      {
        "id": "n7q8",
        "q": "Does an UPDATE matching zero rows necessarily raise an error?",
        "answer": "No; validate the affected-row count when a row must exist.",
        "choices": [
          "No; validate the affected-row count when a row must exist.",
          "Yes, always.",
          "Only a SELECT can match zero rows.",
          "It automatically inserts the missing account."
        ],
        "explanation": "A transaction cannot enforce unstated business requirements by itself."
      },
      {
        "id": "n7q9",
        "q": "In Lab 4, how do you include offices with zero administrative staff?",
        "answer": "LEFT JOIN with the role predicate in ON and COUNT(staffNo).",
        "choices": [
          "LEFT JOIN with the role predicate in ON and COUNT(staffNo).",
          "INNER JOIN with COUNT(*).",
          "Remove the Office table.",
          "Use HAVING COUNT(*) > 0."
        ],
        "explanation": "The left join preserves the office; counting a non-NULL staff key yields zero for no matches."
      },
      {
        "id": "n7q10",
        "q": "Why must an instructor client-limit trigger handle reassignment?",
        "answer": "Moving a client affects both the old and new instructor counts.",
        "choices": [
          "Moving a client affects both the old and new instructor counts.",
          "Only INSERT can ever change a count.",
          "UPDATE cannot affect relationships.",
          "DELETE always increases the count."
        ],
        "explanation": "Derived counts must remain consistent across all events that change the association."
      },
      {
        "id": "n7q11",
        "q": "Can T-SQL TRY/CATCH be pasted unchanged into PostgreSQL?",
        "answer": "No; PostgreSQL uses different procedural syntax.",
        "choices": [
          "No; PostgreSQL uses different procedural syntax.",
          "Yes, every DBMS shares that syntax.",
          "Only if the table has a primary key.",
          "Yes, when all values are integers."
        ],
        "explanation": "The completed Lab 4 uses PL/pgSQL; the course transaction pattern is T-SQL."
      },
      {
        "id": "n7q12",
        "q": "Which T-SQL construct repeats statements while a condition holds?",
        "answer": "WHILE.",
        "choices": [
          "WHILE.",
          "HAVING.",
          "GRANT.",
          "FOREIGN KEY."
        ],
        "explanation": "WHILE is procedural control flow, unlike row filtering with WHERE."
      }
    ]
  },
  {
    "id": 8,
    "title": "Conceptual → logical design",
    "description": "Map relationships and justify your schema.",
    "focus": true,
    "summary": [
      "Conceptual design captures business meaning independently of physical implementation.",
      "Logical design maps the model to relations, keys and integrity constraints.",
      "Validate with normalization AND required user transactions. State assumptions explicitly."
    ],
    "example": "Student(StudentID PK, Name, Email)\nCourse(CourseID PK, CourseName, Credits)\nEnrollment(StudentID PK/FK, CourseID PK/FK, Semester PK, Grade)\n\nAssumption: a student may take a course again in a later semester. If multiple sections or attempts in one semester are allowed, model those too.",
    "items": [
      {
        "id": "n8q1",
        "q": "What is the primary purpose of conceptual design?",
        "answer": "Identify entities, attributes, relationships and business rules.",
        "choices": [
          "Identify entities, attributes, relationships and business rules.",
          "Choose disk page sizes.",
          "Write vendor-specific index syntax.",
          "Tune an execution plan."
        ],
        "explanation": "Conceptual design captures requirements independently of physical implementation."
      },
      {
        "id": "n8q2",
        "q": "What is a main product of relational logical design?",
        "answer": "Relations with keys and constraints.",
        "choices": [
          "Relations with keys and constraints.",
          "A disk purchase order.",
          "Only a screen layout.",
          "Only a network map."
        ],
        "explanation": "Logical design translates the conceptual model into the relational model."
      },
      {
        "id": "n8q3",
        "q": "Which choice belongs to physical design?",
        "answer": "Selecting indexes for the target DBMS workload.",
        "choices": [
          "Selecting indexes for the target DBMS workload.",
          "Identifying that students enroll in courses.",
          "Naming a conceptual relationship.",
          "Deciding whether a course can have many students."
        ],
        "explanation": "Physical design chooses implementation and access structures."
      },
      {
        "id": "n8q4",
        "q": "How is a many-to-many relationship normally mapped?",
        "answer": "Create an associative table with foreign keys to both entities.",
        "choices": [
          "Create an associative table with foreign keys to both entities.",
          "Put a comma-separated list in each parent.",
          "Delete one entity.",
          "Use a foreign key in one parent only."
        ],
        "explanation": "The associative table also stores relationship attributes such as grade."
      },
      {
        "id": "n8q5",
        "q": "How is a multivalued phone attribute normally mapped?",
        "answer": "Create a related table with one phone value per row.",
        "choices": [
          "Create a related table with one phone value per row.",
          "Store all numbers in one comma-separated cell.",
          "Create a fixed set of 30 phone columns.",
          "Ignore every second phone."
        ],
        "explanation": "Separate rows avoid repeating groups and arbitrary limits."
      },
      {
        "id": "n8q6",
        "q": "How can a one-to-one relationship be enforced with a foreign key?",
        "answer": "Make that foreign key UNIQUE, with nullability based on participation.",
        "choices": [
          "Make that foreign key UNIQUE, with nullability based on participation.",
          "Allow unlimited duplicate FK values.",
          "Use ORDER BY.",
          "Use an unvalidated text label."
        ],
        "explanation": "UNIQUE prevents more than one child row from referencing the same parent."
      },
      {
        "id": "n8q7",
        "q": "A student can repeat a course in a different semester. Which key fits Enrollment?",
        "answer": "(StudentID, CourseID, Semester), assuming one enrollment per course per semester.",
        "choices": [
          "(StudentID, CourseID, Semester), assuming one enrollment per course per semester.",
          "StudentID alone.",
          "CourseID alone.",
          "(StudentID, CourseID) regardless of repeats."
        ],
        "explanation": "The key must distinguish each permitted occurrence; more complex offerings may need an offering ID."
      },
      {
        "id": "n8q8",
        "q": "Why validate a schema against required transactions?",
        "answer": "To ensure needed facts and relationship paths can answer real tasks.",
        "choices": [
          "To ensure needed facts and relationship paths can answer real tasks.",
          "To prove all indexes are optimal.",
          "To eliminate all joins.",
          "To require every table to have one row."
        ],
        "explanation": "A normalized schema can still omit a needed relationship or attribute."
      },
      {
        "id": "n8q9",
        "q": "Why review the model with users?",
        "answer": "To check it reflects actual business rules and requirements.",
        "choices": [
          "To check it reflects actual business rules and requirements.",
          "To replace all key constraints with opinions.",
          "To avoid documentation.",
          "To select CPU cache sizes."
        ],
        "explanation": "Domain users can identify mistaken assumptions that formal checks miss."
      },
      {
        "id": "n8q10",
        "q": "When merging local models, what must be reconciled?",
        "answer": "Naming conflicts, overlapping entities and inconsistent rules.",
        "choices": [
          "Naming conflicts, overlapping entities and inconsistent rules.",
          "Only the font sizes.",
          "Only disk filenames.",
          "Only the row order."
        ],
        "explanation": "Two departments may use different names for the same fact or the same name for different facts."
      },
      {
        "id": "n8q11",
        "q": "In the driving-school model, why retain the instructor on each lesson?",
        "answer": "Historical lessons should retain the instructor who actually taught them.",
        "choices": [
          "Historical lessons should retain the instructor who actually taught them.",
          "Current client assignment never changes.",
          "All instructors are interchangeable.",
          "Foreign keys cannot record history."
        ],
        "explanation": "A current assignment alone cannot reconstruct past events after reassignment."
      },
      {
        "id": "n8q12",
        "q": "Why is normalization alone insufficient validation?",
        "answer": "The schema must also support required operations and business constraints.",
        "choices": [
          "The schema must also support required operations and business constraints.",
          "Normalization guarantees all requirements automatically.",
          "Normalization checks only colors.",
          "Every normalized design has no relationships."
        ],
        "explanation": "Use both structural dependency checks and transaction walkthroughs."
      }
    ]
  },
  {
    "id": 9,
    "title": "Physical design & tuning",
    "description": "Choose indexes and controlled redundancy deliberately.",
    "focus": false,
    "summary": [
      "Optimize for the real workload: frequent queries, selective predicates, joins and update rates.",
      "Indexes consume space and must be maintained on writes. Measure their benefit.",
      "Denormalization can reduce read work but creates a consistency-maintenance obligation."
    ],
    "example": "An index on Employee(deptNo) may help selective department lookups and joins. On a tiny table or a query reading most rows, a scan may be cheaper. Compare plans and timings before and after.",
    "items": [
      {
        "id": "n9q1",
        "q": "What should guide index selection?",
        "answer": "The actual query and update workload.",
        "choices": [
          "The actual query and update workload.",
          "Index every column regardless of cost.",
          "Only alphabetical column order.",
          "Only the number of table names."
        ],
        "explanation": "Useful access paths depend on frequent predicates, joins and selectivity."
      },
      {
        "id": "n9q2",
        "q": "What is a cost of adding an index?",
        "answer": "Extra storage and write-maintenance work.",
        "choices": [
          "Extra storage and write-maintenance work.",
          "Automatic loss of every foreign key.",
          "Mandatory duplicate rows.",
          "No ability to query without it."
        ],
        "explanation": "INSERT, UPDATE and DELETE may also need index changes."
      },
      {
        "id": "n9q3",
        "q": "Why might a scan beat an index on a small table?",
        "answer": "Index traversal overhead may exceed reading the few pages.",
        "choices": [
          "Index traversal overhead may exceed reading the few pages.",
          "Small tables cannot have indexes.",
          "Indexes always force sorting.",
          "Scans ignore predicates."
        ],
        "explanation": "An index is an option, not a guarantee of better performance."
      },
      {
        "id": "n9q4",
        "q": "What does a highly selective filter usually do?",
        "answer": "Matches a small fraction of rows.",
        "choices": [
          "Matches a small fraction of rows.",
          "Matches every row.",
          "Removes all conditions.",
          "Makes every value identical."
        ],
        "explanation": "Few matching rows often make an index more attractive."
      },
      {
        "id": "n9q5",
        "q": "What is denormalization?",
        "answer": "Deliberately introducing controlled redundancy for a measured benefit.",
        "choices": [
          "Deliberately introducing controlled redundancy for a measured benefit.",
          "Accidentally losing the primary key.",
          "Converting all values to NULL.",
          "Removing every constraint automatically."
        ],
        "explanation": "It is a design tradeoff after understanding the workload."
      },
      {
        "id": "n9q6",
        "q": "What is a major risk of storing a derived staff count?",
        "answer": "The count can drift from the underlying assignments.",
        "choices": [
          "The count can drift from the underlying assignments.",
          "COUNT can no longer be queried.",
          "Foreign keys stop working.",
          "It always removes the need for triggers or transactions."
        ],
        "explanation": "Every relevant change must maintain the redundant fact consistently."
      },
      {
        "id": "n9q7",
        "q": "Which metric measures completed transactions per unit time?",
        "answer": "Throughput.",
        "choices": [
          "Throughput.",
          "Response time.",
          "Tuple degree.",
          "Foreign-key count."
        ],
        "explanation": "Latency is time per request; throughput is work completed per interval."
      },
      {
        "id": "n9q8",
        "q": "Which metric measures how long a request takes?",
        "answer": "Response time.",
        "choices": [
          "Response time.",
          "Throughput.",
          "Normalization level.",
          "Number of candidate keys."
        ],
        "explanation": "A system can have good throughput but poor individual response time."
      },
      {
        "id": "n9q9",
        "q": "What is horizontal partitioning?",
        "answer": "Splitting rows into subsets.",
        "choices": [
          "Splitting rows into subsets.",
          "Splitting only columns.",
          "Copying every row to every partition.",
          "Replacing a table with one number."
        ],
        "explanation": "Rows are allocated according to a rule such as region or date range."
      },
      {
        "id": "n9q10",
        "q": "What should follow a performance change?",
        "answer": "Measure its effect on representative reads and writes.",
        "choices": [
          "Measure its effect on representative reads and writes.",
          "Assume it helped because it added an index.",
          "Delete backups.",
          "Remove all constraints."
        ],
        "explanation": "A tuning change can help one query while harming others."
      }
    ]
  },
  {
    "id": 10,
    "title": "Transactions & concurrency",
    "description": "Reason about ACID, schedules, locks and deadlocks.",
    "focus": true,
    "summary": [
      "ACID: atomicity, consistency, isolation, durability. Atomicity is the key transfer-exam idea.",
      "Conflicts involve different transactions, the same item and at least one write.",
      "An acyclic precedence graph means conflict serializability. A wait-for graph models blocking, not operation order."
    ],
    "example": "R1(x), R2(x), W1(x), W2(x):\nR1 before W2 gives T1 → T2.\nR2 before W1 gives T2 → T1.\nThe cycle means the schedule is not conflict serializable.\nRead-read pairs do not create conflict edges.",
    "items": [
      {
        "id": "n10q1",
        "q": "Which ACID property means all or nothing?",
        "answer": "Atomicity.",
        "choices": [
          "Atomicity.",
          "Consistency only.",
          "Isolation only.",
          "Durability only."
        ],
        "explanation": "A failed unit must not leave only some of its changes."
      },
      {
        "id": "n10q2",
        "q": "Which property protects committed changes after a crash?",
        "answer": "Durability.",
        "choices": [
          "Durability.",
          "Atomicity only.",
          "Projection.",
          "Optional participation."
        ],
        "explanation": "Recovery mechanisms retain or restore committed effects."
      },
      {
        "id": "n10q3",
        "q": "Which property concerns interference between concurrent transactions?",
        "answer": "Isolation.",
        "choices": [
          "Isolation.",
          "Durability only.",
          "Degree.",
          "Denormalization."
        ],
        "explanation": "The isolation level governs what concurrent effects can be observed."
      },
      {
        "id": "n10q4",
        "q": "Which situation is a lost update?",
        "answer": "One transaction overwrites another's update using a stale value.",
        "choices": [
          "One transaction overwrites another's update using a stale value.",
          "A query reads only committed data.",
          "A table gains an index.",
          "A transaction is deliberately rolled back before writing."
        ],
        "explanation": "Two read-modify-write sequences can overwrite each other without suitable control."
      },
      {
        "id": "n10q5",
        "q": "What is a dirty read?",
        "answer": "Reading a value written by an uncommitted transaction.",
        "choices": [
          "Reading a value written by an uncommitted transaction.",
          "Reading the same committed value twice.",
          "Reading a NULL.",
          "Reading through an index."
        ],
        "explanation": "The writer could roll back, leaving the reader based on a value that never committed."
      },
      {
        "id": "n10q6",
        "q": "Which pair conflicts?",
        "answer": "R1(x) followed by W2(x).",
        "choices": [
          "R1(x) followed by W2(x).",
          "R1(x) followed by R2(x).",
          "W1(x) followed by R2(y), with x distinct from y.",
          "R1(x) followed by W1(x) within the same transaction."
        ],
        "explanation": "Conflicts require different transactions, the same item and at least one write."
      },
      {
        "id": "n10q7",
        "q": "When is a schedule conflict serializable?",
        "answer": "Its precedence graph is acyclic.",
        "choices": [
          "Its precedence graph is acyclic.",
          "Its precedence graph has a cycle.",
          "It contains any interleaving.",
          "It uses exactly two transactions."
        ],
        "explanation": "A topological ordering gives a conflict-equivalent serial order."
      },
      {
        "id": "n10q8",
        "q": "For R1(x), R2(x), W1(x), W2(x), what does the graph contain?",
        "answer": "T1 → T2 and T2 → T1.",
        "choices": [
          "T1 → T2 and T2 → T1.",
          "Only T1 → T2.",
          "Only T2 → T1.",
          "No edges."
        ],
        "explanation": "R1 before W2 and R2 before W1 create opposite directions."
      },
      {
        "id": "n10q9",
        "q": "What is the basic two-phase locking rule?",
        "answer": "After releasing a lock, do not acquire a new lock.",
        "choices": [
          "After releasing a lock, do not acquire a new lock.",
          "Release every lock before reading.",
          "Acquire and release locks in any order.",
          "Never lock written items."
        ],
        "explanation": "The growing phase acquires locks; the shrinking phase releases them."
      },
      {
        "id": "n10q10",
        "q": "Does basic two-phase locking prevent every deadlock?",
        "answer": "No, cyclic waits can still occur.",
        "choices": [
          "No, cyclic waits can still occur.",
          "Yes, always.",
          "Only if transactions use SELECT.",
          "Deadlocks occur only without locks."
        ],
        "explanation": "2PL ensures conflict serializability, but deadlock management is still needed."
      },
      {
        "id": "n10q11",
        "q": "What does Ti → Tj mean in a wait-for graph?",
        "answer": "Ti waits for a lock held by Tj.",
        "choices": [
          "Ti waits for a lock held by Tj.",
          "Ti's write necessarily happened first.",
          "Tj waits for Ti.",
          "Ti has already committed."
        ],
        "explanation": "Do not confuse blocking dependencies with precedence-graph conflicts."
      },
      {
        "id": "n10q12",
        "q": "How can a detected deadlock be broken?",
        "answer": "Abort and roll back a selected victim, releasing its locks.",
        "choices": [
          "Abort and roll back a selected victim, releasing its locks.",
          "Wait forever without intervention.",
          "Commit every partial transaction.",
          "Delete the schema."
        ],
        "explanation": "Victim selection and retry policies resolve the cycle while preserving correctness."
      },
      {
        "id": "n10q13",
        "q": "Which lock pairing is typically compatible on the same item?",
        "answer": "Shared with shared.",
        "choices": [
          "Shared with shared.",
          "Exclusive with shared.",
          "Exclusive with exclusive.",
          "Every pairing."
        ],
        "explanation": "Readers can share; a writer's exclusive lock conflicts with other holders."
      },
      {
        "id": "n10q14",
        "q": "What does strict 2PL add in the usual definition?",
        "answer": "Keep exclusive locks until commit or abort.",
        "choices": [
          "Keep exclusive locks until commit or abort.",
          "Release write locks immediately.",
          "Never take shared locks.",
          "Allow new locks after releasing any lock."
        ],
        "explanation": "Holding write locks until completion prevents access to uncommitted writes; rigorous 2PL holds all locks."
      }
    ]
  },
  {
    "id": 11,
    "title": "Query processing & optimization",
    "description": "Understand how a declarative query becomes an execution plan.",
    "focus": false,
    "summary": [
      "The optimizer chooses an efficient equivalent strategy rather than changing the requested result.",
      "Filter early when valid to shrink intermediate results; retain columns needed by later operations.",
      "Cost estimates depend on statistics, access methods, memory and data distribution."
    ],
    "example": "SELECT e.name\nFROM Employee e JOIN Department d ON e.deptNo = d.deptNo\nWHERE d.deptName = 'IT';\n\nA valid plan can filter Department to IT before joining. Fewer candidate rows can mean less work.",
    "items": [
      {
        "id": "n11q1",
        "q": "What does a SQL user normally specify?",
        "answer": "What result is required.",
        "choices": [
          "What result is required.",
          "Every disk access step.",
          "A fixed physical join algorithm.",
          "The exact buffer replacement order."
        ],
        "explanation": "SQL is declarative; the DBMS chooses execution details."
      },
      {
        "id": "n11q2",
        "q": "What is query optimization trying to choose?",
        "answer": "An efficient execution strategy with equivalent results.",
        "choices": [
          "An efficient execution strategy with equivalent results.",
          "A different business question.",
          "Only the longest SQL text.",
          "A query without any conditions."
        ],
        "explanation": "Optimization preserves semantics while improving resource use."
      },
      {
        "id": "n11q3",
        "q": "Which is the usual processing order?",
        "answer": "Decomposition, optimization, code generation, execution.",
        "choices": [
          "Decomposition, optimization, code generation, execution.",
          "Execution, parsing, optimization, validation.",
          "Commit, rollback, projection, grant.",
          "Index deletion before parsing."
        ],
        "explanation": "Parsing and validation occur before executing the chosen strategy."
      },
      {
        "id": "n11q4",
        "q": "Why push a valid selective predicate below a join?",
        "answer": "To reduce the rows flowing into the join.",
        "choices": [
          "To reduce the rows flowing into the join.",
          "To guarantee a different answer.",
          "To remove required join columns.",
          "To force a Cartesian product."
        ],
        "explanation": "Smaller intermediate relations can lower I/O and CPU work."
      },
      {
        "id": "n11q5",
        "q": "What must projection pushdown preserve?",
        "answer": "Columns needed by later joins, filters and output.",
        "choices": [
          "Columns needed by later joins, filters and output.",
          "Only the first column.",
          "No keys under any circumstances.",
          "Every unused column."
        ],
        "explanation": "Removing a later-needed attribute would change or invalidate the query."
      },
      {
        "id": "n11q6",
        "q": "Why are optimizer statistics useful?",
        "answer": "They help estimate result sizes and access costs.",
        "choices": [
          "They help estimate result sizes and access costs.",
          "They prove every estimate is exact.",
          "They replace stored data.",
          "They remove the need for predicates."
        ],
        "explanation": "Row counts and value distributions guide plan comparisons."
      },
      {
        "id": "n11q7",
        "q": "What can stale statistics cause?",
        "answer": "Poor cardinality estimates and a bad plan choice.",
        "choices": [
          "Poor cardinality estimates and a bad plan choice.",
          "Automatic violations of primary keys.",
          "A changed SELECT meaning.",
          "Guaranteed optimal performance."
        ],
        "explanation": "The optimizer may misjudge how selective a predicate is."
      },
      {
        "id": "n11q8",
        "q": "What distinguishes pipelining from materialization?",
        "answer": "Pipelining passes tuples onward without storing every full intermediate result.",
        "choices": [
          "Pipelining passes tuples onward without storing every full intermediate result.",
          "Pipelining always writes all intermediates to disk.",
          "Materialization means no intermediate storage.",
          "Pipelining changes column values."
        ],
        "explanation": "Some operations can stream, while blocking operations may need buffering."
      },
      {
        "id": "n11q9",
        "q": "What does a nested-loop join do conceptually?",
        "answer": "For each outer row, search matching inner rows.",
        "choices": [
          "For each outer row, search matching inner rows.",
          "Only add numeric columns.",
          "Delete all unmatched base rows.",
          "Always sort both inputs first."
        ],
        "explanation": "An index on the inner input may make repeated lookups efficient."
      },
      {
        "id": "n11q10",
        "q": "What is dynamic optimization?",
        "answer": "Optimizing when a query runs.",
        "choices": [
          "Optimizing when a query runs.",
          "Optimizing only once during initial compilation.",
          "Never using statistics.",
          "Always forcing a full table scan."
        ],
        "explanation": "Static optimization prepares a plan earlier; dynamic optimization can use current information."
      }
    ]
  },
  {
    "id": 12,
    "title": "Recovery & locking granularity",
    "description": "A dedicated recovery note built from the transaction material and Assignment 8.",
    "focus": false,
    "summary": [
      "Fine-grained locks improve concurrency but cost more to manage; coarse locks reduce lock overhead.",
      "Undo reverses incomplete work; redo reapplies changes that recovery must retain.",
      "Write-ahead logging protects recovery information before corresponding data pages reach durable storage."
    ],
    "example": "Failure after COMMIT but before a data page reaches disk: redo may be needed.\nFailure after an uncommitted change reaches disk: undo may be needed.\nThe exact recovery actions depend on buffering and logging policy.",
    "items": [
      {
        "id": "n12q1",
        "q": "What does lock granularity describe?",
        "answer": "The size of the item protected by a lock.",
        "choices": [
          "The size of the item protected by a lock.",
          "The password length.",
          "The number of columns in a key.",
          "The speed of the network."
        ],
        "explanation": "Possible units include database, table, page, row and field."
      },
      {
        "id": "n12q2",
        "q": "What is a tradeoff of finer lock granularity?",
        "answer": "More concurrency but more lock-management overhead.",
        "choices": [
          "More concurrency but more lock-management overhead.",
          "Less concurrency and always less overhead.",
          "No need for a lock manager.",
          "Guaranteed elimination of deadlocks."
        ],
        "explanation": "Smaller units let more unrelated operations proceed but require more locks."
      },
      {
        "id": "n12q3",
        "q": "What can a system crash typically lose?",
        "answer": "Volatile memory contents.",
        "choices": [
          "Volatile memory contents.",
          "Every backup in every location necessarily.",
          "Only table names.",
          "Only foreign-key definitions."
        ],
        "explanation": "Durable data may survive, but buffered changes may not."
      },
      {
        "id": "n12q4",
        "q": "What can media failure require?",
        "answer": "Restore a backup and apply available recovery logs.",
        "choices": [
          "Restore a backup and apply available recovery logs.",
          "Only repeat SELECT.",
          "Only recreate a view.",
          "Always ignore all committed transactions."
        ],
        "explanation": "A damaged data file requires a surviving copy and relevant recovery history."
      },
      {
        "id": "n12q5",
        "q": "What is backward recovery or undo?",
        "answer": "Reverse changes using earlier values where required.",
        "choices": [
          "Reverse changes using earlier values where required.",
          "Reapply only future queries.",
          "Sort the log alphabetically.",
          "Commit incomplete work."
        ],
        "explanation": "Undo restores the effects of an incomplete or rolled-back transaction."
      },
      {
        "id": "n12q6",
        "q": "What is forward recovery or redo?",
        "answer": "Reapply recorded changes that must survive.",
        "choices": [
          "Reapply recorded changes that must survive.",
          "Delete all committed work.",
          "Reverse all queries.",
          "Normalize a damaged table."
        ],
        "explanation": "Redo can restore committed updates not reflected in data pages at failure time."
      },
      {
        "id": "n12q7",
        "q": "What is the write-ahead logging rule?",
        "answer": "Persist necessary log records before the corresponding changed data pages.",
        "choices": [
          "Persist necessary log records before the corresponding changed data pages.",
          "Write data pages first and discard the log.",
          "Store the log only in volatile memory.",
          "Never record transaction IDs."
        ],
        "explanation": "The recovery record must survive before the data change can survive on disk."
      },
      {
        "id": "n12q8",
        "q": "What is the purpose of a checkpoint?",
        "answer": "Reduce recovery work by recording a useful recovery boundary or state.",
        "choices": [
          "Reduce recovery work by recording a useful recovery boundary or state.",
          "Replace every backup.",
          "Commit all future transactions.",
          "Guarantee no crash can occur."
        ],
        "explanation": "Checkpoint details vary; recovery may still need records from before or after it."
      },
      {
        "id": "n12q9",
        "q": "Why record commit markers in a transaction log?",
        "answer": "To help identify successfully completed transactions during recovery.",
        "choices": [
          "To help identify successfully completed transactions during recovery.",
          "To count table columns.",
          "To avoid recording data changes.",
          "To replace all keys."
        ],
        "explanation": "Recovery needs transaction status as well as update records."
      },
      {
        "id": "n12q10",
        "q": "Why are backups still needed when logs exist?",
        "answer": "Logs alone may not reconstruct destroyed data without an appropriate base backup.",
        "choices": [
          "Logs alone may not reconstruct destroyed data without an appropriate base backup.",
          "Logs always contain every historical database page forever.",
          "Backups only improve query sorting.",
          "Logs prevent hardware failure."
        ],
        "explanation": "Backup and log retention together determine recoverability."
      }
    ]
  },
  {
    "id": 13,
    "title": "Warehousing, OLAP & mining",
    "description": "Move from operational records to analytical questions.",
    "focus": false,
    "summary": [
      "A warehouse integrates historical, subject-oriented data for decision support.",
      "Fact tables record measures at a declared grain; dimensions supply descriptive context.",
      "OLAP explores aggregates across dimensions; data mining discovers or predicts patterns."
    ],
    "example": "FactSales(DateKey, ProductKey, StoreKey, Quantity, Revenue)\nDimDate(DateKey, Day, Month, Year)\nDimProduct(ProductKey, Name, Category)\nDimStore(StoreKey, City, Region)\n\nGrain: one daily product-store sales total. Do not mix transaction-level and daily totals in the same measure without a clear model.",
    "items": [
      {
        "id": "n13q1",
        "q": "Which description fits a data warehouse?",
        "answer": "Integrated, subject-oriented, historical data for decision support.",
        "choices": [
          "Integrated, subject-oriented, historical data for decision support.",
          "Only a live transaction lock table.",
          "A single user's temporary text file.",
          "A database with no history."
        ],
        "explanation": "The source describes subject orientation, integration, time variance and nonvolatility."
      },
      {
        "id": "n13q2",
        "q": "Which workload is most typical of OLTP?",
        "answer": "Frequent short operational inserts and updates.",
        "choices": [
          "Frequent short operational inserts and updates.",
          "Only historical multiyear summaries.",
          "Only dimension browsing.",
          "Only discovering customer clusters."
        ],
        "explanation": "OLTP supports day-to-day transactions; OLAP supports analytical exploration."
      },
      {
        "id": "n13q3",
        "q": "What does ETL stand for?",
        "answer": "Extract, transform, load.",
        "choices": [
          "Extract, transform, load.",
          "Execute, test, lock.",
          "Entity, tuple, link.",
          "Estimate, tune, log."
        ],
        "explanation": "ETL moves and prepares source data for an analytical store."
      },
      {
        "id": "n13q4",
        "q": "What usually belongs in a fact table?",
        "answer": "Measures and dimension references at a declared grain.",
        "choices": [
          "Measures and dimension references at a declared grain.",
          "Only long descriptive labels.",
          "Only user passwords.",
          "Only column definitions."
        ],
        "explanation": "Measures such as quantity and revenue are interpreted in dimension context."
      },
      {
        "id": "n13q5",
        "q": "What usually belongs in a dimension table?",
        "answer": "Descriptive context such as product category or region.",
        "choices": [
          "Descriptive context such as product category or region.",
          "Only transaction lock records.",
          "Only aggregate numeric measures.",
          "Only recovery log markers."
        ],
        "explanation": "Dimensions provide attributes for filtering and grouping facts."
      },
      {
        "id": "n13q6",
        "q": "What is the grain of a fact table?",
        "answer": "What one fact row represents.",
        "choices": [
          "What one fact row represents.",
          "The number of indexes.",
          "The font size of a report.",
          "The number of DBMS users."
        ],
        "explanation": "Declare grain before choosing keys and measures to prevent inconsistent aggregation."
      },
      {
        "id": "n13q7",
        "q": "What characterizes a star schema?",
        "answer": "A central fact table linked to dimension tables.",
        "choices": [
          "A central fact table linked to dimension tables.",
          "One table with no keys.",
          "Only recursive relationships.",
          "Every table connected to every other table."
        ],
        "explanation": "The fact-dimension structure supports dimensional analysis."
      },
      {
        "id": "n13q8",
        "q": "What distinguishes a snowflake schema?",
        "answer": "Some dimension information is normalized into related tables.",
        "choices": [
          "Some dimension information is normalized into related tables.",
          "All facts are deleted.",
          "Every dimension has no attributes.",
          "Only one table exists."
        ],
        "explanation": "Snowflaking introduces more dimension tables and joins than a simple star."
      },
      {
        "id": "n13q9",
        "q": "Which OLAP operation moves from monthly totals to yearly totals?",
        "answer": "Roll-up.",
        "choices": [
          "Roll-up.",
          "Drill-down.",
          "Row deletion.",
          "Transaction rollback."
        ],
        "explanation": "Roll-up aggregates to a coarser level; drill-down moves toward detail."
      },
      {
        "id": "n13q10",
        "q": "How does data mining differ from ordinary OLAP browsing?",
        "answer": "It seeks patterns or predictive models from data.",
        "choices": [
          "It seeks patterns or predictive models from data.",
          "It only formats known totals.",
          "It must delete the source database.",
          "It is identical to a foreign-key check."
        ],
        "explanation": "Mining can find associations, classifications or clusters beyond simple summaries."
      }
    ]
  },
  {
    "id": 14,
    "title": "Distributed databases",
    "description": "Follow data across sites without losing its meaning.",
    "focus": false,
    "summary": [
      "A distributed database is logically related data physically placed across networked sites.",
      "Fragmentation divides data; replication creates copies; allocation chooses where they live.",
      "Transparency hides distribution details, but network cost and coordinated consistency remain real."
    ],
    "example": "Horizontal fragments: Customer_East and Customer_West partition customers by region.\nVertical fragments: CustomerContact(id, email) and CustomerProfile(id, preferences) split attributes and retain an identifier for reconstruction.",
    "items": [
      {
        "id": "n14q1",
        "q": "What defines a distributed database?",
        "answer": "Logically related data physically distributed across networked sites.",
        "choices": [
          "Logically related data physically distributed across networked sites.",
          "Any central database with a remote web client.",
          "A single local spreadsheet.",
          "Any table with two indexes."
        ],
        "explanation": "Remote access alone is distributed processing, not necessarily distributed data storage."
      },
      {
        "id": "n14q2",
        "q": "What is a homogeneous DDBMS?",
        "answer": "Sites use the same DBMS product.",
        "choices": [
          "Sites use the same DBMS product.",
          "Every site must store identical rows.",
          "Sites cannot communicate.",
          "Sites must all use different data models."
        ],
        "explanation": "Homogeneity concerns the DBMS environment, not identical data allocation."
      },
      {
        "id": "n14q3",
        "q": "What is a heterogeneous DDBMS?",
        "answer": "Sites may use different DBMS products or models.",
        "choices": [
          "Sites may use different DBMS products or models.",
          "Only one physical site exists.",
          "All sites must use the same vendor.",
          "Every table is read only."
        ],
        "explanation": "Interoperability and translation become more complex."
      },
      {
        "id": "n14q4",
        "q": "What is horizontal fragmentation?",
        "answer": "Dividing a relation into row subsets.",
        "choices": [
          "Dividing a relation into row subsets.",
          "Dividing only its columns.",
          "Copying the full relation everywhere.",
          "Removing its key."
        ],
        "explanation": "Selection predicates typically define horizontal fragments."
      },
      {
        "id": "n14q5",
        "q": "What is vertical fragmentation?",
        "answer": "Dividing attributes into fragments while retaining reconstruction identifiers.",
        "choices": [
          "Dividing attributes into fragments while retaining reconstruction identifiers.",
          "Dividing rows by city only.",
          "Copying every table unchanged.",
          "Sorting rows across disks."
        ],
        "explanation": "A key or tuple identifier usually links the column fragments."
      },
      {
        "id": "n14q6",
        "q": "What is replication?",
        "answer": "Keeping copies of data at multiple sites.",
        "choices": [
          "Keeping copies of data at multiple sites.",
          "Splitting attributes without copies.",
          "Deleting all remote data.",
          "Using only a central client."
        ],
        "explanation": "Replication may improve availability and reads but complicates updates."
      },
      {
        "id": "n14q7",
        "q": "Which is a key fragmentation correctness requirement?",
        "answer": "The original relation can be reconstructed from its fragments.",
        "choices": [
          "The original relation can be reconstructed from its fragments.",
          "Every fragment has the same size.",
          "No fragment contains an identifier.",
          "Fragments must have unrelated schemas."
        ],
        "explanation": "Completeness and reconstructability preserve the original information; disjointness is also considered."
      },
      {
        "id": "n14q8",
        "q": "What does location transparency hide?",
        "answer": "The site where data resides.",
        "choices": [
          "The site where data resides.",
          "Whether data has a type.",
          "All business rules.",
          "The identity of every column."
        ],
        "explanation": "Applications can use logical names rather than hard-coded physical locations."
      },
      {
        "id": "n14q9",
        "q": "What is an important extra cost in distributed query processing?",
        "answer": "Transferring data over the network.",
        "choices": [
          "Transferring data over the network.",
          "Only local variable declarations.",
          "Only SQL text length.",
          "Only column aliases."
        ],
        "explanation": "Shipping fewer tuples can matter more than reducing a small local computation."
      },
      {
        "id": "n14q10",
        "q": "Which tradeoff comes with distributed databases?",
        "answer": "Local autonomy and availability benefits alongside coordination complexity.",
        "choices": [
          "Local autonomy and availability benefits alongside coordination complexity.",
          "Guaranteed zero network failures.",
          "No need for security.",
          "Automatic perfect consistency without coordination."
        ],
        "explanation": "Distribution adds failure modes and cross-site management work."
      }
    ]
  },
  {
    "id": 15,
    "title": "Objects in databases",
    "description": "Compare relational extensions with persistent objects.",
    "focus": false,
    "summary": [
      "Object identity distinguishes an object independently of the values of its attributes.",
      "Encapsulation, inheritance and complex types support richer application models.",
      "An ORDBMS extends relational capabilities; an OODBMS persists objects more directly."
    ],
    "example": "An Address type can group street, city and postal code. A multimedia object may combine data with operations. An object identifier represents identity even when the object’s descriptive values change.",
    "items": [
      {
        "id": "n15q1",
        "q": "What is object identity?",
        "answer": "An object's identity independent of its current attribute values.",
        "choices": [
          "An object's identity independent of its current attribute values.",
          "Only the sum of numeric attributes.",
          "Always a person's name.",
          "Only its screen position."
        ],
        "explanation": "Two objects can hold the same values yet have different identities."
      },
      {
        "id": "n15q2",
        "q": "What is encapsulation?",
        "answer": "Bundling state with operations and controlling access to that state.",
        "choices": [
          "Bundling state with operations and controlling access to that state.",
          "Putting every column into a public text field.",
          "Removing all behavior.",
          "Copying all objects into one row."
        ],
        "explanation": "Encapsulation defines an interface to an object's internal representation."
      },
      {
        "id": "n15q3",
        "q": "What does inheritance support?",
        "answer": "Subtypes reuse and specialize supertype properties or behavior.",
        "choices": [
          "Subtypes reuse and specialize supertype properties or behavior.",
          "Every object having the same values.",
          "Removal of all type relationships.",
          "No code reuse."
        ],
        "explanation": "A subtype can inherit common features and add specialized ones."
      },
      {
        "id": "n15q4",
        "q": "What is polymorphism in this context?",
        "answer": "A common operation interface can have type-specific behavior.",
        "choices": [
          "A common operation interface can have type-specific behavior.",
          "Every object must have one identical method implementation.",
          "All keys must be integers.",
          "Every method creates a new table."
        ],
        "explanation": "The actual type can determine the applicable operation implementation."
      },
      {
        "id": "n15q5",
        "q": "What does an object-relational DBMS do?",
        "answer": "Extends relational systems with richer object-related types and features.",
        "choices": [
          "Extends relational systems with richer object-related types and features.",
          "Eliminates all relations by definition.",
          "Stores only plain text files.",
          "Removes SQL completely by definition."
        ],
        "explanation": "ORDBMS features may include user-defined types, collections and inheritance."
      },
      {
        "id": "n15q6",
        "q": "What does an object-oriented DBMS primarily support?",
        "answer": "Persistent objects with database services.",
        "choices": [
          "Persistent objects with database services.",
          "Only transient in-memory objects.",
          "Only spreadsheet formulas.",
          "Only unstructured log text."
        ],
        "explanation": "Persistence must be combined with capabilities such as transactions, recovery and querying."
      },
      {
        "id": "n15q7",
        "q": "What is impedance mismatch?",
        "answer": "The mismatch between application objects and relational representation.",
        "choices": [
          "The mismatch between application objects and relational representation.",
          "Only a slow network cable.",
          "Only a duplicate foreign key.",
          "A transaction deadlock."
        ],
        "explanation": "Mapping identity, references and complex structures between models can require extra code."
      },
      {
        "id": "n15q8",
        "q": "Which application illustrates complex object needs?",
        "answer": "CAD models with nested components and versions.",
        "choices": [
          "CAD models with nested components and versions.",
          "Only a two-column lookup of state codes.",
          "Only a single integer counter.",
          "Only a boolean setting."
        ],
        "explanation": "Design models can have rich structure, versions and relationships."
      },
      {
        "id": "n15q9",
        "q": "What is a user-defined type?",
        "answer": "An application-specific type defined in addition to built-in types.",
        "choices": [
          "An application-specific type defined in addition to built-in types.",
          "A mandatory NULL value.",
          "A table alias only.",
          "A fixed SQL keyword that cannot be extended."
        ],
        "explanation": "UDTs can express richer domain structures, depending on the DBMS."
      },
      {
        "id": "n15q10",
        "q": "Does persisting objects remove the need for transactions?",
        "answer": "No; concurrent changes and failures still require control.",
        "choices": [
          "No; concurrent changes and failures still require control.",
          "Yes, objects never fail.",
          "Yes, object identity guarantees atomicity.",
          "Only if all objects have methods."
        ],
        "explanation": "Object-oriented storage still needs consistency, isolation and recovery mechanisms."
      }
    ]
  }
];
