document.querySelector('#calcular').addEventListener('click', e =>{
    let numero1 = document.querySelector('#valor1').value;
    let numero2 = document.querySelector('#valor2').value;
    let operador = document.querySelector('#operador').value;

    let total = eval( `${numero1} ${operador} ${numero2}` );
    console.log(total);
});