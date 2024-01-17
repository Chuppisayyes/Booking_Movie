import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider } from '@mui/material';
import { InfoMovieSeat, InfoMovieSeatItem, InfoMovieSeatPLeft, InfoMovieSeatPRight, BuyTicketMovie } from "./Purchase.style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTicket } from "../../../Apis/listSeat";
import Swal from "sweetalert2";
import Purchase from "../page/Purchase";
export default function InfoMovie({ infoMovie }) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [dataTicket, setDataTicket] = useState({});
  // console.log(infoMovie);
  let { selectedSeats, totalPrice } = useSelector((state) => {
    return state.movieTicket;
})
const { mutate: handleBuyTicket } = useMutation({
  mutationFn: () => addTicket(dataTicket),

  onSuccess: () => {
      Swal.fire(
          'Đặt vé thành công!',
          'Kiểm tra trong lịch sử đặt vé',
          'success'
      )
      dispatch(purchase())
      queryClient.invalidateQueries({ queryKey: ['seatItem'] })

  }
})

const handleSwal = () => {
  if (selectedSeats.length <= 0) {
      Swal.fire({
          icon: 'error',
          title: 'Bạn chưa chọn ghế',
          text: 'Vui lòng chọn ghế!',
      })
      return
  }
  setDataTicket({
      "maLichChieu": data?.thongTinPhim.maLichChieu,
      "danhSachVe": selectedSeats.map((seat) => {
          return ({
              "maGhe": seat.maGhe,
              "giaVe": seat.giaVe
          })
      })
  })
  handleBuyTicket()
}
  return (
    <InfoMovieSeat>
      <div style={{ textAlign: "center", borderBottom: "1px solid gray", padding: "10px 0px", color: "green", fontWeight: "bold" }}>
        <div>{selected.total}VND</div>
      </div>
      <InfoMovieSeatItem>
        <InfoMovieSeatPLeft>Cụm Rạp: </InfoMovieSeatPLeft>
        <InfoMovieSeatPRight>{infoMovie.tenCumRap}</InfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <InfoMovieSeatItem>
        <InfoMovieSeatPLeft>Địa Chỉ: </InfoMovieSeatPLeft>
        <InfoMovieSeatPRight>{infoMovie.diaChi}</InfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <InfoMovieSeatItem>
        <InfoMovieSeatPLeft>Rạp: </InfoMovieSeatPLeft>
        <InfoMovieSeatPRight>{infoMovie.tenRap}</InfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <InfoMovieSeatItem>
        <InfoMovieSeatPLeft>Ngày Giờ Chiếu: </InfoMovieSeatPLeft>
        <pInfoMovieSeatPRight>
          {infoMovie.ngayChieu}~{infoMovie.gioChieu}
        </pInfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <InfoMovieSeatItem>
        <InfoMovieSeatPLeft>Tên Phim: </InfoMovieSeatPLeft>
        <InfoMovieSeatPRight>{infoMovie.tenPhim}</InfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <InfoMovieSeatItem>
        <InfoMovieSeatPLeft>Chọn: </InfoMovieSeatPLeft>
        <pInfoMovieSeatPRight>
          {selected.selectedSeat.map((seat) => (
            <span style={{ color: "green", fontWeight: "bold" }}>Ghế: {seat.tenGhe}, </span>
          ))}
        </pInfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <BuyTicketMovie  onClick={handleSwal}>Đặt Vé</BuyTicketMovie>
    </InfoMovieSeat>
  );
}
