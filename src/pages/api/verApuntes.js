import { NextApiResponse, NextApiRequest } from "next";
import { dbConnection } from "../../db";

/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  req.body;
  console.log("req.body: ", JSON.stringify(req.body));
  const db = await dbConnection;

  const collection = db.collection("apuntes");
  //link appunte ramo

  //   await collection.deleteMany({});

  console.log(
    JSON.stringify(await collection.find({ ramo: req.body.ramo }).toArray())
  );
  // console.log(JSON.stringify(await collection.find({}).toArray()));
  res.send(
    JSON.stringify(await collection.find({ ramo: req.body.ramo }).toArray())
  );
};
