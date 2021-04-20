import { model, Schema } from "mongoose";

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
    }
);
export { AnimalSchema };