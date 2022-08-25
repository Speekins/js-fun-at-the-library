function shelfBook(title, shelf) {
  shelf.unshift(title);
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};