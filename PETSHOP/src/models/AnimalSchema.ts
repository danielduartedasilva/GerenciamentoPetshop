import { model, Schema } from "mongoose";
import { AtendimentoSchema } from "./AtendimentoSchema";
import { ClienteSchema } from "./ClienteSchema";

const AnimalSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo nome do animal é obrigatório!"],
    },
    tipo: {
      type: String,
      required: [true, "O campo tipo do animal é obrigatório!"],
    },
    cliente: ClienteSchema,
  },
  {
    timestamps: true,
  }
);

export { AnimalSchema };
export default model("animais", AnimalSchema);
