let vitorias = int(input("Digite o número de vitórias: "));
let derrotas = int(input("Digite o número de derrotas: "));




function Calcularnivel(vitorias, derrotas) {
let saldoDeVitorias = vitorias - derrotas
let nivel = "";


if (vitorias <= 10) {
    console.log("Nível Ferro");
    nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    console.log("Nível Bronze");
    nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    console.log("Nível Prata");
    nivel = "Prata";
} else if (vitorias >=51 && vitorias <= 80) {
    console.log("Nível Ouro");
    nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    console.log("Nível Diamante");
    nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    console.log("Nível Lendário");
    nivel = "Lendário";
} else if (vitorias >= 101) {
    console.log("Nível Imortal");
    nivel = "Imortal"

}
return ('O Herói tem de saldo de vitórias ' + saldoDeVitorias + ' está no nível' + nivel);
}
let resultado = Calcularnivel (vitorias, derrotas);
console.log(resultado);