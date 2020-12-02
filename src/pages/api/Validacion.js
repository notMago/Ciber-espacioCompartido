import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";
/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  req.body;
  //console.log(`Body = "${JSON.stringify(req.body)}"`);
  const db = await dbConnection;

  //
  const collection = db.collection("cuentas");

  if (!req.body.email || !req.body.password) {
    return res.send({
      error: "campos incompletos",
    });
  } else {
    const correo = await collection.findOne({
      email: req.body.email,
    });
    if (correo && req.body.password === correo.password) {
      return res.send({ mensaje: "Cuenta Iniciada Correctamente" });
    }
    return res.send({ error: "Error en alguno de los campos" });
  }

  //collection.deleteOne({});
};
