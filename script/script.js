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
});
