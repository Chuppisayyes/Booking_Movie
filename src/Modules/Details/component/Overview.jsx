import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import {
  Container,
  DetailLeft,
  DetailLeftButton,
  DetailLeftRight,
  DetailLeftImage,
  DetailRight,
  OverviewDetail,
  LayoutMovie,
  ButtonTrailer,
  DetailLeftPosition,
} from "./details.style";
import { FaStar } from "react-icons/fa";
import StaticExample from "../../../Components/Modals/ModalMovies";
import IsLoading from "../../../Components/IsLoading/IsLoading";

export default function Overview({ movieDetails }) {
  const [isOpen, setIsOpen] = useState(false);

  const stars = [];

  for (let i = 0; i < movieDetails.danhGia; i++) {
    stars.push(<FaStar key={i} />);
  }

  return (
    <div>
      {isOpen && <StaticExample onClose={() => setIsOpen()} trailerMovie={movieDetails.trailer} />}
      <Container>
        <OverviewDetail>
          <DetailLeft>
            <DetailLeftPosition>
              <DetailLeftImage src={movieDetails.hinhAnh} alt="" />
              <LayoutMovie></LayoutMovie>
              <ButtonTrailer onClick={() => setIsOpen(true)}>
                <FaCirclePlay />
              </ButtonTrailer>
            </DetailLeftPosition>
            <DetailLeftRight>
              <span>{movieDetails.ngayKhoiChieu}</span>
              <h4>{movieDetails.tenPhim}</h4>
              <DetailLeftButton href="#showTime">Mua Vé</DetailLeftButton>
            </DetailLeftRight>
          </DetailLeft>
          <DetailRight>
            <h1>Đánh Giá</h1>
            <div style={{ fontSize: 30 }}>{movieDetails.danhGia} Star</div>
            <div style={{ color: "yellow" }}>{stars}</div>
          </DetailRight>
        </OverviewDetail>
      </Container>
    </div>
  );
}
