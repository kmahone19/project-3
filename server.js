const express = require('express');
const db = require('./models');
const cookieParser = require('cookie-parser');

// set up app
const app = express();
const PORT = process.env.PORT || 3001;

// set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}

// set up routes
const routes = require('./routes');

app.use(routes);

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});
