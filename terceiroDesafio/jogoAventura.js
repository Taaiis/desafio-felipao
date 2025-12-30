class Heroi{
    constructor(nomeDoHeroi, idadeDoHeroi, tipoHeroi){
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.tipoHeroi = tipoHeroi
    }

    atacar(){
        let ataque  
            switch (this.tipoHeroi) {
                case "mago": 
                ataque = "magia"
                break
                case "guerreiro": 
                ataque = "espada"
                break
                case "monge": 
                ataque = "artes marciais"
                break
                case "ninja": 
                ataque = "shuriken"
                break

            
        }
        console.log(`o ${this.tipoHeroi} atacou usando ${ataque}`)
       

    }
}

let primeiroHeroi = new Heroi ("Claus", 25, "guerreiro")
let segundoHeroi = new Heroi ("Terus", 34, "mago")


console.log (primeiroHeroi.nomeDoHeroi)
console.log (primeiroHeroi.idadeDoHeroi)
console.log (primeiroHeroi.tipoHeroi)

primeiroHeroi.atacar()

console.log (segundoHeroi.nomeDoHeroi)
console.log (segundoHeroi.idadeDoHeroi)
console.log (segundoHeroi.tipoHeroi)

segundoHeroi.atacar()
