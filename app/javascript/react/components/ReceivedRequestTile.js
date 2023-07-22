import React from 'react';

const ReceivedRequestTile = (props) => {
  return(
    <div className='about-people' >
      <div className="about-people-profile" >
        <img className="profile-image" src="https://i.imgur.com/UPVxPjb.jpg" alt="Kishore Kumar"></img>
      </div>

      <div className="about-people-borrower-lender">
        <p className="borrower-lender-name">Request by {props.received_tool_owner_first_name} {props.received_tool_owner_last_name}</p> 
        <p className="owner-tool"><strong>{props.received_tool_product}</strong> is being requested by {props.received_tool_owner_first_name} {props.received_tool_owner_last_name} </p>
      

      <div className="small-12 medium-6 columns approve-request">
        <div className="approve-request-action">
            <button className="button primary small">
              <i class="fa fa-check" aria-hidden="true"></i>
              Approve Request
            </button>
            <button className="button secondary small">
              <i className="fa fa-times" aria-hidden="true"></i>
              Deny Request
            </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ReceivedRequestTile
