const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url: "https://www.donnekt.com",
      books: [
        {
          title: "Ngarama Rock",
          author: "Paul Rudahigwa",
          image: "assets/a.jpg",
          isFavorite: true,
        },
        {
          title: "The way of Kings",
          author: "Brandon Sam",
          image: "assets/b.jpg",
          isFavorite: false,
        },
        {
          title: "The four",
          author: "Gad Iradufasha",
          image: "assets/c.jpg",
          isFavorite: false,
        },
        {
          title: "Thor (The Hammer)",
          author: "Abijuru Yves",
          image: "assets/a.jpg",
          isFavorite: true,
        },
      ],
    };
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    // Lets add toggle:
    toggleFav(theBook) {
      theBook.isFavorite = !theBook.isFavorite;
    },
  },

  // Computed property
  // Is a way to define data property inside our component
  // Depend on the data we have inside that component
  // We gonna use it in the next phase
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFavorite);
    },
  },
  
});

app.mount("#app");