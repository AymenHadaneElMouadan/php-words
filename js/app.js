let filtros = { texto: "", categoria: "todas" };

function aplicarFiltros() {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");
  const texto = filtros.texto.trim().toLowerCase();
  const categoria = filtros.categoria;

  const filtradas = PALABRAS.filter(function (item) {
    const coincideTexto =
      texto === "" ||
      item.palabra.toLowerCase().includes(texto) ||
      item.descripcion.toLowerCase().includes(texto);
    const coincideCategoria =
      categoria === "todas" || item.categoria === categoria;
    return coincideTexto && coincideCategoria;
  });

  lista.innerHTML = "";

  filtradas.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "palabra palabra--" + item.categoria;
    li.innerHTML =
      '<span class="palabra-nombre">' +
      item.palabra +
      "</span>" +
      '<span class="palabra-categoria">' +
      item.categoria +
      "</span>" +
      '<p class="palabra-descripcion">' +
      item.descripcion +
      "</p>";
    lista.appendChild(li);
  });

  contador.textContent =
    "Mostrando " + filtradas.length + " de " + PALABRAS.length + " palabras";
}

document.getElementById("titulo").textContent = APP_TITULO;
document.getElementById("subtitulo").textContent = APP_SUBTITULO;
document.getElementById("version").textContent = APP_VERSION;
aplicarFiltros();
