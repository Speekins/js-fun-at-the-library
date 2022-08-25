function shelfBook(title, shelf) {
  if (shelf.length === 3) {
    return;
  }
  shelf.unshift(title);
}

function unshelfBook(title, shelf) {
  let position;
  for (let idx = 0; idx < shelf.length; idx++) {
    if (shelf[idx].title === title) {
      position = idx;
    }
  }
  shelf.splice(position, 1);
}

function listTitles(shelf) {
  return shelf.map(object => object.title).join(', ');
}

function searchShelf(shelf, name) {
let names = shelf.map(book => book.title);
return names.includes(name);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};