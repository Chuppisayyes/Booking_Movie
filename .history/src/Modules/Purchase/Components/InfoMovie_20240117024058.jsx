import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfoMovieSeat, InfoMovieSeatItem, InfoMovieSeatPLeft, InfoMovieSeatPRight, BuyTicketMovie } from "./Purchase.style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { addTicket } from "../../../Apis/listSeat";
import { purchase } from "../../../redux/movieTicketSlice"
export default function InfoMovie({ infoMovie }) {
  console.log(infoMovie);
  const selected = useSelector((state) => {
    return state.ticket;
  });
  console.log(selected);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [dataTicket, setDataTicket] = useState({});
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
    if (selected.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Bạn chưa chọn ghế',
        text: 'Vui lòng chọn ghế!',
      })
      return
    }
    setDataTicket({
      "maLichChieu": infoMovie.maLichChieu,
      "danhSachVe": selected.map((seat) => {
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
          {selected.selectedSeat.map((seat) => {
            if (seat === selected[0]) {
              return <span style={{ color: "green", fontWeight: "bold" }>Ghế {seat.tenGhe}</span>
            }
            return <span>Ghế {seat.tenGhe}</span>
          })}
        </pInfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <BuyTicketMovie onClick={handleSwal}>Đặt Vé</BuyTicketMovie>
    </InfoMovieSeat>
  );
}
