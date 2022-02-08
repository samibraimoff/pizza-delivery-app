const express = require('express');
const dotenv = require('dotenv');

const ConnectDB = require('./config/ConnectDB');
const pizzaRoutes = require('./routes/pizza.routes');

dotenv.config();
const app = express();

ConnectDB();

app.use(express.json());

app.use('/api/', pizzaRoutes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
