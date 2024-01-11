import React from "react";
import { BeatLoader } from "react-spinners";
export default function IsLoading() {
  return (
    <div style={{ textAlign: "center" }}>
      <BeatLoader margin={10} size={40} color="#36d7b7" />
    </div>
  );
}
