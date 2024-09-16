document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        searchImages(query);
    }
});

function searchImages(query) {
    const url = `https://id.pinterest.com/search/pins/?q=${query}`;
    
    fetch(url)
        .then(response => response.text()) // Karena Pinterest mengembalikan HTML, bukan JSON
        .then(data => {
            // Proses hasil HTML yang Anda dapatkan
            console.log(data);
            // Anda bisa mencari gambar dalam data HTML di sini jika ingin melakukan scraping
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}
