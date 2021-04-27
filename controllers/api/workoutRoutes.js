const router = require("express").Router();
const {Workout, Exercise} = require("../models");

// Route is going to get the last workout
router.get('/', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

// Route is going to add an exercise to the workout
router.put('/:id', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

// Route is going to create a new workout
router.post('/', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

//Route is going to get the data for workouts in range to add to chart.js
router.get('/range', async (req, res) => {
    try {

    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;