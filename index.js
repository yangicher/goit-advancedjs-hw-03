import{S as p,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50367317-4b50f00e153dc123b8b56efd6",h="https://pixabay.com/api/";async function y(i){const r=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=await fetch(`${h}?${r}`);if(!o.ok)throw new Error("Network response was not ok");return(await o.json()).hits}const d=document.querySelector(".gallery"),f=document.querySelector(".loader");let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function w(){d.innerHTML=""}function v(i){d.innerHTML=i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:a,downloads:u})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${r}" alt="${s}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${e}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${t}</p>
          </div>
          <div class="info-item">
            <p class="title">Comments</p>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${u}</p>
          </div>
        </div>
      </li>
    `).join(""),g.refresh()}function L(){f.classList.remove("hidden")}function b(){f.classList.add("hidden")}const l=document.querySelector(".form");function c(i){return{icon:"fa-solid fa-circle-exclamation",iconColor:"white",message:`${i}`,messageColor:"white",position:"topRight",timeout:3e3,color:"#EF4040",maxWidth:"432px"}}l.addEventListener("submit",async i=>{i.preventDefault();const r=l.elements.query.value.trim();if(!r){n.show(c("Please enter a search query!"));return}w(),L();try{const o=await y(r);if(!o.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}v(o)}catch{n.show(c("Something went wrong. Please try again later."))}finally{b()}});
//# sourceMappingURL=index.js.map
