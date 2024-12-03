const form = document.getElementById('contactForm'); 
form.addEventListener('submit', function(event) { 
const name = document.getElementById('name').value; 
const email = document.getElementById('email').value; 
const desc = document.getElementById('descrip').value;
if (name === '' || email === ''||desc==='') { 
alert('Por favor, completa todos los campos.'); 
event.preventDefault(); 
} else { 
alert('¡Formulario enviado correctamente!'); 
} 
}); 