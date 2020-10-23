DROP TABLE IF EXISTS SPJ;
DROP TABLE IF EXISTS Supplier;
DROP TABLE IF EXISTS Job;
DROP TABLE IF EXISTS Part;

CREATE TABLE Supplier (
   id INTEGER PRIMARY KEY,
   name VARCHAR(15),
   status INTEGER
);

CREATE TABLE Job (
   id INTEGER PRIMARY KEY,
   name VARCHAR(15),
   city VARCHAR(15)
);

CREATE TABLE Part (
   id INTEGER PRIMARY KEY,
   name VARCHAR(15),
   color VARCHAR(10),
   weight INTEGER
);

CREATE TABLE SPJ (
   sid INTEGER REFERENCES Supplier(id),
   pid INTEGER REFERENCES Part(id),
   jid INTEGER REFERENCES Job(id),
   transDate DATE,
   quantity INTEGER,
   PRIMARY KEY (sid,pid,jid,transDate)
);


INSERT INTO Supplier VALUES (1, 'Acme', 1);
INSERT INTO Supplier VALUES (2, 'Hasbro', 1);
INSERT INTO Supplier VALUES (3, 'Ronco', 0);

INSERT INTO Part VALUES (1, 'widget', 'black', 10);
INSERT INTO Part VALUES (2, 'widget', 'red', 10);
INSERT INTO Part VALUES (3, 'thingamajig', 'red', 1);
INSERT INTO Part VALUES (4, 'dohinky', 'black', 5);

INSERT INTO Job VALUES (1, 'Calvin FAC', 'Grand Rapids');
INSERT INTO Job VALUES (2, 'Spectrum Health', 'Grand Rapids');
INSERT INTO Job VALUES (3, 'Taj Mahal', 'Agra');

INSERT INTO SPJ VALUES (1, 1, 1, '15-march-2011', 10);
INSERT INTO SPJ VALUES (1, 1, 1, '16-april-2011', 5);
INSERT INTO SPJ(sid, pid, jid, transdate) VALUES (3, 4, 1, '16-march-2011');
