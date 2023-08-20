"use client";
import React from "react";
import Track from "./Track";
import { BsClock } from "react-icons/bs";
import { useState } from "react";

export default function TrackGrid(props) {
  // Khởi tạo state "song" với một mảng chứa thông tin các bài hát
  const [song, setSong] = React.useState([
    {
      id: 1,
      name: "Kataomoi",
      thumbnail: "/Kataomoi.jpg",
      Watched: "0",
      time: "3:28",
      src: "/songs/Kataomoi.mp3",
    },
    {
      id: 2,
      name: "Un Deux Trois",
      thumbnail: "/Honeymoon.jpg",
      Watched: "0",
      time: "4:16",
      src: "/songs/Un-Deux-Trois.mp3",
    },
    {
      id: 3,
      name: "Perfect",
      thumbnail: "/Perfect.jpg",
      Watched: "0",
      time: "4:24",
      src: "/songs/Perfect.mp3",
    },
  ]);

  return (
    <>
      <div
        id="songWapper"
        className=" grid grid-cols-5 bg-slate-800 p-4 text-slate-200"
      >
        {/* Tiêu đề cột */}
        <p></p>
        <em>{/* Thumbnail */}</em>
        <p>Name</p>
        <p>Lượt xem</p>
        <BsClock />
      </div>

      {/* Render danh sách các bài hát */}
      {song.map((song, index) => (
        <Track
          key={song.id}
          song={song}
          playing={props.playing}
          setPlaying={props.setPlaying}
          selectHowl={props.selectHowl}
          setSelectHowl={props.setSelectHowl}
          isFirstTrack={index === 0}
        />
      ))}
    </>
  );
}
