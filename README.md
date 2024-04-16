# Calculator App

This is a simple calculator web application built with HTML and CSS. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Clean and modern design
- Responsive layout for different screen sizes
- User-friendly interface

## Technologies Used

- HTML
- CSS (styles are in the `styles.css` file)
- JavaScript (logic is in the `cgpa_calculator.js` file)
- Node.js (for backend server logic)
- Express.js (for routing and handling HTTP requests)
- MySQL (for storing user data and CGPA calculations)

## Usage

1. Clone the repository to your local machine.
2. Install Node.js and MySQL if not already installed.
3. Create a MySQL database and import the necessary tables. You can find the SQL schema in the `database_schema.sql` file.
4. Update the MySQL connection details in the `config.js` file.
5. Run `npm install` to install the required Node.js packages.
6. Run `node app.js` to start the server.
7. Open your web browser and navigate to `http://localhost:3000` to access the CGPA calculator.

## Form Validation

- The name field in the login form accepts alphabetic characters only.
- The USN field in the login form requires a valid format: [0-9]{1}[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{3}.
- The grade field in the CGPA form accepts grades according to the VTU grade system.

## Database Structure

The MySQL database should have the following tables:

1. `users`: Contains user information such as name, USN, and login credentials.
2. `grades`: Stores grades and credits for each subject along with the associated user.

## API Endpoints (Express Routes)

- `POST /login`: Handles user login and authentication.
- `POST /calculate`: Receives grade and credit inputs for CGPA calculation and stores data in the database.
- `GET /grades/:userId`: Retrieves grades and credits for a specific user from the database.

## Credits

This CGPA calculator is developed as part of a project for educational purposes.

---

For more detailed instructions on setting up the Node.js server, MySQL database, and configuring the application, please refer to the source code files and documentation provided in the repository.

