import React, { useState,useEffect } from 'react';
import { Link, Redirect } from "react-router-dom"
import _ from "lodash"

const ToolShowTile = (props) => {
  const tool = props.tool
  const owner = tool.user
  const [request, setRequest] = useState (null)
  const [redirect, setRedirect] = useState(false)

  const handleClick = (event) => {
    event.preventDefault()
    setRequest({
      tool_id: tool.id,
      owner_id: owner.id,
      borrower_id: tool.current_user.id
    })
  }
  useEffect(() => {
    !_.isEmpty(request) && makeRequest()
  }, [request])

  const makeRequest = async () => {
    // debugger
    const response = await fetch(`/api/v1/tools/${tool.id}/requests`, {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ request: request })
    })

    if (response.ok){
      setRedirect(true)
    } else {
      console.log("something went wrong")
    }
  }

  if (redirect === true){
  debugger
    return (
    <Redirect to={`/users/${tool.current_user.id}`} />);
    }
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
            <button className="button" type="button" onClick={handleClick}> 
            Borrow Tool
            </button>
          </div>

        </div>

    </div>
    
  )
}

export default ToolShowTile