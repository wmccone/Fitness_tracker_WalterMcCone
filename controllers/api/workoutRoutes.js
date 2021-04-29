const router = require("express").Router();
const db = require("../../models");

// Route is going to get the last workout
router.get('/', (req, res) => {
    
    db.Workout.find().sort( { date: -1 } )
        .then((data) => {
        
            console.log(data)
            res.send(data)
        })
        .catch(err =>{
            console.log(err)
        })
});

// Route is going to add an exercise to the workout
router.put('/:id', async (req, res) => {
 
        //Going to pull info for the current workout
        const currentWorkout = await db.Workout.findOne({_id: req.params.id});
        console.log(currentWorkout)
        //pushes the new exercise to the current workout
        const exerciseArr = currentWorkout.exercises
        console.log(exerciseArr)
        exerciseArr.push(req.body)
        //Going to update the exercise section in the current workout

        await db.Workout.update(
            {
                _id: req.params.id
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