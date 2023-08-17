import { useState, useEffect, useRef, useCallback } from "react";

// icons
import {
  IoPlayBackOutline,
  IoPlayForwardOutline,
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoPlayCircleOutline,
  IoPauseCircleOutline,
} from "react-icons/io5";

import { LuVolume1, LuVolume2, LuVolumeX } from "react-icons/lu";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button onClick={handlePrevious}>
          <IoPlaySkipBackOutline size="35" color="white" />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackOutline size="35" color="white" />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <IoPauseCircleOutline size="75" color="white" />
          ) : (
            <IoPlayCircleOutline size="75" color="white" />
          )}
        </button>
        <button onClick={skipForward}>
          <IoPlayForwardOutline size="35" color="white" />
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardOutline size="35" color="white" />
        </button>
      </div>
      <div className="volume">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <LuVolumeX size="35" color="white" className="mr-2" />
          ) : volume < 40 ? (
            <LuVolume1 size="35" color="white" className="mr-2" />
          ) : (
            <LuVolume2 size="35" color="white" className="mr-2" />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Controls;
