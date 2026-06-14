import{a as u,S as f,i}from"./assets/vendor-CgWX3-ZD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function d(t){return u.get("https://pixabay.com/api/",{params:{key:"56293122-e27c6b73e2974564ba58f2b50",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function g(t){const o=document.querySelector(".gallery"),r=t.map(e=>`<li class="gallery-item">
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
      
    </li>`).join("");o.insertAdjacentHTML("beforeend",r),new f(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!1}).refresh()}function m(t){const o=document.querySelector(".gallery");o.innerHTML=""}function p(t){document.querySelector(".loader").classList.add("is-active")}function c(t){document.querySelector(".loader").classList.remove("is-active")}let a=[];document.addEventListener("DOMContentLoaded",()=>{console.log("DOM loaded");const t=document.querySelector(".form");t.addEventListener("submit",o=>{o.preventDefault(),m();const r=new FormData(o.currentTarget).get("search-text").trim();if(!r){console.log("Поле порожнє або містить лише пробіли"),i.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"red",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",title:"❌ Empty string:",message:"enter valid text"});return}t.reset(),p(),d(r).then(l=>{h(l.data)}).catch(l=>{y(l)}).finally(()=>{console.log("HTTP Request successfull"),c()})})});function h(t){c(),a=t.hits,a.length===0?i.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"yellow",theme:"light",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(i.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"blue",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",message:`Congratulations! Found ${a.length} images`}),g(a))}function y(t){console.log("handleError data:",t),c()}
//# sourceMappingURL=index.js.map
