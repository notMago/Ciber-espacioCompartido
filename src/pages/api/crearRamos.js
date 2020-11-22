import { isEmpty } from "lodash";
import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";
/**
 * @export
 * @param {NextApiRequest} req //lo que recibe
 * @param {NextApiResponse} res//es el que devuelves
 */

export default async (req, res) => {
  req.body;
  const db = await dbConnection; // conecta la base de datos

  const collection = db.collection("ramos"); //crea la coleccion o la usa?
  console.log(JSON.stringify(await collection.find({}).toArray()));
  if (req.body.ramo === "borrar") {
    collection.deleteOne({});
    console.log(JSON.stringify(await collection.find({}).toArray()));
    res.send({
      mensaje: "Ramo borrado exitosamente",
    });
  } else if (!req.body.ramo || !req.body.semestre || !req.body.codigo) {
    return res.send({
      error: "campos incompletos",
    });
  } else {
    const ramoExistente = await collection.findOne({ ramo: req.body.ramo });
    if (ramoExistente) {
      //el correo ya existe, returnar error
      return res.send({ error: "ramo ya registrado" });
    }

    await collection.insertOne({
      ramo: req.body.ramo,
      codigo: req.body.codigo,
      semestre: req.body.semestre,
    });
    console.log(JSON.stringify(await collection.find({}).toArray()));
    res.send({
      mensaje: "Ramo creado satisfactoriamente",
    });
  }
};
