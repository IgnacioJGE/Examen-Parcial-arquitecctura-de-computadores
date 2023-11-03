import mongoose from "npm:mongoose@7.6.3";
import { monumento } from "../types.ts";
const Schema = mongoose.Schema;

const monumentoSchema = new Schema(
  {
    nombre: { type: String, required: true},
    descripcion: { type: String,required: true },
    postcode: { type: Number, required: true},
    ISO: { type: String, required: true},
  },
  { timestamps: true }
);

export type tipomonumento = mongoose.Document& (monumento);// definir el ripo del modelo

export const ModeloMonumento= mongoose.model<tipomonumento>("Monumentos",monumentoSchema)



