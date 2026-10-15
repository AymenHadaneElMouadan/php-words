(function () {
  const estilo = document.createElement("style");
  estilo.textContent =
    "#controles input[type=\"text\"]::placeholder {" +
    "font-style: italic;" +
    "color: #5b5a7a;" +
    "opacity: 1;" +
    "}";
  document.head.appendChild(estilo);
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Buscar palabra...";
  input.setAttribute("aria-label", "Buscar palabra");
  input.style.width = "100%";
  input.style.padding = "0.65rem 0.75rem";
  input.style.border = "1px solid #d4d7f0";
  input.style.background = "#fff";
  input.style.color = "#1c1a3a";
  input.style.fontFamily = '"Lucida Sans", "Lucida Grande", sans-serif';
  input.style.fontSize = "1rem";
  input.style.boxSizing = "border-box";
  input.addEventListener("input", function () {
    filtros.texto = input.value;
    aplicarFiltros();
  });
  document.getElementById("controles").appendChild(input);
})();