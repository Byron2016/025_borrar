import * as express from "express"
import { Request, Response } from "express"

const PORT = process.env.PORT || 3000


const app = express();

const port = process.env.PORT || 4000;

//app.listen(port);

app.get("/", (req:Request, res:Response) => {
  res.send("pagina inicio");
});

app.get('/test', (_req: Request, res: Response) => {
    return res.send('aaExpress Typescript on Vercel')
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓')
  })

  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })

//console.log(`alisten on port ${port}`);