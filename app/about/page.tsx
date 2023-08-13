import React from "react";
import Image from "next/image";
import chanzP from "../data/chanz.jpg";
import famPic from "../data/family.png"
import Navbar from "../components/navbar";
// import advice from "../assets/advice.gif";
import styles from './about.module.css'

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center py-24 bg-[#ecf0f3]">
        <h1 className="mt-10 text-3xl">About Me</h1>
        <Image
          src={chanzP}
          alt="chanz image"
          style={{ width: "50%", marginBottom: "2em", marginTop: "2em" }}
        />

        <p className='text-center text-lg px-6'>
          Born to Rita Brooks whom was a well respected School Teacher
          I had little margin for error, but not for one second think that
          I was not a cool kid, i totally was (Toot my own horn) and somehow
          find my way to sports, it grew on me quickly, I always loved Basketball
          and Football but Baseball is where I became a star. I help take the
          team to the championship round a few times and graced the local news papers
          with my photo. And from there I also had other passions in Cosmetology being
          a barber and was successful at it. And all the while I was always Rapping
          with friends at first, sitting on my parents porch and from there it grew
          to where I connected with a local artist and we form a group and made it
          big. It took me to California to make a Soundtrack for a Big Hollywood Movie
        </p>

        <Image 
          src={famPic}
          alt="me and my cousin"
          style={{width: "70%", marginTop: "4rem", marginBottom: "4rem"}}
        />

        <p className='text-center text-lg mt-5 px-6'>
          Lorem Ipsum has been the standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <h1 className='text-lg text-center mt-5'> Q: what is the best advice you gotten from anyone</h1>
        <h1 className='text-lg text-center'>
          A: My mom gave me the best advice
        </h1>
        {/* <img src={advice} atl="advice" /> */}
      </div>
    </div>
  );
  }