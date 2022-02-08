const Pizza = require('../models/Pizza.model');

const getAllPizzas = async (req, res) => {
  try {
    const data = await Pizza.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updatePizza = async (req, res) => {};

const deletePizza = async (req, res) => {};

module.exports = {
  getAllPizzas,
  updatePizza,
  deletePizza,
};
