// declarando as váriaveis, com nome do herói e seu nível
let nomeHeroi = input("Digite o nome do herói: ");
let nivelHeroi = parseInt(input("Digite o nível do herói: ")); 
let nivel = " ";

// definindo o nível do herói, ultilizando a estrutua de decisão if...else if...else
 if (nivelHeroi <= 1000) {
        nivel = "Ferro";
}  else if (nivelHeroi >= 1001 && nivelHeroi <= 2000) {
         nivel = "bronze";
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000) {
        nivel = "prata";
} else if (nivelHeroi >= 5001 && nivelHeroi <= 7000) {
        nivel = "ouro";
} else if (nivelHeroi >= 7001 && nivelHeroi <= 8000) {
       nivel = "Platina";
} else if (nivelHeroi > 8001 && nivelHeroi <= 9000) {
        nivel = "Ascendente";
 } else if (nivelHeroi >= 9001 && nivelHeroi <= 10000){
       nivel = "Imortal"; 
 } else if (nivelHeroi > 10000) {
       nivel = "Radiante";
 }
//saída no console com o nome do herói e seu nível
        console.log(`O Herói de nome ${nomeHeroi} esta no nível de ${nivel}`);

    