const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://visionmaster:z4FTm2RICqa2hnO7@barbertimedb.w8whwie.mongodb.net/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;


const Barbearias = new Schema ({

    unidade     : {type:String, required: true},
    localizacao : {type:String, required: true},
    imagem      : {type:String, required: true}
    
})

const BarbeariaModel = mongoose.model('barbearias', Barbearias)

module.exports = {BarbeariaModel}