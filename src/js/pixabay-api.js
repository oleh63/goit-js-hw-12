import axios from "axios";

const API_KEY = '46966788-e70827204bebbcb7a27eabe68';
const BASE_URL = 'https://pixabay.com/api/';


export async function fetchImages(query, page = 1, perPage = 15) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching images:', error);
        return null;
    }
}