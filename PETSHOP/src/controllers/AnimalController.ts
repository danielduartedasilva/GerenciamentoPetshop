import { Request, Response } from "express";
import AnimalSchema from "../models/AnimalSchema";

class AnimalController {
  async cadastrar(request: Request, response: Response) {
    if (!request.body) {
      response.status(404).json({
        error: true,
        msg: "Está faltando o body da request!",
      });
    }

    try {
      const animal = await AnimalSchema.create(request.body);
      /*response.status(201).json({
        data: animal,
        error: false,
        msg: "Animal cadastrado com sucesso!",
      });*/
      response.status(201).json(animal);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o animal.",
      });
    }
  }

  async listar(request: Request, response: Response) {
    try {
      const animais = await AnimalSchema.find();
      // response.status(200).json({
      //   data: animais,
      //   error: false,
      //   msg: "Lista de animais atualizada!",
      // });
      response.status(200).json(animais);
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível listar os animais.",
      });
    }
  }
  async listarPorId(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const animal = await AnimalSchema.findOne({ _id: id });
      if (animal != null) {
        response.status(200).json(animal);
      } else {
        response.status(404).json({ data: animal, error: false, msg: "Animal não encontrado!" });
      }
    } catch (error) {
      response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para o ID!" });
    }
  }
  async alterarPorId(request: Request, response: Response) {
    if (!request.body) {
      response.status(404).json({
        error: true,
        msg: "Está faltando o body da request!",
      });
    }
    //const { id } = request.params;
    const { _id,nome, tipo } = request.body;
    console.log(request.body);
    try {
      const animal = await AnimalSchema.findOne({ _id: _id });
      if (animal != null) {
        const result = await AnimalSchema.updateOne(
          { _id: _id },
          {
            $set: {
              nome: nome,
              tipo: tipo,
            },
          },
        );
        // response.status(200).json({
        //   data: result,
        //   error: false,
        //   msg: "Animal atualizado com sucesso!",
        // });
        if(result != null){
          response.status(200).json(result);
        }
        response.status(404).json({
          data: animal,
          error: true,
          msg: "Animal não encontrado!",
        });
      }
    }
    catch (err) {
      response.status(200).json({
        data: err,
        error: true,
        msg: "Animal não encontrado!",
      });
    }
  }

  async apagarTudo(request: Request, response: Response) {
    try {
      const animal = await AnimalSchema.deleteMany();
      if (animal != null) {
        response
          .status(200)
          .json("Animais excluídos");
      }
      response
        .status(400)
        .json({ data: animal, error: false, msg: "animal não encontrado!" });
    } catch (error) {
      response
        .status(400)
        .json({ data: error, error: true, msg: "Formato de id não válido!" });
    }
  }
}

export { AnimalController };
