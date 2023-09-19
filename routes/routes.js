const router = require('express').Router();

const collegeModel = require('../Models/models');

// Insert item
router.post('/bfhl', async (req, res)=>{
    
    
    try{
        const newItem = new  collegeModel({
            Status:req.body.status,
            User_ID:req.body.User_ID,
            College_Email_ID:req.body.College_Email_ID,
            College_Roll_Number:req.body.College_Roll_Number,
            Number:req.body.Number,
            alphabets:req.body.alphabets,
            highest_alphabet:req.body.highest_alphabet,
        })
        // save
        const save = await newItem.save()
        res.status(200).json(save);
    } catch (error) {
        res.json(error)
        
    }
})
router.post('/bfhl', async (req, res)=>{
    try
{    
   
        "User_ID" ; "john_doe_17091999",
        // save
       
        res.status(200).json(save);
    } catch (error) {
        res.json(error)
        
    }
})

router.get('/bfhl', async (req, res)=>{
    // console.log('hello');
    try{
        const items = await collegeModel.find({collegeModel: 1})
        console.log(items)
        // save
        res.status(200).json(items)
    } catch (error) {
        res.json(error)
        
    }
})
module.exports = router;
