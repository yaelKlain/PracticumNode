const express = require('express')
const router = express.Router()


// const {getAllUsers,createUser}=require('..')


router.post('/:id',createUser)
router.get('/:id',getAllUsers)
router.delete('/:id',deleteUserById)

module.exports = router;