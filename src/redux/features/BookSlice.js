import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  filteredBooks: [],
  booksInCarts: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchByBook: (state, { payload }) => {
      if (payload) {
        state.filteredBooks = state.books.filter(
          (item) =>
            item.authorName.toLowerCase().includes(payload) ||
            item.genra.toLowerCase().includes(payload) ||
            item.title.toLowerCase().includes(payload)
        );
      } else {
        state.filteredBooks = state.books;
      }
    },
    filterByGenra: (state, { payload }) => {
      if (payload) {
        state.filteredBooks = state.books.filter((item) => item.genra === payload);
        if (!state.filteredBooks) {
          state.filteredBooks = [];
        }
      } else {
        state.filteredBooks = state.books;
      }
    },
    setBooks: (state, { payload }) => {
      state.books = payload;
      state.filteredBooks = payload;
    },
    addToCart: (state, { payload }) => {
      const existingData= state.booksInCarts.filter(item => item.id === payload.id).length > 0;
      if (!existingData) {
        state.booksInCarts.push(payload);
      }
    },
  },
});

export const { searchByBook, setBooks, filterByGenra, addToCart } = bookSlice.actions;
const userReducer = bookSlice.reducer;
export default userReducer;
