//Arrays
colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades = [69, 66, 58, 61, 60, 64, 59, 55]
temposDeTrabalho = [31, 29, 30, 26, 25, 24, 26, 29]
colaborador = "Colaborador inválido :|"

//Funçóes
function nome(nomeExe){
  
  for(i = 0; i < colaborador.length; i++){

    if(nomeExe == colaboradores[i]){

      colaborador = i

      break
    }
   
  }
  
  return colaborador
}

function tempo(anos){

  return temposDeTrabalho[anos]

}

function idade(anos){

  return idades[anos]

}

function verificarAposentadoria(nomes) {
  
  if(nome(nomes) != "Colaborador inválido :|"){
    if ((idade(nome(nomes)) >= 65 || tempo(nome(nomes)) >= 30) || ((idade(nome(nomes)) >= 60) && (tempo(nome(nomes)) >= 25))){

      console.log( "Parabéns, já pode sair de férias eternas :")

    }else {

      console.log( "Infelizmente para você, ainda falta um tempo :" )
    }
  }else {
    
    return colaborador
  }
}

verificarAposentadoria("Florisberto")
