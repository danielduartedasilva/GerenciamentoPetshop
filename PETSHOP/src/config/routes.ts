import { Router, Request, Response } from "express";
import { ClienteController } from "../controllers/ClienteController";

const router = Router();
const clienteController = new ClienteController();

router.get("/", clienteController.listar);
router.get("/cliente/listar/:telefone/:endereco", clienteController.listarPorId);
router.post("/cliente/cadastrar", clienteController.cadastrar);


export { router };