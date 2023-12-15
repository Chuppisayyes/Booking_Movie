import { useEffect, useState } from "react";
import { getBanners } from "../../Apis/movieApi";
import FooterTop from "./FooterTop";
import FooterBody from "./FooterBody";

export default function Footer() {
  return (
    <div>
      <FooterTop />
      <FooterBody />
    </div>
  );
}
