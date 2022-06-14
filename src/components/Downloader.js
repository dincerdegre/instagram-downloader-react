import React, { useState } from "react";
import { urlChecker } from "../utils/downloadHelper";
import classes from "./Downloader.module.css";

const Downloader = () => {
   const [isHasURLValue,setHasURLValue] = useState(false);
   const [hasError,setHasError] = useState(false);
   const [urlValue,setURLValue] = useState("");

   const urlChangeHandler = (event) => {
        setURLValue(event.target.value);
        if(event.target.value.length > 0){
             setHasURLValue(true);
        }else{
             setHasURLValue(false);
        }
   };

   const clearInputHandler = () => {
        setURLValue("");
        setHasURLValue(false);
    }

    const pasteInputHandler = async () => {
        await navigator.clipboard.readText().then(text => {
            setURLValue(text);
            if(text.length > 0){
                 setHasURLValue(true);
            }else{
                 setHasURLValue(false);
            }
        }
        );
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        // Photo
        // https://www.instagram.com/p/CeVu-OFttJQ/?utm_source=ig_web_copy_link
        // Video
        // https://www.instagram.com/p/CeTscJ9MpEM/?utm_source=ig_web_copy_link
        // Reel
        // https://www.instagram.com/reel/CeTzQo3jBN7/?utm_source=ig_web_copy_link
        const url = urlChecker(urlValue);
        if (url) {
           setHasError(false);
        } else {
            setHasError(true);
        }

    }
  return (
    <div className={classes.downloader}>
        {hasError && <div className={classes.alertBox}>Error: URL is Not Supported</div>}
      <form onSubmit={submitHandler}>
        <div className={classes.formGroup}>
          <input type="text" id="url" placeholder="Paste URL" value={urlValue} onChange={urlChangeHandler} />
          <div className={classes.btnGroup}>
          {!isHasURLValue && <span onClick={pasteInputHandler} className={classes.miniBtn}><span>Paste</span></span>}
          {isHasURLValue && <span onClick={clearInputHandler} className={classes.miniBtn}><span>Clear</span></span>}
            <button className={classes.button} type="submit">
              Download
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default Downloader;
