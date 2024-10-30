-- connect to database
\c employees_db;

-- seed department data
INSERT INTO department (name)
VALUES
('Checkout'),
('Customer Service'),
('Human Resources'),
('Inventory'),
('IT'),
('Sales'),
('Warehouse');

-- seed role data
INSERT INTO role (title,department_id,salary)
VALUES
('Asset Protection', 50000, 2),
('Breakdancing Guy', 90001, 6),
('Cashier', 45000, 1),
('Customer Service Representative', 40000, 2),
('Driver', 47000, 7),
('Janitor', 35000, 7),
('Salesman', 60000, 6),
('Security', 67000, 3),
('Stocker', 38000, 4),
('Systems Technician', 78000, 5);

-- seed employee data
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES
('The', 'Dude', 2, NULL);
('Christopher', 'Hemsworth', 1, 1),
('Gary', 'Oldman', 1, 1),
('Childish', 'Gambino', 4, 1),
('Christian', 'Bale', 6, 1),
('Dwayne', 'Johnson', 9, 1),
('Heath', 'Ledger', 4, 1),
('Jack', 'Nicholson', 8, 1),
('Jenna', 'Ortega', 10, 1),
('Jennifer', 'Anniston', 9, 1),
('Jennifer', 'Lawrence', 7, 1),
('Kate', 'Beckinsale', 6, 1),
('Leeroy', 'Jenkins', 3, 1),
('Mark', 'Hamill', 5, 1),
('Tilda', 'Swinton', 4, 1),
