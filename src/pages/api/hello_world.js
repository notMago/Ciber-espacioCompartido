import { NextApiResponse, NextApiRequest } from "next";
import { MdCollections } from "react-icons/md";
/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {
  // POST
  req.body;
  console.log(`Body = "${JSON.stringify(req.body)}"`);
  console.log("Mi nombre es: ", req.body.nombre);

  await collection.insertOne({
    hello: "world",
    date: new Date(),
    nombre: "fabio",
  });

  res.send(JSON.stringify(await collection.find({}).toArray()));
};
