const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const PizzaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Pizza = model('Pizza', PizzaSchema);
module.exports = Pizza;
