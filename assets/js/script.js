// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
    // TODO: Get user input to create and return an array of employee objects
    const employees = []; //empty array to add information
    let moreEmployees = true; // boolean function to start a loop "add more employees"

    while (moreEmployees) {
        const firstName = prompt("Please enter first name");
        const lastName = prompt("Please enter last name");
        const salary = parseFloat(prompt("Please enter salary")); // variables added with prompts to store main information when the loop starts

        if (firstName && lastName && !isNaN(salary)) {
            employees.push({ firstName, lastName, salary });
        } else {
            alert("Invalid input :(");
        }

        moreEmployees = confirm("Add another employee?")

    }

    if (employees.length === 0) {
        console.log("No employees were added.");
    }

    return employees;
}
// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    if(employeesArray.length === 0) {
        console.log("No employees were added")
        return;
      } // first if statement to show an error if no employees were added
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
        const currentEmployee = employeesArray[i];

        const newTableRow = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = currentEmployee.firstName;
        newTableRow.append(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = currentEmployee.lastName;
        newTableRow.append(lastNameCell);

        const salaryCell = document.createElement("td");
        // Format the salary as currency
        salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        newTableRow.append(salaryCell);

        employeeTable.append(newTableRow);
    }
}

const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    });

    displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);