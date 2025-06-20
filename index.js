import{S as m,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="50706028-1c89dce29f588a1d4e8ec62d3",d="https://pixabay.com/api";function g(i){const o=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return console.log("Fetching URL: ",url),console.log(`${d}?${o}`),fetch(`${d}?${o}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t.message||t),t})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");function y(){u.innerHTML=""}function w(i){u.innerHTML=i.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:r,comments:s,downloads:p})=>`
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
            <p>${p}</p>
          </div>
        </div>
      </li>
    `).join("")}function L(){f.classList.remove("hidden")}function v(){f.classList.add("hidden")}const l=document.querySelector(".form");let $=new m(".gallery a",{captionsData:"alt",captionDelay:250});function c(i){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${i}`,color:"#EF4040",maxWidth:"432px"}}l.addEventListener("submit",async i=>{i.preventDefault();const o=l.elements.query.value.trim();if(l.reset(),!o){a.show(c("Please enter a search query!"));return}y(),L();try{const t=await g(o);if(!t.length){a.show(c("Sorry, there are no images matching your search query. Please try again!"));return}w(t),$.refresh()}catch{a.show(c("Something went wrong. Please try again later."))}finally{v()}});
//# sourceMappingURL=index.js.map
