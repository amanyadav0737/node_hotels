const express = require('express');
const router = express.Router();
const Person = require('./../models/person'); 

//Post route to add a person
router.post('/',async (req,res) =>{
    try{
     const data = req.body // Assuming the request body contain the person data
 
     //Create a new Person document using the Mongoose model
     const newPeson = new Person(data);
 
     //Save the new person to the database
     const response = await newPeson.save();
     console.log('data saved');
     res.status(200).json(response);
    }
    catch(err){
     console.log(err);
     res.status(500).json({error: 'Internal Server Error'});
    }  
 
 })

 //GEt method to get the person
router.get('/', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.get('/:workaType', async(req, res) =>{
    try{
        const workType = req.params.workType; //Extract the work type from the URL parameter
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Internal work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
module.exports = router;