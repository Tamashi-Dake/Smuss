import React from "react";
import { BsPlay, BsSpotify, BsPause } from "react-icons/bs";
import { Howler } from "howler";
export default function Header({ playing, setPlaying, selectHowl }) {
  // Xử lý sự kiện thay đổi âm lượng
  const handleVolumnChange = (e) => {
    Howler.volume(e.target.value / 100); // Thay đổi âm lượng của Howler dựa trên giá trị của trường input
  };

  // Xử lý sự kiện bật/tắt phát nhạc
  const togglePlay = () => {
    if (!selectHowl) {
      return; // Nếu không có selectHowl được chọn, thì thôi
    } else if (playing) {
      selectHowl.pause();
      setPlaying(false);
    } else {
      setPlaying(true);
      selectHowl.play();
    }
  };
  return (
    <>
      <header className="bg-slate-600 flex items-center justify-between p-4">
        <div className="flex items-center">
          <BsSpotify size={30} />
          <h1 className=" text-lime-50  font-bold text-2xl">Smuss</h1>
        </div>
        <div className="flex items-center">
          <input
            type="range"
            max="100"
            defaultValue="100"
            onChange={handleVolumnChange}
            className="cursor-pointer"
          />
          <button
            onClick={togglePlay}
            className="text-white bg-lime-500 rounded-full ml-4 p-2"
          >
            {playing ? <BsPause /> : <BsPlay />}
          </button>
        </div>
      </header>
    </>
  );
}
