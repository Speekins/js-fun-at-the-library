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

  findBook(title) {
    let fantasy = this.library.shelves.fantasy;
    let fiction = this.library.shelves.fiction;
    let nonFiction = this.library.shelves.nonFiction;

    for (var idx = 0; idx < fantasy.length; idx++) {
      if (fantasy[idx].title === title){
        fantasy.splice(idx, 1);
        return `Yes, we have ${title}`
      }
    }
    for (var idx = 0; idx < fiction.length; idx++) {
      if (fiction[idx].title === title){
        fiction.splice(idx, 1);
        return `Yes, we have ${title}`
      }
    }
    for (var idx = 0; idx < nonFiction.length; idx++) {
      if (nonFiction[idx].title === title){
        nonFiction.splice(idx, 1);
        return `Yes, we have ${title}`
      }
    }

    return `Sorry, we do not have ${title}`
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25);
  }
}

module.exports = Librarian;