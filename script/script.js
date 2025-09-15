document.addEventListener('DOMContentLoaded', function () {
  // Generar número aleatorio entre 1 y 20000 (sin 0)
  function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const numero = numeroAleatorio(1, 20000);
  const elementoNumero = document.getElementById('numeroAleatorio');
  if (elementoNumero) {
    elementoNumero.textContent = numero;
  }

  const btnVentajas = document.getElementById("btnVentajas");

  if (btnVentajas) {
    btnVentajas.addEventListener("click", () => {
      Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: '¡Genial!',
            text: 'No serás un pink y estarás a salvo en STORIBORIS',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28a745'
          });
        } else {
          Swal.fire({
            title: 'Hmm...',
            text: 'Los pinks dan vueltas en círculos mientras que nosotros reiremos en STORIBORIS. Tambien se te ha cobrado 100€ a tu cuenta bancaria ',
            icon: 'info',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#d33'
          });
        }
      });
    });
  } else {
    console.warn("No se encontró el botón con id 'btnVentajas'");
  }

  // Botón suscribirse con SweetAlert
  const btn = document.getElementById('suscribirseBtn');
  if (btn) {
    btn.addEventListener('click', function () {
      Swal.fire({
        title: '¿Estás seguro de suscribirse?',
        showCancelButton: true,
        confirmButtonText: 'Sí, suscribirme',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33',
        backdrop: false,
        icon: null  // Sin icono
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: '¡Suscrito!',
            text: 'El pago aceptado de tu tarjeta de crédito de 499€. Gracias por tu caridad',
            icon: 'success',
            iconColor: 'green',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#28a745',
            background: '#fff',
            backdrop: true,
            allowOutsideClick: false
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Eres un pink',
            confirmButtonText: 'Ok',
            backdrop: false,
            icon: null,  // Sin icono
            imageUrl: 'img/pink.png',  // Ruta imagen cancelado
            imageWidth: 150,
            imageHeight: 150,
          });
        }
      });
    });
  }

  // Menú hamburguesa: abrir/cerrar
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Cerrar menú al hacer clic en alguna sección
  const menuLinks = document.querySelectorAll('#sidebar ul li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  });

const carousel = document.getElementById('imagenCarousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelector('.carousel-indicators');
  const prevBtn = carousel.querySelector('.carousel-control-prev');
  const nextBtn = carousel.querySelector('.carousel-control-next');

  if(items.length > 1) {
    // Si hay más de una imagen, activamos el carrusel y los indicadores
    carousel.setAttribute('data-bs-ride', 'carousel');
    carousel.setAttribute('data-bs-interval', '2000');

    // Generar indicadores dinámicamente
    indicators.innerHTML = '';
    items.forEach((item, index) => {
      const button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('data-bs-target', '#imagenCarousel');
      button.setAttribute('data-bs-slide-to', index);
      if(index === 0) button.classList.add('active');
      indicators.appendChild(button);
    });

  } else {
    // Si solo hay 1 imagen, ocultamos controles e indicadores
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    indicators.style.display = 'none';
  }

  
});
