import Image from "next/image";
import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        <div className="audio-image shadow-lg">
          {currentTrack.thumbnail ? (
            <Image src={currentTrack.thumbnail} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div>
          <p className="font-sans font-bold mb-4 text-3xl text-indigo-200 center">
            {currentTrack.author}
          </p>
          <p className="text-4xl font-sans text-indigo-50 mb-3 center">
            {currentTrack.title}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
