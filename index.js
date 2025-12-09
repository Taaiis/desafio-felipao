// declarando as váriaveis 
let nomeHeroi = "Homem de ferro"
let nivelHeroi = 8000
let nivel = " ";


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
        console.log(`O Herói de nome ${nomeHeroi} esta no nível de ${nivel}`);

    