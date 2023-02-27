var resultadopessoa = document.querySelector('#txt4')
var resultadototal = document.querySelector('#txt5')

var b5 = document.querySelector('#botao5')
var b10 = document.querySelector('#botao10')
var b15 = document.querySelector('#botao15')
var b25 = document.querySelector('#botao25')
var b50 = document.querySelector('#botao50')
var custo = document.querySelector('#botaocusto')


function  calcularGor5(){

var valor = document.querySelector('#input-bill')
var people = document.querySelector('#input-people')

if (valor.value !=="" && people.value !==""){

    valorGorjetaPessoa = ((valor.value/100) * 5)/people.value
    valorTotalpessoa = (valor.value/people.value) + valorGorjetaPessoa

    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`
    resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`
    console.log(valor.value)

}else{
    alert('Preencha todos os campos')
}
}
b5.addEventListener('click', () => {
    calcularGor5()
})
    



function  calcularGor10(){

var valor = document.querySelector('#input-bill')
var people = document.querySelector('#input-people')
        
 if (valor.value !=="" && people.value !==""){
        
    valorGorjetaPessoa = ((valor.value/100) * 10)/people.value
    valorTotalpessoa = (valor.value/people.value) + valorGorjetaPessoa
        
    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`
    resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`
    console.log(valor.value)
        
}else{
    alert('Preencha todos os campos')
}
}
b10.addEventListener('click', () => {
        calcularGor10()
    })



function  calcularGor15(){

    var valor = document.querySelector('#input-bill')
    var people = document.querySelector('#input-people')
                
if (valor.value !=="" && people.value !==""){
                
    valorGorjetaPessoa = ((valor.value/100) * 15)/people.value
    valorTotalpessoa = (valor.value/people.value) + valorGorjetaPessoa
                
    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`
    resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`
    console.log(valor.value)
                
}else{
    alert('Preencha todos os campos')
}
}
b15.addEventListener('click', () => {
        calcularGor15()
})



function  calcularGor25(){

    var valor = document.querySelector('#input-bill')
    var people = document.querySelector('#input-people')
                        
if (valor.value !=="" && people.value !==""){
                        
    valorGorjetaPessoa = ((valor.value/100) * 25)/people.value
    valorTotalpessoa = (valor.value/people.value) + valorGorjetaPessoa
                        
    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`
    resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`
    console.log(valor.value)
                        
}else{
    alert('Preencha todos os campos')
}
}
b25.addEventListener('click', () => {
        calcularGor25()
})



function  calcularGor50(){

    var valor = document.querySelector('#input-bill')
    var people = document.querySelector('#input-people')
                        
if (valor.value !=="" && people.value !==""){
                        
    valorGorjetaPessoa = ((valor.value/100) * 50)/people.value
    valorTotalpessoa = (valor.value/people.value) + valorGorjetaPessoa
                        
    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`
    resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`
    console.log(valor.value)
                        
}else{
    alert('Preencha todos os campos')
}
}
b50.addEventListener('click', () => {
        calcularGor50()
})



function  calcularcusto(){

    valor = document.querySelector('#input-bill')
    people = document.querySelector('#input-people')
        
if (valor.value !=="" && people.value !==""){
        
    var valorGorjetaPessoa = ((valor.value/100) * custo.value)/people.value
    var valorTotalpessoa = (valor.value/people.value) + valorGorjetaPessoa
        
    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.toFixed(2)}`
    resultadototal.innerHTML= `\$ ${valorTotalpessoa.toFixed(2)}`
    console.log(valor.value)
        
}else{
    alert('Preencha todos os campos')
}
}
    custo.addEventListener('click', () => {
          calcularcusto()
})    

