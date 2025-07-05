import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [imageURL, setImageURL] = useState(null);
	const apiKey = import.meta.env.VITE_API_KEY;
	const url = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;
	useEffect(() => {
		fetch(url, { mode: 'cors' })
			.then((response) => response.json())
			.then((response) => setImageURL(response[0].url))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			<div>
				<img src={imageURL} alt="" />
			</div>
		</>
	);
}

export default App;
