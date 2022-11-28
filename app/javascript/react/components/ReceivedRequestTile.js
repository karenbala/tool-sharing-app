import React from 'react';

const ReceivedRequestTile = (props) => {
  return(
    <div className='callout'>
      Tool: {props.tool_id}
      <br/>
      Borrower: {props.borrower_id}
    </div>
  )
}

export default ReceivedRequestTile