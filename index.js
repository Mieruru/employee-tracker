const { Client } = require('pg')
const inquirer = require('inquirer')
require('dotenv').config()

const PORT = process.env.PORT || 3001

// Connect to database
const db = new Client({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'employees_db'
})

db.connect((err) => {
  if (err) throw err
  console.log('Connected to Database')
  inquireMenu()
})

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
  ])
    .then((answer) => {
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

const viewAllDepartments = () => {

}

const viewAllEmployees = () => {

}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const updateEmployeeRole = () => {

}