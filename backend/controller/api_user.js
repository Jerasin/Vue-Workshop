const express = require("express")
const router = express.Router();

router.get('/users', (req,res)=>{
    res.json({status: 200 , result: "Success"})
    // console.log("GG")
})


module.exports = router ;