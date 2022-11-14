import React from "react";
import { Link } from "react-router-dom"

const ToolTile = (props) => {
  return (
    
    <div>
      <Link to={`/tools/${props.id}`}>
        <p>{props.name} : {props.product}</p>
        <p></p>
      </Link>
    </div>
  )
}

export default ToolTile