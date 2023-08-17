import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import tDates from "../../public/tourdates.png";
import chanzPP from "../../public/chanzLogo.png";

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="flex flex-col items-center justify-center py-24 text-black">
        <Image alt="logo" src={chanzPP} style={{ width: "40%", marginTop: "4rem", marginBottom: "3rem" }} />
        <h1 className="text-center pb-3 font-bold">Local Tour Dates</h1>

        <h3>Golden Moon Casino - July 10</h3>
        <h3>Sand Field Juke Box - Aug 2nd</h3>
        <h3>Little Chicago Theatre - Aug 15th</h3>
        <h3>Jackson Park - Sept 10th</h3>
      </div>

      <div style={{ marginTop: "4em" }}>
        <Image src={tDates} alt="tour dates image" />
      </div>
    </div>
  );
  }