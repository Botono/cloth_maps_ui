import React from "react";

import MapGridItem from './MapGridItem';


class Maps extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.getMapFrame = this.getMapFrame.bind(this);
  }

  open() {
    this.props.openAddMap();
  }

  close() {
    this.props.closeAddMap();
  }

  getMapFrame(id) {
    let frame_id = id || 0;
    for (let i=0;this.props.frames[i];i++) {
      if (this.props.frames[i].id === frame_id) {
        return this.props.frames[i];
      }
    }
    return {}
  }

  render() {
    let mapGridItems =
      this.props.maps.map((map) => {
        let return_array = [];
        let mapFrame = this.getMapFrame(map.frame_id);

        return_array.push(
          <MapGridItem
            mapOptions={map}
            frameOptions={mapFrame}
            openMapOptions={this.props.openMapOptions}
            closeMapOptions={this.props.closeMapOptions}
            mapOptionsOpened={this.props.mapOptionsOpened}
            frameAMap={this.props.frameAMap}
          />);

        return (return_array);
    });

    return (
      <div style={{padding: '65px 20px 0 20px' }}>
        {mapGridItems}
      </div>
    );

  }
}

export default Maps;
