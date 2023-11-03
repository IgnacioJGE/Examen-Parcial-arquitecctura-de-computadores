import { Request, Response } from "npm:express@4.18.2";
import { ModeloMonumento } from "../db/monumentos.ts";

export const addMonumento = async (req: Request, res: Response) => {
  try {
    const { nombre, descripcion, postcode, ISO } = req.body;
    if(!nombre || !descripcion || !postcode || !ISO) {
      res.status(500).send("Nombre, descripción, codigo postal y codigo ISO son necesarios");
      return;
    }
    if(typeof nombre !== "string" || typeof descripcion !== "string" || typeof postcode !== "number" || typeof ISO !== "string") {
      res.status(500).send("Invalid datatype");

    }
    const alreadyExists = await ModeloMonumento.findOne({nombre,postcode}).exec();
    if(alreadyExists) {
      res.status(200).send("Monumento ya existente en ese codigo postal");
      return;
    }


    const nuevoMonumento = new ModeloMonumento({ nombre,descripcion,postcode,ISO});
    await nuevoMonumento.save();

    res.status(200).send({
      nombre: nuevoMonumento.nombre,
      descripcion: nuevoMonumento.descripcion,
      postcode: nuevoMonumento.postcode,
      ISO: nuevoMonumento.ISO,
    });
  } catch(error) {
    res.status(500).send(error.message);
    return;
  }
};




