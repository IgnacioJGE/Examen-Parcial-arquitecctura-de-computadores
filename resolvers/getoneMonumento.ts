import { Request, Response } from "npm:express@4.18.2";
import { ModeloMonumento } from "../db/monumentos.ts";
export const getoneMonument = async (req: Request, res: Response) => {
    try {
     const _id=req.params.id;
    const findmonumento  = await ModeloMonumento.findOne({_id}).exec();
    if(!findmonumento){
        res.status(200).send("No se encuentra ese monumento");
        return;
    }

    res.status(200).send({
        nombre: findmonumento.nombre,
        descripcion: findmonumento.descripcion,
        postcode: findmonumento.postcode,
        ISO: findmonumento.ISO,
      });
      } catch (error) {
        res.status(500).send(error.message);
      }
    };