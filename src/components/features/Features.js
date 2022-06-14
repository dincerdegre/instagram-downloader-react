import React from "react";
import classes from "./Features.module.css";
import featureJSON from "../../data/features.json";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <div className="container">
      <h2 className={classes.featureMainTitle}>
        All Features of Instagram Downloader
      </h2>
      {featureJSON.features.map((feature, index) => {
        return (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            slug={feature.slug}
          />
        );
      })}
      
    </div>
  );
};

export default Features;
