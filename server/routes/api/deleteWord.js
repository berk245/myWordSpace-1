const express = require('express');
const mongodb = require('mongodb')
const router = express.Router();
const User = require('../../models/userModel')

//Delete the Words
router.post('/', async (req, res) => {
    const currentUser = await User.findOne({ email: req.body.user})
    let index = req.body.index;
    currentUser.words.splice(index,1)
    console.log(currentUser.words);
    await currentUser.save()
    res.status(200).send(currentUser.words);

})

module.exports = router;