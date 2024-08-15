import{i as n}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const u="21553593-5dff095819739d8fe44d39f5a",f="https://pixabay.com/api/videos/";function m(r){const o=`${f}?key=${u}&q=${r}`;return fetch(o).then(s=>{if(!s.ok)throw new Error({message:`error ${s.status}`});return s.json()})}function p(r,o){const s=r.map(t=>`<li class="video-list-item">
    <video class="video_item" width="640" height="360" controls id="my-video">
        <source src="${t.videos.large.url}" label="720p">
        <source src="${t.videos.medium.url}" label="480p">
        <source src="${t.videos.small.url}" label="360p">
    </video>
	<ul class="video-info-list">
		<li class="video-info-item">
			<p class="video_info">Views</p>
			<p class="video_statistics">${t.views}</p>
		</li>
		<li class="video-info-item">
			<p class="video_info">Downloads</p>
			<p class="video_statistics">${t.downloads}</p>
		</li>
		<li class="video-info-item">
			<p class="video_info">Likes</p>
			<p class="video_statistics">${t.likes}</p>
		</li>
		<li class="video-info-item">
			<p class="video_info">Comments</p>
			<p class="video_statistics">${t.comments}</p>
		</li>
		<li class="video-info-item">
			<img class="user-img" width="40" height="40" src="${t.userImageURL}">
		</li>
	</ul>
</li>`);o.insertAdjacentHTML("afterbegin",s)}const c=document.getElementById("search-form-js"),a=document.querySelector(".loader"),d=document.getElementById("list-result-js");c.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.result.value.toLowerCase().trim();if(!o){n.error({message:"Please enter a search term"});return}d.innerHTML="",a.style.display="block",m(o).then(s=>{s.hits.length?(console.log(s.hits),p(s.hits,d)):n.info({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(s=>{n.error({message:s.message})}).finally(()=>{a.style.display="none",c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
