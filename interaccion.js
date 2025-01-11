const btnTop = document.querySelector('.btn-float');
const rootEl = document.documentElement;

document.addEventListener('scroll', showButton);
btnTop.addEventListener('click', scrollToTop);

function showButton() {
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight; // Completar con clientHeight

  if (rootEl.scrollTop / scrollTotal > 0.3) {
    btnTop.style.transform = "translateX(0px)";
  } else {
    btnTop.style.transform = "translateX(200px)";
  }
}

function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

  
  
  
// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// evento para mostrar y ocultar el curriculum
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.toggle-button');
  const content = document.querySelector('.content');

  toggleButton.addEventListener('click', function() {
      if (content.style.display === 'none' || content.style.display === '') {
          content.style.display = 'block';
      } else {
          content.style.display = 'none';
      }
  });
});

//contador de visitas
document.addEventListener('DOMContentLoaded', () => {
  let visita = localStorage.getItem('visitas') || 0;
  visita++;
  localStorage.setItem('visitas', visita);
  document.getElementById('visitas').textContent = visita;
});

//carrusel

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//cuando click en punto
//saber la posicion de ese punto
//aplicar un transform translatex al grande
//quitar la clase activo de todos los puntos
//añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i )=>{
  punto[i].addEventListener('click',()=>{
    let posicion = i
    let operacion = posicion * -50

    //posicion es 0 transformx es 0
    //posicion es 1 transformx es -50%
    grande.style.transform = `translatex(${operacion}% )`

    punto.forEach((cadaPunto , i )=>{
      punto[i].classList.remove('activo')
    })
    punto[i].classList.add('activo')
  })
})