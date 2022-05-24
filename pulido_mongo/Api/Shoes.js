const express = require('express');
const mongoose = require('mongoose');
const Shoes = require('../DB/Shoes');
const route = express.Router();

route.post('/', async (req, res) => {
    const { marca, modelo, talla} = req.body;
    let shoes = {};
    shoes.marca = marca;
    shoes.modelo = modelo;
    shoes.talla = talla;
    let shoesModel = new Shoes(shoes);
    await shoesModel.save();
    res.json(shoesModel);
});

module.exports = route;