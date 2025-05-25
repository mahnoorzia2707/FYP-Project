// Fetch books from backend and render them

async function fetchBooks() {
    try {
        const response = await fetch('http://localhost:5000/api/books');
        if (!response.ok) throw new Error('Failed to fetch books');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

function renderBooks(books) {
    const booksRow = document.getElementById('books-row');
    if (booksRow) {
        booksRow.innerHTML = '';
        books.forEach(book => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${book.image || ''}" class="card-img-top" alt="${book.title}">
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

document.addEventListener('DOMContentLoaded', async function() {
    // Fetch and render books from backend
    const books = await fetchBooks();
    renderBooks(books);

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

    // Example event handling for profile page
    const editProfileButton = document.getElementById('editProfileButton');
    if (editProfileButton) {
        editProfileButton.addEventListener('click', function() {
            alert('Edit profile functionality not implemented yet.');
        });
    }
});