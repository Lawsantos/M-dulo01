//Exe 01
objeto = ["Carro", "bola", "palito", "giz", "copo"]
indice = 0
while (indice < objeto.length){ 
  console.log(objeto[indice])
  indice++
}

//Exe 02
media = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
total =0
for (indice = 0; indice < media.length; indice++){
  total += media[indice]  
}
console.log(total.toFixed(2)/indice)

//Exe 03
nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

meuNome = "Thais"

for(i = 0; i < nomesComuns.length; i++){
 
    compararNome = "Diferentão, hein?"
    if (meuNome == nomesComuns[i]){
      compararNome = "É, nome comum :P"
    break    
  }  
  
}

console.log(compararNome)