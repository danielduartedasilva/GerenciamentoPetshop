import { model, Schema } from "mongoose";
import { ClienteSchema } from "./ClienteSchema";
import { FuncionarioSchema } from "./FuncionarioSchema";
import { AnimalSchema } from "./AnimalSchema";
import { mongoose } from "../config/database";

const AtendimentoSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome do atendimento é obrigatório!"],
    },
    cliente: { type: ClienteSchema },
    funcionario: { type: FuncionarioSchema },
    animal: { type: AnimalSchema },
    procedimento: [{type: mongoose.Schema.Types.ObjectId, ref: "animais", required: true}],
  },
  {
    timestamps: true,
  }
);

export { AtendimentoSchema };
export default model("atendimentos", AtendimentoSchema);
