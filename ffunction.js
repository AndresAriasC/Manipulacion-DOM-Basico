const title = document.querySelector('h1');
const res = document.querySelector('#result');
const cal = document.getElementById('calc');
const form = document.querySelector('#form');
const cal2 = document.getElementById('calc2');
const btnCalcular = document.getElementById('btnCalcular');

form.addEventListener('submit', btnOnClick );

//escuchamos
function sumarInput(){
    
    const suma = cal.value + cal2.value;
    res.innerText = "el resultado es: " + suma;
}