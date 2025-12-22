// declarando as váriaveis, com nome do herói e seu nível
let nomeHeroi = "Homem de ferro" 
let nivelHeroi = 9500;
let nivel = " ";

// definindo o nível do herói, ultilizando a estrutua de decisão 
 if (nivelHeroi <= 1000) {
        nivel = "Ferro";
}  else if (nivelHeroi <= 2000) {
         nivel = "Bronze";
} else if (nivelHeroi <= 5000) {
        nivel = "Prata";
} else if (nivelHeroi <= 7000) {
        nivel = "Ouro";
} else if (nivelHeroi <= 8000) {
       nivel = "Platina";
} else if (nivelHeroi <= 9000) {
        nivel = "Ascendente";
 } else if (nivelHeroi <= 10000){
       nivel = "Imortal"; 
 } else if (nivelHeroi > 10000) {
       nivel = "Radiante";
 }
//saída no console com o nome do herói e seu nível
        console.log(`O Herói de nome ${nomeHeroi} esta no nível ${nivel}`);

    
