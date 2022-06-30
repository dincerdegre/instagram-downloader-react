import React from "react";
import classes from "./Main.module.css";
import Downloader from "../Downloader";

const Main = ({onResult,onLoading}) => {
  return (
    <main className="main">
      <div className="container">
        <div className={classes.topTitle}>
        <h1>Instagram Downloader</h1>
        <p>Download videos/reels/stories/photos from Instagram</p>
        </div>
        <Downloader onResult={onResult} onLoading={onLoading} />
      </div>
    </main>
  );
};

export default Main;
