import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getResult } from './js/fetch-API.js';
import { setMarkup } from './js/setMarkup.js';
// import { videoSettings } from './js/videoSettings.js';

const form = document.getElementById('search-form-js');
const loader = document.querySelector('.loader');
const listResult = document.getElementById('list-result-js');


form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const value = evt.target.elements.result.value.toLowerCase().trim()
	
	if(!value){
		iziToast.error({message: 'Please enter a search term'});
		return;
	}

	listResult.innerHTML = '';
	loader.style.display = 'block';

	getResult(value).then(arrResult => {
		if (!arrResult.hits.length){
			iziToast.info({message:"Sorry, there are no images matching your search query. Please try again!"})
		}else{
			console.log(arrResult.hits)
			setMarkup(arrResult.hits, listResult);
		}
	}).catch(err => {
		iziToast.error({ message: err.message });
	}).finally(() => {
        loader.style.display = 'none';
		form.reset();
      });
})
