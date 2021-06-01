const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitnessTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/apiRoutes"));
app.use(require('./routes/htmlRoutes'));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});