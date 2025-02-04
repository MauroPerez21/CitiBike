# React Project Using Redux V 1.0 
## (Only for educational purposes)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NPM

In the project directory, you can run:

### `npm start`

```bash
npm start
# or
npm run build
```

### npm i redux
### npm i react-redux
### `npm install react-bootstrap@5.1.3`
### `npm install react-icons --save`
### Npm React Icons: 

- [React icons](https://react-icons.github.io/react-icons/)
## Other : 
- [React-GA npm](https://www.npmjs.com/package/react-ga)
- [Google Analytics](https://analytics.google.com/analytics/web/#/p277755867/reports/intelligenthome)
- [React Snap](https://www.npmjs.com/package/react-snap)

# Deployment and Production

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

##To Deploy On (gh-pages) Follow These Steps 

### $ git add .
### $ git commit -m "first commit"
## Prebuild the application

Type on package.json file: 
```
 "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "postbuild": "react-snap"
  }
```
### $ npm run build
Create the branch gh-pages or directly from console with npm run deploy
### Save /root and /docs folder in the new branch


### Paste the line
"homepage": "https://mauroperez21.github.io/Citibike/",


## Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

## Production

Runs the app in the development mode.\
Open [https://mauroperez21.github.io/Citibike/) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

