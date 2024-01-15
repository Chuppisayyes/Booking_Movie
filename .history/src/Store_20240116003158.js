import { configureStore } from "@reduxjs/toolkit";
import reducerTicket from "./Slice/SliceTicketMovie";
import movieTicketReducer from "./redux/movieTicketSlice";
import movieListSlice from "./redux/movieListSlice";
const store = configureStore({
  reducer: {
    ticket: reducerTicket,
    movieTicket: movieTicketReducer,
    movieList: movieListSlice
  },
});
export default store;
