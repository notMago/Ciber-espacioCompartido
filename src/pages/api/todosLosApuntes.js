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
  const collection = db.collection("apuntes");
  console.log(JSON.stringify(await collection.find({}).toArray()));
  if (req.body.link === "") {
    return res.send({
      error: "Y donde esta el link crack :C ",
    });
  } else {
    const url = await collection.findOne({
      link: req.body.link,
    });
    if (url) {
      //el correo ya existe, returnar error
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

  //collection.deleteOne({});
};
