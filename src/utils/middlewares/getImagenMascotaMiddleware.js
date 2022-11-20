const axios = require("axios");

const getImagenMascotaMiddleware = async (req, res, next) => {
  try {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(data);
    if (!data)
      return res.status(400).json({
        message:
          "No se pudo obtener la imagen desde el servidor https://dog.ceo/api",
      });
    if (data.status === "success") {
      req.imagen = data.message;
      return next();
    } else {
      return res.status(400).json({
        message:
          "No se pudo obtener la imagen desde el servidor https://dog.ceo/api",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: `No se pudo obtener la imagen desde el servidor https://dog.ceo/api - ${error}`,
    });
  }
};

module.exports = getImagenMascotaMiddleware;
