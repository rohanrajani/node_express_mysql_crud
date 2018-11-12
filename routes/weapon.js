const express = require('express');
const router = express.Router();
var weaponController=require('../controller/weaponController');

router.post('/addweapon',function(req,res){
    weaponController.addWeapon(req,res)   
})

router.get('/all',function(req,res){
    weaponController.getAllWeapon(req,res)   
})

router.get('/id/:id',function(req,res){
    weaponController.getWeaponByID(req,res)   
})

router.put('/update/id/:id',function(req,res){
    weaponController.updateWeapon(req,res)   
})

router.delete('/delete/id/:id',function(req,res){
    weaponController.deleteWeapon(req,res)   
})

module.exports = router