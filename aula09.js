// Exe 01
function mesmoNome(nFul,nBel){
  return nFul == nBel
}   
mesmoNome("law","law")

//Exe 02
function maiorIdade(id){
  return id >= 18   
}
maiorIdade(17)

//Exe 03
function acres(j){
  return (j * 1.1)
}
acres(984.5).toFixed(2)

//Exe 04
function media(total){
  somar = 0
  for (i = 0; i < total.length; i++){
    somar += total[i]
  }
  return somar / total.length
  
}

media([1,2,3,4,5])

//Exe 05
function receita(recLiq ,custProdVend){
  lucBruto = recLiq - custProdVend
  margBruta = lucBruto / recLiq
  return (margBruta * 100)
}
receita(528459.11, 632501.87).toFixed(2)

