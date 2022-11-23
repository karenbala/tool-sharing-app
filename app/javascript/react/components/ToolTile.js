import React from "react";
import { Link } from "react-router-dom"

const ToolTile = (props) => {

// debugger
  const makeRequest = () => {
    const response = fetch(`/api/v1/tool/${props.id}/requests`, {
      method: "POST",
      header: {},
      body: JSON.stringify(props.id)
    })
    // once response comes back, add new request object to state in the UserShow component
  }
// debugger
  // not to implement initially - first get things working
  // might consider checking who the current_user is in React here, so that if no curernt user the Make Request button does not appear, and instead they see an oiptioin to sign up
  return (
    
    <div className="card-container">
      <Link to={`/tools/${props.id}`}>
        <div className="card-tool-user-img" >
            <img src={props.image_url} alt={`image of ${props.name}`} className="tool-user-image" />
        </div>
        <p>{props.name} : {props.product}</p>
        <p>{props.user}{props.borrower_id}</p>
      </Link>
      <div className='card-user-button'>
      {makeRequest}
        <button className="button" type="button"> <Link to={`/users/${props.id}`}>Borrow this Tool</Link>
        </button>
        </div>
    </div>
  )
}

export default ToolTile