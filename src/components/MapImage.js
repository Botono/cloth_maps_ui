import React from "react";

import {IMG_PATH_MAPS} from '../constants/constants';


const MapImage = (props) => {

  const maxLongestDimension = 400;

  const mapOptions = props.mapOptions;
  const frameOptions = props.frameOptions;

  let frameDimensions = {};
  let mapDimensions = {};
  let finalImage;
  let matteTag;
  let imageTag;
  let frameTag;
  let mapRelative;

  const getMapImage = () => {
    // 1.43 == wider than tall
    // 0.69 == taller than wide
    return IMG_PATH_MAPS.concat(props.mapOptions.image ? props.mapOptions.image : "default.svg");
  };

  const getShorterDimension = (longer, shorter) => {

    let ratio = shorter / longer; // 0.723684211
    let shorterDimension = Math.round(maxLongestDimension*ratio);

    return shorterDimension;
  };

  const getMapRelativePositionPercentage = () => {
    let percent = Math.round((mapOptions.width/frameOptions.overall_width)*100);

    return (100-percent)/2;
  };

  const getMapRelativeSizes = () => {
    let widthPercent = Math.round((mapOptions.width/frameOptions.overall_width)*100);
    let heightPercent = Math.round((mapOptions.height/frameOptions.overall_height)*100);

    return {
      width: widthPercent,
      height: heightPercent
    };

  };


  if (mapOptions.frame_id) {

    if (frameOptions.overall_width > frameOptions.overall_height) {
      frameDimensions.width = maxLongestDimension;
      frameDimensions.height = getShorterDimension(frameOptions.overall_width, frameOptions.overall_height);
    } else if (frameOptions.overall_width < frameOptions.overall_height) {
      frameDimensions.height = maxLongestDimension;
      frameDimensions.width = getShorterDimension(frameOptions.overall_height, frameOptions.overall_width);
    } else {
      frameDimensions.width = maxLongestDimension;
      frameDimensions.height = maxLongestDimension;
    }
    frameDimensions.frameStrokeWidth = Math.round(((frameOptions.wood_width*2)/frameOptions.overall_width)*100) + "%";

    if (mapOptions.matte) {
      frameDimensions.matteStrokeWidth = Math.round(((frameOptions.matte_width*2)/frameOptions.overall_width)*100) + "%";
      matteTag = <rect x="0" y="0" height="100%" width="100%" stroke="ivory" strokeWidth={frameDimensions.matteStrokeWidth} fill="none" />;
    }

    mapRelative = getMapRelativeSizes();
    frameDimensions.mapWidth = mapRelative.width + "%";
    frameDimensions.mapHeight = mapRelative.height + "%";
    frameDimensions.mapXY = getMapRelativePositionPercentage(mapOptions.width, frameOptions.overall_width) + "%";

    frameTag = <rect x="0" y="0" height="100%" width="100%" stroke="black" strokeWidth={frameDimensions.frameStrokeWidth} fill="none" />;
    imageTag = <image x={frameDimensions.mapXY} y={frameDimensions.mapXY} height={frameDimensions.mapHeight} width={frameDimensions.mapWidth} xlinkHref={getMapImage()}></image>;

    finalImage = (<svg width={frameDimensions.width} height={frameDimensions.height} xmlns="http://www.w3.org/2000/svg" className="center-block">
      {imageTag}
      {matteTag}
      {frameTag}
    </svg>);

  } else {
    if (mapOptions.width > mapOptions.height) {
      mapDimensions.width = maxLongestDimension;
      mapDimensions.height = getShorterDimension(mapOptions.width, mapOptions.height);
    } else if (mapOptions.width < mapOptions.height) {
      mapDimensions.height = maxLongestDimension;
      mapDimensions.width = getShorterDimension(mapOptions.height, mapOptions.width);
    } else {
      mapDimensions.width = maxLongestDimension;
      mapDimensions.height = maxLongestDimension;
    }
    finalImage = <img src={getMapImage()} width={mapDimensions.width} height={mapDimensions.height} className="center-block" />;
  }

  return(
    finalImage
  );

};

export default MapImage;
