import React from "react";
import classes from "./Main.module.css";
import Downloader from "../Downloader";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className={classes.topTitle}>
        <h1>Instagram Downloader</h1>
        <p>Download videos/reels/stories/photos from Instagram</p>
        </div>
        <Downloader />
      </div>
    </main>
  );
};

export default Main;
