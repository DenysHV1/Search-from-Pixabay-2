const KEY = '21553593-5dff095819739d8fe44d39f5a';
const BASE_URL = 'https://pixabay.com/api/videos/';

export function getResult(query){
	const url = `${BASE_URL}?key=${KEY}&q=${query}`
	return fetch(url).then(response =>{
		if (!response.ok){
			throw new Error ({message: `error ${response.status}`})
		}
		return response.json()
	})
	
}

