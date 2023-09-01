import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  filteredBooks: [],
  filteredBooksByAuthor: [],
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
    filterByAuthor: (state, { payload }) => {
      console.log(payload);
      if (payload) {
        state.filteredBooksByAuthor = state.books.filter((item) => item.user.id === payload);
        if (!state.filteredBooksByAuthor) {
          state.filteredBooksByAuthor = [];
        }
      }
    },
    setBooks: (state, { payload }) => {
      state.books = payload;
      state.filteredBooks = payload;
    },
  },
});

export const { searchByBook, setBooks, filterByGenra, filterByAuthor } = bookSlice.actions;
const userReducer = bookSlice.reducer;
export default userReducer;
