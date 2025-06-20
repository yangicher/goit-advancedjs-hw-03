import{S as p,i as a}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="50706028-1c89dce29f588a1d4e8ec62d3",h="https://pixabay.com/api";function y(s){const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${h}?${o}`;return console.log("Fetching URL:",i),fetch(i).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()}).then(t=>t.hits).catch(t=>{throw console.error("Error fetching images:",t.message||t),t})}const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(){d.innerHTML=""}function w(s){d.innerHTML=s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:r,comments:n,downloads:f})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${t}" loading="lazy" />
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
            <p>${n}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${f}</p>
          </div>
        </div>
      </li>
    `).join("")}function L(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const c=document.querySelector(".form");let S=new p(".gallery a",{captionsData:"alt",captionDelay:250});function l(s){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${s}`,color:"#EF4040",maxWidth:"432px"}}c.addEventListener("submit",async s=>{s.preventDefault();const o=c.elements.query.value.trim();if(c.reset(),!o){a.show(l("Please enter a search query!"));return}g(),L();try{const i=await y(o);if(!i.length){a.show(l("Sorry, there are no images matching your search query. Please try again!"));return}w(i),S.refresh()}catch{a.show(l("Something went wrong. Please try again later."))}finally{v()}});
//# sourceMappingURL=index.js.map
