// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
    const employees = []; //empty array to add information
    let moreEmployees = true; // boolean function to start a loop "add more employees"

    while (moreEmployees) {
        const firstName = prompt("Please enter first name");
        const lastName = prompt("Please enter last name");
        const salary = parseFloat(prompt("Please enter salary")); // variables added with prompts to store main information when the loop starts

        if (firstName && lastName && !isNaN(salary)) {
            employees.push({ firstName, lastName, salary });
        } else {
            alert("Invalid input :("); // invalid alert if input is not right or there is missing information
        }

        moreEmployees = confirm("Add another employee?") //confirmation prompt to continue or stop the loop

    }

    if (employees.length === 0) {
        console.log("No employees were added."); // alert created if loop ends with no data
    }

    return employees; // once the while loop has ended, return inputted data
}
// Display the average salary
const displayAverageSalary = function (employeesArray) {
    // TODO: Calculate and display the average salary
    if (employeesArray.length === 0) {
        console.log("No employees were added")
        return;
    } // first if statement to show an error if no employees were added

    let sum = 0;
    for (let i = 0; i < employeesArray.length; i++) {
        sum += employeesArray[i].salary;
    } // created sum to add the salary by the length of the inputted array

    const averageSalary = sum / employeesArray.length; // averageSalary = the sum (total) divided by the array length
    console.log(`The average salary is ${averageSalary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}`);

    // added styling as per display rules already created below - LINE 102!! 
    // salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
    //    style: "currency",
    //    currency: "USD"

    return averageSalary;
    //display average salary value once for loop has ended
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    if (employeesArray.length === 0) {
        console.log("No employee to display, please add employee")
        return; // another alert, if no employee data is inputted
    }
    const randomIndex = Math.floor(Math.random() * employeesArray.length); // created to make a random Index formula which is referenced below
    const randomEmployee = employeesArray[randomIndex]; // now the randomEmployee variable can use randomIndex to pull random data in employees array

    console.log(`Our random employee today is ${randomEmployee.firstName} ${randomEmployee.lastName} with a salary of ${randomEmployee.salary}`)
    // console log on the random employee details- here I'm calling on the variable randomEmployee as well as 
    // the specific variable inside, aka the firstName, lastName and Salary
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