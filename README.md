### E-Commerce Website

Made with React, Redux.

### Features

1. Authentication (with Email and Password + Gmail Authentication (Firebase))
2. Authorization (For admin and users)
3. Cart
4. Check Out
5. User can Add/ Remove items into/from Crate
6. Admin can Add Items in Shop
7. Admin can Delete Items from Shop
8. Admin can Activate/Deactivate an Item

### How to Use the repo

1. run - npm install
2. cd to the directory
3. npm start
4. admin : email : admin@gmail.com password: 123456
5. user : email : test@gmail.com password : 123456

## Project Live Link

https://awesome-poincare-9606e1.netlify.app/

## Tool Used and Why used

1. React : Component architecture, JS Library.
2. Redux : Used Redux for managing states throughout the application. Redux helps to avoid prop drilling and provides states from on source of truth.
3. react-router-dom : Used for routing inside the app without refreshing the page.
4. redux-logger : As the task was mainly focused on the use of Redux so, redux-logger is a great tool for debugging and keep track of the actions being dispatched and the change of state from initial to new state according to the actions.
5. reselect : reselect is used to reduce the number of unnecessary re-rendering of components. Reselect library helps us to create memorized selector so that whenever some inputs changes we can only update or re-render the components that depends on that specific change.
6. node-sass : Helps to compile scss.
7. firebase : Used for authentication.
