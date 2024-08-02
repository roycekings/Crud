
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const produitModels = require('./models/produitModel.js')

const app = express()

//middleware
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(cors())





// connection a la base de donnees 
//mongodb+srv://royce:<password>@expressapi.uhyhlhi.mongodb.net/?retryWrites=true&w=majority&appName=expressapi
//mongoose.connect('mongodb://localhost:27017/BDPRODUIT')
mongoose.connect('mongodb+srv://royce:royce@expressapi.uhyhlhi.mongodb.net/DBPRODUIT?retryWrites=true&w=majority')
.then(()=> console.log("connection a la base de donne reussi"))
.catch((err)=>console.error("connection  a la base de donne echouer",err))

// requetes

app.get('/getProduit', async (req,res)=>{

    const produits  = await produitModels.find()

    res.json(produits)

})


app.post('/postProduit', async (req,res)=>{

    

    
    const produit = new produitModels({
        nom:req.body.nom,
        description: req.body.description,
        prix:req.body.prix
    })
    const saveProduit = await produit.save()
     res.json(saveProduit)
    

})

/*app.put('/updateProduit/:id',(req,res)=>{
    
    const id = req.body.id
    const body = req.body
      //  console.log(body.nom);
    const updateproduit = produitModels.findByIdAndUpdate(id,body)
    .then(result => {res.json(result)})
    .catch(err=>{ 
        res
        .status(500)
        .send('merde')
        console.error(err)})

    
    
})*/

app.delete('/deleteProduit/:id', async (req,res)=>{ 
    const id = req.params.id
    console.log(id); 
    const deleteProduit = await produitModels.findByIdAndDelete(id)

    res.json(deleteProduit)
})

//server
app.listen(3000,()=>{
    console.log(`le serveur tourne a la dresse http://localhost:${3000}`); 
})