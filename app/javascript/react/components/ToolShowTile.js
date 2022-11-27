import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom"


const ToolShowTile = (props) => {
  const tool = props.tool
  const [redirect, setRedirect] = useState(false)

  const makeRequest = async () => {
    const response = await fetch(`/api/v1/tools/${tool.id}/requests`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(tool.id)
    })
// debugger
    if (response.ok){
      setRedirect(true)
    } else {
      console.log("something went wrong")
    }

  if (redirect === true){
    <Redirect to={`/users/${current_user.id}`}></Redirect>
    }
  }
  // debugger
  return(
    <div className="card-container">
        <div className="card-tool-user-img" >
          <img src={tool.image_url} alt={`image of ${tool.name}`} className="tool-user-image" />
        </div>
          <h6>{tool.name}</h6>
        <div className="tool-user-info">
          <ul>
            <li>Tool Type: {tool.product}</li>
            <li>Brand: {tool.brand}</li>
            <li>Size: {tool.size}</li>
            <li>Weight: {tool.weight}</li>
            <li>Description:</li>
            <blockquote>{tool.description} <br />
            -Owner: {tool.user.first_name} {tool.user.last_name}
            </blockquote>
          </ul>

          <div className='card-user-button'>
            <button className="button" type="button" onClick={makeRequest}> 
            Borrow Tool
            </button>
          </div>

        </div>

    </div>
    
  )
}

export default ToolShowTile