import { Request, Response } from "express";
import AtendimentoSchema from "../models/AtendimentoSchema";

class AtendimentoController {
  async cadastrar(request: Request, response: Response) {
    try {
      const atendimento = await AtendimentoSchema.create(request.body);

      response.status(201).json({
        data: atendimento,
        error: false,
        msg: "Atendimento cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o atendimento.",
      });
    }
  }

  async alterar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { cliente, funcionario, animal, procedimento } = request.body;

      const atendimento = await AtendimentoSchema.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          cliente: cliente,
          funcionario: funcionario,
          animal: animal,
          procedimento: procedimento,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );

      if (atendimento != null) {
        response.status(200).json({
          data: procedimento,
          error: false,
          msg: "O atendimento foi atualizado!",
        });
      } else {
        response.status(404).json({
          data: "Falha",
          error: true,
          msg: "O atendimento não foi encontrado!",
        });
      }
    } catch (error) {
      response.status(404).json({
        data: error,
        error: true,
        msg: "O id informado não é válido!",
      });
    }
  }
}

export { AtendimentoController };
