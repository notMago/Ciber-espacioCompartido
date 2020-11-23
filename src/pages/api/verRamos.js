import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  const db = await dbConnection;

  const collection = db.collection("ramos");

  //   await collection.deleteMany({});
  //[ {"nombre_ramo":"calculo1","codigo":"BAIN075","semestre":2}]
  //console.log(JSON.stringify(await collection.find({}).toArray()));
  res.send(JSON.stringify(await collection.find({}).toArray()));
};
