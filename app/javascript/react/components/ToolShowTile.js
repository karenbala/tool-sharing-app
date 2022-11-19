import React from 'react';

const ToolShowTile = (props) => {
  const tool = props.tool
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

        </div>

    </div>
    
  )
}

export default ToolShowTile