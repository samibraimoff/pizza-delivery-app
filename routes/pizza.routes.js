const express = require('express');

const router = express.Router();

const {
  getAllPizzas,
  updatePizza,
  deletePizza,
} = require('../controllers/pizza.controllers');

router.get('/getallpizzas', getAllPizzas);
router.put('/updatepizza', updatePizza);
router.delete('/deletepizza', deletePizza);

module.exports = router;
