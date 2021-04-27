const router = require("express").Router();
const {Workout, Exercise} = require("../models");

router.get('/', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/stats', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/exercise', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/exercise?', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});
