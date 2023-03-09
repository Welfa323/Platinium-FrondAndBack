const messagerie = require('../models/messagerie')

const create = async (req,res)=>{

    const newMessage = new messagerie(req.body)
    const response = await newMessage.save()
    res.status(200).json(response)
}

const all = async (req, res) =>{
    const response  = await messagerie.find()
    res.status(200).json(response)
}

const remove = async (req, res) =>{
    const response = await messagerie.findByIdAndDelete(req.params.id)
    res.status(200).json(response)
}
module.exports = {create, all, remove}
