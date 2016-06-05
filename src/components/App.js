import React from "react";
import Navigation from "./Navigation";
import Row from 'react-bootstrap/lib/Row';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.loadMapList();
  }

  render() {

    // Pass authProps to all child elementss
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       authProps: this.props.authProps,
       mapsFetching: this.props.mapsFetching,
       mapsErrorMessage: this.props.mapsErrorMessage,
       maps: this.props.maps,
       frames: this.props.frames
     })
    );

    return (
      <div>
        <Row>
          <Navigation authProps={this.props.authProps} loginUserAction={this.props.loginUserAction}/>
          {childrenWithProps}
        </Row>
      </div>
    );
  }
}

export default App;
