# TCS Assignment Program 4-Employee Details

## Getting Started

The Program is developed using node.js and MongoDB. The pragram provides web page interface to perform different operations. The schema used for the database is

| Field Name       | Data Type         |
| ------------- |:-------------:|
| EmployementId     | byte32 | 
| EmployementName      | string      |  
| Address | string      | 
| City | string      | 

The operations performed are:

* Adding the new employee details with StudentId as unique field
* Get the details of added employee
* Updating the employee details
* Get the updated employee details

### Prerequisites

In order to run this program one need to install node.js and mongodb server

 Set of npm packages used are:
* mongodb
* express
* body-parser
* path

The command used for installing the packages is 
```
npm install package-name
```
Packages are already uploaded in the node_modules folder and no need to install the packages to run the code

## Running the tests

First run app.js file from command prompt.
The command used for running the file is

```
node app
```

* The program is configured to accept requests from localhost and port 3000. So just open brower of any choice and run https://localhost:3000

* The home page:
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_2/screenshots/home.png)

* The details of the present employee can be seen in the Get All details tab:
![The Student Details image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_2/screenshots/details.png)

* In order to add new employee one can fill student details in the Add Student Details Tab and press Create button:
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_2/screenshots/add_new.png)

* The Newly added Employee details then can be checked in the Get All Details page

* To edit the present employee details the Update Employee Details tab is created. The employee details can be filled in the respective columns and then the corresponding Edit button from the row of the employee for which the details need to be updated can be pressed. The updated changes then can be verified in the Get All Details tab.
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_2/screenshots/edit.png)

* To delete the existing employee the corresponding delete button from the row need to be pressed:
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_2/screenshots/delete.png)
