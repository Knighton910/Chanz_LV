import React from "react";
import Navbar from "./navbar";
import tDates from "../assets/tourdates.png";
import chanzPP from "../assets/chanzLogo.png";

function Tourdates() {
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "15%" }}>
        <img src={chanzPP} style={{ marginTop: "5rem", height: "43vmin" }} />
        <h1>Local Tour Dates</h1>

        <h3>Golden Moon Casino - July 10</h3>
        <h3>Sand Field Juke Box - Aug 2nd</h3>
        <h3>Little Chicago Theatre - Aug 15th</h3>
        <h3>Jackson Park - Sept 10th</h3>
      </div>

      <div style={{ marginTop: "4em" }}>
        <img src={tDates} alt="tour dates image" />
      </div>
    </div>
  );
}

export default Tourdates;
