

const mongoose = require('mongoose')


const produitSchema = new mongoose.Schema({
    nom : String,
    description:String,
    prix: Number

})

const produitModel = mongoose.model('produit',produitSchema)

module.exports = produitModel;