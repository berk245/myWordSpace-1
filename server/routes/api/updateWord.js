const express = require('express');
const mongodb = require('mongodb')
const router = express.Router();
const User = require('../../models/userModel')

//update the Words
router.post('/', async (req, res) => {
    const currentUser = await User.findOne({ email: req.body.user})
    let index = req.body.index;
    let newWord = req.body.newWord;
    currentUser.words[index] = newWord;
    console.log(currentUser.words);
    await currentUser.save()
    res.status(200).send(currentUser.words);
})

module.exports = router;