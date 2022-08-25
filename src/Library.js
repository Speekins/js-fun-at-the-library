function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  let genre = book.genre
  library.shelves[genre].push(book);
}

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};