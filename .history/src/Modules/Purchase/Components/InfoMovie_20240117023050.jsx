import React from "react";
import { useSelector } from "react-redux";
import { InfoMovieSeat, InfoMovieSeatItem, InfoMovieSeatPLeft, InfoMovieSeatPRight, BuyTicketMovie } from "./Purchase.style";
export default function InfoMovie({ infoMovie }) {
  console.log(infoMovie);
  const selected = useSelector((state) => {
    return state.ticket;
  });
  console.log(selected);
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
             if (seat === selectedSeats[0]) {
              return `Ghế ${seat.tenGhe}`
          }
          return `, Ghế ${seat.tenGhe}`
      })
          ))}
        </pInfoMovieSeatPRight>
      </InfoMovieSeatItem>
      <BuyTicketMovie>Đặt Vé</BuyTicketMovie>
    </InfoMovieSeat>
  );
}
