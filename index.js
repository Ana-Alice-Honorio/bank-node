// import { Cliente } from "./Cliente";
// import { ContaCorrente } from "./ContaCorrente";
// import { ContaPoupanca } from "./ContaPoupanca.js";
// import { Conta } from "./Conta.js";

// const cliente1 = new Cliente("Alice");
// const cliente2 = new Cliente("");
// const cliente3 = new Cliente("");

class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}
const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

console.log(cliente1);
