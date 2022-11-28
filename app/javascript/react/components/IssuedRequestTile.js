import React from 'react';

const IssuedRequestTile = (props) => {
  
  return (
    <div>
      <p>Tool: {props.tool_id}</p>
      <p>Owner: {props.owner_id}</p>
    </div>
  )
}

export default IssuedRequestTile