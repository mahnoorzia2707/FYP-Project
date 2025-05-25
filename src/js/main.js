// Example array of books (replace or fetch from backend as needed)
const books = [
    {
        title: "Book Title 1",
        author: "Author Name 1",
        image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?semt=ais_hybrid&w=740"
    },
    {
        title: "Book Title 2",
        author: "Author Name 2",
        image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?semt=ais_hybrid&w=740"
    },
    {
        title: "Book Title 3",
        author: "Author Name 3",
        image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?semt=ais_hybrid&w=740"
    },
    {
        title: "Book Title 4",
        author: "Author Name 4",
        image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?semt=ais_hybrid&w=740"
    }
    // Add more books as needed
];

function renderBooks() {
    const booksRow = document.getElementById('books-row');
    if (booksRow) {
        booksRow.innerHTML = '';
        books.forEach(book => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Author: ${book.author}</p>
                        <a href="#" class="btn btn-primary mt-auto">Exchange</a>
                    </div>
                </div>
            `;
            booksRow.appendChild(col);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    renderBooks();

    // Example function for form validation on the login page
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                event.preventDefault();
                alert('Please fill in both fields.');
            }
        });
    }

    // Example function to load books dynamically on the books page
    const booksContainer = document.getElementById('booksContainer');
    if (booksContainer) {
        loadBooks();
    }

    function loadBooks() {
        // Simulated book data
        const books = [
            { title: 'Book 1', author: 'Author 1' },
            { title: 'Book 2', author: 'Author 2' },
            { title: 'Book 3', author: 'Author 3' }
        ];

        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-item';
            bookElement.innerHTML = `<h5>${book.title}</h5><p>${book.author}</p>`;
            booksContainer.appendChild(bookElement);
        });
    }

    // Example event handling for profile page
    const editProfileButton = document.getElementById('editProfileButton');
    if (editProfileButton) {
        editProfileButton.addEventListener('click', function() {
            alert('Edit profile functionality not implemented yet.');
        });
    }
});