import "./src/styles/global.css"

document.querySelectorAll("iframe").forEach((iframe) => {
  if (!iframe.hasAttribute("title")) {
    iframe.setAttribute("title", "Google Tag Manager");
  }
});