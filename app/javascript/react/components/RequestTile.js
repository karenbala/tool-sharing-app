import React from 'react';

const RequestTile = (props) => {
// debugger
  return (
    <div>
      <p>{`Tool:${props.tool}`}</p>
      <p>{`Owner:${props.owner}`}</p>
      <p>{`Borrower:${props.borrower}`}</p>
    </div>
  )
}

export default RequestTile