import{a as p,S as m,i as f}from"./assets/vendor-C4-ZuMk8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g="46966788-e70827204bebbcb7a27eabe68",h="https://pixabay.com/api/";async function b(t,r=1,s=15){const n=`${h}?key=${g}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await p.get(n)).data}catch(e){return console.error("Error fetching images:",e),null}}const L=document.querySelector(".gallery"),w=document.querySelector(".button-load");function $(t,r){const s=t.map(e=>`
            <a href="${e.largeImageURL}" class="gallery-item">
                <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="200" loading="lazy" />
                <div class="info">
                    <p>Likes: ${e.likes}</p>
                    <p>Views: ${e.views}</p>
                    <p>Comments: ${e.comments}</p>
                    <p>Downloads: ${e.downloads}</p>
                </div>
            </a>
        `).join("");L.insertAdjacentHTML("beforeend",s),new m(".galerry a").refresh()}function S(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function a(t){w.style.display=t?"block":"none"}const v=document.getElementById("form-js"),E=document.querySelector(".gallery"),I=document.querySelector(".button-load"),i=document.querySelector(".loader"),q=document.getElementById("search-input");let l=1,u="",d=0;v.addEventListener("submit",async t=>{t.preventDefault(),u=q.value.trim(),u!==""&&(l=1,E.innerHTML="",a(!1),i.style.display="block",await y(),i.style.display="none",d>15&&a(!0))});I.addEventListener("click",async()=>{l++,i.style.display="block",await y(),i.style.display="none",S()});async function y(){const t=await b(u,l);if(!t||t.hits.lenght===0){f.error({title:"Error",message:"No images found. Please try another search.",position:"topRight"}),a(!1);return}d=t.totalHits,$(t.hits),l*15>=d&&(a(!1),f.info({title:"Info",message:"We're sorry, but you reached the of search results.",position:"topRight"}))}
//# sourceMappingURL=index.js.map
