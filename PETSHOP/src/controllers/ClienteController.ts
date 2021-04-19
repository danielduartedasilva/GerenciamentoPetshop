import { Request, Response } from "express";

class ClienteController{

   listar(request: Request, response: Response) {
        response.send("Alô mundo!");
    }

    listarPorId(request: Request, response: Response) {
        const { telefone, endereco } = request.params;
        console.log(telefone, endereco);
         const objeto = {
             nome: "Sebastiana da Silva",
             cpf: "111.111.111-11",
             idade: 40,
             telefone,
             endereco
        };
         response.json(objeto);
     }
    cadastrar(request: Request, response: Response) {
        const pessoa = request.body;
        console.log(pessoa);
        const objeto = { 
            msg: "Cliente cadastrado com sucesso!",
            pessoa
        };
        response.json(objeto);
    }
}

export { ClienteController };