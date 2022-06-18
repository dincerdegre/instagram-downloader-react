/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import { urlChecker } from "../utils/downloadHelper";
import PropTypes from 'prop-types'
import classes from "./Downloader.module.css";
axios.defaults.headers.common["Authorization"] = `Bearer d25adb96-7fd4-48d8-b5eb-072037620f70`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const Downloader = ({onResult}) => {
  const [isHasURLValue, setHasURLValue] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [urlValue, setURLValue] = useState("");

  const urlChangeHandler = (event) => {
    setHasError(false);
    setURLValue(event.target.value);
    if (event.target.value.length > 0) {
      setHasURLValue(true);
    } else {
      setHasURLValue(false);
    }
  };

  const clearInputHandler = () => {
    setURLValue("");
    setHasURLValue(false);
    setHasError(false);
  };

  const pasteInputHandler = async () => {
    setHasError(false);
    await navigator.clipboard.readText().then((text) => {
      setURLValue(text);
      if (text.length > 0) {
        setHasURLValue(true);
      } else {
        setHasURLValue(false);
      }
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    onResult(null);
    const url = urlChecker(urlValue);
    if (url) {
      setHasError(false);
      try {
        const data = {
          url,
        }
        const response = await axios.post("https://social-downloader-degre.herokuapp.com/instagram", data);
        onResult(response.data);
      } catch (error) {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };
  return (
    <div className={classes.downloader}>
      {hasError && (
        <div className={classes.alertBox}>Error: URL is Not Supported or Private Video</div>
      )}
      <form onSubmit={submitHandler}>
        <div className={classes.formGroup}>
          <input
            type="text"
            id="url"
            className={hasError ? classes.inputError : ""}
            placeholder="Paste URL"
            value={urlValue}
            onChange={urlChangeHandler}
          />
          <div className={classes.btnGroup}>
            {!isHasURLValue && (
              <span onClick={pasteInputHandler} className={classes.miniBtn}>
                <span>Paste</span>
              </span>
            )}
            {isHasURLValue && (
              <span onClick={clearInputHandler} className={classes.miniBtn}>
                <span>Clear</span>
              </span>
            )}
            <button className={classes.button} type="submit">
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Downloader.propTypes = {
  onResult: PropTypes.func.isRequired
}

export default Downloader;
