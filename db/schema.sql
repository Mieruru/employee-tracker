-- database setup
--drop the database if it already exists
DROP DATABASE IF EXISTS employees_db;

-- create new database
CREATE DATABASE employees_db;

-- connect to database
\c employees_db;


-- table setup
-- drop tables if they already exist
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

-- table creation

-- department: requires id and name
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

-- role: requires id, title, salary, department_id
-- foreign key: department_id
CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- employee: requires id, first_name, last_name, role_id, manager_id
-- foreign key: role_id, manager_id (as another employee)
CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_nameVARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER
  FOREIGN KEY (role_id) REFERENCES role(id)
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);