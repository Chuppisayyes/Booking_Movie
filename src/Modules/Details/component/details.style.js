import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const BackGroundDetails = styled.div``;

export const Container = styled.div`
  width: 60%;
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
export const OverviewDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media (max-width: 926px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin-right: 50px;
  }
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding-right: 10%;
  }
  @media (max-width: 376px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const DetailLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0px;
  margin-right: 30px;
  @media (max-width: 310px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0;
    width: 200px;
  }
`;
export const DetailLeftPosition = styled.div`
  position: relative;
  &:hover {
    button {
      display: block;
    }
    div {
      opacity: 1;
    }
  }
`;
export const DetailLeftButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 5px 15px;
  background-color: #fb4226;
  color: #fff;
  border: none;
  border-radius: 3px;
  &:hover {
    background-color: #b42a14;
  }
`;
export const DetailLeftRight = styled.div`
  margin-left: 20px;
  color: white;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
  @media (max-width: 281px) {
    font-size: 10px;
    width: 10%;
  }
`;
export const DetailLeftImage = styled.img`
  width: 200px;
  border-radius: 10px;
  @media (max-width: 960px) {
    width: 150px;
  }
  @media (max-width: 768px) {
    width: 130px;
  }
  @media (max-width: 576px) {
    width: 110px;
  }
`;
export const DetailRight = styled.div`
  color: white;
  text-align: center;
  padding-bottom: 30px;
  @media (max-width: 821px) {
    font-size: 15px;
    width: 150px;
  }
  @media (max-width: 576px) {
    font-size: 15px;
    width: 100%;
    left: 0;
  }
  @media (max-width: 376px) {
    font-size: 15px;
    width: 100%;
    margin-left: 15px;
  }
`;
export const LayoutMovie = styled.div`
  position: absolute;
  background: linear-gradient(to top, #000, transparent 100%);
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
`;
export const ButtonTrailer = styled.button`
  position: absolute;
  display: none;
  top: 40%;
  left: 35%;
  border: 2px solid #fff;
  border-radius: 90px;
  text-align: center;
  font-size: 25px;
  padding: 5px 15px 11px 15px;
  color: #fff;
  font-weight: bold;
  background: none;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
export const DetailShowTime = styled.div`
  display: flex;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;
export const DetailShowTimeLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  border-right: 1px solid gray;
  margin-right: 20px;
`;
export const DetailShowTimeLogo = styled.img`
  max-width: 50px;
  max-height: 50px;
  width: 100%;
  height: 100%;
  margin: 20px;
  @media (max-width: 415px) {
    max-width: 50px;
    max-height: 50px;
    width: 50%;
    height: 50%;
    margin: 20px;
  }
  @media (max-width: 376px) {
    max-width: 50px;
    max-height: 50px;
    width: 50%;
    height: 50%;
    margin: 20px;
  }
`;

export const DetailButtonLogo = styled.div`
  position: relative;
  border-bottom: 1px solid gray;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #3498db;
    color: #fff;
    transform: scale(1); /* Tăng kích thước khi hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    overflow: hidden;
    border-bottom: 1px solid black;
  }
  ${(props) =>
    props.IsActive &&
    css`
      background-color: #3498db;
      color: #fff;
      border-bottom: 1px solid black;
    `}
`;
export const TitleNameCinemas = styled.h3`
  font-size: 16px;
  color: green;
  @media (max-width: 415px) {
    font-size: 10px;
    font-weight: bold;
  }
`;
export const DetailShowTimeRight = styled.div`
  margin-top: 10px;
`;
export const DetailShowTimeRightContent = styled.div`
  margin-top: 20px;
`;
export const DetailButtonTimeMovie = styled.button`
  padding: 10px 20px;
  background: none;
  border-radius: 10px;
  &:hover {
    background-color: #3498db;
    transform: scale(1.1);
  }
`;
