document.querySelector('#calcular').addEventListener('click', e => {
    let salario = document.querySelector('#salario').value;

    let salarioReajustado = 0;
    if (salario < 500) {
        salarioReajustado = salario * 1.15;
    }
    else if (salario <= 1000) {
        salarioReajustado = salario * 1.10;
    }
    else {
        salarioReajustado = salario * 1.05;
    }

    document.querySelector('#salario-reajustado').innerHTML = 
        `Salário reajustado: ${salarioReajustado}`;
});

document.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        e.preventDefault();
        document.querySelector('#calcular').click();
    }
});


/*
    FOR - INICIALIZAÇÃO - CONDIÇÃO DE PARADA - INCREMENTO
    i++ - i = i + 1
*/
// for (i = 1; i <= 10; i++) {
//     console.log(i);
// }

// i = 1
// 1
// i = 1 + 1 = 2
// 2
// i = 2 + 1 = 3
// 3
// ...
// 10
// i = 10 + 1 = 11