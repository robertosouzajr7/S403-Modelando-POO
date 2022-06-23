class Pessoa {
constructor (nome,dataNaascimento,cidade){
        this.nome  = nome;
        this.dataNaascimento = dataNaascimento;
        this.cidade = cidade;
        this.calcularidade()
    }
    calcularidade(){
        const dataAtual = new Date()
        const idade =  dataAtual.getFullYear()- this.dataNaascimento
        this.minhaIdade = idade
        return ` eu Tenho: ${this.minhaIdade} anos de idade!`
    }
    apresentar(){
        return `Olá, eu me chamo: ${this.nome}, nasci em ${this.dataNaascimento} na Cidade de ${this.cidade}, e tenho
        ${this.minhaIdade} anos!`
    }
}

const SobreMim = new Pessoa ('Roberto', 1990, 'Amargosa')

console.log(SobreMim.calcularidade())
console.log(SobreMim.apresentar())

//2. Elevador

class Elevador {
constructor(andarAtual,totalAndar,capacidade,totalPessoas){
    this.andarAtual = andarAtual;
    this.totalAndar = totalAndar;
    this.capacidade = capacidade;
    this.totalPessoas = totalPessoas;
}

entrar(){
    if (this.capacidade>= this.totalPessoas){
        return `O Elevador possui Capacidade para ${this.capacidade}, e entrou  ${this.totalPessoas++} pessoas.` 
    }else{
        return `Quantidade pessoas acima do Permitido!`
    }
}

sair(){
    if (this.totalPessoas>0){
        return ` No elevador tinha ${this.totalPessoas} saiu 1 pessoa, e ficou ${this.totalPessoas-1}` 
    }
}

subir(){
 if (this.andarAtual !== this.totalAndar){
    return `Estamos subindo para o ${this.andarAtual+1}º Andar!`
 }
}

descer(){
    if (this.andarAtual>0){
    return `Estamos descendo para o ${this.andarAtual-1}º Andar!`
    }
}
}

const meuElevador = new Elevador (1,10,8,7)
console.log(meuElevador.entrar())
console.log(meuElevador.descer())
console.log(meuElevador.subir())
console.log(meuElevador.sair)


// 3. Televisão:

class Televisao {
    constructor(canalAtual,VolumeAtual){
    this.canalAtual = canalAtual
    this.VolumeAtual = VolumeAtual
    }

    aumentarVolume(){
        return this.VolumeAtual+1

    }

    diminuirVolume(){

        return this.VolumeAtual-1
    }

    aumentarCanal(){
        return this.canalAtual+1
    }

    diminuirCanal(){
        return this.canalAtual-1
    }

    trocarCanal(canal){
        if(this.canalAtual !== canal){
            return this.canalAtual = canal
        }
    }

    consultarVolume(){

        return console.log(this)

    }
}

const minhaTV = new Televisao (11,45)

console.log(minhaTV.consultarVolume())
console.log(minhaTV.aumentarCanal())
console.log(minhaTV.diminuirCanal())
console.log(minhaTV.aumentarVolume())
console.log(minhaTV.diminuirVolume())
console.log(minhaTV.trocarCanal(15))





