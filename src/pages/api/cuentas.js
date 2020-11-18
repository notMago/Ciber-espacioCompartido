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
  if (req.body.email === "" || req.body.password === "") {
    console.log(req.body.email);
  } else {
    await collection.insertOne({
      email: req.body.email,
      password: req.body.password,
    });
  }
  //collection.deleteOne({});

  // POST

  //console.log("Mi nombre es: ", req.body.nombre.datos.email);
  //console.log("Mi pass es: ", req.body.nombre.datos.password);

  res.send(JSON.stringify(await collection.find({}).toArray()));
};
