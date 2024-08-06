 document.addEventListener("DOMContentLoaded", function() {
     const urlParams = new URLSearchParams(window.location.search);
     const bookId = urlParams.get('id');

     let books = [
         { id: 1, title: "It Ends With Us", author: "Colleen Hoover", cover: "book1.webp", content: "Content of book 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab odio delectus cupiditate quibusdam alias eum, quisquam tempore corrupti repellendus possimus perferendis quia corporis magnam vitae minima nisi non aperiam? Blanditiis.Content of book 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab odio delectus cupiditate quibusdam alias eum, quisquam tempore corrupti repellendus possimus perferendis quia corporis magnam vitae minima nisi non aperiam? Blanditiis." },
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

//share options
function toggleShareOptions() {
    var shareOptions = document.getElementById('share-options');
    if (shareOptions.style.display === 'block') {
      shareOptions.style.display = 'none';
    } else {
      shareOptions.style.display = 'block';
    }
  }
  
  document.getElementById('facebook-share').addEventListener('click', function() {
    var url = window.location.href;
    var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    window.open(facebookUrl, '_blank');
  });
  
  document.getElementById('twitter-share').addEventListener('click', function() {
    var url = window.location.href;
    var text = "Check out this amazing website!";
    var twitterUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text);
    window.open(twitterUrl, '_blank');
  });
  
  document.getElementById('linkedin-share').addEventListener('click', function() {
    var url = window.location.href;
    var linkedinUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url);
    window.open(linkedinUrl, '_blank');
  });
  
  
document.getElementById('whatsapp-share').addEventListener('click', function() {
     var url = window.location.href;
     var text = "Check out this amazing website!";
     var whatsappUrl = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text + ' ' + url);
     window.open(whatsappUrl, '_blank');
});
  
  // Hide the share options if the user clicks outside of them
  window.onclick = function(event) {
    if (!event.target.matches('.share-button')) {
      var shareOptions = document.getElementById('share-options');
      if (shareOptions.style.display === 'block') {
        shareOptions.style.display = 'none';
      }
    }
  }
  
  function toggleWishlist(element) {
    element.classList.toggle('active');
}


// paginion
let currentPage = 1;
const pagesPerBook = [
  "Page 1 content...Content of book 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab odio delectus cupiditate quibusdam alias eum, quisquam tempore corrupti repellendus possimus perferendis quia corporis magnam vitae minima nisi non aperiam? Blanditiis.Content of book 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab odio delectus cupiditate quibusdam alias eum, quisquam tempore corrupti repellendus possimus perferendis quia corporis magnam vitae minima nisi non aperiam? Blanditiis.",
  "Page 2 content...",
  "Page 3 content...",
  // Add more pages
];

function displayPage() {
  document.getElementById('bookContent').innerText = pagesPerBook[currentPage - 1];
  document.getElementById('page-info').innerText = `Page ${currentPage}`;
  document.getElementById('prev-page').disabled = (currentPage === 1);
  document.getElementById('next-page').disabled = (currentPage === pagesPerBook.length);
}

function changePage(delta) {
  const newPage = currentPage + delta;
  if (newPage >= 1 && newPage <= pagesPerBook.length) {
    currentPage = newPage;
    displayPage();
  }
}

// Initialize the page
displayPage();




// document.addEventListener('DOMContentLoaded', () => {
//     const bookId = new URLSearchParams(window.location.search).get('id');
//     const bookCover = document.getElementById('bookCover');
//     const bookTitle = document.getElementById('bookTitle');
//     const bookAuthor = document.getElementById('bookAuthor');
//     const bookContent = document.getElementById('bookContent');
 

//     // Sample book data
//     const books = [
//         { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'book1.webp', content: 'A novel set in the Jazz Age.' },
//         { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'book2.webp', description: 'A novel about racial injustice in the Deep South.' },
//         { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
//         { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
//         { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
//         { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
//         { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
//         { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
//         { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
//         { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
//         { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
//         { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
//     ];

//     const book = books.find(b => b.id == bookId);

//     if (book) {
//         bookCover.src = book.coverUrl;
//         bookTitle.textContent = book.title;
//         bookAuthor.textContent = book.author;
//         bookContent.textContent = book.content;
//     } else {
//         bookTitle.textContent = 'Book not found';
//         bookCover.style.display = 'none';
//         bookAuthor.style.display = 'none';
//         bookContent.textContent = 'The book you are looking for does not exist.';
//     }

//     //maths books

//     const MathsbookId = new URLSearchParams(window.location.search).get('id');
 

//     // Sample book data
//     const math_books = [
//         { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'book1.webp', content: 'A novel set in the Jazz Age.' },
//         { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about racial injustice in the Deep South.' },
//         { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
//         { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
//         { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
//         { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
//         { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
//         { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
//         { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
//         { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
//         { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
//         { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
//     ];

//     const mathsBook = math_books.find(b => b.id == MathsbookId);

//     if (mathsBook) {
//         bookCover.src = book.coverUrl;
//         bookTitle.textContent = book.title;
//         bookAuthor.textContent = book.author;
//         bookContent.textContent = book.content;
//     } else {
//         bookTitle.textContent = 'Book not found';
//         bookCover.style.display = 'none';
//         bookAuthor.style.display = 'none';
//         bookContent.textContent = 'The book you are looking for does not exist.';
//     }

//      //maths books

//      const ScibookId = new URLSearchParams(window.location.search).get('id');
 

//      // Sample book data
//      const sci_books = [
//          { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'book3.webp', content: 'A novel set in the Jazz Age.' },
//          { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about racial injustice in the Deep South.' },
//          { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
//          { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
//          { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
//          { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
//          { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
//          { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
//          { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
//          { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
//          { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
//          { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
//      ];
 
//      const SciBook = sci_books.find(b => b.id == ScibookId);
 
//      if (SciBook) {
//          bookCover.src = book.coverUrl;
//          bookTitle.textContent = book.title;
//          bookAuthor.textContent = book.author;
//          bookContent.textContent = book.content;
//      } else {
//          bookTitle.textContent = 'Book not found';
//          bookCover.style.display = 'none';
//          bookAuthor.style.display = 'none';
//          bookContent.textContent = 'The book you are looking for does not exist.';
//      }
// });
