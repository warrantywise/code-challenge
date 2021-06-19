# SPA-Laravel-Vue-CRUD
Todo list SPA in Laravel/Vue using CRUD operations w/ an SQLite database.

## Brief
* Build a single page app, which sends a XHR request to a Laravel controller and returns data to the view.
* Style the app to the best of your ability, you may use CSS frameworks such as Bootstrap.
* If you would like to use a JavaScript library or framework via CDN or local files you can do so. [1]
* Requests handled by Laravel should return JSON formatted data with the correct HTML status codes.
* Data would usually come from a MySQL database but to keep things simple please hardcode in the controller.
* The minimum we would like to see is a GET request but we would love to see a full CRUD example with GET, POST, PATCH, DELETE. [2]

[1] Extra Credit - Use VueJS compiled via webpack (All the required node modules for this are in the package file and can be installed via npm install, compiled using npm run watch).

[2] Extra Credit - Validate any data sent to Laravel & return errors when appropriate.

## Plan

* Use sqlite to demonstrate migrations locally
* Add new controller, model and migration for tasks
* Add vue dependencies, components and routes
* Implement error handling

## Getting Started

* Ensure Laravel, Composer & MySQL are installed and up to date

* Clone this repository to the desired directory

* Enter the directory

```
cd directorypath
```

* Install the required node modules

```
npm install
```

* Install vue, vue-router, vue-axios and vue-loader

```
npm install vue vue-router vue-axios vue-loader --save
```

* Ensure the latest version of Laravel Mix is installed

```
npm install laravel-mix@latest
```

## Executing the Application

* Compile Vue components

```
npm run dev
```

* Run development server

```
sudo php artisan serve
```

## Screenshots
<p align="center">Home (List tasks)</p>
<p align="center">
  <img width="460" height="300" src="/screenshots/list.png">
</p>
<p align="center">Add</p>
<p align="center">
  <img width="460" height="300" src="/screenshots/add.png">
</p>
<p align="center">Amend</p>
<p align="center">
  <img width="460" height="300" src="/screenshots/amend.png">
</p>
<p align="center">Delete</p>
<p align="center">
  <img width="460" height="300" src="/screenshots/delete.png">
</p>
