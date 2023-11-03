
import express,{Request,Response} from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { addMonumento } from "./resolvers/addmonumentos.ts";
import { getallMonuments } from "./resolvers/getallMonuments.ts";
import { getPais } from "./resolvers/pais.ts";
import { updateMonumento } from "./resolvers/actualizarinfo.ts";
import { getoneMonument } from "./resolvers/getoneMonumento.ts";
import { deleteMonumento } from "./resolvers/deleteMonumento.ts";
const env = await load();
const MONGO_URL=env.MONGO_URL||Deno.env.get("MONGO_URL")// si hay .emv lo leo si no lo lee de las variables de entorno de deno
const PORT=env.PORT||Deno.env.get("PORT")||3000
if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}
try{
 
  console.log(getPais("FR").then)
await mongoose.connect(MONGO_URL);
console.info("Mongo Concectado")
const app= express();
app.use(express.json())
app.post("/api/monumentos",addMonumento)
   .get("/api/allmonumentos",getallMonuments)
   .put("/api/monumentos/:id",updateMonumento)
   .get("/api/unmonumento/:id",getoneMonument)
   .delete("/api/deletemonumento/:id",deleteMonumento)

app.listen(PORT,()=> console.info ((`Te estoy escuchando desde ${PORT}`)));
}catch(e){
  console.error(e)
}


