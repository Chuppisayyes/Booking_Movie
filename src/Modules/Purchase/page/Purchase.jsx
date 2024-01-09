import React from "react";
import { PurchaseStyleDiv, Container } from "../Components/Purchase.style";
import ListSeat from "../Components/ListSeat";
import { useEffect, useState } from "react";
import { getListSeat } from "../../../Apis/listSeat";
import { useParams } from "react-router";
import InfoMovie from "../Components/InfoMovie";

export default function Purchase() {
  const param = useParams();
  const [seatMovie, setSeatMovie] = useState(null);
  useEffect(() => {
    const listSeat = async () => {
      try {
        const seatMovie = await getListSeat(param.Id);
        setSeatMovie(seatMovie);
      } catch (error) {
        console.error(error);
      }
    };
    listSeat();
  }, []);

  if (!seatMovie) {
    return;
  }

  const { danhSachGhe, thongTinPhim } = seatMovie;

  return (
    <Container>
      <PurchaseStyleDiv>
        <ListSeat seatMovies={danhSachGhe} />
        <InfoMovie infoMovie={thongTinPhim} />
      </PurchaseStyleDiv>
    </Container>
  );
}
