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

I don't know how long the application will run, but there is a demo on display, available at: https://shopfrontend-production-f14c.up.railway.app/

And for the administrator: https://shopfrontend-production-f14c.up.railway.app/admin

The default login is: admin
Default password is: test
Table of Contents
Technologies Used
Screenshots
Setup
Contact

## Technologies Used
  - Npm - version 9.6.1
  - Node.js - version 18.15.0
  - Angular CLI - version 16.0.6
  - Angular Material - version 16.0.4
  - Chart.js - version 4.3.0
  - Others, which can be seen in the package.json file

## Setup
  - Clone this repository to your IDE (https://github.com/jakubknap/ShopFrontend.git)
  - Go to your project folder
  - Run command
`npm install`
  - And start the application
`npm run dev`
  - The client application runs on localhost:4200. The administrative application is available at localhost:4200/admin
  - Default login to admin website: login: admin, password: test
