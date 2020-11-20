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

  res.send(
    JSON.stringify([
      { nombre_ramo: "calculo1", codigo: "BAIN075", semestre: 2 },
      { nombre_ramo: "calculo2", codigo: "BAIN085", semestre: 3 },
    ])
  );
  //res.send(JSON.stringify(await collection.find({}).toArray()));
};
