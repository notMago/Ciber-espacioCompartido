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

  const collection = db.collection("ramos");

  await collection.deleteOne({
    ramo: req.body.ramo,
  });

  return res.send({ mensaje: "ramo eliminado correctamente" });
};
