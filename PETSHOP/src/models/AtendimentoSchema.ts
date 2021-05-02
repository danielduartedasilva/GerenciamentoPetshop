import { model, Schema } from "mongoose";
import { ClienteSchema } from "./ClienteSchema";
import { FuncionarioSchema } from "./FuncionarioSchema";
import ProcedimentoSchema from "./ProcedimentoSchema";
import { AnimalSchema } from "./AnimalSchema";

const AtendimentoSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome do atendimento é obrigatório!"],
    },
    cliente: ClienteSchema,
    funcionario: FuncionarioSchema,
    animal: AnimalSchema,
    procedimento: [ProcedimentoSchema],
  },
  {
    timestamps: true,
  }
);

export { AtendimentoSchema };
export default model("atendimentos", AtendimentoSchema);
