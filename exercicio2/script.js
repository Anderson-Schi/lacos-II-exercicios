const num = Number(prompt("Insira um numero "));
//const num = 5
const tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i in tabuada){
    console.log(`${num} x ${tabuada[i]} = ${tabuada[i] * num}`)   
};