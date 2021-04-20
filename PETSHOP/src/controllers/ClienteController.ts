import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";
//import { ClienteSchema } from "../models/ClienteSchema";

class ClienteController{

   async listar(request: Request, response: Response) {
        response.json(await ClienteSchema.find());
    }

    listarPorId(request: Request, response: Response) {
        const { telefone, endereco } = request.params;
        console.log(telefone, endereco);
         const objeto = {
             nome: "Sebastiana da Silva",
             cpf: "111.111.111-11",
             telefone,
             endereco
        };
         response.json(objeto);
     }
    async cadastrar(request: Request, response: Response) {
        //const cliente = request.body;
        //ClienteSchema.create(cliente);
        //As 2 linhas acima foram trocadas pela linha abaixo
        try {
            const cliente = await ClienteSchema.create(request.body);
            response.status(201).json(cliente);
        } catch (error) {
            response.status(400).json(error);
        }
        
    }
}

export { ClienteController };