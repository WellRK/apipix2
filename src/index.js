import express from "express";
import { routes } from "./routes";
import { connect } from "./services/db";

const app = express();

// Ler JSON
app.use(
  express.urlencoded({
    extend: true,
  })
);

app.use(express.json());

app.use("/v1", routes);

connect()
  .then(() => {
    // TODO: Colocar essa conexão em outro lugar
    // Ou colocar dentro de uma função assincrona
    app.listen(3000);
    console.log('Aplicação no Ar!')
    // Porta para acesso
  })
  .catch((err) => console.log(err));
