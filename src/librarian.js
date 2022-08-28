class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`;
  }

  // findBook(title) {
  //   let fantasy = this.library.shelves.fantasy;
  //   let fiction = this.library.shelves.fiction;
  //   let nonFiction = this.library.shelves.nonFiction;

  //   for (var idx = 0; idx < fantasy.length; idx++) {
  //     if (fantasy[idx].title === title){
  //       fantasy.splice(idx, 1);
  //       return `Yes, we have ${title}`
  //     }
  //   }
  //   for (var idx = 0; idx < fiction.length; idx++) {
  //     if (fiction[idx].title === title){
  //       fiction.splice(idx, 1);
  //       return `Yes, we have ${title}`
  //     }
  //   }
  //   for (var idx = 0; idx < nonFiction.length; idx++) {
  //     if (nonFiction[idx].title === title){
  //       nonFiction.splice(idx, 1);
  //       return `Yes, we have ${title}`
  //     }
  //   }

  //   return `Sorry, we do not have ${title}`
  // }

  findBook(title) {
    var shelves = 
    this.library.shelves.fantasy
    .concat(this.library.shelves.fiction, this.library.shelves.nonFiction);
    var genreShelf;

    for (var idx = 0; idx < shelves.length; idx++) {
      if (shelves[idx].title === title) {
        genreShelf = shelves[idx].genre;
        unshelfBook(this.library.shelves, title, genreShelf);
        return `Yes, we have ${title}`
      }
    }

    return `Sorry, we do not have ${title}`
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}

function unshelfBook(library, title, shelf) {
  let position;
  for (let idx = 0; idx < library[shelf].length; idx++) {
    if (library[shelf][idx].title === title) {
      position = idx;
    }
  }
  library[shelf].splice(position, 1);
}

module.exports = Librarian;