import React from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from "./Navigation";


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
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Navigation authProps={this.props.authProps} loginUserAction={this.props.loginUserAction}/>
          {childrenWithProps}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
