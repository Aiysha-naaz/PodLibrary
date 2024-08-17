let bar=document.querySelector('.bar');
let search =document.getElementById("search_div");
let cross =document.getElementById("cross");
let both = document.querySelector('both');

search.onclick =function (){
        bar.classList.add('active');
        bar.style.opacity ="1";
        cross.style.opacity ="1";
        search.style.opacity = "0";
}


cross.onclick = function(){
    bar.classList.remove('active');
    bar.style.opacity ="0";
    cross.style.opacity ="0";
    search.style.opacity="1";
}

//click event on upload button
let upload = document.getElementById('upload');

upload.onclick = function() {
    // Provide the relative path to the target page
    window.location.href = 'upload/upd.html';
}



let register = document.getElementById('register');
register.onclick=function() {
    // Provide the relative path to the target page
    window.location.href = 'register/register.html';
}
// Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 700px)");
// Call listener function at run time
 
//user profile
// let body2 = document.getElementById("body2");
// let both2 =document.getElementById("both2");
// let main = document.getElementById("main");
// let profile =document.getElementById("profile");
// let icon = document.getElementById("icon");
// document.getElementsByClassName("div1");
// document.getElementsByClassName("popular");



// icon.onclick = function (){
//    main.classList.add('slide');
//    body2.style.width = "57%";
//    both2.style.width = "15%";
//    search.style.right = "33%";
// }

// main.onclick = function(){
//   main.classList.remove('slide');
//   body2.style.width = "80%";
//    both2.style.width = "10%";
//    search.style.right = "12%";
  

// }
// document.addEventListener('DOMContentLoaded', () => {
//     const userIcon = document.getElementById('profile');
//     const userAccount = document.getElementById('main');
//     const body2 = document.getElementById('body2');
//     let search =document.getElementById("search_div");
//     let cross =document.getElementById("cross");
//     let close = document.getElementById("close");

//     userIcon.addEventListener('click', (e) => {
//         e.stopPropagation();
//         userAccount.classList.toggle('show');
//         body2.classList.toggle('shrink');
//         search.classList.toggle('new');
//         cross.classList.toggle('new2');
//         document.body.classList.toggle("sidebar-visible");

//     });

//     close.addEventListener('click', (e) => {
//         // if (!userAccount.contains(e.target) && userAccount.classList.contains('show')) {
//             userAccount.classList.remove('show');
//             body2.classList.remove('shrink');
//             search.classList.remove('new');
//             cross.classList.remove('new2');
//             document.body.classList.remove("sidebar-visible");
    
//         // }
//     });

//     userAccount.addEventListener('click', (e) => {
//         e.stopPropagation();
//     });
// });





//hover effect on list items
let left = document.getElementById("left");
// Get all menu items

let menuItems = document.querySelectorAll('li');

document.addEventListener("DOMContentLoaded", function() {
    // Set initial active element
    var initialActiveElement = document.getElementById('initial');
    changeColor(initialActiveElement);

    // Add event listener to each item
    var items = document.querySelectorAll('li');
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            changeColor(item);
        });
    });
});

function changeColor(element) {
    // Remove active class from all items
    var items = document.querySelectorAll('li');
    items.forEach(function(item) {
        item.classList.remove('active_side');
        item.querySelector('.icons').classList.remove('active_side');
    });

    // Add active class to the clicked item
    element.classList.add('active_side');
    element.querySelector('.icons').classList.add('active_side');
}


// displaying books
// document.addEventListener("DOMContentLoaded", function() {
//     const seeAllBtn = document.getElementById("seeAll");
//     const seeLessBtn = document.getElementById("seeLess");
//     const booksContainer = document.getElementById("popular");
//     // const sidebarToggleBtn = document.getElementById("sidebarToggleBtn");
//     // const sidebar = document.getElementById("sidebar");

    

//     seeAllBtn.addEventListener("click", function() {
//         booksContainer.classList.add("see-all");
//         booksContainer.classList.remove("initial");
//         seeAllBtn.style.display = "none";
//         seeLessBtn.style.display = "block";
//     });

//     seeLessBtn.addEventListener("click", function() {
//         booksContainer.classList.remove("see-all");
//         booksContainer.classList.add("initial");
//         seeAllBtn.style.display = "block";
//         seeLessBtn.style.display = "none";
//     });

//     // Toggle sidebar visibility
// //     sidebarToggleBtn.addEventListener("click", function() {
// //         sidebar.classList.toggle("visible");
// //         document.body.classList.toggle("sidebar-visible");
// //     });
// const books = document.querySelectorAll('.book1');
// books.forEach(book => {
//     book.addEventListener('click', function() {
//         const bookId = book.getAttribute('data-id');
//         window.location.href = `book.html?id=${bookId}`;
//     });
// });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const booksContainer = document.getElementById('popular');
//     const seeAllButton = document.getElementById('seeAll');
//     const seeLessButton = document.getElementById('seeLess');
//     const sidebar = document.getElementById('main');
//     let books = [
//         { id: 1, title: "Book 1", author: "Author 1", cover: "book1.webp" },
//         { id: 2, title: "Book 2", author: "Author 2", cover: "book2.webp" },
//         { id: 3, title: "Book 3", author: "Author 3", cover: "book3.webp" },
//         { id: 4, title: "Book 4", author: "Author 4", cover: "book1.webp" },
//         { id: 5, title: "Book 5", author: "Author 5", cover: "book2.webp" },
//         { id: 6, title: "Book 6", author: "Author 6", cover: "book3.webp" },
//         { id: 7, title: "Book 7", author: "Author 7", cover: "book1.webp" },
//         { id: 8, title: "Book 8", author: "Author 8", cover: "book2.webp" },
//         { id: 9, title: "Book 9", author: "Author 9", cover: "book3.webp" },
//         { id: 10, title: "Book 10", author: "Author 10", cover: "book1.webp" },
//         { id: 11, title: "Book 11", author: "Author 11", cover: "book2.webp" },
//         { id: 12, title: "Book 12", author: "Author 12", cover: "book3.webp" },
//         { id: 13, title: "Book 13", author: "Author 13", cover: "book1.webp" },
//         { id: 14, title: "Book 14", author: "Author 14", cover: "book2.webp" }
//     ];
//     let initialBooksDisplayed = 7;

//     function createBookElement(book) {
//         const bookDiv = document.createElement('div');
//         bookDiv.className = 'book';
//         bookDiv.setAttribute('data-id', book.id);

//         const bookCover = document.createElement('img');
//         bookCover.src = book.cover;
//         bookCover.alt = book.title;
//         bookDiv.appendChild(bookCover);

//         const bookTitle = document.createElement('div');
//         bookTitle.className = 'book-title';
//         bookTitle.textContent = book.title;
//         bookDiv.appendChild(bookTitle);

//         const bookAuthor = document.createElement('div');
//         bookAuthor.className = 'book-author';
//         bookAuthor.textContent = book.author;
//         bookDiv.appendChild(bookAuthor);

//         bookDiv.addEventListener('click', function() {
//             window.location.href = `book.html?id=${book.id}`;
//         });

//         return bookDiv;
//     }

//     function displayBooks() {
//         booksContainer.innerHTML = '';
//         const sidebarVisible = sidebar.classList.contains('show');
//         const booksPerRow = sidebarVisible ? 5 : 7;
//         const initialBooks = books.slice(0, initialBooksDisplayed);
//         initialBooks.forEach(book => {
//             booksContainer.appendChild(createBookElement(book));
//         });

//         if (books.length > initialBooksDisplayed) {
//             seeAllButton.style.display = 'block';
//         } else {
//             seeAllButton.style.display = 'none';
//         }
//     }

//     seeAllButton.addEventListener('click', function() {
//         books.slice(initialBooksDisplayed).forEach(book => {
//             booksContainer.appendChild(createBookElement(book));
//         });
//         seeAllButton.style.display = 'none';
//         seeLessButton.style.display = 'block';
//     });

//     seeLessButton.addEventListener('click', function() {
//         displayBooks();
//         seeLessButton.style.display = 'none';
//     });

//     // Initial fetch and display of books
//     displayBooks();

//     const observer = new MutationObserver(function(mutations) {
//         mutations.forEach(function(mutation) {
//             if (mutation.attributeName === 'class') {
//                 displayBooks();
//             }
//         });
//     });

//     observer.observe(sidebar, { attributes: true });
// });



document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.getElementById('profile');
    const userAccountBar = document.getElementById('main');
    let cross =document.getElementById("cross");
    const popularBooksContainer = document.getElementById('popular-books');

    const  seeAllPopularBtn = document.getElementById('see-all-popular');
    const seeLessPopularBtn = document.getElementById('see-less-popular');
    let search =document.getElementById("search_div");
    const close = document.getElementById('close');
    const body2 = document.getElementById('body2');

    let books = [];
    let visibleCount = 7;

    // Sample book data for popular books
    books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'book1.webp', description: 'A novel set in the Jazz Age.' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'book2.webp', description: 'A novel about racial injustice in the Deep South.' },
        { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'book3.webp', description: 'A dystopian novel about totalitarianism.' },
        { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'book1.webp', description: 'A novel about teenage angst.' },
        { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'book2.webp', description: 'An epic fantasy novel.' },
        { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'book3.webp', description: 'A novel about social class and romance.' },
        { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'book1.webp', description: 'A fantasy novel about hobbits and adventure.' },
        { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'book2.webp', description: 'A novel about the quest for vengeance.' },
        { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'book3.webp', description: 'A novel about a young orphan’s struggles.' },
        { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'book1.webp', description: 'A novel about the dark side of passion.' },
        { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'book2.webp', description: 'An epic poem about Odysseus’s adventures.' },
        { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'book3.webp', description: 'A dystopian novel about a future society.' },
    ];

    function displayBooks(count) {
          popularBooksContainer.innerHTML = '';  
        // popularBooksContainer.innerHTML = '';
        for (let i = 0; i < count && i < books.length; i++) {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            bookDiv.innerHTML = `
                <img src="${books[i].coverUrl}" alt="${books[i].title} Cover">
                <h2>${books[i].title}</h2>
                <p>${books[i].author}</p>
                <a href="book.html?id=${books[i].id}">View Details</a>
            `;
            popularBooksContainer.appendChild(bookDiv);
        }
    }

    // Initial display
    displayBooks(visibleCount);

 //seeaAll event for most popular
    seeAllPopularBtn.addEventListener('click', () => {
        visibleCount = books.length;
        displayBooks(visibleCount);
        popularBooksContainer.classList.toggle('display');
        seeAllPopularBtn.style.display = 'none';
        seeLessPopularBtn.style.display = 'block';
    });

    seeLessPopularBtn.addEventListener('click', () => {
        visibleCount = 7;
        displayBooks(visibleCount);
        popularBooksContainer.classList.remove('display');
        seeAllPopularBtn.style.display = 'block';
        seeLessPopularBtn.style.display = 'none';
    });


     //maths related books
     const maths=document.getElementById('maths');
     const  seeAllMath = document.getElementById('see-all-maths');
     const seeLessMath = document.getElementById('see-less-maths');
     let math_books = [];
     let maths_visibleCount = 7;
 
     // Sample book data for maths related books
     math_books = [
         { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'book1.webp', description: 'A novel set in the Jazz Age.' },
         { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about racial injustice in the Deep South.' },
         { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
         { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
         { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
         { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
         { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
         { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
         { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
         { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
         { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
         { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
     ];
 
     function displayBooksMaths(count) {
           maths.innerHTML = '';  
         // popularBooksContainer.innerHTML = '';
         for (let i = 0; i < count && i < math_books.length; i++) {
             const bookDiv = document.createElement('div');
             bookDiv.className = 'book';
             bookDiv.innerHTML = `
                 <img src="${math_books[i].coverUrl}" alt="${math_books[i].title} Cover">
                 <h2>${math_books[i].title}</h2>
                 <p>${math_books[i].author}</p>
                 <a href="book.html?id=${math_books[i].id}">View Details</a>
             `;
             maths.appendChild(bookDiv);
         }
     }
 
     // Initial display
     displayBooksMaths(maths_visibleCount);

     
 //seeaAll event for maths
    seeAllMath.addEventListener('click', () => {
        maths_visibleCount = math_books.length
        displayBooksMaths(maths_visibleCount);
        maths.classList.toggle('display');
        seeAllMath.style.display = 'none';
        seeLessMath.style.display = 'block';
    });

    seeLessMath.addEventListener('click', () => {
        maths_visibleCount = 7;
        displayBooksMaths(maths_visibleCount);
        maths.classList.remove('display');
        seeAllMath.style.display = 'block';
        seeLessMath.style.display = 'none';
    });

 

     //maths related books
     const science=document.getElementById('science');
     const  seeAllSci = document.getElementById('see-all-science');
     const seeLessSci = document.getElementById('see-less-science');
     let sci_books = [];
     let sci_visibleCount = 7;
 
     // Sample book data for maths related books
     sci_books = [
         { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://via.placeholder.com/150', description: 'A novel set in the Jazz Age.' },
         { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about racial injustice in the Deep South.' },
         { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
         { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
         { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
         { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
         { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
         { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
         { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
         { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
         { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
         { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
     ];
 
     function displayBooksSci(count) {
           science.innerHTML = '';  
         // popularBooksContainer.innerHTML = '';
         for (let i = 0; i < count && i < sci_books.length; i++) {
             const bookDiv = document.createElement('div');
             bookDiv.className = 'book';
             bookDiv.innerHTML = `
                 <img src="${sci_books[i].coverUrl}" alt="${sci_books[i].title} Cover">
                 <h2>${sci_books[i].title}</h2>
                 <p>${sci_books[i].author}</p>
                 <a href="book.html?id=${sci_books[i].id}">View Details</a>
             `;
             science.appendChild(bookDiv);
         }
     }
 
     // Initial display
     displayBooksSci(sci_visibleCount);

     
 //seeaAll event for maths
    seeAllSci.addEventListener('click', () => {
        sci_visibleCount = sci_books.length
        displayBooksSci(sci_visibleCount);
        science.classList.toggle('display');
        seeAllSci.style.display = 'none';
        seeLessSci.style.display = 'block';
    });

    seeLessSci.addEventListener('click', () => {
        sci_visibleCount = 7;
        displayBooksSci(sci_visibleCount);
        science.classList.remove('display');
        seeAllSci.style.display = 'block';
        seeLessSci.style.display = 'none';
    });

   //general books
    const general=document.getElementById('general');
     const  seeAllgen = document.getElementById('see-all-general');
     const seeLessgen = document.getElementById('see-less-general');
     let gen_books = [];
     let gen_visibleCount = 7;
 
     // Sample book data for general related books
     gen_books = [
         { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', coverUrl: 'https://via.placeholder.com/150', description: 'A novel set in the Jazz Age.' },
         { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about racial injustice in the Deep South.' },
         { id: 3, title: '1984', author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
         { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
         { id: 5, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
         { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
         { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
         { id: 8, title: 'Moby Dick', author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
         { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
         { id: 10, title: 'Wuthering Heights', author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
         { id: 11, title: 'The Odyssey', author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
         { id: 12, title: 'Brave New World', author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
     ];
 
     function displayBooksGen(count) {
        general.innerHTML = '';  
      // popularBooksContainer.innerHTML = '';
      for (let i = 0; i < count && i < gen_books.length; i++) {
          const bookDiv = document.createElement('div');
          bookDiv.className = 'book';
          bookDiv.innerHTML = `
              <img src="${gen_books[i].coverUrl}" alt="${gen_books[i].title} Cover">
              <h2>${gen_books[i].title}</h2>
              <p>${gen_books[i].author}</p>
              <a href="book.html?id=${gen_books[i].id}">View Details</a>
          `;
          general.appendChild(bookDiv);
      }
  }

  // Initial display
  displayBooksGen(gen_visibleCount);
 
     
 //seeaAll event for maths
    seeAllgen.addEventListener('click', () => {
    gen_visibleCount = gen_books.length
        displayBooksGen(gen_visibleCount);
        general.classList.toggle('display');
        seeAllgen.style.display = 'none';
        seeLessgen.style.display = 'block';
    });

    seeLessgen.addEventListener('click', () => {
        gen_visibleCount = 7;
        displayBooksGen(gen_visibleCount);
        general.classList.remove('display');
        seeAllgen.style.display = 'block';
        seeLessgen.style.display = 'none';
    });

    //authors books
    const author=document.getElementById('author');
     const  seeAllaut = document.getElementById('see-all-author');
     const seeLessaut = document.getElementById('see-less-author');
     let aut_books = [];
     let aut_visibleCount = 7;
 
     // Sample book data for authors
     aut_books = [
         { id: 1,  author: 'william Shakesphere', coverUrl: 'author1.jpg', description: 'A novel set in the Jazz Age.' },
         { id: 2, author: 'Harper Lee', coverUrl: 'author4.jfif', description: 'A novel about racial injustice in the Deep South.' },
         { id: 3, author: 'George Orwell', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about totalitarianism.' },
         { id: 4, author: 'J.D. Salinger', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about teenage angst.' },
         { id: 5, author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'An epic fantasy novel.' },
         { id: 6,  author: 'Jane Austen', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about social class and romance.' },
         { id: 7, author: 'J.R.R. Tolkien', coverUrl: 'https://via.placeholder.com/150', description: 'A fantasy novel about hobbits and adventure.' },
         { id: 8,  author: 'Herman Melville', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the quest for vengeance.' },
         { id: 9, author: 'Charlotte Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about a young orphan’s struggles.' },
         { id: 10,  author: 'Emily Brontë', coverUrl: 'https://via.placeholder.com/150', description: 'A novel about the dark side of passion.' },
         { id: 11, author: 'Homer', coverUrl: 'https://via.placeholder.com/150', description: 'An epic poem about Odysseus’s adventures.' },
         { id: 12, author: 'Aldous Huxley', coverUrl: 'https://via.placeholder.com/150', description: 'A dystopian novel about a future society.' },
     ];
 
     function displayBooksAut(count) {
        author.innerHTML = '';  
      // popularBooksContainer.innerHTML = '';
      for (let i = 0; i < count && i < aut_books.length; i++) {
          const bookDiv = document.createElement('div');
          bookDiv.className = 'book';
          bookDiv.innerHTML = `
              <img src="${aut_books[i].coverUrl}" alt="${aut_books[i].title} Cover">
              <h2>${aut_books[i].author}</h2>
              
              <a href="book.html?id=${aut_books[i].id}">View Details</a>
          `;
          author.appendChild(bookDiv);
      }
  }

  // Initial display
  displayBooksAut(aut_visibleCount);
 
     
 //seeaAll event for maths
    seeAllaut.addEventListener('click', () => {
    aut_visibleCount = aut_books.length
        displayBooksAut(aut_visibleCount);
        author.classList.toggle('display');
        seeAllaut.style.display = 'none';
        seeLessaut.style.display = 'block';
    });

    seeLessaut.addEventListener('click', () => {
        aut_visibleCount = 7;
        displayBooksAut(aut_visibleCount);
        author.classList.remove('display');
        seeAllaut.style.display = 'block';
        seeLessaut.style.display = 'none';
    });
 
 



    //user account events 
    userIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        userAccountBar.classList.toggle('show');
        search.classList.toggle('new');
        cross.classList.toggle('new2');
        body2.classList.toggle('shrink');
    });
    
    close.addEventListener('click', (e) => {
        //  if (!userAccountBar.contains(e.target) && userAccountBar.classList.contains('show')) {
            userAccountBar.classList.remove('show');
            body2.classList.remove('shrink');
            search.classList.remove('new');
            cross.classList.remove('new2');
         });

    userAccountBar.addEventListener('click', (e) => {
          e.stopPropagation();
       });    


       //menu bar
       const menuDrawer  = document.getElementById('menu-drawer');
       const  menuLeft= document.getElementById('main_left');

      

       menuDrawer.addEventListener('click', (e) => {
        e.stopPropagation();
        menuLeft.classList.toggle('show');
        search.classList.toggle('search_new');
        cross.classList.toggle('cross_new')
        menuDrawer.classList.toggle('close_drawer');
        body2.classList.toggle('shrink2');
        
       
    });
    menuDrawer.addEventListener('click', (e) => {
          e.stopPropagation();
       });   
});

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
    if (!event.target.matches('share-button')) {
      var shareOptions = document.getElementById('share-options');
      if (shareOptions.style.display === 'block') {
        shareOptions.style.display = 'none';
      }
    }
  }
  
//changing user profile  
document.getElementById('userPic').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });
  
  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('userPic').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
});
  //username edit funtion

  document.getElementById('editUsernameBtn').addEventListener('click', function() {
    const usernameDisplay = document.getElementById('usernameDisplay');
    const usernameInput = document.getElementById('usernameInput');
    const editIcon = this.querySelector('i');
  
    if (usernameDisplay.style.display === 'none') {
      // Save the new username
      usernameDisplay.textContent = usernameInput.value;
      usernameDisplay.style.display = 'inline';
      usernameInput.style.display = 'none';
      editIcon.classList.remove('fa-save');
      editIcon.classList.add('fa-edit');
    } else {
      // Edit the username
      usernameInput.value = usernameDisplay.textContent;
      usernameDisplay.style.display = 'none';
      usernameInput.style.display = 'inline';
      usernameInput.focus();
      editIcon.classList.remove('fa-edit');
      editIcon.classList.add('fa-save');
    }
  });

  //download evet
  
document.addEventListener("DOMContentLoaded", function() {
    // Function to attach download event listeners to dynamically added books
    function attachDownloadListeners() {
        const bookContainer = document.getElementById('book-container');

        bookContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('download-btn')) {
                const button = event.target;
                const fileLink = button.nextElementSibling; // Assuming the hidden anchor is the next sibling of the button
                const fileUrl = fileLink.getAttribute('href');
                downloadFile(fileUrl);
            }
        });
    }

    // Function to handle file download
    function downloadFile(url) {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop(); // Extracts the filename from the URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Initial call to attach download listeners
    attachDownloadListeners();
});

