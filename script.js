// Seleccionar elementos por ID
var myCarousel = document.getElementById('myCarousel');
var carouselThumbs = document.getElementById('carousel-thumbs');

// Inicializar el carousel
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false
});

// Manejar los thumbnails del carousel
var carouselSelectors = document.querySelectorAll('[id^=carousel-selector-]');
carouselSelectors.forEach(function (selector) {
  selector.addEventListener('click', function () {
    var idSelector = this.id;
    var id = parseInt(idSelector.substr(idSelector.lastIndexOf('-') + 1));
    carousel.to(id);
  });
});

// Mostrar solo 3 elementos en la navegación en dispositivos móviles
if (window.innerWidth < 575) {
  var rowDivs = carouselThumbs.querySelectorAll('.row div:nth-child(4)');
  rowDivs.forEach(function (rowBoundary) {
    var newRow = document.createElement('div');
    newRow.className = 'row mx-0';
    rowBoundary.parentNode.insertBefore(newRow, rowBoundary.parentNode.nextSibling);
    newRow.appendChild(rowBoundary.nextElementSibling);
  });

  var carouselItems = carouselThumbs.querySelectorAll('.carousel-item .row:nth-child(even)');
  carouselItems.forEach(function (boundary) {
    var newCarouselItem = document.createElement('div');
    newCarouselItem.className = 'carousel-item';
    boundary.parentNode.insertBefore(newCarouselItem, boundary.parentNode.nextSibling);
    newCarouselItem.appendChild(boundary.nextElementSibling);
  });
}

// Ocultar las flechas del slide si hay pocos elementos
if (carouselThumbs.querySelectorAll('.carousel-item').length < 2) {
  var carouselControls = carouselThumbs.querySelectorAll('[class^=carousel-control-]');
  carouselControls.forEach(function (control) {
    control.remove();
  });
  document.querySelector('#carousel-thumbs').style.padding = '0 5px';
}

// Actualizar la selección del thumbnail al cambiar el slide
myCarousel.addEventListener('slide.bs.carousel', function (e) {
  var id = parseInt(e.relatedTarget.dataset.slideNumber);
  var carouselSelectors = document.querySelectorAll('[id^=carousel-selector-]');
  carouselSelectors.forEach(function (selector) {
    selector.classList.remove('selected');
  });
  document.getElementById('carousel-selector-' + id).classList.add('selected');
});

// Navegar al siguiente o anterior al hacer swipe
myCarousel.addEventListener('swipe.bs.carousel', function (e) {
  if (e.direction === 'left') {
    carousel.next();
  } else if (e.direction === 'right') {
    carousel.prev();
  }
});

// Evento al hacer clic en una imagen del carousel
var carouselImages = myCarousel.querySelectorAll('.carousel-item img');
carouselImages.forEach(function (image) {
  image.addEventListener('click', function (e) {
    var src = e.target.dataset.remote;
    if (src) {
      $(this).ekkoLightbox();
    }
  });
});






/*footer*/
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

  // Obtiene los valores de los campos de entrada
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Construye el enlace de correo electrónico
  var subject = "Nuevo mensaje de contacto";
  var mailtoLink = "mailto:evu.penfold.11@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent("Nombre: " + name + "\nEmail: " + email + "\nMensaje: " + message);

  // Abre el cliente de correo electrónico predeterminado
  window.location.href = mailtoLink;
});


/*boton contactenos para dirigirnos a la seccion contacto*/
function scrollToContact() {
  const contactoSection = document.getElementById("contacto");
  contactoSection.scrollIntoView({ behavior: "smooth" });
}









