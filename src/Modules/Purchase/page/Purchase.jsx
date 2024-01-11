import React from "react";
import { PurchaseStyleDiv, Container } from "../Components/Purchase.style";
import ListSeat from "../Components/ListSeat";
import { useEffect, useState } from "react";
import { getListSeat } from "../../../Apis/listSeat";
import { useParams } from "react-router";
import InfoMovie from "../Components/InfoMovie";
import IsLoading from "../../../Components/IsLoading/IsLoading";

export default function Purchase() {
  const param = useParams();
  const [seatMovie, setSeatMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const listSeat = async () => {
      try {
        setIsLoading(true);
        const seatMovie = await getListSeat(param.Id);
        setSeatMovie(seatMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    listSeat();
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }
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
