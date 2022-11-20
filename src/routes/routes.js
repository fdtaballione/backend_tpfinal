const express = require("express");
const validator = require("../utils/validator");
const { body } = require("express-validator");
const {
  getMascotaController,
  getMascotaByIdController,
  addMascotaController,
  updateMascotaController,
  deleteMascotaController,
} = require("../controllers/MascotaController");
const getImageMascotaMiddleware = require("../utils/middlewares/getImagenMascotaMiddleware");

//const { route } = require("../server/server");
const router = express.Router();

router.get("/mascota", getMascotaController);
router.get("/mascota/:id", getMascotaByIdController);

/*
se debe hacer un milware que consuma a https://dog.ceo/dog-api/ para obtener las imagenes de los perros

*/

router.post(
  "/mascota",
  body("nombre")
    .isLength({ min: 3, max: 20 })
    .withMessage("El atributo nombre debe poseer entre 3 y 20 caracteres"),
  body("raza")
    .isLength({ min: 5, max: 15 })
    .withMessage("El atributo raza debe poseer entre 5 y 15 caracteres"),
  body("tutor")
    .isLength({ min: 5, max: 30 })
    .withMessage("El atributo tutor debe poseer entre 5 y 30 caracteres"),
  validator,
  getImageMascotaMiddleware,
  addMascotaController
);

router.put(
  "/mascota/:id",
  body("nombre")
    .isLength({ min: 3, max: 20 })
    .withMessage("El atributo nombre debe poseer entre 3 y 20 caracteres"),
  body("raza")
    .isLength({ min: 5, max: 15 })
    .withMessage("El atributo raza debe poseer entre 5 y 15 caracteres"),
  body("tutor")
    .isLength({ min: 5, max: 30 })
    .withMessage("El atributo tutor debe poseer entre 5 y 30 caracteres"),
  validator,
  updateMascotaController
);

router.delete("/mascota/:id", deleteMascotaController);

module.exports = router;
