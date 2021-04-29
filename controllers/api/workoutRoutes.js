const router = require("express").Router();
const { Workout, Exercise } = require("../../models");

// Route is going to get the last workout
router.get('/', (req, res) => {

    Workout.find().sort({ date: -1 })
        .then(data => {
            console.log(data.exercises)
            res.send(data)
        })
});

// Route is going to add an exercise to the workout
router.put('/:id', async (req, res) => {
    try {
        //Going to pull info for the current workout
        const currentWorkout = await db.Workout.findOne(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                }
            }
        );
        console.log(currentWorkout)
        //pushes the new exercise to the current workout
        const exerciseArr = currentWorkout.exercises
        exerciseArr.push(req.body)
        //Going to update the exercise section in the current workout

        await db.Workout.update(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set: {
                    exercises: exerciseArr,
                }
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            }
        );



    } catch (err) {
        res.status(500).json(err)
    }
});

// Route is going to create a new workout
router.post('/', async (req, res) => {
    try {
        db.Workout.insert(req.body, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        });

    } catch (err) {
        res.status(500).json(err)
    }
});

//Route is going to get the data for workouts in range to add to chart.js
router.get('/range', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;