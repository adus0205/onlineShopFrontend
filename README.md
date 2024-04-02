# Online Shop
> This is a fullstack online store project. The application includes the basic functions of an online store, as well as those that are a bit more advanced. There is integration with a payment gateway in this application, sending emails and much more.

The application in a nutshell has such functionalities:

On the administrative side:

  - Add, edit and delete products.
  - Add, edit and delete categories
  - Order management, including exporting orders to CSV file and viewing sales statistics in the form of a chart
  - Moderation of user reviews (approval, deletion)
    
From the user side:

  - Viewing products
  - Searching for products by category
  - Creating orders (adding products to cart, deleting, ordering)
  - Adding product reviews
  - Viewing the list of your orders
  - Email notifications
    
In a nutshell, this is the outline of the application. There is also a mechanism for registration, login and password reminders.

The default login is: admin
Default password is: test

## Technologies Used
  - Npm - version 9.3.1
  - Node.js - version 18.14.1
  - Angular CLI - version 16.2.12
  - Angular Material - version 15.2.1
  - Chart.js - version 4.4.1
  - Others, which can be seen in the package.json file

## Setup
  - Clone this repository to your IDE (https://github.com/adus0205/onlineShopFrontend.git)
  - Go to your project folder
  - Run command
```
npm install
```
  - And start the application
```
npm run dev
```
  - The client application runs on localhost:4200. The administrative application is available at localhost:4200/admin
  - Default login to admin website: login: admin, password: test
