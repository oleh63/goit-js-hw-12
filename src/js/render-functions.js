import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const LoadMoreBtn = document.querySelector('.button-load');

export function renderGallery(images, galleryElement) {
    const markup = images.map(image => {
        return `
            <a href="${image.largeImageURL}" class="gallery-item">
                <img src="${image.webformatURL}" alt="${image.tags}" width="360" height="200" loading="lazy" />
                <div class="info">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                </div>
            </a>
        `;
    }).join('');
    
    gallery.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}


export function smoothScroll() {
    const { height: cardHeight } = document.querySelector('.gallery-item').getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

export function toggleLoadMoreButton(show) {
    LoadMoreBtn.style.display = show ? 'block' : 'none';
}
