// include express and define port
const express = require('express');
const app = express();
const PORT = 3001;

// middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// require html/api routers
const htmlRouter = require("./routes/html");
const apiRouter = require("./routes/api");

// link routes to path
app.use("/api/notes", htmlRouter);
app.use("/notes", apiRouter);

// port check
app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);
