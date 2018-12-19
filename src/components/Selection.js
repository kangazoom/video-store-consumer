import React from 'react';


const Selection = (props) => {
  return (
    <div>
      Movie:
      {props.selectedMovie}
      Customer:
      {props.selectedCustomer}
    </div>
  )
}

export default Selection;
