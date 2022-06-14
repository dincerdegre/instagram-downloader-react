import React from "react";
import PropTypes from "prop-types";
import classes from "./Main.module.css";
import Downloader from "../Downloader";

const Main = (props) => {
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

Main.propTypes = {};

export default Main;
