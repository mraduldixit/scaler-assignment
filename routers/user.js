const express = require('express')
const User = require('../models/user')
const router = new express.Router()

const cors = require('cors')

router.use(
    cors({
        origin: '*',
    }),
)

router.get('/', (req, res) => {
    res.send('Started');
})


router.post('/create-user', async (req, res) => {
    console.log(req.body);

    const user = new User({
        _id: req.body.userId,
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone
    })

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/allusers', async (req, res) => {
    
    const users = await User.find({});
    res.status(200).send(users)
    
})

router.post('/user/schedule', async (req, res) => {

    const user = await User.findOne({ _id: req.body.userId });

    const slot = {
        startTime: req.body.startTime,
        endTime: req.body.endTime,
    }

    user.bookedSlots.push(slot);

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send({error : 'someting wrong while scheduling interview'})
    }

})

router.post('/user/unschedule', async (req, res) => {

    const user = await User.findOne({ _id: req.body.userId });
    
    const slots = user.bookedSlots;

    const newSlots = slots.filter((item) => req.body.slotId !== item._id.toString());

    user.bookedSlots = newSlots;

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send({error : 'someting wrong while unscheduling interview'})
    }

})

module.exports = router