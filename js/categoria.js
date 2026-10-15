(function () {
  const select = document.createElement("select");
  select.setAttribute("aria-label", "Filtrar por categoría");
  select.style.width = "100%";
  select.style.padding = "0.65rem 0.75rem";
  select.style.border = "1px solid #d4d7f0";
  select.style.background = "#fff";
  select.style.color = "#1c1a3a";
  select.style.fontFamily = '"Lucida Sans", "Lucida Grande", sans-serif';
  select.style.fontSize = "1rem";
  select.style.boxSizing = "border-box";
  const opcionTodas = document.createElement("option");
  opcionTodas.value = "todas";
  opcionTodas.textContent = "todas";
  select.appendChild(opcionTodas);
  const categorias = [];
  PALABRAS.forEach(function (item) {
    if (categorias.indexOf(item.categoria) === -1) {
      categorias.push(item.categoria);
    }
  });
  categorias.forEach(function (categoria) {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.textContent = categoria;
    select.appendChild(opcion);
  });
  select.value = filtros.categoria;
  select.addEventListener("change", function () {
    filtros.categoria = select.value;
    aplicarFiltros();
  });
  document.getElementById("controles").appendChild(select);
})();