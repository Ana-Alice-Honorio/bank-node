import { Cliente } from "../bank-node/Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Alice", 12345678910, 123);

console.log(cliente1);
