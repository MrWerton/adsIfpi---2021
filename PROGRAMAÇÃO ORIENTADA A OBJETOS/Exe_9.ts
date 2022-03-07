//questão 1
class Veiculo{
	constructor(
		private _placa: string,
		private _ano: number
	){}
	get Placa():string{
		return this._placa;
	}
	get Ano():number{
		return this._ano
	}
}

class Carro extends Veiculo{
	constructor(
		placa: string,
		ano: number,
		private _modelo: string
	){
		super(placa, ano);
	}
	get Modelo():string{
		return this._modelo;
	}
}
class CarroEletrico extends Carro{
	constructor(
		placa: string,
		ano: number,
		modelo:string,
		private _autonomiaBateria: number
	){
		super(placa, ano, modelo);
	}
	get AutonomiaBateria():number{
		return this._autonomiaBateria;
	}
}

let Ford:Carro = new Carro("2221-Usa", 2010, "Ford KA");
let Tesla:CarroEletrico = new CarroEletrico("2020-Usa", 2021, "Model-X",2000);

//questão 2 
class Calculadora {
	constructor( //letra b
		private _numero: number, //mesmo que _op1 (letra a)
		private _numero2: number //mesmo que _op2 (letra a)
		){}
		somar():void{
			console.log(`Resultado da soma: ${this._numero + this._numero2}`) //faz parte da calculadora passada
		}
		subtrair():void{
			console.log(`Resultado da subtração: ${this._numero - this._numero2}`) //faz parte da calculadora do exercicio anteriror
		}
		adicionar():number{  //método exigido na letra c (é quase a mesma coisa da soma, só que aqui retorna um number, lá uma mensagem)
			return this._numero2 + this._numero
		}
		get Num1():number{  //necessário para extends
			return this._numero
		}
		get Num2():number{  //necessário para extends
			return this._numero2
		}
}
//letra d
const calculadora = new Calculadora(4,1)
calculadora.somar();
calculadora.subtrair();
console.log(calculadora.adicionar());
console.log(calculadora.Num1)
console.log(calculadora.Num2);

//questão 2 -> 
class CalculadoraCientifica extends Calculadora{
	constructor(
		numero1: number,
		numero2: number,
	){
		super(numero1, numero2)
	}
	expornencial():number{//a
		return this.Num1 ** this.Num2
	}
}

//b 
const calculador_cientifica:CalculadoraCientifica = new CalculadoraCientifica(5,2);
console.log(calculador_cientifica.expornencial());

/* c -> sim, foi necessário criar dois métodos de acesso para acessar os operadores*/





//questão 4

class Conta {
	constructor(
		private _numero: string, 
		private _saldo: number) {}
		public get Saldo():number{
			return this._saldo
		}
		public get Numero():string{
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
class Poupanca extends Conta{
	constructor(
		numero: string,
		saldo: number,
		private _taxaJuros: number
	){
		super(numero, saldo);
	}
	public renderJuros():void{
		this.depositar(this.Saldo * this._taxaJuros/100);
	}
	get taxaJuros():number{
		return this._taxaJuros;
	}
}

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
  public renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);//a
		if (contaConsultada instanceof Poupanca) {//b
			let poupanca: Poupanca = <Poupanca> contaConsultada;
			poupanca.renderJuros();//c
		}
	}
}

//d
let banco: Banco = new Banco();
banco.inserir(new Conta("1", 100))
banco.inserir(new Poupanca("2", 100, 0.5));

//render juros conta
banco.renderJuros("1");
console.log(banco.consultar("1").Saldo);


//render juros poupança
banco.renderJuros("2");
console.log(banco.consultar("2").Saldo);

//5


class Produto{//a
	constructor(
		private _id: number,
		private _quantidade: number,
		private _descricao: string,
		private _valor: number
	){}
	get Id():number{
		return this._id
	}
	get Quant():number{
		return this._quantidade
	}
	repor(quantR: number): number{
		 return this._quantidade = this.Quant + quantR;
	}
	darBaixa(quantB:number):number{
		return this._quantidade = this.Quant - quantB;
	}
}


class ProdutoPerecivel extends Produto{ //a
	constructor(
		id: number,
		quantidade: number,
		descricao: string,
		valor: number,
		private _dataValidade: Date
	){
		super(id,quantidade, descricao,valor)
	}
	get data_de_validade(){
		return this._dataValidade;
	}
	isValido():number{
		return this.data_de_validade < new Date()? 1 : 0	
	}
};


class Estoque{ //b

	private _produtos:ProdutoPerecivel[] = []


	get produtos(){
		return this._produtos
	}
	public inserir(NewProduto: ProdutoPerecivel){//c
		const {Id} = NewProduto;
		const pos = this.obterPosiçao(Id) //professor, em relaçãom ao nome, ele não é passado como parameto. Entretanto, como estou criando os produtos via as classes produtos/produtosperecivel, o nome não se repete 
		if(pos != -1){ //d
			console.log("id existente")
		}else{
			this.produtos.push(NewProduto);
			
		}
	}
	private obterPosiçao(id: number): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.produtos.length; i++) {
			if (this.produtos[i].Id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}
	public consultar(id:number){//c
		const idproduto: number = this.obterPosiçao(id);
		console.log(this.produtos[idproduto])
	}
	public excluir(id: number): void {//c
		let indice: number = this.obterPosiçao(id);
		if (indice != -1) {
			for (let i: number = indice; i < this.produtos.length; i++) {
				this.produtos[i] = this.produtos[i+1];
			}
			this.produtos.pop();
		} 
	}
	public ListarPereciveis():void{//f
		for(let pd of this.produtos){
			if(pd.isValido() == 1){
				console.log(pd)
			}
		}
	}
	public Repor(quantR: number, id:number){ //e
		let indice: number = this.obterPosiçao(id);
		this.produtos[indice].repor(quantR)
	}
	public DarBaixa(quantR: number, id:number){ //e
		let indice: number = this.obterPosiçao(id);
		this.produtos[indice].darBaixa(quantR)
	}
}

let Computador:Produto = new Produto(2, 100,"Mac Pro", 8000);
let Celular:Produto = new Produto(1, 150,"Iphone X", 2005);
Celular.darBaixa(50)
Computador.repor(100)
console.log(Celular)

let feijao:ProdutoPerecivel = new ProdutoPerecivel(1, 100,"feijao tropero", 5.50, new Date("2022/05/20"));
let arroz:ProdutoPerecivel = new ProdutoPerecivel(2, 200,"arroz branco", 8.50, new Date("2011/05/21"));
let macarrao:ProdutoPerecivel = new ProdutoPerecivel(3, 150,"Macarrao para sopa", 2.50, new Date("2020/05/21"));

let estoque = new Estoque()
estoque.inserir(arroz)
estoque.inserir(feijao)
estoque.inserir(macarrao)
estoque.excluir(2)
console.log(estoque)
estoque.consultar(3)

estoque.DarBaixa(40, 3);
estoque.Repor(100, 3)
estoque.consultar(3) 
estoque.ListarPereciveis()
 

