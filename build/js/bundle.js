function navegacionfija(){const e=document.querySelector(".header");new IntersectionObserver((function(n){n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".video"))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("IMG");t.src="build/img/thumb/"+n+".webp",t.dataset.imagenId=n,t.onclick=mostrarImagen;const o=document.createElement("LI");o.appendChild(t),e.appendChild(o)}}function mostrarImagen(e){const n=parseInt(e.target.dataset.imagenId),t=document.createElement("IMG");t.src="build/img/grande/"+n+".webp";const o=document.createElement("DIV");o.appendChild(t),o.classList.add("overlay"),o.onclick=function(){o.remove()};const c=document.createElement("P");c.textContent="salir X",c.classList.add("btn-cerrar");const a=document.querySelector("body");c.onclick=function(){o.remove()},o.appendChild(c),a.appendChild(o)}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionfija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()})),document.addEventListener("DOMContentLoaded",(function(){scrollNav()}));
//# sourceMappingURL=bundle.js.map
