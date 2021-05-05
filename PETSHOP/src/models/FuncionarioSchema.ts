import { model, Schema } from "mongoose";

const FuncionarioSchema = new Schema(
    {
        nome: { 
            type: String, 
            required: [true,"O campo NOME do FUNCIONÁRIO é obrigatório!"],
        min: [5, "O campo NOME deve ter  no mínimo 5 carateres!"],
        max: [128, "O campo NOME deve ter  no máximo 128 carateres!"],
        },
        cpf: {
            type: String,
            rrequired: [true,"O campo CPF do FUNCIONÁRIO é obrigatório!"],
            min: [11, "O campo CPF deve ter no mínimo 11 dígitos. Exemplo: 11111111111"],
            max: [14, "O campo CPF deve ter no máximo 14 dígitos. Exemplo: 111.111.111-11"],
        },
        telefone: {
            type: String,
            required: [true,"O campo TELEFONE do FUNCIONÁRIO é obrigatório!"],
            min: [11, "O campo TELEFONE deve ter no mínimo 11 dígitos. Exemplo: 41999887766"],
        max: [14, "O campo TELEFONE deve ter no máximo 14 dígitos. Exemplo: (41)99988-7766"],
        },
        endereco: {
        type: String,
        required: [true, "O campo ENDERECO do FUNCIONÁRIO é obrigatório!"],
        },
        funcao:{
            type: String,
            enum: ["VETERINÁRIO", "AUXILIAR"],
      uppercase: true,
      required: [true, "O campo FUNCAO no FUNCIONARIO é obrigatório!"],
        },
  },
  {
    timestamps: true,
  }
);

export default model("funcionarios", FuncionarioSchema);
