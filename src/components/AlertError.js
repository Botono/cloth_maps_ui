import React from "react";

import Alert from 'react-bootstrap/lib/Alert';


class AlertError extends React.Component {

  render() {
    if (this.props.message) {
      return (
        <Alert bsStyle="danger">
          <strong> Error: < /strong> {this.props.message}
        </Alert>
      );
    } else {
      return null;
    }
  }
}

export default AlertError;
