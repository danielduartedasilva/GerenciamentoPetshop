import { Request, Response } from "express";
import ClienteSchema from "../models/ClienteSchema";

class ClienteController {
  async listar(request: Request, response: Response) {
    try {
      const clientes = await ClienteSchema.find();
      response.status(200).json({
        data: clientes,
        error: false,
        msg: "Lista de clientes atualizada!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível listar os clientes.",
      });
    }
  }

  // async listarPorId(request: Request, response: Response) {
  //     const { id } = request.params;
  //     const cliente = await ClienteSchema.findById(id);
  //     response.status(200).json({ data: cliente, error: false, msg: "Cliente encontrado!", });
  //  }

  async listarPorId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const cliente = await ClienteSchema.find({ _id: id });

      if (cliente != null) {
        response
          .status(200)
          .json({ data: cliente, error: false, msg: "Cliente encontrado!" });
      }
      response
        .status(400)
        .json({ data: cliente, error: false, msg: "Cliente não encontrado!" });
    } catch (error) {
      response
        .status(400)
        .json({ data: error, error: true, msg: "Formato de id não válido!" });
    }
  }

  async excluir(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const cliente = await ClienteSchema.deleteOne({ _id: id });
      if (cliente != null) {
        response
          .status(200)
          .json({ data: cliente, error: false, msg: "Cliente excluído!" });
      }
      response
        .status(400)
        .json({ data: cliente, error: false, msg: "Cliente não encontrado!" });
    } catch (error) {
      response
        .status(400)
        .json({ data: error, error: true, msg: "Formato de id não válido!" });
    }
  }

  async cadastrar(request: Request, response: Response) {
    try {
      //await para dar uma pausa antes de ir para o próximo processo,
      //por isso usado o async, usados em operações que envolvem o banco de dados
      const cliente = await ClienteSchema.create(request.body);
      response.status(201).json({
        data: cliente,
        error: false,
        msg: "Cliente cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o cliente.",
      });
    }
  }
  async alterar(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { nome, cpf, telefone, endereco } = request.body;

      const cliente = await ClienteSchema.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          nome: nome,
          cpf: cpf,
          telefone: telefone,
          endereco: endereco,
        },
        {
          new: true,
          useFindAndModify: false,
        }
      );

      if (cliente != null) {
        response.status(200).json({
          data: cliente,
          error: false,
          msg: "O cliente foi atualizado!",
        });
      } else {
        response.status(404).json({
          data: "Falha",
          error: true,
          msg: "O cliente não foi encontrado!",
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
export { ClienteController };
