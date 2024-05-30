const express = require("express");

const app = express();

//  Port for the Server

const port = 5000;

// Global middleware
app.use((req, res, next) => {
    console.log('This is a global middleware');
    next();
  });
  
  // Route handler
  app.get('/', (req, res, next) => {
    console.log('This is a route handler');
    next();
  });
  
  // Specific middleware
  app.use((req, res, next) => {
    console.log('This is a specific middleware');
    next();
  });
  
  // Error-handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
app.listen(port, () => {
    console.log("Server is listening on port 5000");
  });