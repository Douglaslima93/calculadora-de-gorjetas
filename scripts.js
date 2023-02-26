var resultadopessoa = document.querySelector('#txt4')
var resultadototal = document.querySelector('#txt5')

var b5 = document.querySelector('#botao5%')
var b10 = document.querySelector('#botao10%')
var b15 = document.querySelector('#botao15%')
var b25 = document.querySelector('#botao20%')
var b50 = document.querySelector('##botao50%')


function  calcularGor5(){

var valor = document.querySelector('#input-bill')
var people = document.querySelector('#input-peoplo')

if (input-bill.value !=="" && input-people.value !==""){

    valorGorjetaPessoa = ((input-bill.value/100) * 5)/input-people.value
    valorTotalpessoa = (input-bill.value/input-people.value) + valorGorjetaPessoa

    resultadopessoa.innerHTML= `\$ ${valorGorjetaPessoa.tofixed(2)}`
    resultadototal.innerHTML= `\$ ${valorGorjetaPessoa.tofixed(2)}`
    console.log(input-bill.value)

}else{
    alert('Preencha todos os campos')
}

}