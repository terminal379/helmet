const express = require('express');
const router = express.Router();
const Llibre = require('../models/llibre');

router.get('/', async (req,res) => {
    try {
        const llibres = await Llibre.find();
        res.json(llibres);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


router.post('/', async (req, res) => {
    const llibre = new Llibre({
        nom: req.body.nom,
        autor: req.body.autor
    });

    try {
        const nouLlibre = await llibre.save();
        res.status(201).json(nouLlibre);
    } catch (err) {
        res.status(400).json({message: err.message});
    }

});

module.exports = router;