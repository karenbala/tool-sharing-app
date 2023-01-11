import React from 'react';

const IssuedRequestTile = (props) => {
  
  return (
    <div className='about-people'>
      <div className="about-people-profile" >
        <img className="profile-image" src="https://i.imgur.com/UPVxPjb.jpg" alt="Kishore Kumar"></img>
      </div>

      <div className='about-people-borrower-lender'>
        <p className="borrower-lender-name">{props.tool_name}</p>
        <p className="owner-tool"><strong>{props.tool_product}</strong> is owned by {props.tool_owner_first_name} {props.tool_owner_last_name}</p>  

      </div>

    </div>
  )
}

export default IssuedRequestTile