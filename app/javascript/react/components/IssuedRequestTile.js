import React from 'react';

const IssuedRequestTile = (props) => {
  
  return (
    <div className='callout'>
      Tool: {props.tool_id}
      <br/>
      Owner: {props.owner_id}
    </div>
  )
}

export default IssuedRequestTile