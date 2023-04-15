import * as express from "express"
import { Request, Response } from "express"

const PORT = process.env.PORT || 3000


const app = express();

const port = process.env.PORT || 4000;

app.listen(port);

app.get("/", (req:Request, res:Response) => {
  res.send("pagina inicio");
});

console.log(`alisten on port ${port}`);