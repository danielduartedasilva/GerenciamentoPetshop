import { Request, Response } from "express";
import FuncionarioSchema from "../models/FuncionarioSchema";

class FuncionarioController {
  async cadastrar(request: Request, response: Response) {
    try {
      const funcionario = await FuncionarioSchema.create(request.body);

      response
        .status(201)
        .json({
          data: funcionario,
          error: false,
          msg: "Funcionário cadastrado com sucesso!",
        });
    } catch (error) {
      response
        .status(400)
        .json({
          data: error,
          error: true,
          msg: "Não foi possível cadastrar o funcionário.",
        });
    }
  }

  async alterar(request: Request, response: Response) {
    try {
      const { id, estado } = request.params;

      const funcionario = await FuncionarioSchema.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          estado: estado,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );

      if (funcionario != null) {
        response.status(200).json({
          data: funcionario,
          error: false,
          msg: "O estado do funcionário foi atualizado!",
        });
      } else {
        response.status(404).json({
          data: "Falha",
          error: true,
          msg: "O funcionário não foi encontrado!",
        });
      }
    } catch (error) {
      response.status(404).json({
        data: error,
        error: true,
        msg: "O id e/ou estado informado não é válido!",
      });
    }
  }
}

export { FuncionarioController };
