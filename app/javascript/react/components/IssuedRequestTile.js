import React from 'react';

const IssuedRequestTile = (props) => {
  
  return (
    <div className='callout'>
      <p>tuulbox product: {props.tool_name} </p>
      <p>{props.tool_product}</p>
      <p>Owner: {props.tool_owner_first_name} {props.tool_owner_last_name}</p>  
    </div>
  )
}

export default IssuedRequestTile