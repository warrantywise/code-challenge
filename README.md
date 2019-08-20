# Welcome to our Code Challenge!

If you can complete this task you will demonstrate that you:
- Are proficient in PHP and familiar with JavaScript.
- Understand MVC architecture & can navigate around our framework of choice -> Laravel.
- Can approach web development with Headless (division of front-end / back-end code bases) & REST principles in mind.

In this repository you will find a Laravel project, to get started you will need to:
- Fork this repo
- Clone it
- Install the composer dependencies (Install [composer](https://getcomposer.org) globally if you haven't already)

The main task:
- Build a single page app, which sends a XHR request to a Laravel controller and returns data to the view.
- Style the app to the best of your ability, you may use CSS frameworks such as Bootstrap.
- If you would like to use a JavaScript library or framework via CDN or local files you can do so. [1]
- Requests handled by Laravel should return JSON formatted data with the correct HTML status codes.
- Data would usually come from a MySQL database but to keep things simple please hardcode in the controller.
- The minimum we would like to see is a GET request but we would love to see a full CRUD example with GET, POST, PATCH, DELETE. [2]

[1] Extra Credit - Use VueJS compiled via webpack (All the required node modules for this are in the package file and can be installed via npm install, compiled using npm run watch).

[2] Extra Credit - Validate any data sent to Laravel & return errors when appropriate.
