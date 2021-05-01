import { Router } from "express";
import { ClienteController } from "../controllers/ClienteController";
import { FuncionarioController } from "../controllers/FuncionarioController";

const router = Router();
const clienteController = new ClienteController();
const funcionarioController = new FuncionarioController();

//rotas para clientes
router.get("/cliente/listar", clienteController.listar);
router.get("/cliente/listar/:id", clienteController.listarPorId);
//router.get("/cliente/listarPorCpf/", clienteController.listarPorCpf);
router.post("/cliente/cadastrar", clienteController.cadastrar);
router.delete("/cliente/excluir/:id", clienteController.excluir);
router.patch("/cliente/alterar/:id",clienteController.alterar);
//rotas para funcionários
router.post("/funcionario/cadastrar", funcionarioController.cadastrar);
router.patch("/funcionario/alterar/:id/:estado",funcionarioController.alterar);




export { router };