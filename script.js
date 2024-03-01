function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("modo_claro")

  const img = document.querySelector(".profile img")

  if (html.classList.contains("modo_claro")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
