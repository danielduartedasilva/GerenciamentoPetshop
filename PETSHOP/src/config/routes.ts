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
//router.get("/cliente/listar/:cpf", clienteController.listarPorCpf);
router.post("/cliente/cadastrar", clienteController.cadastrar);
router.delete("/cliente/excluir/:id", clienteController.excluir);
router.put("/cliente/alterar/:id", clienteController.alterar);

//rotas para funcionários
router.post("/funcionario/cadastrar", funcionarioController.cadastrar);
router.put("/funcionario/alterar/:id", funcionarioController.alterar);

//rotas para animal
router.post("/animal/cadastrar", animalController.cadastrar);
router.put("/animal/alterar/:animal_id", animalController.alterarPorId);
router.get("/animal/listar", animalController.listar);

//rotas para atendimento
router.post("/atendimento/cadastrar", atendimentoController.cadastrar);
router.put("/atendimento/alterar/:id", atendimentoController.alterarPorId);

//rotas para procedimento
router.post("/procedimento/cadastrar", procedimentoController.cadastrar);
router.put("/procedimento/alterar", procedimentoController.alterar);

export { router };