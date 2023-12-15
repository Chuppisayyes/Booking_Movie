import styled from "@emotion/styled";

export const Button = styled.button``;
export const BgFooter = styled.div`
  background-image: url(https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg);
  height: 607px;
  background-size: contain;

  padding: 120px 0px 80px 0px;
`;
export const Container = styled.div`
  margin: auto;
  width: 75%;
  padding-bottom: 20px;
`;
export const ContentFooter = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 1057px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
  }
  @media (max-width: 586px) {
    display: block;
  }
`;
export const TitleFooter = styled.div`
  padding-top: 50px;
`;
export const TitleH2 = styled.h2`
  color: #fff;
  line-height: 2;
  font-weight: 700;
`;
export const PhoneIMG = styled.img`
  padding: 0% 28%;
  display: block;
  width: 50%;
  @media (max-width: 586px) {
    display: none;
  }
`;
export const TitleFooterP = styled.p`
  color: #fff;
  margin-bottom: 50px;
  margin-top: 30px;
`;
export const ButtonFooterA = styled.a`
  padding: 20px 25px;
  background-color: #fb4226;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  @media (max-width: 738px) {
    padding: 10px 15px;
    background-color: #fb4226;
    border: none;
    text-decoration: none;
    border-radius: 5px;
  }
`;
export const ButtonSpanTitle = styled.span`
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  @media (max-width: 738px) {
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
  }
`;
export const TitleFooterApp = styled.div`
  display: flex;
  margin-top: 30px;
  color: #fff;
  font-weight: 500;
  @media (max-width: 1057px) {
    display: flex;
    justify-content: center;
  }
`;
export const DecorationLink = styled.a`
  color: #fff;
`;
export const BannerPhone = styled.img`
  position: absolute;
  width: 30%;
  top: 0px;
  margin-left: 143px;
  margin-top: 10px;
  border-radius: 20px;
  @media (max-width: 1057px) {
    position: absolute;
    width: 40%;
    top: 0px;
    margin-left: 114px;
    left: 0;
    z-index: 10;
    margin-top: 10px;
    border-radius: 20px;
  }
  @media (max-width: 586px) {
    display: none;
  }
`;
export const PositionBanner = styled.div`
  position: relative;
`;
export const BackgroundFooterBody = styled.div`
  background-color: #212121;
  width: 100%;
`;
export const GridFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 100px;
  @media (max-width: 976px) {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
  }
`;
export const GridItemOne = styled.div`
  margin-top: 30px;
`;
export const GridItemTwo = styled.div`
  margin-top: 30px;
`;
export const GridItemThree = styled.div`
  margin-top: 30px;
`;
export const GridItemFour = styled.div`
  margin-top: 30px;
`;
export const TitleFooterBody = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
export const ContentText = styled.div`
  display: flex;
`;
export const ContentTextP = styled.p`
  color: #9b9b9b;
  font-size: 12px;
`;

export const LogoFooter = styled.img`
  width: 30px;
`;
export const UlFooter = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  padding-left: 0;
  row-gap: 20px;
  @media (max-width: 431px) {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    padding-left: 0;
    gap: 20px;
  }
`;
export const LiFooter = styled.li`
  list-style: none;
`;
export const IconFooterA = styled.a`
  color: #949494;
`;
export const ContentTextH6 = styled.h6`
  font-size: 12px;
  color: #fff;
`;
export const ContentFooterFlex = styled.div`
  display: flex;
`;
export const ContentFooterFlexA = styled.div`
  width: 30%;
`;
export const ContentFooterFlexB = styled.div`
  width: 120%;
`;
export const ContentFooterFlexC = styled.div`
  width: 30%;
`;
export const ContentFooterFlexCImg = styled.img`
  width: 80%;
`;
export const ContentFooterFlexAImg = styled.img`
  width: 70%;
`;
