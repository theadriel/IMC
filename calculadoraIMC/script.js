const form = document.querySelector('.form');
const btnCalcula = document.querySelector('.calcula');
btnCalcula.addEventListener('click', function(){
    

    const inputPeso = document.querySelector('.peso');
    const inputAltura = document.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // if(!peso){
    //     setResultado('Peso inválido',false);
    // }
    // if(!altura){
    //     setResultado('Altura inválida',false);
    // }
    const imc = peso/ altura **2;
    // const imc = getIMC(peso,altura);
    console.log(imc);
    // setResultado(msg, true);
})

// function getIMC(peso,altura){
//     const imc = peso / altura **2;
//     return imc;
// }