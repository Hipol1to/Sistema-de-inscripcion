$( document ).ready(function() {
  // elementos
const form = document.querySelector('#subject-form');
const steps = document.querySelectorAll('.step');
const indicators = document.querySelectorAll('.indicator');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const niceBtn = document.querySelector('#niceBtn');
const careerSelect = document.querySelector('#career');
var careerSelectValue;

// elementos para anadir despues
var firstSubject;
var secondSubject;
var thirdSubject;
var fourthSubject;
var fifthSubject;
var tableHorary;

$("#niceBtn").on("click", function () {
 window.location = "https://www.youtube.com/c/BlackestCRT/";
});


$("#nextBtn").on("click", function () {
 move(1);
});

$("#prevBtn").on("click", function () {
 move(-1);
});

//valores varios
let carrera;

// pasos
let currentStep = 0;

//pasando a losotro paso
const move = (n) => {
 //para la cinta si el formulario ta vuelto un toyo
 if (n === 1 && !validateForm()) return false;
 if (n == -1) {
  $("#stp2").empty();
 }

 //quitar el paso de turno y dale pal siguiente
 steps[currentStep].style.display = 'none';
 currentStep = currentStep + n;

 //cuando temo en el ultimo paso ya
 if (currentStep >= steps.length) {
  //form.submit();
  alert("Gracias por enviar su informacion");
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
 careerSelectValue = careerSelect.value;

 //si to ta bien dale palante
 if (valid) {
  indicators[currentStep].className += ' finish';
 }

 return valid;
}

//mostrar el paso exacto
const showStep = (n) => {
 //mostrar paso siguiente
if (n == 1) {
 switch (careerSelectValue) {
  case "Software":
   firstSubject = ` 
 <a><b>Fundamentos de programacion:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
     Seleccionar Horario
   </option>
   <option value="lunes08-13" id="f-prog-lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16" id="f-prog-martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22"  id="f-prog-miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12"  id="f-prog-jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14"  id="f-prog-viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    secondSubject = ` 
 <a><b>Programacion I:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    thirdSubject = ` 
 <a><b>Programacion II:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    fourthSubject = ` 
 <a><b>Programacion III:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    fifthSubject = ` 
 <a><b>Programacion Web:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
   break;

   case "Redes":
   firstSubject = ` 
 <a><b>Fundamentos de Enrutamiento:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
     Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    secondSubject = ` 
 <a><b>Conmutación y Enrutamiento:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    thirdSubject = ` 
 <a><b>Introducción a las
 bases de Datos:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    fourthSubject = ` 
 <a><b>Tecnologías WAN:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    fifthSubject = ` 
 <a><b>Redes Inalámbricas:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
   break;

   case "Multimedia":
   firstSubject = ` 
 <a><b>Fundamentos del Computador:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
     Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    secondSubject = ` 
 <a><b>Gráficos de Mapa de Bits:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    thirdSubject = ` 
 <a><b>Comunicación
 Visual Avanzada:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    fourthSubject = ` 
 <a><b>Fotografía:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
    fifthSubject = ` 
 <a><b>Introducción a Desktop
 Publishings:</b></a>
  <select class="" id="career" name="career">
   <option value="" selected="">
   Seleccionar Horario
   </option>
   <option value="lunes08-13">Lunes de 08:00-13:00</option>
   <option value="martes14-16">Martes de 14:00-16:00</option>
   <option value="miercoles18-22">Miercoles de 18:00-22:00</option>
<option value="jueves10-12">jueves de 10:00-12:00</option>
<option value="viernes12-14">viernes de 12:00-14:00</option>
 </select>
 <br>
 
    `;
   break;
 
  default: alert("Debes seleccionar una carrera");
   break;
 }
 const subjectHeader = `
 Materias Disponibles
 <br><br>
 `;
 $("#stp2").append(subjectHeader);
 $("#stp2").append(firstSubject);
 $("#stp2").append(secondSubject);
 $("#stp2").append(thirdSubject);
 $("#stp2").append(fourthSubject);
 $("#stp2").append(fifthSubject);
}
if (n == 2) {

 /*f prog vars
 let fProgMondaySubject = $("#f-prog-lunes08-13").parent().prev();
 let fProgMondaySubjectValue = fProgMondaySubject.text();

 let fProgTuesdaySubject = $("#f-prog-martes14-16").parent().prev();
 let fProgTuesdaySubjectValue = fProgTuesdaySubject.text();

 let fProgWednesdaySubject = $("#f-prog-miercoles18-22").parent().prev();
 let fProgWednesdaySubjectValue = fProgWednesdaySubject.text();

 let fProgThursdaySubject = $("#f-prog-jueves10-12").parent().prev();
 let fProgThursdaySubjectValue = fProgThursdaySubject.text();

 let fProgFridaySubject = $("#f-prog-viernes12-14").parent().prev();
 let fProgFridaySubjectValue = fProgFridaySubject.text();*/
 
 //alert(mondaySubjectValue);
 tableHorary = `
 <TABLE BORDER>
<TR><TD>HORA</TD><TD>LUNES</TD><TD>MARTES</TD>
<TD>MIERCOLES</TD><TD>JUEVES</TD><TD>VIERNES</TD>
</TR>
<TR>
<TD>08:00-13:00</TD><TD>PROGRAMACION</TD><TD>FILOSOFIA</TD>
<TD>FILOSOFIA</TD><TD>HISTORIA</TD><TD>ESEM</TD>
</TR>
<TR ALIGN=CENTER>
<TD>10:00-12:00</TD>
<TD>ACTIVACION FISICA</TD><TD>PROGRAMACION</TD><TD>PROGRAMACION</TD><TD>PROGRAMACION</TD><TD>PROGRAMACION</TD>
</TR>
<TR ALIGN=CENTER>
<TD>12:00-14:00</TD>
<TD>MALA</TD><TD>MIA</TD><TD>PROFE</TD><TD>ESTA</TD><TD>MEDIO</TD>
</TR>
</TR>
<TR ALIGN=CENTER>
<TD>14:00-16:00</TD>
<TD>DIFICIL</TD><TD>EL</TD><TD>HORARIO</TD><TD>INTENTARE</TD><TD>COMPLETARLO</TD>
</TR>
</TR>
<TR ALIGN=CENTER>
<TD>18:00-22:00</TD>
<TD>MAS</TD><TD>TARDE</TD><TD>ALMENOS</TD><TD>SE</TD><TD>INTENTO</TD>
</TR>
</TABLE>
 `;
 $("#stp3").append(tableHorary);
} 
 steps[n].style.display = 'block';

 // actualizar botones conforme a los cambioses
 if (n == 0) {
  prevBtn.style.display = 'none';
 } else {
  prevBtn.style.display = 'block';
 }
 if (n == (steps.length - 1)) {
  nextBtn.innerHTML = 'Enviar';
 } else {
  nextBtn.innerHTML = 'Siguiente';
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

});