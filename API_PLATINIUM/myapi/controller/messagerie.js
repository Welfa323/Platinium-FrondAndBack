const messagerieService = require ('../services/messagerie')

const create = (req,res)=>{
    messagerieService.create(req,res)
}

const all = (req,res)=>{
    messagerieService.all(req,res)
}

const remove = (req,res)=>{
    messagerieService.remove(req,res)
}

module.exports ={create, all, remove}