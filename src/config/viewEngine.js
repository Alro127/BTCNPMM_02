import express from 'express';

let configViewEngine = (app) => {
    // Set the view engine to EJS
    app.set('view engine', 'ejs');

    // Set the views directory
    app.set('views', './src/views');

    // Middleware to serve static files
    app.use(express.static('./src/public'));
}

module.exports = configViewEngine;