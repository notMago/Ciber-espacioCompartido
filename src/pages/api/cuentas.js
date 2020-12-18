import { isEmpty } from "lodash";
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
    const cuentaExistente = await collection.findOne({ email: req.body.email });
    if (cuentaExistente) {
      //el correo ya existe, returnar error
      return res.send({ error: "correo ya registrado" });
    }
    await collection.insertOne({
      email: req.body.email,
      password: req.body.password,
    });

    res.send({
      mensaje: "Cuenta Creada satisfactoriamente",
      email: req.body.email,
    });
  }

  //collection.deleteOne({});
};
