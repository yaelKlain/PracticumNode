const { json } = require('body-parser');
const { User, validUser } = require('../modells/users')

exports.addUser = async (reqBody) => {

    try {
        console.log('servive');

        const user = await User.create(reqBody);
        return user

    } catch (error) {
        console.error(error);
    }
}

exports.geteUser = async (reqParm) => {

    const userid = reqParm.userid;
    console.log(userid);
    console.log('fggf');
    try {

        const usr = await User.find({ "userid": userid });
        if (!usr) {
            res.status(404).json({ massege: "usr not exist" })
        }
        return usr

    } catch (error) {
        console.error(error);


    }

}

exports.remove = async (reqBody) => {
    const userid = reqBody.userid;
    console.log(userid);
    try {
        const deletedUser = await User.findOneAndDelete({ userid: userid });
        return deletedUser

    } catch (error) {
        console.error(error);

    }
}

exports.updateServices = async (reqParams, reqBody) => {

    const userid = reqParams;
    console.log(userid);
    const name = reqBody.name;
    const email = reqBody.email;
    console.log(name);

    try {
        const updatedUser = await User.findOneAndUpdate(
            { userid: userid }, // עדכון לפי שדה userid
            { name, email },
            { new: true }
        );
        return updatedUser

    } catch (error) {
        console.error(error);
    }
};
