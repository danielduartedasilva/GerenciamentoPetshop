import { model, Schema } from "mongoose";
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
    cliente: { type: ClienteSchema },
  },
  {
    timestamps: true,
  }
);

export { AnimalSchema };
export default model("animais", AnimalSchema);
