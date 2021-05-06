import { Request, Response } from "express";
import AnimalSchema from "../models/AnimalSchema";

class AnimalController{
    async cadastrar(request: Request, response: Response) {
        if (!request.body) {
            response.status(404).json({
              error: true,
              msg: "Está faltando o body da request!",
            });
          }
        try {
            const animal = await AnimalSchema.create(request.body);
      response.status(201).json({
        data: animal,
        error: false,
        msg: "Animal cadastrado com sucesso!",
      });
    } catch (error) {
      response.status(400).json({
        data: error,
        error: true,
        msg: "Não foi possível cadastrar o animal.",
      });
    }
  }

  async listarPorId(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const animal = await AnimalSchema.find({ _id: id }).populate("cliente");
      if (animal != null) {
        response
          .status(200)
          .json({ data: animal, error: false, msg: "Animal encontrado!" });
      }
      response
        .status(400)
        .json({ data: animal, error: false, msg: "Animal não encontrado!" });
      } catch (error) {
        response
          .status(400)
          .json({ data: error, error: true, msg: "Formato de id não válido!" });
      }
    }

  async alterarPorId(request: Request, response: Response) {
    if (!request.body) {
      response.status(404).json({
        error: true,
        msg: "Está faltando o body da request!",
      });
    }

    const { id } = request.params;
    const { nome, cliente } = request.body;
    
    try {
      const animal = await AnimalSchema.findOne({ _id: id });

     
      if (animal != null) {
        const result = await AnimalSchema.updateOne(
          {  _id: id },
          {
            $set:{
              nome: nome,
              cliente: cliente,  
            }    
          }
        ); 
        if(result != null){
          response.status(200).json({
            data: result,
            error: false,
            msg: "Animal atualizado com sucesso!",
          });
        }
        else{
          response.status(404).json({
            data: animal,
            error: true,
            msg: "Não foi possível atualizar!",
          });    
        }
      }
      
    } catch (err) {
      response.status(404).json({
        data: err,
        error: true,
        msg: "Animal não encontrado!",
      });
    }
  }
}

export { AnimalController };
