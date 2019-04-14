# TCS Assignment Program 3-Borrower Request

## Getting Started

The Program is developed using node.js and MongoDB. The pragram provides web page interface to perform different operations. The schema used for the database is

| Field Name       | Data Type         |
| ------------- |:-------------:|
| requestId     | byte32 | 
| account      | int      |  
| borrowerName | string |
| requestedAmount | uint256 |
| location | string |
| mobile | uint256      | 
| status | enum      | 

The operations performed are:

* Initialize maximum amount that can be borrowed for each account to be 10000 using constructor
* Declare a mapping that tracks total user requested amount(Implement this logic when a borrow request is created).
* To create borrower request with open status.
* To get borrower request details
* To update the requested amount for a specific borrower request

### Prerequisites

In order to run this program one need to install node.js and mongodb server

 Set npm of packages used are:
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
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots /home.png)

* The details of the present students can be seen in the Get All details tab:
![The Student Details image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots/details.png)

* In order to add new student one can fill student details in the Add Student Details Tab and press Create button:
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots/add.png)

* The New Student details then can be checked in the Get All Details page

* To edit the present student details the Update Student Details tab is created. The student details can be filled in the respective columns and then the corresponding Edit button from the row of the student for which the details need to be updated can be pressed. The updated changes then can be verified in the Get All Details tab.
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots/update.png)

* To delete the existing students the corresponding delete button from the row need to be pressed:
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_1/screenshots/delete.png)
