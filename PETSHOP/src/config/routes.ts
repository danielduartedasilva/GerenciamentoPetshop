import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";

const router = Router();
const clienteController = new ClienteController();

router.get("/cliente/listar", clienteController.listar);
router.get("/cliente/listar/:id", clienteController.listarPorId);
//router.get("/cliente/listarPorCpf/", clienteController.listarPorCpf);
router.post("/cliente/cadastrar", clienteController.cadastrar);
router.delete("/cliente/excluir/:id", clienteController.excluir);
router.patch("/cliente/alterar/:id",clienteController.alterar);

export { router };