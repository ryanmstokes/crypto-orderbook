# Crypto Orderbook Application

Crypto Orderbook is an application for showing live buy and sell orders of crypto currencies. 

## Introduction

The order book shows 2 different tables:

 Buy table 
 Displays the volume of buy orders at different prices.

 Sell table
 Displays the volume of buy orders at different prices. 

The orderbook also:

Shows the spread between prices for the particular currency.

Allows the user to change the market ticker size for displayed currency.

Allows the user to toggle between 2 currencies.

## Technology
Typescript
React
Redux
React Testing Library
Web Sockets

## Getting Started

To start the application:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

Unit tests are built for functions using react-testing-library.

Redux is mocked within unit tests using redux-mock-store package.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Typescript

Untyped 3rd party npm packages are declared in src/modules.d.ts

Global types and interfaces for the application are defined in src/typs.ts 

## Config

The application uses a main config file found im /config which contains:

Meta definitions
Curency definitions
Websocket path deintions
...


