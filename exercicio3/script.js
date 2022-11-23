const array = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

  j = 0

  for(let i of array){
    j++
    console.log(`${j} - ${i}`)
  };
  





















// Exercicios para relembrar
// Vamos criar um jogo de adivinhar
// ao iniciar a rodada o jogo deve perguntar se o usuário deseja iniciar uma rodada
// o jogo deve conter um numero e o usuário deve adivinhar esse número, se o número do usuário for menor
// o jogo deve perguntar se desejar somar 5
// se for maior o jogo deve perguntar se desejar subtrair 2
// se o usuário não acertar o número, o sistema deve perguntar se ele deseja continuar
// quando o usuário acertar informar que acertou e sair do jogo

/* const novaRodada = confirm("Deseja iniciar uma rodada? ");

if(novaRodada){
  let sair = 'c'
  let numeroDaSorte = Number(prompt("Informe um numero ")); 
  let numeroSorteado = 10
  
  while(sair !== 's'){
    if(numeroDaSorte < numeroSorteado){
      
      const maisCinco = confirm("Seu numero e menor deseja somar 5 ?");

      if(maisCinco){
        numeroDaSorte += 5
        console.log(`Seu numero e ${numeroDaSorte}`);
      }

    }else if(numeroDaSorte > numeroSorteado){
      //sub 2
      const menosDois = confirm("Seu numero e maior deseja subtrair 2 ?");
      
      if(menosDois){
        numeroDaSorte -= 2
        console.log(`Seu numero e ${numeroDaSorte}`);
      };
    };
    if(numeroDaSorte !== numeroSorteado){
      console.log("Infelizmente voce nao acertou. Tente novamente")
      sair = prompt(`Seu numero e ${numeroDaSorte}. Digite S para sair e C para continuar`).toLowerCase()
    }else {
      console.log("Parabens voce acertou")
      console.log("FIM DE JOGO")
      sair = 's'
    };
    
  };
}else{
  console.log("Jogo encerrado")
}; */
