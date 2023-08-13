"use client"
import React, { useState, useRef } from "react";
import { tracks } from "../data/tracks"
// import Image from 'next/image'

import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const MusicSection = () => {
   // states
   const [trackIndex, setTrackIndex] = useState(0);
   const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
   const [timeProgress, setTimeProgress] = useState(0);
   const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-12 bg-white">
      <div className="text-center">
        <h1 className="text-5xl sm:text-8xl text-black font-bold tracking-tight mb-10">
          My latest hits
        </h1>
      </div>

      <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              tracks,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              handleNext,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
        </div>
    </div>
  );
};


export default MusicSection;