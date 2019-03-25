# TCS Assignment Program 1-Student Details

## Getting Started

The Program is developed using node.js and MongoDB. The pragram provides web page interface to perform different operations. The schema used for the database is

\begin{table}[]
\centering
\caption{My caption}
\label{my-label}
\begin{tabular}{|l|l|l|}
\hline
\textbf{Field Name} & \textbf{Data Type} \\ \hline
StudentId     & byte32  \\ \hline
StudentName     & string \\ \hline
Address     & string \\ \hline
City     & string \\ \hline
\end{tabular}
\end{table}

The operations performed are:

-Adding the new student details with StudentId as unique field
-Get the details of added student
-Updating the student details
-Get the updated student details

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

### Installing

First run app.js file from command prompt.
The command used for running the file is

```
node app
```

The program is configured to accept requests from localhost and port 3000. So just open brower of any choice and run https://localhost:3000

The home page:
