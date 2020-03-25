npm i react react-dom express body-parser

npm i -D webpack webpack-cli webpack-dev-server nodemon

### package.json scripts ###
"start": "webpack --mode=development",
"build": "webpack --mode=production",
"react-dev": "webpack-dev-server --open",
"server-dev": "nodemon server/index.js"