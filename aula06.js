peso = 110.0
altura = 1.65
imc = peso / (altura **2)
console.log(imc.toFixed(2))
classificacao = ""
grau = 0

if (imc < 18.50){
  classificacao = "Magreza"  
} else if (imc <= 24.99){
    classificacao = "Normal"
  } else if (imc <= 29.99){
      classificacao = "Sobrepeso"
    } else if (imc <= 39.99){
       classificacao = "Obesidade"
       grau = 2
      } else if(imc >= 40.00){
          classificacao = "Obesidade Grave"
          grau = 3
        }

switch(grau){
    case 2:
    console.log(" Cuidado! Você está acima do peso recomendado pela OMS.")
  break
  case 3:
    console.log("Cuidado! Você está acima do peso recomendado pela OMS, é importante procurar um médico para avaliar sua saúde.")
  break
}
 
                
                


