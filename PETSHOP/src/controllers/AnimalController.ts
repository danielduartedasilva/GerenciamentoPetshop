import { Request, Response } from "express";
import AnimalSchema from "../models/AnimalSchema";

class AnimalController{
    async cadastrar(request: Request, response: Response) {
        try {
            const animal = await AnimalSchema.create(request.body);

            response.status(201).json({ data: animal, error: false, msg: "Animal cadastrado com sucesso!", });
        } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Não foi possível cadastrar o animal.", });
        }   
    }

    async alterar(request: Request, response: Response) {
        try {            
            const { id } = request.params;
            const { nome, tipo, cliente, atendimento } = request.body;
            
            const animal = await AnimalSchema.findByIdAndUpdate(
                {
                    _id: id
                },
                {
                    nome: nome,
                    tipo:tipo,
                    cliente:cliente,
                    atendimento:atendimento,
                },
                {
                    new:true,
                    useFindAndModify: false,
                } 
            );

            if(animal != null){
                response.status(200).json(
                    {
                        data: animal,
                        error:false,
                        msg:"O animal foi atualizado!"
                    }
                );
            }
            else{
                response.status(404).json(
                    {
                        data: "Falha",
                        error:true,
                        msg:"O animal não foi encontrado!"
                    }
                );
            }
        } catch (error) {
            response.status(404).json(
                {
                    data: error,
                    error:true,
                    msg:"O id informado não é válido!"
                }
            );
        }
    }
}

export { AnimalController}