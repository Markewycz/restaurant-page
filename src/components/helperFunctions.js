function elementFromHtml(html) {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

function appendImages(banner, logo, image1, image2) {
  document.getElementById(image1).src = banner;
  document.getElementById(image2).src = logo;
}

export { elementFromHtml, appendImages };
