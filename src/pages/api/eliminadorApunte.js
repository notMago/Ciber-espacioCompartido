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

  const collection = db.collection("apuntes");

  await collection.deleteOne({
    link: req.body.link,
  });

  return res.send({ mensaje: "apunte eliminado correctamente" });
};
