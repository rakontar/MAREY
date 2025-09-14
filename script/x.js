// ===============================
// Usuarios de X con imagen personalizada
// ===============================
const usuariosX = [
  {
    username: "Elynea_",
    display_name: "Elynea",
    profile_image_url: "https://pbs.twimg.com/profile_images/1926696503982043137/6seZIdNV_400x400.jpg"
  },
  {
    username: "Latortillapapa1",
    display_name: "LaTortillapapa",
    profile_image_url: "https://pbs.twimg.com/profile_images/1873593617756901376/05bOe9Z9_400x400.jpg"
  },
  {
    username: "thaniia92",
    display_name: "Thania",
    profile_image_url: "https://pbs.twimg.com/profile_images/1929987464057307136/TfSFuISa_400x400.jpg"
  },
  {
    username: "JCampos_24",
    display_name: "JCampos",
    profile_image_url: "https://pbs.twimg.com/profile_images/1965403038631219200/9v0DqTRc_400x400.jpg"
  }
];

// ===============================
// Función para pintar usuarios de X
// ===============================
function pintarUsuariosX(data) {
  let html = "";
  data.forEach(user => {
    html += `
      <div class="col-md-3 col-sm-6 text-center mb-4">
        <a href="https://x.com/${user.username}" target="_blank" style="text-decoration:none; color:inherit;">
          <img src="${user.profile_image_url}" 
               alt="${user.display_name}" 
               class="img-fluid rounded-circle shadow" 
               style="width:150px; height:150px; object-fit:cover;"
               onerror="this.onerror=null; this.src='img/avatar-fallback.png';">
          <h5 class="mt-2 text-white fw-bold">${user.display_name}</h5>
        </a>
      </div>
    `;
  });

  const container = document.getElementById("usuariosX");
  if (container) container.innerHTML = html;
}

// ===============================
// Ejecutar al cargar la página
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  pintarUsuariosX(usuariosX);
});
