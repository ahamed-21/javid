interface Book {
    title: string;
    author: string;
    publisher: string;
  }
  
  const books: Book[] = [
    { title: "Something I never told u", author: "Bindra", publisher: "Pearson" },
    { title: "PS", author: "Kalki", publisher: "Vikram" },
    { title: "Something I wanted to tell u", author: "Bindra", publisher: "Pearson" },
    { title: "It ends with us", author: "Collen Hover", publisher: "Pearson" }
  ];
  
  books.sort((a, b) => a.author.localeCompare(b.author));
  
  console.log("List of Books sorted by author name in ascending order:");
  books.forEach(book => {
    console.log(`${book.title} by ${book.author} (published by ${book.publisher})`);
  });