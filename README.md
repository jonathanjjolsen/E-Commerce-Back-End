# E-Commerce Backend

## Description:
This application is a CLI tool used to manipulate the data relating to a company's merchandise stock. The user can utilize different end points to retrieve, add, update, or delete different tables held inside the database. This includes but would not be limited too, Categories, Products, and Tags associated with each. In order to make full use of this application the user needs to first install Insomnia to test the different end-points. More details on installation and utilization below.

## Table of Contents:
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Utilized Programs](#Utilized-Programs)
- [What I Learned](#What-I-Learned)
- [Author](#Author)

## The Challenge

### User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

### Screenshot:
![](./assets/E-Commerce-Screenshot.png)

## Usage Information

### Installation:
1. Navigate to repository linked below
2. Clone the repo to local storage
3. After opening the application, open the terminal and install necessary packages using "npm i"
4. Install Insomnia
5. Start the server using the "npm start" script
6. Test API endpoints in Isomnia at http://localhost:3000

### [GitHub Repository](https://github.com/jonathanjjolsen/E-Commerce-Back-End)

### Endpoints:

#### GET:
&emsp;/api/products - get all products
<br/>&emsp;/api/products/:id - get single product by ID
<br/>&emsp;/api/categories - get all categories
<br/>&emsp;/api/categories/:id - get single category by ID
<br/>&emsp;/api/tags - get all tags
<br/>&emsp;/api/tags/:id - get tag category by ID

#### POST:
&emsp;/api/products - create new product
<br/>&emsp;/api/categories - create new category
<br/>&emsp;/api/tags - create new tag

#### PUT:
&emsp;/api/products/:id - update a product by ID
<br/>&emsp;/api/categories/:id - update a category by ID
<br/>&emsp;/api/tags/:id - update a tag by ID

#### DELETE:
&emsp;/api/products/:id - delete a product by ID
<br/>&emsp;/api/categories/:id - delete a category by ID
<br/>&emsp;/api/tags/:id - delete tag by ID


### Walkthrough Video:
Click [HERE](https://drive.google.com/file/d/1qnS8kpimLPp6a_8UqeHqnFdiREoIK3BE/view) to watch!

## Utilized Programs
- Node.js: [20.3.0](https://nodejs.org/en)
- MySql: [2.1.0](https://www.mysql.com/)
- Sequelize: [7.3.1](https://www.npmjs.com/package/mongoose)
- Express.js: [1.0.0](https://expressjs.com/)
- Insomnia: Website [Link](https://insomnia.rest/)

## What I Learned
- How to build a database using a Relational Database Management style structuring
- How to effectivley mangage CRUD operations and endpoints
- How to test endpoints using Insomnia
- How to interact with a MySql Database using Sequelize for schema creation
- How to manipulate the contents of a DB using Sequelize and Express

## Author
Follow me on GitHub at [Jonathan Olsen](https://github.com/jonathanjjolsen)!


