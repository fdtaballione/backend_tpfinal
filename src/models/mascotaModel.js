const { model, Schema } = require("mongoose");

const mascotaSchema = new Schema({
  id: {
    type: Number,
    required: [true, "el id es requerido"],
    unique: true,
  },
  nombre: {
    type: String,
    required: [true, "el nombre es requerido"],
    unique: false,
  },
  raza: {
    type: String,
    required: [true, "la raza es requerido"],
    unique: false,
  },
  tutor: {
    type: String,
    required: [true, "el tutor es requerido"],
    unique: false,
  },
  peso: {
    type: Number,
    required: [true, "el año es requerido"],
    unique: false,
  },
  imagen: {
    type: String,
    required: [true, "el modelo es requerido"],
    unique: false,
  },
  nacimiento: {
    type: Date,
    required: false,
    unique: false,
  },
});

const mascotaModel = model("Mascota", mascotaSchema);

module.exports = mascotaModel;
