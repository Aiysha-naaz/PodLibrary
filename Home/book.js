document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    let books = [
        { id: 1, title: "It Ends With Us", author: "Colleen Hoover", cover: "book1.webp", content: "Content of book 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab odio delectus cupiditate quibusdam alias eum, quisquam tempore corrupti repellendus possimus perferendis quia corporis magnam vitae minima nisi non aperiam? Blanditiis." },
        { id: 2, title: "Here, There And Everywhere", author: "Sudha Murthy ", cover: "book2.webp", content: "Content of book 2  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab odio delectus cupiditate quibusdam alias eum, quisquam tempore corrupti repellendus possimus perferendis quia corporis magnam vitae minima nisi non aperiam? Blanditiis." },
        // Add more books as needed
    ];

    function fetchBookDetails(id) {
        // Replace this static data with an API call to fetch book details
        return books.find(book => book.id == id);
    }

    function displayBookDetails(book) {
        document.getElementById('bookCover').src = book.cover;
        document.getElementById('bookCover').alt = book.title;
        document.getElementById('bookTitle').textContent = book.title;
        document.getElementById('bookAuthor').textContent = book.author;
        document.getElementById('bookContent').textContent = book.content; 
        document.getElementById('bookDetails').style.backgroundImage = book.cover;
            // Assuming book.content is a string. Adjust if needed.
    }

    // Fetch and display book details
    const book = fetchBookDetails(bookId);
    if (book) {
        displayBookDetails(book);
    } else {
        // Handle book not found
        document.getElementById('bookContent').textContent = 'Book not found';
    }
});
