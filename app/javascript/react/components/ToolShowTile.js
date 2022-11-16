import React from 'react';

const ToolShowTile = (props) => {
  const tool = props.tool
  return(
    <div>
        <div>
          <img src={tool.image_url} alt={`image of ${tool.name}`} />
        </div>
        <div>
          <h6>{tool.name}</h6>
          <p>Tool Type: {tool.product}</p>
          <p>Brand: {tool.brand}</p>
          <p>Size: {tool.size}</p>
          <p>Weight: {tool.weight}</p>
          <p>Description: {tool.description}</p>



        </div>

    </div>
    
  )
}

export default ToolShowTile