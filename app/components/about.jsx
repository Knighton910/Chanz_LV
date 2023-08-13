import React from "react";
import chanzP from "../assets/chanz.jpg";
import Navbar from "./navbar";
import "../App.css";
import advice from "../assets/advice.gif";

function About() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>About Me</h1>
        <img
          src={chanzP}
          alt="chanz image"
          style={{ width: "30%", marginBottom: "2em" }}
        />

        <p id="aboutmeOne">
          1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.Aldus PageMaker including versions of Lorem Ipsum type and
          scrambled it to make a type specimen book
        </p>
        <p id="aboutmeTwo">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <h1> Q: what is the best advice you gotten from anyone</h1>
        <h1 style={{ marginBottom: "2em" }}>
          A: My mom gave me the best advice
        </h1>
        <img src={advice} atl="advice" />
      </div>
    </div>
  );
}

export default About;
