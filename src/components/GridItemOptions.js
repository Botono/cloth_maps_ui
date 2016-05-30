import React from "react";

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

/*
  props definitions:

  [
    {
      optionText: 'Option 1',
      optionAction: function()
      },
    {}
  ]


*/
const GridItemOptions = (props) => {

  const listItems = props.optionItems.map((item, i) => {
    return (<ListGroupItem onClick={item.optionAction} key={i}>
      {item.optionText}
    </ListGroupItem>);
  });

  return(
    <ListGroup>
      {listItems}
    </ListGroup>
  )

}

export default GridItemOptions;
