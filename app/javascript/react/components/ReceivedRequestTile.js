import React from 'react';

const ReceivedRequestTile = (props) => {
  return(
    <div className=' about-people' >
      <div className="about-people-profile" >
        <img className="profile-image" src="https://i.imgur.com/UPVxPjb.jpg" alt="Kishore Kumar"></img>
      </div>
      <div className="about-people-borrower">
        <p className="borrower-name">Request by {props.received_tool_owner_first_name} {props.received_tool_owner_last_name}</p> 
        <p class="borrower-location">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          Mumbai, India
        </p>
        <p class="owner-tool"><strong>{props.received_tool_product}</strong> is being requested by {props.received_tool_owner_first_name} </p>
        
      </div>
    </div>
  )
}

export default ReceivedRequestTile
