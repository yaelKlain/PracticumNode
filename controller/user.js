const userList = [
    { id: "11", name: "havi",email:"@123",phone:"123" },
    { id: "2", name: "yael",email:"@456",phone:"456" },
    { id: "3", name: "rina",email:"@789",phone:"789" },
]

exports.getAllUsers = (req, res) => {
    res.send(userList)
}

exports.createUser = (req, res) => {

    userList.push(req.body)
    res.send(userList)
}

// exports.getUserById = (req, res) => {
//     const { id } = req.params
//     console.log(req.params);
//     const usr = userList.find(x => x.id === id)
//     if (!usr) {
//         res.status(404).json({ massege: "usr not found" })
//     }
//     res.send(usr)
// }


exports.deleteUserById = (req, res) => {
    const id = req.params.id

    const index = userList.findIndex(x => x.id === id)
    userList.splice(index, 1)
    res.send(userList)
}


