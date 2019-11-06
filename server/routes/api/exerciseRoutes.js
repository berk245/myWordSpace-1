const express = require('express');
const mongodb = require('mongodb')
const router = express.Router();
const User = require('../../models/userModel')


//Get the Words
router.get('/', async (req,res) => {
    const words = await loadUserData();
    res.send(await words.find({}).toArray());
})

//Add New Words

router.post('/', async (req,res) => {

    const currentUser = await User.findOne({ email: req.body.user})
    currentUser.words.unshift(req.body.newWord)
    await currentUser.save()
    res.status(200).send(currentUser.words)

})
   

async function loadUserData(){
    const client = await mongodb.MongoClient.connect("mongodb+srv://newUser:123new@cluster0-oixaf.gcp.mongodb.net/admin?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return client.db('deutschApp').collection('data&users')
}

module.exports = router;