import React from 'react';

const ReceivedRequestTile = (props) => {
  return(
    <div className='callout'>
      <p>tuulbox product: {props.received_tool_name} </p>
      <p>{props.received_tool_product}</p>
      <p>Owner: {props.received_tool_owner_first_name} {props.received_tool_owner_last_name}</p> 
    </div>
  )
}

export default ReceivedRequestTile
