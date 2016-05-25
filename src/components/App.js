import React from "react";
import Navigation from "./Navigation";
import Row from 'react-bootstrap/lib/Row';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Navigation />
          {this.props.children}
        </Row>
      </div>
    );
  }
}

export default App;
