import { fetchImages } from './js/pixabay-api';
import { renderGallery, smoothScroll, toggleLoadMoreButton } from './js/render-functions';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById('form-js');
const gallery = document.querySelector('.gallery');
const LoadMoreBtn = document.querySelector('.button-load');
const loader = document.querySelector('.loader');
const searchInput = document.getElementById('search-input');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    currentQuery = searchInput.value.trim();
    if (currentQuery === '') {
        return;
    }

    currentPage = 1;
    gallery.innerHTML = '';
    toggleLoadMoreButton(false);
    loader.style.display = 'block';

    await loadImages();

    loader.style.display = 'none';
    if (totalHits > 15) {
        toggleLoadMoreButton(true);
    }
});


LoadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;
    loader.style.display = 'block';
    await loadImages();
    loader.style.display = 'none';
    smoothScroll();
});

async function loadImages() {
    const data = await fetchImages(currentQuery, currentPage);
    if (!data || data.hits.lenght === 0) {
        iziToast.error({
            title: 'Error',
            message: "No images found. Please try another search.",
            position: 'topRight'
        });
        toggleLoadMoreButton(false);
        return;
    }

    totalHits = data.totalHits;
    renderGallery(data.hits);

    if (currentPage * 15 >= totalHits) {
        toggleLoadMoreButton(false);
        iziToast.info({
            title: 'Info',
            message: "We're sorry, but you reached the of search results.",
            position: 'topRight'
        });
    }
}





