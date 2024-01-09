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
import { useNavigate } from "react-router";
export default function ShowTime({ showTimes }) {
  const [isActive, setIsActive] = useState(false);
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    setCinemas(showTimes[0].cumRapChieu);
  }, []);
  const handleSelectCinemaSystem = (id) => {
    const cinemas = showTimes.find((item) => item.maHeThongRap === id)?.cumRapChieu;
    setCinemas(cinemas);
    setIsActive(id);
  };
  const navigate = useNavigate();
  return (
    <div id="showTime" style={{ paddingBottom: 30 }}>
      <Container>
        <DetailShowTime>
          <DetailShowTimeLeft>
            {showTimes.map((showTime) => (
              <DetailButtonLogo
                IsActive={isActive === showTime.maHeThongRap}
                key={showTime.maHeThongRap}
                onClick={() => handleSelectCinemaSystem(showTime.maHeThongRap)}
              >
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
                      <DetailButtonTimeMovie onClick={() => navigate(`/Purchase/${lichChieu.maLichChieu}`)}>
                        {dayjs(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY ~ hh:mm")}
                      </DetailButtonTimeMovie>
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
