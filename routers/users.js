const express = require('express')
const router = express.Router()


const {createUser,deleteUserById,getUserById,upDateUser}=require('../controllers/user')


router.post('/',createUser)
router.get('/:id,',getUserById)
router.delete('/:id',deleteUserById)
router.put('/:id',upDateUser)

module.exports = router;