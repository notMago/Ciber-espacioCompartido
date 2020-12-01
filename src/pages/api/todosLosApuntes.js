import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";
/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  req.body;

  const db = await dbConnection;

  //
  const collection = db.collection("apuntes");
  if (req.body.link === "") {
    return res.send({
      error: "Y donde esta el link crack :C ",
    });
  } else {
    const url = await collection.findOne({
      link: req.body.link,
    });
    if (url) {
      return res.send({ error: "Este Apunte ya esta :C " });
    } else {
      await collection.insertOne({
        link: req.body.link,
        apunte: req.body.apunte,
        ramo: req.body.ramo,
      });
      return res.send({ mensaje: "apunte agregado correctamente" });
    }
  }
};
