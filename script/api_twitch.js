// ===============================
// Configuración de Twitch API
// ===============================
const streamers = [
  "sutanrp",
  "venomhunter_",
  "ronie_6",
  "victoriarodrgzz",
  "devikadoll_",
  "chocobomon",
  "nashha",
  "enyus"
];

// ⚠️ Sustituye con tus datos reales si los tienes
const CLIENT_ID = "TU_CLIENT_ID"; // Pon tu Client ID real
const TOKEN = "TU_ACCESS_TOKEN";  // Pon tu Access Token real

// ===============================
// Datos estáticos de respaldo (modo demo)
// ===============================
const streamersDemo = [
  { login: "sutanrp", display_name: "Sutanrp", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/bd51be05-d86d-4bf9-82e3-cb2524dbcb74-profile_image-70x70.png" },
  { login: "venomhunter_", display_name: "Venomhunter_", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/4eeed0f8-6cd2-4088-82e2-48c46901c3fa-profile_image-70x70.png" },
  { login: "ronie_6", display_name: "Ronie_6", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/14adeaf2-0aae-4a01-926d-c7e60a745249-profile_image-70x70.jpeg" },
  { login: "victoriarodrgzz", display_name: "VictoriaRodrgzz", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/504aa54d-3113-4f30-bf66-d27c00536f2f-profile_image-70x70.png" },
  { login: "devikadoll_", display_name: "Devikadoll_", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/cd864c8c-f3e0-4b7c-bf5b-2d64e28c81f7-profile_image-70x70.png" },
  { login: "chocobomon", display_name: "Chocobomon", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/8382b118-85d0-4d84-aaab-1494ad363dba-profile_image-70x70.png" },
  { login: "nashha", display_name: "Nashha", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/c77bb8bf-bea6-4ae5-b074-db513ef424c9-profile_image-70x70.png" },
  { login: "enyus", display_name: "Enyus", profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/b2a80a8b-25ed-48a1-86ad-0fb2f6e6de33-profile_image-70x70.png" },
];

// ===============================
// Función para pintar streamers en HTML
// ===============================
function pintarStreamers(data) {
  let html = "";
    data.forEach(user => {
    html += `
      <div class="col-md-3 col-sm-6 text-center">
        <a href="https://www.twitch.tv/${user.login}" target="_blank" 
           style="text-decoration:none; color:inherit;">
          <img src="${user.profile_image_url}" 
               alt="${user.display_name}" 
               class="img-fluid rounded-circle shadow" 
               style="width:150px; height:150px; object-fit:cover;">
          <h5 class="mt-2 text-white fw-bold">${user.display_name}</h5>
        </a>
      </div>
    `;
  });

  const container = document.getElementById("streamers");
  if (container) container.innerHTML = html;
}

// ===============================
// Función para cargar streamers desde Twitch API
// ===============================
async function cargarStreamersAPI() {
  try {
    if (!CLIENT_ID || !TOKEN) throw new Error("No hay CLIENT_ID o TOKEN definido");

    const url = `https://api.twitch.tv/helix/users?` + streamers.map(s => `login=${s}`).join("&");

    const res = await fetch(url, {
      headers: {
        "Client-ID": CLIENT_ID,
        "Authorization": `Bearer ${TOKEN}`
      }
    });

    if (!res.ok) throw new Error("Error en la respuesta de Twitch API");

    const data = await res.json();

    if (!data.data) throw new Error("No se recibieron datos de Twitch API");

    pintarStreamers(data.data);

  } catch (err) {
    console.warn("No se pudo cargar Twitch API, usando modo demo:", err);
    pintarStreamers(streamersDemo);
  }
}

// ===============================
// Ejecutar al cargar la página
// ===============================
document.addEventListener("DOMContentLoaded", cargarStreamersAPI);
