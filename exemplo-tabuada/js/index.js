document.querySelector('#calcular').addEventListener('click', () =>{
    document.querySelector('#tabuada').innerHTML = '';
    let numero = document.querySelector('#numero').value;  
  for (let i = 1; i <= 10; i++){
      let tabuada = numero * i;
      document.querySelector('#tabuada').innerHTML += `${numero} x ${i} = ${tabuada}<br>`;
  }
  document.querySelector('#numero').value = '';

   //Algoritimo de números pares
  for (let i = 2; i <= 100; i = i + 2){
    console.log(i);
  }

  //Algoritimo de números Impares
  for (let i = 1; i <= 100; i = i + 2){
    console.log(i);
  }
})      
