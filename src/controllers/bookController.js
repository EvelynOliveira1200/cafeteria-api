const Book = require("../models/Book");
const BookList = require("../models/BookList");

const lista = new BookList();

const book1 = new Book("Harry Potter", "J.K. Rowling", 2000);
lista.addBook(book1);

lista.addBook(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954));

lista.addBook(new Book("The Hobbit", "J.R.R. Tolkien", 1937));

const router = {
    addBook: (req, res) => {
        try {
            const { title, author, yearPublication, publisher } = req.body;
            if (!title || !author || !yearPublication || !publisher) {
                throw new Error("All fields are required");
            }
            const book = new Book(title, author, yearPublication, publisher);
            lista.addBook(book);
            res.status(200).json({ message: "Book added", book });
        } catch (error) {
            res.status(400).json({ message: "error adding book", error });
        }
    },

    getAllBooks: (req, res) => {
        try {
            const books = lista.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            res.status(404).json({ message: "error cant find book", error });
        }

    },

    getBookById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getBookById(id));
        } catch (error) {
            res.status(404).json({ message: "Book not found", error });
        }
    },

    updateBook: (req, res) => {
        try {
            res.status(200).json(lista.updateBook(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({ message: "Book not found", error });
        }
    },

    deleteBook: (req, res) => {
        try {
            const book = req.params.id;
            lista.deleteBook(book);
            res.status(200).json({ message: "Book deleted" });
        } catch (error) {
            res.status(404).json({ message: "Book not found", error });
        }
    },
}

module.exports = router;

