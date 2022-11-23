const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
];

// Teoria 1, usando condicoes dentro dos lacos e incrementando i+1 a cada loop para imprimir os jogadores de 1 a 5, sem isso o codigo imprimiria jogadores 0 a 4 seguindo os indices do array.

 console.log("TEORIA 1 - CONDICIONAIS DENTRO DE LACOS")
  for(i = 0; i < array.length; i++){
   if(i === 0){ // o indice inicia em zero, dessa forma para o indice que inicia em 0 incrementa 1, para imprimir Jogadar 1 
    console.log("Jogador",i+1 , "Gols nas temporadas", array[0]);
   }else{
    for(i = 1; i < array.length; i++)
    console.log("Jogador",i+1 , "Gols nas temporadas", array[i]);
   }
}; 
console.log("-------------------------\n");

// Teoria 2 usando For in, mudando i para number Obs: ${i+1} para deixar o indice comecando em 1 ...5;

console.log(`TEORIA 2 - FOR IN..`);
for(let i in array){
    i = Number(i)
    console.log(`Jogador ${i+1} -`,`Gols nas temporadas: ${array[i]}`);
    
}; 
console.log("-------------------------\n")


//teoria 3 FOR OF
console.log(`TEORIA 3 - FOR OF..`);
for(let forExemp of array){
     j = (i++) - array.length
     
    console.log(`Jogador ${j} - Gols na temporadas: ${forExemp}`)
}; 



