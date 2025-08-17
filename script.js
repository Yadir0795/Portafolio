let menuVisible = false;

// Mostrar / ocultar menú
function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  nav.className = menuVisible ? "" : "responsive";
  menuVisible = !menuVisible;
}

// Cerrar menú al seleccionar una opción
function seleccionar() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}

// Animar habilidades con IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".skill").forEach(skill => {
        const porcentaje = skill.getAttribute("data-skill");
        skill.querySelector(".progreso").style.width = porcentaje + "%";
      });
    }
  });
}, { threshold: 0.3 });

observer.observe(document.getElementById("skills"));

// Función para enviar correo desde el formulario de contacto
function enviarCorreo() {
  const nombre = document.querySelector('#form-contacto input[type="text"]').value;
  const correo = document.querySelector('#form-contacto input[type="email"]').value;
  const mensaje = document.querySelector('#form-contacto textarea').value;

  const body = `Nombre: ${nombre}%0D%0ACorreo: ${correo}%0D%0AMensaje: ${mensaje}`;

  window.location.href = `mailto:yadirgarciacordoba@gmail.com?subject=Contacto desde portafolio&body=${body}`;
}

