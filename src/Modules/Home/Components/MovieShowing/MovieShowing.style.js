import styled from "@emotion/styled";

export const Container = styled.div`
  width: 60%;
  margin: auto;
`;
export const Card = styled.div`
  position: relative;
  border: none;
  overflow: hidden;
  height: 460px;

  &:hover {
    button {
      display: block;
    }
    p {
      display: none;
    }
    h5 {
      display: none;
    }
    div {
      opacity: 1;
    }
  }
`;
export const CardImage = styled.div`
  position: relative;
`;
export const ButtonBuyTicket = styled.button`
  background: #fb4226;
  width: 100%;
  padding: 15px 0px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  margin-top: 15px;
  display: none;

  &:hover {
    background: linear-gradient(to left, #fb4226, #ce3017 100%);
  }
`;
export const ImageMovie = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
`;
export const TitleMovieP = styled.p`
  border: 1px solid #fb4226;
  border-radius: 5px;
  padding: 1px 2px;
  font-weight: bold;
  background-color: #fb4226;
  color: #fff;
`;
export const CardBottom = styled.div`
  display: flex;
  justify-content: start;
`;
export const CardFooterDescrip = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 300px;
`;
export const CardFooterMovie = styled.div`
  background-color: #fff;
  padding: 0px;
`;
export const LayoutMovie = styled.div`
  position: absolute;
  background: linear-gradient(to top, #111, transparent 100%);
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 350px;
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
