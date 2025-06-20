import{S as p,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="50706028-1c89dce29f588a1d4e8ec62d3",h="https://pixabay.com/api";function y(i){const o=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t.message||t),t})}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(){d.innerHTML=""}function w(i){d.innerHTML=i.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:r,comments:s,downloads:f})=>`
      <li class="gallery-item">
        <a href="${t}">
          <img src="${o}" alt="${n}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <p class="title">Likes</p>
            <p>${e}</p>
          </div>
          <div class="info-item">
            <p class="title">Views</p>
            <p>${r}</p>
          </div>
          <div class="info-item">
            <p class="title">Comments</p>
            <p>${s}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${f}</p>
          </div>
        </div>
      </li>
    `).join("")}function v(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const c=document.querySelector(".form");let S=new p(".gallery a",{captionsData:"alt",captionDelay:250});function l(i){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${i}`,color:"#EF4040",maxWidth:"432px"}}c.addEventListener("submit",async i=>{i.preventDefault();const o=c.elements.query.value.trim();if(c.reset(),!o){a.show(l("Please enter a search query!"));return}g(),v();try{const t=await y(o);if(!t.length){a.show(l("Sorry, there are no images matching your search query. Please try again!"));return}w(t),S.refresh()}catch{a.show(l("Something went wrong. Please try again later."))}finally{L()}});
//# sourceMappingURL=index.js.map
