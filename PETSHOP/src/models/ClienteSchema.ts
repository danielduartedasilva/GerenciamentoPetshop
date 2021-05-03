import { model, Schema } from "mongoose";

const ClienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome do cliente é obrigatório!"],
    },
    cpf: {
      type: String,
      required: [true, "O campo cpf do cliente é obrigatório!"],
      min: [14, "O campo deve ter 14 dígitos. Exemplo: 111.111.111-11"],
    },
    telefone: {
      type: String,
      required: [true, "O campo telefone do cliente é obrigatório!"],
    },
    endereco: {
      type: String,
    },
  },
  {
    //Gera o criadoEm
    timestamps: true,
  }
);

export { ClienteSchema };
export default model("clientes", ClienteSchema);
