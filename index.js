import{S as p,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="50706028-1c89dce29f588a1d4e8ec62d3",d="https://pixabay.com/api";function g(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return console.log(d),console.log(o),axios.get(d,{params:o}).then(t=>{const{hits:i}=t.data;if(!i.length)throw new Error("No images found");return i}).catch(t=>{throw console.error("Error loading images:",t.message||t),t})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader");function y(){u.innerHTML=""}function v(s){u.innerHTML=s.map(({webformatURL:o,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:m})=>`
      <li class="gallery-item">
        <a href="${t}">
          <img src="${o}" alt="${i}" loading="lazy" />
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
            <p>${a}</p>
          </div>
          <div class="info-item">
            <p class="title">Downloads</p>
            <p>${m}</p>
          </div>
        </div>
      </li>
    `).join("")}function L(){f.classList.remove("hidden")}function w(){f.classList.add("hidden")}const l=document.querySelector(".form");let q=new p(".gallery a",{captionsData:"alt",captionDelay:250});function c(s){return{progressBar:!1,position:"topRight",animateInside:!1,message:`${s}`,color:"#EF4040",maxWidth:"432px"}}l.addEventListener("submit",async s=>{s.preventDefault();const o=l.elements.query.value.trim();if(l.reset(),!o){n.show(c("Please enter a search query!"));return}y(),L();try{const t=await g(o);if(!t.length){n.show(c("Sorry, there are no images matching your search query. Please try again!"));return}v(t),q.refresh()}catch{n.show(c("Something went wrong. Please try again later."))}finally{w()}});
//# sourceMappingURL=index.js.map
