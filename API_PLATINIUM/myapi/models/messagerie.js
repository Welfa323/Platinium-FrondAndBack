const mongoose = require("mongoose")

const messagerieSchema = new mongoose.Schema({

      name : { type: String,  required: true },
      email : { type: String,  required : true},
      
      sujet : { type: String,  required : true },
      message :{ type: String,  required: true }
})

module.exports = mongoose.model('messagerie', messagerieSchema)
