export function setMarkup(arr, list){
	const markup = arr.map(item => {
		return `<li class="video-list-item">
    <video class="video_item" width="640" height="360" controls id="my-video">
        <source src="${item.videos.large.url}" label="720p">
        <source src="${item.videos.medium.url}" label="480p">
        <source src="${item.videos.small.url}" label="360p">
    </video>
	<ul class="video-info-list">
		<li class="video-info-item">
			<p class="video_info">Views</p>
			<p class="video_statistics">${item.views}</p>
		</li>
		<li class="video-info-item">
			<p class="video_info">Downloads</p>
			<p class="video_statistics">${item.downloads}</p>
		</li>
		<li class="video-info-item">
			<p class="video_info">Likes</p>
			<p class="video_statistics">${item.likes}</p>
		</li>
		<li class="video-info-item">
			<p class="video_info">Comments</p>
			<p class="video_statistics">${item.comments}</p>
		</li>
		<li class="video-info-item">
			<img class="user-img" width="40" height="40" src="${item.userImageURL}">
		</li>
	</ul>
</li>`});
list.insertAdjacentHTML('afterbegin', markup)
}