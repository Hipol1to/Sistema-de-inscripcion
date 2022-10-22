
// jelementos
const form = document.querySelector('#subject-form');
const steps = document.querySelectorAll('.step');
const indicators = document.querySelectorAll('.indicator');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const clearBtn = document.querySelector('clearBtn');

$("#nextBtn").on("click", function () {
 move(1);
});

//valores varios
let carrera;

// pasos
let currentStep = 0;

//pasando a losotro paso
const move = (n) => {
 //para la cinta si el formulario ta vuelto un toyo
 if (n === 1 && !validateForm()) return false;

 //quitar el paso de turno y dale pal siguiente
 steps[currentStep].style.display = 'none';
 currentStep = currentStep + n;

 //cuando temo en el ultimo paso ya
 if (currentStep >= steps.length) {
  //form.submit();
  alert("waos");
  return false;
 }

 // mostrar comentario siguiente
 showStep(currentStep);
}

// validacioneishon de formulario
const validateForm = () => {
 // informacion inicial
 let inputs = steps[currentStep].querySelectorAll('input');
 let valid = true;


 //chesquea si lo input tan vacio
 for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].value == '') {
   inputs[i].className += 'invalid';
   valid = false;
  }
 }

 //si to ta bien dale palante
 if (valid) {
  indicators[currentStep].className += ' finish';
 }

 return valid;
}

//mostrar el paso exacto
const showStep = (n) => {
 //mostrar paso siguiente
if (n != 0) {
 alert("wepa");
} 
 steps[n].style.display = 'block';

 // actualizar botones conforme a los cambioses
 if (n == 0) {
  prevBtn.style.display = 'none';
 } else {
  prevBtn.style.display = 'block';
 }
 if (n == (steps.length - 1)) {
  nextBtn.innerHTML = 'Submit';
 } else {
  nextBtn.innerHTML = 'Next';
 }

 // actualizar indicadores
 stepIndicator(n);
}

// setiar indicador
const stepIndicator = (n) => {
 // quitar estilo de indicador astivo
 for (let i = 0; i < indicators.length; i++) {
  indicators[i].className = indicators[i].className.replace(' active', '');
 }

 //mostrar el indicator astivo
 indicators[n].className += ' active';
}

//mostrar primer paso
showStep(currentStep);
