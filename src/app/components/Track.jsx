import React, { useState, useEffect } from "react";
import { BsPlay, BsPause } from "react-icons/bs";
import { Howl } from "howler";

export default function Track({
  song,
  isFirstTrack,
  setSelectHowl,
  selectHowl,
  playing,
  setPlaying,
}) {
  const [howl, setHowl] = useState(null);
  // const [playing, setPlaying] = useState(false);

  // use effect to play the song
  useEffect(() => {
    // create a new howl with the provided song
    const howlAudio = new Howl({
      src: [song.src],
      autoplay: false,
    });

    // set howl to state
    setHowl(howlAudio);

    // if this is the first track, set it as the selected howl
    if (isFirstTrack) {
      setSelectHowl(howlAudio);
    }
  }, [song]);

  // toggle play/pause when the selected howl changes
  const togglePlay = () => {
    // if the selected howl is the same as this howl
    if (selectHowl === howl) {
      if (playing) {
        selectHowl.pause();
        setPlaying(false);
      } else {
        selectHowl.play();
        setPlaying(true);
      }
    } else {
      // if the selected howl is different, pause the current howl and play the new one
      if (selectHowl && selectHowl.playing()) {
        selectHowl.pause();
        setPlaying(false);
      }
      setSelectHowl(howl);
      howl.play();
      setPlaying(true);
    }
  };

  // track UI
  return (
    <>
      <div
        id="song"
        className="grid grid-cols-5 bg-slate-800 transition-colors hover:bg-slate-300  border-t-[1px] border-slate-400 text-slate-200"
        onClick={togglePlay}
      >
        {selectHowl === howl && playing ? <BsPause /> : <BsPlay />}
        <img className="w-20 h-20" src={song.thumbnail} alt="thumbnail" />
        <p id="Name">{song.name}</p>
        <p id="timeWatched">{song.Watched}</p>
        <span id="times">{song.time}</span>
      </div>
    </>
  );
}
