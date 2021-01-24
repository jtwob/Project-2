-- Test data that can put inserted into mySQL workbench

INSERT INTO users (name, email, password, createdAt, updatedAt)
VALUE
("Nhi Danis", "nhi@cool.com", "asdfasdfs", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("James Totah", "james@yahoo.com", "asdfasdfasd", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO connections (name, level, role, industry, company, cost, UserID, createdAt, updatedAt)
VALUE
("Chris Evans", "VP", "Engineering", "Food and Bev", "Pepsi", 20.00, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("David Lee", "Manager", "Purchasing", "Electronics", "Samsung", 30.00, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Angela Yung", "C-suite", "Executive Officer", "Tech", "Facbook", 2000.00, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
