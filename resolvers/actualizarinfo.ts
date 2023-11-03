import { Request, Response } from "npm:express@4.18.2";
import { ModeloMonumento } from "../db/monumentos.ts";

export const updateMonumento = async (req: Request, res: Response) => {
  try {
    const _id=req.params.id;
    const {nombre, descripcion, postcode, ISO } = req.body;
    if (!nombre && !descripcion && !postcode && !ISO) {
      res.status(400).send("no has puesto todos los parametros");
      return;
    }

    const updateMonument = await ModeloMonumento.findByIdAndUpdate({_id},
      { nombre, descripcion, postcode, ISO },
      { new: true }
    ).exec();

    if (!updateMonument) {
      res.status(404).send("Person not found");
      return;
    }

    res.status(200).send({
      nombre: updateMonument.nombre,
      descripcion: updateMonument.descripcion,
      postcode: updateMonument.postcode,
      ISO: updateMonument.ISO,
    });
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

