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
  let titlesOnly = [];
  for (var idx = 0; idx < shelf.length; idx++) {
    titlesOnly.push(shelf[idx].title)
  }
  return titlesOnly.join(', ');
}

function searchShelf(shelf, title) {
  let titlesOnly = [];
  for (var idx = 0; idx < shelf.length; idx++) {
    titlesOnly.push(shelf[idx].title)
  }
  return titlesOnly.includes(title);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};