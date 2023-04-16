const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
exports.addUser = async (req, res) => {
    try {
        const email = req.body.email;
        const user = new userModel({ email: email });
        const result = await user.save();
        const tokenData = {
            user: {
                id: user._id
            },
            usertype: {
                type: 'user'
            }

        }
        const authtoken = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1y' });
        res.json({
            "status": true,
            "message": "Record Created Successfully",
            "authtoken": authtoken,
            "_id": user._id,
            "data": result
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const result = await userModel.find({});
        res.json({
            "status": true,
            "message": "Record Created Successfully",
            "data": result
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.getUser = async (req, res) => {
    try {
        const email = req.body.email;
        const result = await userModel.find({ email: req.body.email });
        res.json({
            "status": true,
            "message": "Record fetched Successfully",
            "data": result
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.updateUser = async (req, res) => {
    const { email, uniqueId, password, usertype, registerTime,
        loginTime, firstClueTime, firstClueAccuracy, secondClueTime, secondClueAccuracy,
        thirdClueTime, thirdClueAccuracy, fourthClueTime, fourthClueAccuracy,
        fifthClueTime, fifthClueAccuracy, level } = req.body;
    try {
        // Create a newNote object
        const newData = {};
        if (uniqueId) { newData.uniqueId = uniqueId };
        if (level) { newData.level = level };
        if (password) { newData.password = password };
        if (usertype) { newData.usertype = usertype };
        if (registerTime) { newData.registerTime = registerTime };
        if (firstClueTime) { newData.firstClueTime = firstClueTime };
        if (firstClueAccuracy) { newData.firstClueAccuracy = firstClueAccuracy };
        if (secondClueTime) { newData.secondClueTime = secondClueTime };
        if (secondClueAccuracy) { newData.secondClueAccuracy = secondClueAccuracy };
        if (thirdClueTime) { newData.thirdClueTime = thirdClueTime };
        if (thirdClueAccuracy) { newData.thirdClueAccuracy = thirdClueAccuracy };
        if (fourthClueTime) { newData.fourthClueTime = fourthClueTime };
        if (fourthClueAccuracy) { newData.fourthClueAccuracy = fourthClueAccuracy };
        if (fifthClueTime) { newData.fifthClueTime = fifthClueTime };
        if (fifthClueAccuracy) { newData.fifthClueAccuracy = fifthClueAccuracy };

        // Find the note to be updated and update it
        let record = await userModel.find({ email: req.body.email });
        if (!record) { return res.status(404).json({ "status": false, "message": "Not Found" }) }
        const result = await userModel.updateOne({ email: email }, { $set: newData }, { new: true });
        res.json({
            "status": true,
            "message": "Record Updated Successfully",
            "data": result
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.deleteUser = async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let record = await userModel.find({ email: req.body.email });
        if (!record) { res.status(404).json({ "status": false, "message": "Not Found" }) }

        result = await userModel.deleteOne({ email: req.body.email })
        res.json({
            "status": true,
            "message": "Record Deleted Successfully"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}