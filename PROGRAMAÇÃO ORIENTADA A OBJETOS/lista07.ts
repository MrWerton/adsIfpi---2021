/*questao 1
a F
b V
c V
d F
e F
f V
g V
h V
*/

function modulo(a:number, b:number): number{
  if(a - b >= 0){
      return a - b;
  }else{
      return (a-b)*-1;
  }
}


class triangulo{
 constructor(
     public ladoA: number,
     public ladoB: number,
     public ladoC: number
 ){}
 formRet(){
     if(modulo(this.ladoB,this.ladoC) < this.ladoA && this.ladoA < (this.ladoB + this.ladoC)){
         return true;
     }else{
         return false;
     }
 }
 ehEscaleno(){
     if(this.formRet() && this.ladoA !== this.ladoB && this.ladoB !== this.ladoC && this.ladoA !== this.ladoC ){
         return true;
     }else{
         return false; 
     }
 }
   ehIsoceles(){
     if(this.formRet() && this.ladoA === this.ladoB || this.ladoB === this.ladoC || this.ladoA === this.ladoC){
         return true;
     }else{
         return false; 
     }
 }
  ehEquilatero(){
     if(this.formRet() && this.ladoA === this.ladoB && this.ladoB === this.ladoC){
         return true;
     }else{
         return false; 
     }
 }
};
let triang = new triangulo(6,6,6);
console.log(triang.formRet())
console.log(`escaleno: ${triang.ehEscaleno()}`)
console.log(`isoceles: ${triang.ehIsoceles()}`)
console.log(`equilatero: ${triang.ehEquilatero()}`);


class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}


let contas2: Conta[] = [];
let c1: Conta = new Conta("1",100);
contas2[0] = c1;
console.log(contas2[0].saldo);
//console.log(contas[1].saldo); undefined

contas2[1] = new Conta("2", 200);
console.log(contas2[1].saldo);
contas2.push(new Conta("3", 300));
console.log(contas2[2].saldo);

//questão 3
class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {
    if(!this.consultar(conta.numero)){
      this.contas.push(conta);
      console.log("Inserido com sucesso");
    }else{
      console.log("conta já existente")
    }
	}
	
	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}
			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}
	sacar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.sacar(valor);
		}
	}
  transferencia(c1: string, c2: string, valor: number): void {
    let conta_origem = this.consultar(c1);
    let conta_destino = this.consultar(c2);
    if(conta_origem != null && conta_destino != null){
      conta_origem.transferir( conta_destino, valor);
    }
}
  totalContas():number{
    let value:number = 0;
    for(let conta of this.contas){
        value++;
    }
    return value;
  }
  AllMoney():number{
    let value:number = 0;
    for(let conta of this.contas){
        value += conta.saldo;
    }
    return value;
  }
  media():number{
    return this.AllMoney() / this.totalContas();
  }
}


let banco: Banco = new Banco();
banco.inserir(c1);
banco.inserir(new Conta("2",300));
banco.inserir(new Conta("3",300));

console.log(banco.consultar("2").saldo);
console.log(banco.consultar("3").saldo);

banco.alterar(new Conta("3", 3300));
console.log(banco.consultar("3").saldo);
banco.excluir("3");
console.log(banco.consultar("3"))
banco.depositar("3", 50);
console.log(banco.consultar("3").saldo);
banco.sacar("3", 50);

console.log(banco.consultar("3").saldo);
console.log(banco.consultar("2").saldo);
banco.transferencia("3", "2", 40);
console.log(banco.consultar("3").saldo);
console.log(banco.consultar("2").saldo);
console.log(banco.totalContas())
console.log(banco.AllMoney())
console.log(banco.media())
//questão 4
class Postagem{
  constructor(
    public id:number, 
    public texto:string,
    public quantidadeCurtidas:number
    ){}
  curtir():void{
      this.quantidadeCurtidas++;
  }

  toString():string{
    return `id: ${this.id} body: ${this.texto} likes: ${this.quantidadeCurtidas}`
  }
}

class MicroBlog{
  constructor(
    public postagens:Postagem[] = []
  ){}
  postar(postagem:Postagem):void{
      this.postagens.push(postagem);
  }
  excluir(id:number):void{
      let indice:number = this.Indice(id);
      if(indice != -1){
          for(let i:number = indice; i < this.postagens.length; i++){
              this.postagens[i] = this.postagens[i + 1];
          }
          this.postagens.pop();
      }
  }

  Indice(id:number):number{
      for(let i:number = 0; i < this.postagens.length; i++){
          if(this.postagens[i].id == id){
              return i;
          }
      }
      return -1;
  }

  maislike():Postagem{
      let mais_curtida:Postagem = this.postagens[0];
      for(let i:number = 0; i < this.postagens.length; i++){
          if(this.postagens[i].quantidadeCurtidas > mais_curtida.quantidadeCurtidas){
              mais_curtida = this.postagens[i];
          }
      }
      return mais_curtida;
  }

  curtir(id:number):void{
      let indice:number = this.Indice(id);
      if(indice != -1){
          this.postagens[indice].curtir();
      }
  }

  toString():string{
      let texto:string = "";
      for(let i:number = 0; i < this.postagens.length; i++){
          texto += this.postagens[i].toString() + "\n";
      }
      return texto;
  }

}
let post1:Postagem = new Postagem(1,"AAAAA",1);
let post2:Postagem = new Postagem(2,"BBBBB",2);
post1.curtir();
console.log(post1.toString());
console.log(post2.toString());
let microblog:MicroBlog = new MicroBlog();
microblog.postar(post1);
microblog.postar(post2);
console.log(microblog.maislike());
console.log(microblog.toString());
