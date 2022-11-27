import React from "react";
import { Link } from "react-router-dom"

const ToolTile = (props) => {
  
  return (
    
    <div className="card-container" >
      <Link to={`/tools/${props.id}`}>
        <div className="card-tool-user-img" >
            <img src={props.image_url} alt={`image of ${props.name}`} className="tool-user-image" />
        </div>
        <p>{props.name} : {props.product}</p>
        <p>{props.first_name} {props.last_name}</p>
      </Link>

    </div>
  )
}

export default ToolTile