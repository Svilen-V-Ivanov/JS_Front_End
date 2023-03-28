function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
  const loadBtn = document.getElementById('loadBooks');
  const submitBtn = document.querySelector('#form > button');
  const booksBody = document.querySelector('table > tbody');
  const formHeader = document.querySelector('h3');
  let allBooks = {};
  let editBookId = null;
  const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));

  loadBtn.addEventListener('click', loadBooks);
  submitBtn.addEventListener('click', submitBook);

  async function loadBooks() {
    try {
      booksBody.innerHTML = '';
      const getData = await fetch(BASE_URL);
      let getInfo = await getData.json();
      allBooks = getInfo;
      for (const bookId in getInfo) {
        const { author, title } = getInfo[bookId];
        const tr = document.createElement('tr');
        const bookColumn = document.createElement('td');
        const authorColumn = document.createElement('td');
        const buttonsColumn = document.createElement('td');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        bookColumn.textContent = title;
        authorColumn.textContent = author;
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';
        deleteBtn.id = bookId;

        editBtn.addEventListener('click', () => {
          editBookId = bookId;
          formHeader.textContent = 'Edit FORM';
          submitBtn.textContent = 'Save';
          titleInput.value = title;
          authorInput.value = author;
        });

        deleteBtn.addEventListener('click', deleteBook);

        tr.appendChild(bookColumn);
        tr.appendChild(authorColumn);
        buttonsColumn.appendChild(editBtn);
        buttonsColumn.appendChild(deleteBtn);
        tr.appendChild(buttonsColumn);
        booksBody.appendChild(tr);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function submitBook() {
    // event.preventDefault(); - removes refreshing if form methods are post
    const title = titleInput.value;
    const author = authorInput.value;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title, author })
    };
    try {
      let url = BASE_URL;

      if (formHeader.textContent === 'Edit FORM') {
        url += editBookId;
        httpHeaders.method = 'PUT';
      }

      const resData = await fetch(url, httpHeaders);
      loadBooks();

      if (formHeader.textContent === 'Edit FORM') {
        formHeader.textContent = 'FORM';
        submitBtn.textContent = 'Submit';
      }
      titleInput.value = '';
      authorInput.value = '';
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteBook() {
    const id = this.id;
    const httpHeaders = {
      method: 'DELETE'
    };
    try {
      await fetch(BASE_URL + id, httpHeaders);
      loadBooks();
    } catch (err) {
      console.error(err);
    }

  }
}

attachEvents();