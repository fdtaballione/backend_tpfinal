const mascotaModel = require("../models/mascotaModel");

const getMascotaService = async () => {
  const mascotas = await mascotaModel.find();
  return mascotas;
};

const getMascotaByIdService = async (req) => {
  const id = req.params.id;
  const mascota = await mascotaModel.findOne({ id });
  return mascota;
};

const getMascotaByRazaService = async (raza) => {
  const mascotas = await mascotaModel.find({ raza });
  return mascotas;
};

const getMascotaByNombreService = async (nombre) => {
  const mascotas = await mascotaModel.find({ nombre });
  return mascotas;
};

const getMascotaByTutorService = async (tutor) => {
  const mascotas = await mascotaModel.find({ tutor });
  return mascotas;
};

const addMascotaService = async (req) => {
  const mascota = req.body;
  mascota.imagen = req.imagen;
  const newMascota = new mascotaModel(mascota);
  await newMascota.save();
  return `Se agregó la mascota ${mascota.nombre}`;
};

const updateMascotaService = async (req) => {
  const { id } = req.params;
  const newValsMascota = req.body;

  const mascota = await mascotaModel.findOne({ id });
  if (mascota == null) return "Mascota no encontrada. No se puede modificar";

  mascota.nombre = newValsMascota.nombre;
  mascota.raza = newValsMascota.raza;
  mascota.tutor = newValsMascota.tutor;
  mascota.peso = newValsMascota.peso;
  mascota.imagen = newValsMascota.imagen;
  mascota.nacimiento = newValsMascota.nacimiento;

  await mascota.save();

  return `se modificaron los datos de la mascota id= ${mascota.id}`;
};

const deleteMascotaService = async (req) => {
  const id = req.params.id;
  const reponse = await mascotaModel.deleteOne({ id });
  if (reponse.deletedCount == 0)
    throw new Error("No se encontró la mascota a eliminar");
  return `Se eliminó la mascota id= ${id}`;
};

module.exports = {
  getMascotaService,
  getMascotaByIdService,
  getMascotaByNombreService,
  getMascotaByRazaService,
  getMascotaByTutorService,
  updateMascotaService,
  deleteMascotaService,
  addMascotaService,
};
