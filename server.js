const path = require('path');
//require express and all of its dependencies
const express = require('express');
const mongoose = require("mongoose");

const routes = require('./controllers');



const app = express();
const PORT = process.env.PORT || 3000;
//link the helpers file to handlebards


//set up express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

//set up routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
