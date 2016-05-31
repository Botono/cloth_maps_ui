import React from "react";
import Navigation from "./Navigation";
import Row from 'react-bootstrap/lib/Row';

class App extends React.Component {
  render() {

    // Pass authProps to all child elementss
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       authProps: this.props.authProps,
       mapsFetching: this.props.mapsFetching,
       mapsErrorMessage: this.props.mapsErrorMessage,
       maps: this.props.maps
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
