const { v4: uuid4 } = require('uuid');

class Book {
    constructor(title, author, yearPublication, publisher) {
        this.id = uuid4();
        this.title = title;
        this.author = author;
        this.yearPublication = yearPublication;
        this.publisher = publisher;
    }
}

module.exports = Book;