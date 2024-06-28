const express = require("express");
const app = express();
const port = 3000;

let book = {
  title: "The God of Small Thing",
  author: "Arundhati Roy",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5,
};

// book
app.get("/book", (req, res) => {
  res.json(book);
});

// book/fulltitle-author

function getFullTitleAndAuthor(book) {
  return book.title + " by " + book.author;
}

app.get("/book/fulltitle-author", (req, res) => {
  let fullTitleAndAuthor = getFullTitleAndAuthor(book);
  res.json({ fullTitleAndAuthor: fullTitleAndAuthor });
});

// /book/genre-availability
function getGenreAndAvailability(book) {
  return {
    genre: book.genre,
    isAvailable: book.isAvailable,
  };
}
app.get("/book/genre-availability", (req, res) => {
  let genreAndAvailability = getGenreAndAvailability(book);
  res.json({ genreAndAvailability: genreAndAvailability });
});

// /book/age
function calculateBookAge(book) {
  let currentYear = 2024;
  let bookAge = currentYear - book.publicationYear;
  return bookAge;
}
app.get("/book/age", (req, res) => {
  let bookAge = calculateBookAge(book);
  res.json({ age: bookAge });
});

// /book/summary
function getBookSummary(book) {
  return `Title: ${book.title}, Author: ${book.author}, Genre : ${book.genre}, Publication Year: ${book.publicationYear}`;
}
app.get("/book/summary", (req, res) => {
  let bookSummery = getBookSummary(book);
  res.json({ bookSummery: bookSummery });
});

// book/stock-status
function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: "In Stock", stock: book.stock };
  } else {
    return { status: "Out of Stock", stock: book.stock };
  }
}
app.get("/book/stock-status", (req, res) => {
  let stockAndOrder = checkStockAndOrder(book);
  res.json(stockAndOrder);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
