const { number } = require('joi')
const mongoose = require('mongoose')

const UsersSchema=new mongoose.Schema({
    userId:Number,
    name:String,
    email:String,
    phone:Number
    
})
module.exports=mongoose.model('Uswwer',UsersSchema)
const Joi = require('joi');

export const schemaForCreateUser = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(8).required(),
});



//