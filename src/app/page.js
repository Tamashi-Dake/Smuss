"use client";
import Head from "next/head";
import Header from "./components/Header";
import TrackGrid from "./components/TrackGrid";
import { useState,useEffect } from "react";
require('dotenv').config();

export default function Home() {

  const [selectHowl, setSelectHowl] = useState(null);
  // Khai báo state selectHowl và setSelectHowl với giá trị ban đầu là null
  const [playing, setPlaying] = useState(false);
  // Khai báo state playing và setPlaying với giá trị ban đầu là false

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-qLk6+flbM6mW4WpPz0DGB7pQx9V9vH8JQm8Xb7GtF9ZUe1wN6QJzZJp9C6d8i/0z5aDZt7y8Wapn6Fv8JW5OJw=="
          crossorigin="anonymous"
        />
      </Head>

      <Header
        playing={playing}
        setPlaying={setPlaying}
        selectHowl={selectHowl}
      />
      {/* Render component Header và truyền props playing, setPlaying, selectHowl vào component */}

      <TrackGrid
        playing={playing}
        setPlaying={setPlaying}
        selectHowl={selectHowl}
        setSelectHowl={setSelectHowl}
      />
      {/* Render component TrackGrid và truyền props playing, setPlaying, selectHowl, setSelectHowl vào component */}
    </>
  );
}
