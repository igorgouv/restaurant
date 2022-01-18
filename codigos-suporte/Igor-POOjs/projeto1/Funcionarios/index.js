
import { Cliente } from "..Cliente.js";
import { Gerente } from "./Gerente.js";
import { Diretor } from "./Diretor.js";
import { SistemaAutenticacao } from "../SistemaAutenticacao.js";

const diretor = new Diretor("Fulano", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345678901);

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");