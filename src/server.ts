import app from "./index";
import dotenv from "dotenv";
dotenv.config();

const port = 3000;

app.listen(port, () => {
  console.log("Servidor Rodando Aqui: http://localhost:" + port);
});
