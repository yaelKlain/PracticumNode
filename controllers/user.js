const userList = [
    { id: "11", name: "havi",email:"@123",phone:123 },
    { id: "2", name: "yael",email:"@456",phone:456 },
    { id: "3", name: "rina",email:"@789",phone:789 },
]

// exports.getAllUsers = (req, res) => {

//     res.send(userList)
// }

exports.createUser = (req, res) => {

    userList.push(req.body)
    res.send(userList)
}

exports.getUserById = (req, res) => {
    const { id } = req.params
    console.log(req.params);
    const usr = userList.find(x => x.id === id)
    console.log(usr);
    if (!usr) {
        res.status(404).json({ massege: "usr not found" })
    }
    res.send(usr)
}


exports.deleteUserById = (req, res) => {
    const id = req.params.id

    const index = userList.findIndex(x => x.id === id)
    userList.splice(index, 1)
    res.send(userList)
}




exports.upDateUser = async (req, res) => {
    const { userId } = req.params;
    const { name, email } = req.body;
  
    try {
      const updatedUser = await User.findOneAndUpdate(
        { userId: userId }, // עדכון לפי שדה userId
        { name, email },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Failed to update user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  };