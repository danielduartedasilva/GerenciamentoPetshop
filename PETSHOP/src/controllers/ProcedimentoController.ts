import { Request, Response } from "express";
import ProcedimentoSchema from "../models/ProcedimentoSchema";

class ProcedimentoController{
    async cadastrar(request: Request, response: Response) {
        try {
            const procedimento = await ProcedimentoSchema.create(request.body);

            response.status(201).json({ data: procedimento, error: false, msg: "Procedimento cadastrado com sucesso!", });
        } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Não foi possível cadastrar o procedimento.", });
        }   
    }

    async alterar(request: Request, response: Response) {
        try {            
            const { id } = request.params;
            const { nome, valor } = request.body;
            
            const procedimento = await ProcedimentoSchema.findByIdAndUpdate(
                {
                    _id: id
                },
                {
                    nome: nome,
                    valor:valor,
                },
                {
                    new:true,
                    useFindAndModify: false,
                } 
            );

            if(procedimento != null){
                response.status(200).json(
                    {
                        data: procedimento,
                        error:false,
                        msg:"O procedimento foi atualizado!"
                    }
                );
            }
            else{
                response.status(404).json(
                    {
                        data: "Falha",
                        error:true,
                        msg:"O procedimento não foi encontrado!"
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

export { ProcedimentoController}