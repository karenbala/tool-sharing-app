import React from 'react';

const IssuedRequestTile = (props) => {
  
  return (
    <div className='callout'>
      Tool: {props.tool_name}
      <br/>
      {props.tool_product}
      
      {/* Owner: {props.owner_id} */}
    </div>
  )
}

export default IssuedRequestTile