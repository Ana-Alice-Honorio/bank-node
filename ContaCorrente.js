import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return thid._saldo;
  }

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
  }
}
