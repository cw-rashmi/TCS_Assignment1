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

* The details of the present  can be seen in the Get All details tab:
![The Borrower Request image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots/details.png)

* In order to add new borrower request one can fill details in the Add New Borrow Request Details Tab and press Create button:
![The Borrower Request home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots/add.png)

* The New Borrower Request details then can be checked in the Get Request Details page

* To edit the presentborrow request details the Update Request Details tab is created. The details can be filled in the respective columns and then the corresponding Edit button from the row for which the details need to be updated can be pressed. The updated changes then can be verified in the Get Requset Details tab.
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_3/screenshots/update.png)

* To delete the existing requests the corresponding delete button from the row need to be pressed:
![The home page image is not found](https://github.com/cw-rashmi/TCS_Assignment1/blob/master/Program_1/screenshots/delete.png)
