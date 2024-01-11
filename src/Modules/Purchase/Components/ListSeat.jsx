import React from "react";
import {
  ButtonBuyMovie,
  ContentListSeat,
  Container,
  InfoButtonMovieX,
  InfoButtonMovieNomal,
  InfoButtonMovieVip,
  InfoButtonMovieContent,
  PurchaseContentRight,
} from "./Purchase.style";
import { selectSeat } from "../../../Slice/SliceTicketMovie";
import { useDispatch, useSelector } from "react-redux";
export default function ListSeat({ seatMovies }) {
  const dispatch = useDispatch();
  const handleSecedSeat = (seat, isSelected) => {
    dispatch(selectSeat({ ...seat, isSelected }));
  };
  const selecedSeatState = useSelector((state) => {
    return state.ticket.selectedSeat;
  });

  return (
    <>
      <PurchaseContentRight>
        <ContentListSeat>
          {seatMovies.map((seatMovie) => {
            console.log(seatMovie);
            const isSelected = !!selecedSeatState.find((item) => item.tenGhe === seatMovie.tenGhe);

            return (
              <div key={seatMovie.maGhe}>
                <ButtonBuyMovie
                  daDat={seatMovie.daDat}
                  isSelected={isSelected}
                  loaiGhe={seatMovie.loaiGhe}
                  disabled={seatMovie.daDat}
                  onClick={() => handleSecedSeat(seatMovie, isSelected)}
                >
                  {seatMovie.daDat ? "X" : seatMovie.tenGhe}
                </ButtonBuyMovie>
              </div>
            );
          })}
        </ContentListSeat>
        <InfoButtonMovieContent>
          <div>
            <InfoButtonMovieX>X</InfoButtonMovieX>
            <p>Đã đặt</p>
          </div>
          <div>
            <InfoButtonMovieNomal></InfoButtonMovieNomal>
            <p>Thường</p>
          </div>
          <div>
            <InfoButtonMovieVip></InfoButtonMovieVip>
            <p>Vip</p>
          </div>
        </InfoButtonMovieContent>
      </PurchaseContentRight>
    </>
  );
}
