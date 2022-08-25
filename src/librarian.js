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
    if (book.title === title) {
      return `Yes, we have ${title}`
    }
  }
}

module.exports = Librarian;