const { Client } = require('pg')
const inquirer = require('inquirer')

// import database credentials from .env
require('dotenv').config()

const PORT = process.env.PORT || 3001

// database login credentials
const db = new Client({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'employees_db'
})

// connect to database
db.connect((err) => {
  if (err) throw err
  console.log('Connected to Database')
  inquireMenu()
})

// create menu interface for navigating database
function inquireMenu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Execute command:',
      choices: [
        'View all departments',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update and employee role',
        'Exit'
      ]
    }
    // execute menu functions based on selection
  ]).then((answer) => {
    switch (answer.choice) {
      case 'View all departments':
        viewAllDepartments()
        break
      case 'View all employees':
        viewAllEmployees()
        break
      case 'Add a department':
        addDepartment()
        break
      case 'Add a role':
        addRole()
        break
      case 'Add an employee':
        addEmployee()
        break
      case 'Update an employee role':
        updateEmployeeRole()
        break
      case 'Exit':
        db.end()
        break
    }
  })
}

// view all departments
const viewAllDepartments = async () => {
  db.query('SELECT * FROM department', (err, { rows }) => {
    if (err) throw err
    console.table(rows)
    inquireMenu()
  })
}

// view all employees
const viewAllEmployees = () => {
  db.query('SELECT * FROM employee', (err, { rows }) => {
    if (err) throw err
    console.table(rows)
    inquireMenu()
  })
}

// add a department to department table
const addDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'Enter new department name'
    },
  ]).then((answer) => {
    db.query('INSERT INTO department (name) VALUES ($1)', [answer.department], (err, res) => {
      console.log(`${answer.department} added to Department table`)
      inquireMenu()
    })
  })
}

// add a role to role table
const addRole = () => {

}

// add an employee to employee table
const addEmployee = () => {

}

// edit employee role
const updateEmployeeRole = () => {

}
