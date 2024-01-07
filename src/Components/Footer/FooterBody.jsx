import { useEffect, useState } from "react";
import { DiAndroid } from "react-icons/di";
import { FaApple, FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import {
  Container,
  GridFooter,
  TitleFooterBody,
  BackgroundFooterBody,
  ContentText,
  ContentTextP,
  GridItemOne,
  GridItemTwo,
  GridItemThree,
  GridItemFour,
  LogoFooter,
  UlFooter,
  LiFooter,
  IconFooterA,
  ContentTextH6,
  ContentFooterFlex,
  ContentFooterFlexA,
  ContentFooterFlexB,
  ContentFooterFlexC,
  ContentFooterFlexCImg,
  ContentFooterFlexAImg,
} from "./Footer.styles";
import { getSystemCinema } from "../../Apis/cinemaAPI";
export default function FooterBody() {
  const [cinemas, setCinemas] = useState([]);
  useEffect(() => {
    fectData();
  }, []);
  const fectData = async () => {
    try {
      const data = await getSystemCinema();
      setCinemas(data);
    } catch (error) {}
  };
  return (
    <BackgroundFooterBody>
      <Container>
        <GridFooter>
          <GridItemOne>
            <div>
              <TitleFooterBody>TIX</TitleFooterBody>
              <ContentText>
                <div>
                  <ContentTextP>FAQ</ContentTextP>
                  <ContentTextP>Brand Guideline</ContentTextP>
                </div>
                <div className="ms-5">
                  <ContentTextP>Thỏa thuận sử dụng</ContentTextP>
                  <ContentTextP>Chính sách bảo mật</ContentTextP>
                </div>
              </ContentText>
            </div>
          </GridItemOne>
          <GridItemTwo>
            <div>
              <TitleFooterBody>ĐỐI TÁC</TitleFooterBody>
            </div>
            <UlFooter>
              {cinemas.map((cinema) => (
                <LiFooter key={cinema.maHeThongRap}>
                  <a href="">
                    <LogoFooter src={cinema.logo} alt={cinema.biDanh} />
                  </a>
                </LiFooter>
              ))}
            </UlFooter>
          </GridItemTwo>
          <GridItemThree>
            <div>
              <TitleFooterBody>MOBILE APP</TitleFooterBody>
            </div>
            <div>
              <IconFooterA href="#">
                <DiAndroid style={{ fontSize: 30 }} />
              </IconFooterA>
              <IconFooterA href="#">
                <FaApple style={{ fontSize: 30, marginLeft: 10 }} />
              </IconFooterA>
            </div>
          </GridItemThree>
          <GridItemFour>
            <TitleFooterBody>Social</TitleFooterBody>
            <div>
              <IconFooterA>
                <FaFacebook style={{ fontSize: 30 }} />
              </IconFooterA>
              <IconFooterA href="#">
                <SiZalo style={{ fontSize: 30, marginLeft: 10, borderRadius: 20, backgroundColor: "gray", padding: 3, color: "#fff" }} />
              </IconFooterA>
            </div>
          </GridItemFour>
        </GridFooter>
        <hr style={{ height: 2, color: "#fff" }} />
      </Container>
      <Container>
        <ContentFooterFlex>
          <ContentFooterFlexA>
            <ContentFooterFlexAImg
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </ContentFooterFlexA>
          <ContentFooterFlexB>
            <ContentTextH6 style={{ marginBottom: 15 }}>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</ContentTextH6>
            <ContentTextH6>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</ContentTextH6>
            <ContentTextH6>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</ContentTextH6>
            <ContentTextH6>đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</ContentTextH6>
            <ContentTextH6>Số Điện Thoại (Hotline): 1900 545 436</ContentTextH6>
          </ContentFooterFlexB>
          <ContentFooterFlexC>
            <ContentFooterFlexCImg src="https://tcdtist-tix-clone.vercel.app/static/media/daThongBao-logo.cb85045e.png" alt="" />
          </ContentFooterFlexC>
        </ContentFooterFlex>
      </Container>
    </BackgroundFooterBody>
  );
}
