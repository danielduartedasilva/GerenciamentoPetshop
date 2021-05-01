import { Router } from "express";
import { AnimalController } from "../controllers/AnimalController";
import { AtendimentoController } from "../controllers/AtendimentoController";
import { ClienteController } from "../controllers/ClienteController";
import { FuncionarioController } from "../controllers/FuncionarioController";
import { ProcedimentoController } from "../controllers/ProcedimentoController";

const router = Router();

const clienteController = new ClienteController();
const funcionarioController = new FuncionarioController();
const animalController = new AnimalController();
const atendimentoController = new AtendimentoController();
const procedimentoController =  new ProcedimentoController();

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

//rotas para animal
router.post("/animal/cadastrar", animalController.cadastrar);
router.patch("/funcionario/alterar/:id",animalController.alterar);

//rotas para atendimento
router.post("/atendimento/cadastrar", atendimentoController.cadastrar);
router.patch("/atendimento/alterar/:id",atendimentoController.alterar);

//rotas para procedimento
router.post("/atendimento/cadastrar", atendimentoController.cadastrar);
router.patch("/atendimento/alterar/:id",atendimentoController.alterar);


export { router };