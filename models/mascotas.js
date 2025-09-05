const mongoose = require("mongoose");
const { Schema } = mongoose;

const MascotaSchema = new  mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    especie: {
        type:String,
        required: true,
        trim: true
    },
    raza: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        required: true
    },
    duenio: {
        type: Schema.Types.ObjectId, 
        ref:"Clientes",
        required: true
    }
}, {versionKey: false
});

module.exports = mongoose.model("Mascotas", MascotaSchema);