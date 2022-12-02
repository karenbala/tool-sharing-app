import React from "react";
import { Link } from "react-router-dom"

const ToolTile = (props) => {
  
  return (
  <div className="cell small-12 medium-4 large-3">
    <div className="basic-card" >
      <Link to={`/tools/${props.id}`}>
        <div className="basic-card-image" >
            <img src={props.image_url} alt={`image of ${props.name}`} />
        </div>
        <div className="basic-card-content content callout secondary">
          <p className="card-name-text">{props.name}</p>
          <p className="card-product-text">{props.product}</p>
          <p className="card-owner-text">{props.first_name} {props.last_name}</p>
        </div>
      </Link>
    </div>
  </div>
  )
}

export default ToolTile