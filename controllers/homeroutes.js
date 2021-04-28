const path = require('path');
const router = require("express").Router();
const db = require("../models");

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch(err){
        res.status(500).json(err)
    }
});

router.get('/exercise?', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;