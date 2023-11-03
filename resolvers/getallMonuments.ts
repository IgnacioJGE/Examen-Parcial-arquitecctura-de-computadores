import { Request, Response } from "npm:express@4.18.2";
import { ModeloMonumento } from "../db/monumentos.ts";
import { getPais } from "./pais.ts";
export const getallMonuments = async (req: Request, res: Response) => {
    try {
    const findmonumento  = await ModeloMonumento.find().exec();
    if(!findmonumento){
        res.status(200).send("No hay monumentos actualmente");
        return;
    }

    const monumentoencontrado = await ModeloMonumento.find().exec();
    const allMonumentos =  monumentoencontrado.map (async(monumentoencontrado) => ({
        id: monumentoencontrado._id,
        nombre :monumentoencontrado.nombre,
        pais: await getPais(monumentoencontrado.ISO)

      }));
    res.status(200).send(allMonumentos);
      } catch (error) {
        res.status(500).send(error.message);
      }
    };