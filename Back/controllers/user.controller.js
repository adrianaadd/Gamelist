const User = require("../models/user.model");

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        if (users.length !== 0) {
            return res.status(200).json(users);
        } else {
            return res.status(200).send("There are no users");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).send("No user found");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        return res.status(200).send("User created successfully");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (user) {
            return res.status(200).send("User updated successfully");
        } else {
            return res.status(404).send("No user found");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (user) {
            return res.status(200).send("User deleted successfully");
        } else {
            return res.status(404).send("No user found");
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};
