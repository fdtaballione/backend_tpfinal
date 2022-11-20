const {
  getMascotaService,
  getMascotaByIdService,
  getMascotaByNombreService,
  getMascotaByRazaService,
  getMascotaByTutorService,
  addMascotaService,
  updateMascotaService,
  deleteMascotaService,
} = require("../services/mascotaService");

const getMascotaController = async (req, res) => {
  try {
    const { nombre, raza, tutor } = req.query;
    if (nombre) {
      const mascotas = await getMascotaByNombreService(nombre);
      if (mascotas.length > 0) {
        res.status(200).json(mascotas);
        return;
      }
      res
        .status(200)
        .json({ message: "No se encontraron mascotas con ese nombre" });
      return;
    }
    if (raza) {
      const mascotas = await getMascotaByRazaService(raza);
      if (mascotas.length > 0) {
        res.status(200).json(mascotas);
        return;
      }
      res
        .status(200)
        .json({ message: "No se encontraron mascotas con esa raza" });
      return;
    }
    if (tutor) {
      const mascotas = await getMascotaByTutorService(tutor);
      if (mascotas.length > 0) {
        res.status(200).json(mascotas);
        return;
      }
      res
        .status(200)
        .json({ message: "No se encontraron mascotas con ese tutor" });
      return;
    }

    const mascotas = await getMascotaService();
    res.status(200).json(mascotas);
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const getMascotaByIdController = async (req, res) => {
  try {
    const mascota = await getMascotaByIdService(req);
    if (mascota) {
      res.status(200).json(mascota);
      return;
    }
    res.status(200).json({ message: "Id de Mascota no encontrada" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const addMascotaController = async (req, res) => {
  try {
    const response = await addMascotaService(req);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const updateMascotaController = async (req, res) => {
  try {
    const respuestaUpdate = await updateMascotaService(req);
    res.status(200).json({ message: respuestaUpdate });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

const deleteMascotaController = async (req, res) => {
  try {
    const response = await deleteMascotaService(req);
    res.status(200).json({ message: response });
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
};

module.exports = {
  getMascotaController,
  getMascotaByIdController,
  addMascotaController,
  updateMascotaController,
  deleteMascotaController,
};
