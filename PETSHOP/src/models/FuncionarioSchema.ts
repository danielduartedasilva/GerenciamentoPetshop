import { model, Schema } from "mongoose";

const FuncionarioSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome do funcionário é obrigatório!"],
    },
    cpf: {
      type: String,
      required: [true, "O campo cpf do funcionário é obrigatório!"],
      min: [14, "O campo deve ter 14 dígitos. Exemplo: 111.111.111-11"],
    },
    telefone: {
      type: String,
      required: [true, "O campo telefone do funcionário é obrigatório!"],
      min: [9, "O campo deve ter 14 dígitos. Exemplo: 99999999"],
    },
    endereco: {
      type: String,
    },
    funcao: {
      type: String,
    },
    estado: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export { FuncionarioSchema };
export default model("funcionarios", FuncionarioSchema);
