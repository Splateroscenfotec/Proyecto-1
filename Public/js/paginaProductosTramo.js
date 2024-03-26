const desdeInput = document.getElementById('desde');
const hastaInput = document.getElementById('hasta');
const filasReseñas = document.querySelectorAll('.fila-resenna');
const btnFiltrar = document.getElementById('filtrar');

btnFiltrar.addEventListener('click', () => {
  const desde = desdeInput.value;
  const hasta = hastaInput.value;

  for (let i = 0; i < filasReseñas.length; i++) {
    const fila = filasReseñas[i];
    const fechaReseña = fila.querySelector('td:first-child').textContent;
    const fechaDate = new Date(fechaReseña);

    // Mostrar/ocultar fila según la fecha
    if (desde && fechaDate < new Date(desde)) {
      fila.classList.add('oculto');
    } else if (hasta && fechaDate > new Date(hasta)) {
      fila.classList.add('oculto');
    } else {
      fila.classList.remove('oculto');
    }
  }
});

/* Funcion para agregar nueva resena */

const formularioResena = document.querySelector('.formulario-resena');
const reseñasContenedor = document.getElementById('reseñas-contenedor'); // Reemplaza por el ID del contenedor de reseñas

// Función para crear un nuevo elemento de reseña
function crearNuevaResena(fecha, comentario, calificacion) {
  const nuevaResena = document.createElement('tr'); // Crea una fila de tabla
  nuevaResena.classList.add('fila-resenna'); // Agrega clase para el filtrado

  const celdaFecha = document.createElement('td'); // Crea una celda para la fecha
  celdaFecha.textContent = fecha;
  nuevaResena.appendChild(celdaFecha);

  const celdaComentario = document.createElement('td'); // Crea una celda para el comentario
  celdaComentario.textContent = comentario;
  nuevaResena.appendChild(celdaComentario);

  const celdaCalificacion = document.createElement('td'); // Crea una celda para la calificación
  celdaCalificacion.innerHTML = obtenerCalificacionHTML(calificacion); // Establece el HTML de la calificación (estrellas)
  nuevaResena.appendChild(celdaCalificacion);

  return nuevaResena;
}

// Función para generar el HTML de las estrellas de calificación
function obtenerCalificacionHTML(calificacion) {
  let estrellasHTML = '';
  for (let i = 1; i <= 5; i++) {
    estrellasHTML += `<span class="estrella${i <= calificacion ? ' llena' : ''}">★</span>`;
  }
  return estrellasHTML;
}

// Maneja el envío del formulario para agregar una nueva reseña
formularioResena.addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const fecha = document.querySelector('#fecha').value;
  const comentario = document.querySelector('#comentario').value;
  const calificacion = document.querySelector('#calificacion').value;

  if (fecha && comentario && calificacion) { // Valida si todos los campos están llenos
    const resenaNue = crearNuevaResena(fecha, comentario, calificacion);
    reseñasContenedor.appendChild(resenaNue); // Agrega la nueva reseña al contenedor

    // Limpia los campos del formulario (opcional)
    formularioResena.reset();

    // Actualiza la funcionalidad de filtrado (si corresponde)
    // ... (código para manejar el filtrado de la nueva reseña agregada)
  } else {
    // Maneja el error: campos obligatorios no llenos
    mostrarMensajeError('Por favor, complete todos los campos del formulario.');
  }
});

// Función para mostrar un mensaje de error (opcional)
function mostrarMensajeError(mensaje) {
  const mensajeError = document.createElement('div');
  mensajeError.classList.add('mensaje-error');
  mensajeError.textContent = mensaje;

  formularioResena.appendChild(mensajeError);

  setTimeout(() => mensajeError.remove(), 3000); // Elimina el mensaje de error después de 3 segundos
}