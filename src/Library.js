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
  var genre = book.genre
  library.shelves[genre].push(book);
}

function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];
  for (var idx = 0; idx < shelf.length; idx++) {
    if (shelf[idx].title === title) {
      shelf.splice(idx, 1);
      return `You have now checked out ${title} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};