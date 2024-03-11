const mongoose = require('mongoose')
const { User, validUser } = require('../modells/users')
const { addUser, geteUser, remove, updateServices } = require('../service/user')
const { log } = require('console')

exports.createUser = async (req, res) => {

    try {
        let validate = validUser(req.body);
        console.log(validate);
        if (validate.error) {
            return res.status(400).json({ message: 'valid' });
        }
        addUser(req.body)
        res.status(200).json({ message: 'ok' });

    } catch (error) {
        console.error(error);
    }
}

exports.getUserById = async (req, res) => {

    try {
        const user = geteUser(req.params)
        res.status(200).json({ message: 'ok' });
    } catch (error) {
        console.error(error);
    }
}


exports.deleteUserById = async (req, res) => {

    try {
        const { error } = validUser(req.body);
        if (error) {
            res.status(400).json({ message: error.details });
        }
        const deletedUser = remove(req.params);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ message: 'delete user successfully' });

    } catch (error) {
        console.error('Failed to delete user:', error);
    }
};


exports.updateUser = async (req, res) => {

    try {        
        const updatedUser= updateServices(req.params, req.body)
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(updatedUser);

        return res.json({ message: 'update user successfully' });
    } catch (error) {
        console.error('Failed to update user:', error);
        res.status(500).json({ message: 'Failed to update user' });
    }
};