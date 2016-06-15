import React from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

import MapImage from './MapImage';

const MapGridItem = (props) => {

  const mapId = props.mapOptions.id;
  const openMapOptions = props.openMapOptions;


  const frameAction = () => {
    props.closeMapOptions();
    props.frameAMap(mapId);
  };

  let imageTitle = props.forceFrame ? props.frameOptions.name : props.mapOptions.name;


  return(
    <div>
    <Card containerStyle={{marginBottom: 20, padding: '20px'}}>
      <CardMedia>
        <MapImage mapOptions={props.mapOptions} frameOptions={props.frameOptions} forceFrame={props.forceFrame} />
      </CardMedia>
      <CardTitle title={imageTitle} subtitle="Card subtitle" />
      <CardText>
        {props.mapOptions.notes}
      </CardText>
      <CardActions>
        <FlatButton label="Frame This Map" onTouchTap={frameAction} />
      </CardActions>
    </Card>
    <Divider />
    </div>
  );
};

export default MapGridItem;
