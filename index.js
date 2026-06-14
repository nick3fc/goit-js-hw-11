import{a as u,S as f,i}from"./assets/vendor-CgWX3-ZD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function d(t){return u.get("https://pixabay.com/api/",{params:{key:"56293122-e27c6b73e2974564ba58f2b50",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function g(t){const o=document.querySelector(".gallery"),l=t.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
        
          alt="${e.tags}"
        />
      </a>
      
      <ul class='gallery-image-infolist'>
        <li class='info-item'>
        <span class="info-title">Likes</span>
        <span class='info-value'>${e.likes}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Views</span>
        <span class='info-value'>${e.views}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Comments</span>
        <span class='info-value'>${e.comments}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Downloads</span>
        <span class='info-value'>${e.downloads}</span>
        </li>
      </ul>
      
    </li>`).join("");o.insertAdjacentHTML("beforeend",l),new f(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!1}).refresh()}function m(t){const o=document.querySelector(".gallery");o.innerHTML=""}function p(t){const o=document.querySelector(".container");o.querySelector(".loader")||(o.insertAdjacentHTML("beforeend",'<span class="loader"></span>'),o.querySelector(".loader"))}function c(t){document.querySelector(".loader")&&document.querySelector(".loader").remove()}let n=[];document.addEventListener("DOMContentLoaded",()=>{console.log("DOM loaded");const t=document.querySelector(".form");t.addEventListener("submit",o=>{o.preventDefault(),m();const l=new FormData(o.currentTarget).get("search-text").trim();if(!l){console.log("Поле порожнє або містить лише пробіли"),i.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"red",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",title:"❌ Empty string:",message:"enter valid text"});return}t.reset(),p(),d(l).then(s=>{h(s.data)}).catch(s=>{y(s)}).finally(()=>{console.log("HTTP Request successfull")})})});function h(t){c(),n=t.hits,n.length===0?i.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"yellow",theme:"light",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(i.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"blue",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",message:`Congratulations! Found ${n.length} images`}),g(n))}function y(t){console.log("handleError data:",t),c()}
//# sourceMappingURL=index.js.map
