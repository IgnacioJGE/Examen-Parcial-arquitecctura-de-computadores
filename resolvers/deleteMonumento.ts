import { Request, Response } from "npm:express@4.18.2";
import { ModeloMonumento } from "../db/monumentos.ts";

export const deleteMonumento = async (req: Request, res: Response) => {
  try {
    const _id  = req.params.id;
    const monument = await ModeloMonumento.findOneAndDelete({ _id }).exec();
    if (!monument) {
      res.status(404).send("Monumento no encontrado");
      return;
    }
    res.status(200).send("Monumento eliminado");
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

