
//questão 1

class Calculadora {
	constructor(
		private numero: number,
		private numero2: number
		){}
		somar():void{
			console.log(`Resultado da soma: ${this.numero + this.numero2}`)
		}
		subtrair():void{
			console.log(`Resultado da subtração: ${this.numero - this.numero2}`)
		}
}

const calculadora = new Calculadora(4,1)
calculadora.somar()
calculadora.subtrair()


//questão 2


class Hora {
    constructor(
		private hr: number,
    private min: number,
    private seg: number
		) {}
		public ler_Segundo(): void{
			console.log(`Minuto: ${this.seg}`)
		}
    public Ler_Minuto(): void{
			console.log(`Segundo: ${this.min}`)
    }
		public Ler_Hora(): void{
			console.log(`Hora: ${this.hr}`)
		}
    public Ler_Hora_Completa():void{
        console.log(`Horário: ${this.hr} : ${this.min} : ${this.seg}`)
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
		private numero: string, 
		private saldo: number) {}
	public get_Saldo(){
		return this.saldo
	}
	public get_Numero(){
		return this.numero
	}
	public sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	public depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	public transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}
/*4b - foi necessário adaptar*/




//questão 3


class Banco {
	private contas: Conta[] = [];
	
	inserir(conta: Conta): void {
    if(!this.consultar(conta.get_Numero())){
      this.contas.push(conta);
      console.log("Inserido com sucesso");
    }else{
      console.log("conta já existente")
    }
	}
	
public consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this.contas) {
			if (conta.get_Numero() == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].get_Numero() == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.get_Numero());
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
        value += conta.get_Saldo();
    }
    return value;
  }
  public media():number{
    return this.AllMoney() / this.totalContas();
  }
}

let c1: Conta = new Conta("1",100);
console.log(`
numero da conta:${c1.get_Numero()} 
saldo:${c1.get_Saldo()} 
`)
let banco: Banco = new Banco();
banco.inserir(c1);
console.log(banco.consultar("1").get_Saldo());


