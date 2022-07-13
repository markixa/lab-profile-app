const router = require("express").Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/User.model");



router.put("/users", async (req, res, next) => {
	try {
		const { image } = req.body;
	 const images = await User.findByIdAndUpdate(id, { image }, { new: true });
		return res.status(200).json(images)
	} catch (error) {
		next(error)
	}
})

router.get("/users", async (req, res, next) => {
	try {
		const { id } = req.params
		const currentUser = await  User.findById(id)
		return res.status(200).json(currentUser)
	} catch (error) {
		next(error)
	}
})

module.exports = router