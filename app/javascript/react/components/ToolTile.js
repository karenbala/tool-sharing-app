import React from "react";
import { Link } from "react-router-dom"

const ToolTile = (props) => {
// debugger
  
  return (
    
    <div>
      <Link to={`/tools/${props.id}`}>
      <div>
          <img src={props.image_url} alt={`image of ${props.name}`} />
        </div>
        <p>{props.name} : {props.product}</p>
        <p>{props.user}</p>
      </Link>
    </div>
  )
}

export default ToolTile