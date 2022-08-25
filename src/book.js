function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(charName, charAge, charPronouns) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronouns
  }
}

function saveReview(review, array) {

  if (!array.includes(review)) {
    array.push(review);
  }
//array = [...new Set(array)]; This was a cool solution, but it wasn't passing the tests!
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre,
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}