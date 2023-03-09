const newsletterService = require('../services/newsletter')

const create = (req, res) =>{
    newsletterService.create(req,res)
}

const all = (req, res) =>
{
    newsletterService.all(req,res)
}

const remove = (req,res) =>{
    newsletterService.remove(req,res)
}

module.exports = {create,all,remove}

