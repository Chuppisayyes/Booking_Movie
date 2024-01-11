import { configureStore } from "@reduxjs/toolkit";
import reducerTicket from "./Slice/SliceTicketMovie";
const store = configureStore({
  reducer: {
    ticket: reducerTicket,
  },
});
export default store;
