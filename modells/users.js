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

export const schemaForUpdateUser = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  phone: Joi.string().min(10),
});


let validate = schemaForUpdateUser(req.body);
if (validate.error){
  return res.status(400).json({ message: 'valid' });
}
////
///bnm,.


