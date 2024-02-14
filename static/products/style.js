const mainImage = document.querySelector('.product-images img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    
    thumbnail.addEventListener('click', () => {
        thumbnails.forEach(th => {
            th.classList.remove("active")
        });
        mainImage.src = thumbnail.src;
        thumbnail.classList.add("active");
    });
});