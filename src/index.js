import "./index.css";
import header_img from "./img/header_img.jpg";
import footer_img from "./img/footer_img.jpg";
import project_placeholder from "./img/project_placeholder.jpg";

document.querySelector(".header_img").src = header_img;
document.querySelector(".footer_img").src = footer_img;
document.querySelectorAll(".card > img").forEach((img) => {
  img.src = project_placeholder;
});
