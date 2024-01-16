import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const Container = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 1025px) {
    width: 65%;
    margin: auto;
  }
  @media (max-width: 769px) {
    width: 70%;
    margin: auto;
  }
  @media (max-width: 431px) {
    width: 80%;
    margin: auto;
  }
`;
export const ContentListSeat = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 30px);
  gap: 10px;
  @media (max-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(10, 30px);
    gap: 10px;
  }
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: repeat(8, 30px);
    gap: 10px;
  }
  @media (max-width: 431px) {
    display: grid;
    grid-template-columns: repeat(5, 40px);
    gap: 10px;
  }
`;
export const PurchaseStyleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 1025px) {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 431px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ButtonBuyMovie = styled.button`
  ${(props) =>
    css`
      background-color: ${props.isSelected
        ? "green"
        : props.daDat
        ? "gray"
        : props.loaiGhe === "Vip"
        ? "#ffa500"
        : "#e9e9e9"};
    `}
  font-size: 14px;
  text-align: center;
  max-width: 60px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  &:hover {
    opacity: 0.9;
  }
`;
export const InfoButtonMovieX = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: gray;
  border-radius: 5px;
  margin-top: 20px;
`;
export const InfoButtonMovieNomal = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #e9e9e9;
  border-radius: 5px;
  margin-top: 20px;
`;
export const InfoButtonMovieVip = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  background-color: #ffa500;
  border-radius: 5px;
  margin-top: 20px;
`;
export const InfoButtonMovieContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;
export const PurchaseContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InfoMovieSeat = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  height: 100%;
  width: 100%;
  margin-left: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
export const InfoMovieSeatItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding: 15px 0px;
`;
export const InfoMovieSeatPLeft = styled.p`
  margin-bottom: 0px;
  font-weight: bold;
  margin-right: 10px;
`;
export const InfoMovieSeatPRight = styled.p`
  margin-bottom: 0px;
  font-weight: bold;
  color: green;
  font-size: 14px;
`;
export const BuyTicketMovie = styled.button`
  width: 100%;
  border: none;
  margin: 10px 0px;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: #f94126;
  opacity: 1;
  &:hover {
    opacity: 0.9;
  }
`;
