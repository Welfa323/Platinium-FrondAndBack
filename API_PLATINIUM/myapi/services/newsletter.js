const NewsletterType = require('../models/Newsletter');

const create = async (req,res) =>{
    // const { email } = req.body;
    const newEmail = new NewsletterType(req.body);
    const response = await newEmail.save();
    res.status(201).json(response)
}

const all = async (req,res) =>{
    const response = await NewsletterType.find();
    res.status(200).json(response)
}

const remove = async (req,res) =>{
    const response = await NewsletterType.findByIdAndDelete(req.params.id);
    res.status(200).json(response)
}

module.exports = {create, all, remove};