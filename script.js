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

/* ============================= */
/*   Animación portafolio        */
/* ============================= */
const proyectos = document.querySelectorAll(".proyecto-horizontal");

const observerProyectos = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

proyectos.forEach(proyecto => observerProyectos.observe(proyecto));

/* ============================= */
/*   Enviar correo contacto      */
/* ============================= */
function enviarCorreo() {
  const nombre = document.querySelector('#form-contacto input[type="text"]').value;
  const correo = document.querySelector('#form-contacto input[type="email"]').value;
  const mensaje = document.querySelector('#form-contacto textarea').value;

  const body = `Nombre: ${nombre}%0D%0ACorreo: ${correo}%0D%0AMensaje: ${mensaje}`;
  window.location.href = `mailto:yadirgarciacordoba@gmail.com?subject=Contacto desde portafolio&body=${body}`;
}

/* ============================= */
/*   Toggle tema oscuro/claro    */
/* ============================= */
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });
}

const logoText = document.getElementById('logo-text');
const words = ["Developer", "Coder", "Designer"]; // Palabras a rotar
let wordIndex = 0;
let charIndex = 0;
let typing = true;






