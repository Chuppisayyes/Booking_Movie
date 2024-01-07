import {
  Container,
  DetailShowTime,
  DetailShowTimeLeft,
  DetailShowTimeLogo,
  DetailButtonLogo,
  TitleNameCinemas,
  DetailShowTimeRight,
  DetailShowTimeRightContent,
  DetailButtonTimeMovie,
} from "./details.style";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
export default function ShowTime({ showTimes }) {
  const [cinemas, setCinemas] = useState([]);

  const handleSelectCinemaSystem = (id) => {
    const cinemas = showTimes.find((item) => item.maHeThongRap === id)?.cumRapChieu;

    setCinemas(cinemas);
  };
  return (
    <div style={{ paddingBottom: 30 }}>
      <Container>
        <DetailShowTime>
          <DetailShowTimeLeft>
            {showTimes.map((showTime) => (
              <DetailButtonLogo key={showTime.maHeThongRap} onClick={() => handleSelectCinemaSystem(showTime.maHeThongRap)}>
                <DetailShowTimeLogo src={showTime.logo} alt={showTime.tenHeThongRap} />
              </DetailButtonLogo>
            ))}
          </DetailShowTimeLeft>
          <DetailShowTimeRight>
            {cinemas &&
              cinemas.map((cinema) => {
                return (
                  <DetailShowTimeRightContent key={cinema.maCumRap}>
                    <TitleNameCinemas>{cinema.tenCumRap}</TitleNameCinemas>
                    {cinema.lichChieuPhim.map((lichChieu) => (
                      <DetailButtonTimeMovie>{dayjs(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")}</DetailButtonTimeMovie>
                    ))}
                  </DetailShowTimeRightContent>
                );
              })}
          </DetailShowTimeRight>
        </DetailShowTime>
      </Container>
    </div>
  );
}
