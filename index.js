import{S as p,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="50706028-1c89dce29f588a1d4e8ec62d3",y="https://pixabay.com/api/";async function h(s){const r=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=await fetch(`${y}?${r}`);if(!o.ok)throw new Error("Network response was not ok");return(await o.json()).hits}const d=document.querySelector(".gallery"),f=document.querySelector(".loader");function g(){d.innerHTML=""}function w(s){d.innerHTML=s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:u})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${r}" alt="${i}" loading="lazy" />
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
    `).join("")}function v(){f.classList.remove("hidden")}function L(){f.classList.add("hidden")}const c=document.querySelector(".form");let S=new p(".gallery a",{captionsData:"alt",captionDelay:250});function l(s){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${s}`,color:"#EF4040",maxWidth:"432px"}}c.addEventListener("submit",async s=>{s.preventDefault();const r=c.elements.query.value.trim();if(c.reset(),!r){n.show(l("Please enter a search query!"));return}g(),v();try{const o=await h(r);if(!o.length){n.show(l("Sorry, there are no images matching your search query. Please try again!"));return}w(o),S.refresh()}catch{n.show(l("Something went wrong. Please try again later."))}finally{L()}});
//# sourceMappingURL=index.js.map
