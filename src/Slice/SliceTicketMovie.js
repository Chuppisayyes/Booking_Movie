import { createSlice } from "@reduxjs/toolkit";

const SliceTicketSeat = createSlice({
  name: "ticketSeat",
  initialState: {
    selectedSeat: [],
    total: 0,
  },
  reducers: {
    selectSeat: (state, action) => {
      const { isSelected, ...seat } = action.payload;
      console.log(seat);
      if (!isSelected) {
        const selectedSeat = [...state.selectedSeat, seat];
        const total = state.total + seat.giaVe;
        return { ...state, selectedSeat, total };
      }
      const selectedSeat = state.selectedSeat.filter((item) => item.tenGhe !== seat.tenGhe);
      const total = state.total - seat.giaVe;
      return { ...state, selectedSeat, total };
    },
    removeSeat: (state, action) => {},
  },
});
export default SliceTicketSeat.reducer;
export const { selectSeat, removeSeat } = SliceTicketSeat.actions;
