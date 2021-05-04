import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ronaldogdn:R0n@ld0gdn@cluster0.8ldww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada com o banco de dados");
  })
  .catch((erro) => {
    console.log(`Erro ao conectar com o banco de dados: ${erro}`);
  });

export { mongoose };
