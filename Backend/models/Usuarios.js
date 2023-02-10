import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    username:{type:String, required:true, trim:true},
    nombre:{type:String, required:true, trim:true},
    apellido:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    playlist:{type:Array, required:false},
}, { versionKey: false })

const UsuarioModel = mongoose.model("usuarios",UsuarioSchema)

export default UsuarioModel