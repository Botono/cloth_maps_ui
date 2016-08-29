import React, {PropTypes} from "react";

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


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
    return {};
  }

  render() {
    let mapListRows =
      this.props.maps.map((map) => {
        let return_array = [];
        let mapFramed = map.frame_id ? "Yes": "No";

        return_array.push(
          <TableRow>
            <TableRowColumn>{map.name}</TableRowColumn>
            <TableRowColumn>{map.width}</TableRowColumn>
            <TableRowColumn>{map.height}</TableRowColumn>
            <TableRowColumn>{mapFramed}</TableRowColumn>
          </TableRow>
          );

        return (return_array);
    });

    return (
      <div style={{padding: '65px 20px 0 20px' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Width</TableHeaderColumn>
              <TableHeaderColumn>Height</TableHeaderColumn>
              <TableHeaderColumn>Framed</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true}>
            {mapListRows}
          </TableBody>
        </Table>
      </div>
    );

  }
}

Maps.propTypes = {
  openMapOptions: PropTypes.func.isRequired,
  closeMapOptions: PropTypes.func.isRequired,
  frames: PropTypes.array.isRequired,
  maps: PropTypes.array.isRequired,
  mapOptionsOpened: PropTypes.number
};

export default Maps;
