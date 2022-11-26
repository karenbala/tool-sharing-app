import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"

const ToolTile = (props) => {
  const [redirect, setRedirect] = useState(false)

  const makeRequest = async () => {
    const response = await fetch(`/api/v1/tools/${props.id}/requests`, {
      method: "POST",
      // credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(props.id)
    })
// debugger
    if (response.ok){
      setRedirect(true)
    } else {
      console.log("something went wrong")
    }

  if (redirect === true){
    <Redirect to={`/users/${props.current_user.id}`}></Redirect>
    }
  }
// debugger
  return (
    
    <div className="card-container" >
      <Link to={`/tools/${props.id}`}>
        <div className="card-tool-user-img" >
            <img src={props.image_url} alt={`image of ${props.name}`} className="tool-user-image" />
        </div>
        <p>{props.name} : {props.product}</p>
        <p>{props.first_name} {props.last_name}</p>
      </Link>

      <div className='card-user-button'>
          <button className="button" type="button" onClick={makeRequest}> 
            Borrow Tool
          </button>
      </div>
    </div>
  )
}

export default ToolTile