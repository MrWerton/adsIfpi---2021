//questão 1

class Calculadora {
	constructor(
		private _numero: number,
		private _numero2: number
		){}
		somar():void{
			console.log(`Resultado da soma: ${this._numero + this._numero2}`)
		}
		subtrair():void{
			console.log(`Resultado da subtração: ${this._numero - this._numero2}`)
		}
}

const calculadora = new Calculadora(4,1)
calculadora.somar()
calculadora.subtrair()


//questão 2


class Hora {
    constructor(
		private _hr: number,
		private _min: number,
		private _seg: number
		) {}
		public ler_Segundo(): void{
			console.log(`Minuto: ${this._seg}`)
		}
    	public Ler_Minuto(): void{
			console.log(`Segundo: ${this._min}`)
		}
		public Ler_Hora(): void{
			console.log(`Hora: ${this._hr}`)
		}
    	public Ler_Hora_Completa():void{
    		console.log(`Horário: ${this._hr} : ${this._min} : ${this._seg}`)
    	}
}

const hora = new Hora(4,10, 30)
hora.Ler_Hora()
hora.ler_Segundo()
hora.Ler_Minuto()
hora.Ler_Hora_Completa()


//questão 4

class Conta {
	constructor(
		private _numero: string, 
		private _saldo: number) {}
		public get Saldo(){
			return this._saldo
		}
		public get Numero(){
			return this._numero
		}
		public sacar(valor: number): void {
			this._saldo = this._saldo - valor;
		}

		public depositar(valor: number): void {
			this._saldo = this._saldo + valor;
		}
		public transferir(contaDestino: Conta, valor: number): void {
			this.sacar(valor);
			contaDestino.depositar(valor);
		}
}

//4-b  foi necessário adapatar


//questão 3


class Banco {
	private contas: Conta[] = [];
	inserir(conta: Conta): void {
    if(!this.consultar(conta.Numero)){
      this.contas.push(conta);
      console.log("Inserido com sucesso");
    }else{
      console.log("conta já existente")
    }
	}
	
public consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this.contas) {
			if (conta.Numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].Numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.Numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
		}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}
			this.contas.pop();
		} 
	}
	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}
	public sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}
	public transferencia(c1: string, c2: string, valor: number): void {
		let conta_origem = this.consultar(c1);
		let conta_destino = this.consultar(c2);
		if(conta_origem != null && conta_destino != null){
			conta_origem.transferir( conta_destino, valor);
		}
	}
  public totalContas():number{
    let value:number = 0;
    for(let conta of this.contas){
        value++;
    }
    return value;
  }
  public AllMoney():number{
    let value:number = 0;
    for(let conta of this.contas){
        value += conta.Saldo;
    }
    return value;
  }
  public media():number{
    return this.AllMoney() / this.totalContas();
  }
}

let c1: Conta = new Conta("1",100);
console.log(`
numero da conta:${c1.Numero} 
saldo:${c1.Saldo} 
`)
let banco: Banco = new Banco();
banco.inserir(c1);
console.log(banco.consultar("1").Saldo);
