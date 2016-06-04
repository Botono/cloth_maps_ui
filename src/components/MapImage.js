import React from "react";

import {IMG_PATH_MAPS} from '../constants/constants';


const MapImage = (props) => {
  console.log(props.mapOptions.name);
  const maxLongestDimension = 400;
  const map_image = IMG_PATH_MAPS.concat(props.mapOptions.image ? props.mapOptions.image : 'default.svg');

  let frameDimensions = {};
  let mapDimensions = {};
  let finalImage;
  let matteTag;
  let imageTag;
  let frameTag;
  let mapRelative;

  const getShorterDimensionString = (longer, shorter) => {

    let ratio = shorter / longer; // 0.723684211
    let shorterDimension = Math.round(maxLongestDimension*ratio);
    console.log(shorterDimension);
    return shorterDimension;
  };

  const getMapRelativePositionPercentage = () => {
    let percent = Math.round((props.mapOptions.width/props.frameOptions.overall_width)*100);

    return (100-percent)/2;
  };

  const getMapRelativeSizes = () => {
    let widthPercent = Math.round((props.mapOptions.width/props.frameOptions.overall_width)*100);
    let heightPercent = Math.round((props.mapOptions.height/props.frameOptions.overall_height)*100);

    return {
      width: widthPercent,
      height: heightPercent
    }

  };


  if (props.mapOptions.frame_id) {

    if (props.frameOptions.overall_width > props.frameOptions.overall_height) {
      frameDimensions.width = maxLongestDimension;
      frameDimensions.height = getShorterDimensionString(props.frameOptions.overall_width, props.frameOptions.overall_height);
    } else if (props.frameOptions.overall_width < props.frameOptions.overall_height) {
      frameDimensions.height = maxLongestDimension;
      frameDimensions.width = getShorterDimensionString(props.frameOptions.overall_height, props.frameOptions.overall_width);
    } else {
      frameDimensions.width = maxLongestDimension;
      frameDimensions.height = maxLongestDimension;
    }
    frameDimensions.frameStrokeWidth = Math.round(((props.frameOptions.wood_width*2)/props.frameOptions.overall_width)*100);

    if (props.mapOptions.matte) {
      frameDimensions.matteStrokeWidth = Math.round(((props.frameOptions.matte_width*2)/props.frameOptions.overall_width)*100);
      matteTag = <rect x="0" y="0" height="100%" width="100%" stroke="ivory" strokeWidth={frameDimensions.matteStrokeWidth+"%"} fill="none" />
    }

    mapRelative = getMapRelativeSizes();
    frameDimensions.mapWidth = mapRelative.width + "%";
    frameDimensions.mapHeight = mapRelative.height + "%";
    frameDimensions.mapXY = getMapRelativePositionPercentage(props.mapOptions.width, props.frameOptions.overall_width) + "%";

    frameTag = <rect x="0" y="0" height="100%" width="100%" stroke="black" strokeWidth={frameDimensions.frameStrokeWidth + "%"} fill="none" />;
    imageTag = <image x={frameDimensions.mapXY} y={frameDimensions.mapXY} height={frameDimensions.mapHeight} width={frameDimensions.mapWidth} xlinkHref={map_image}></image>;

    finalImage = <svg width={frameDimensions.width} height={frameDimensions.height} xmlns="http://www.w3.org/2000/svg">
      {imageTag}
      {matteTag}
      {frameTag}
    </svg>;

  } else {
    if (props.mapOptions.width > props.mapOptions.height) {
      mapDimensions.width = maxLongestDimension;
      mapDimensions.height = getShorterDimensionString(props.mapOptions.width, props.mapOptions.height);
    } else if (props.mapOptions.width < props.mapOptions.height) {
      mapDimensions.width = maxLongestDimension;
      mapDimensions.height = getShorterDimensionString(props.mapOptions.height, props.mapOptions.width);
    } else {
      mapDimensions.width = maxLongestDimension;
      mapDimensions.height = maxLongestDimension;
    }
    finalImage = <img src={map_image} width={mapDimensions.width} height={mapDimensions.height} />;
  }

  return(
    finalImage
  );

};

export default MapImage;
