# cypress-vite
Sample project, as I have issues with this combo at work

## Cypress
Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications.

## Vite
Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: a dev server that provides rich feature enhancements over native ES modules, and a build command that bundles your code with Rollup, pre-configured to output optimized static assets for production.

## Setup Instructions

### Install Dependencies
Run the following command to install the necessary dependencies:
```
npm install
```

### Run Vite
To start the Vite development server, run:
```
npm run dev
```

### Run Cypress
To open the Cypress test runner, run:
```
npm run cypress:open
```
To run Cypress tests in headless mode, run:
```
npm run cypress:run
```

## To-Do App
This project includes a simple to-do app built with Vue.js. The app allows you to add, remove, and filter tasks.

### How to Use the To-Do App
1. Open the app in your browser.
2. Use the input field to add a new task.
3. Click the "Add Task" button to add the task to the list.
4. Use the checkboxes to mark tasks as completed.
5. Click the "Remove" button to delete a task.
6. Completed tasks will be displayed in a separate list.

## Vue Router
This project now includes Vue Router for navigation between different pages.

### How to Use the Router
1. Open the app in your browser.
2. Use the navigation links to switch between the Home and About pages.
3. The Home page displays the To-Do App.
4. The About page provides information about the app.

### Adding New Routes
1. Create a new component in the `src/components` directory.
2. Define a new route in the `src/router/index.js` file.
3. Add a navigation link to the new route in the `src/App.vue` file.
