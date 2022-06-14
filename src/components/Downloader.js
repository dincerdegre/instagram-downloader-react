import React from "react";
import PropTypes from "prop-types";
import classes from "./Downloader.module.css";

const Downloader = (props) => {
  return (
    <div className={classes.downloader}>
      <form>
        <div className={classes.formGroup}>
          <input type="text" placeholder="Paste URL" />
          <div className={classes.btnGroup}>
          <span className={classes.pasteBtn}><span>Paste</span></span>
            <button className={classes.button} type="submit">
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Downloader.propTypes = {};

export default Downloader;
