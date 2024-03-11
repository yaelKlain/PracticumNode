const { number } = require('joi')
const mongoose = require('mongoose')
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/NewUser');
    console.log('connect');
}

const UsersSchema = new mongoose.Schema({
    userid: Number,
    name: String,
    email: String,
    phone: String

})

main().catch(err => console.log(err));

const User = mongoose.model('NewUser', UsersSchema)
exports.User = User

const Joi = require('joi');

exports.validUser = (_bodyData) => {
    let joiSchema = Joi.object({
        userid: Joi.number(),
        name: Joi.string().min(2).max(99),        
        email: Joi.string(),
        phone: Joi.string().min(7)

    })
    return joiSchema.validate(_bodyData)
}


// export const schemaForUpdateUser = Joi.object({
//     name: Joi.string().min(2),
//     email: Joi.string().email(),
//     phone: Joi.string().min(10),
//   });

