import React from "react";
import PropTypes from "prop-types";
import classes from "./FeatureItem.module.css";
import { ReactComponent as Video } from "../../assets/icons/video-svgrepo-com.svg";
import { ReactComponent as Video2 } from "../../assets/icons/video-2-svgrepo-com.svg";
import { ReactComponent as Picture } from "../../assets/icons/picture-svgrepo-com.svg";
import { ReactComponent as Story } from "../../assets/icons/stories-svgrepo-com.svg";

const FeatureItem = ({ title, description, slug}) => {
  let reverseRow;
  if (slug === "reel") { reverseRow = classes.rowReverse; } else if (slug === "story") { reverseRow = classes.rowReverse; }
  return (
    <div className={`${classes.featureItem} ${reverseRow}`}>
      <div className={classes.icons}>
        {slug === "video" ? (
          <Video />
        ) : slug === "reel" ? (
          <Video2 />
        ) : slug === "photo" ? (
          <Picture />
        ) : slug === "story" ? (
          <Story />
        ) : slug === "igtv" ? (
          <Video2 />
        ) : null}
      </div>
      <div className={classes.info}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
