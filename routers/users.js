const express = require('express')
const router = express.Router()


const {createUser,deleteUserById,getUserById,updateUser}=require('../controllers/user')


router.post('/',createUser)
router.get('/:userid',getUserById)
router.delete('/:userid',deleteUserById)
router.put('/:userid',updateUser)

module.exports = router;