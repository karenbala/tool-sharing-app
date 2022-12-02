import React, { useState, useEffect} from "react"
import ToolTile from "./ToolTile"
import SearchBar from "./SearchBar.js"


const ToolsIndexContainer = (props) => {
  const [tools, setTools] = useState([])

  
  const getTools = async () => {
    try {
      const response = await fetch("/api/v1/tools")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setTools(responseBody.tools)
      } catch(err) {
        console.error(`Error in fetch: ${err.message}`)
      }
    }
  useEffect(() => {
    getTools()
  }, [])

  const toolTiles = tools.map((tool) => {
    return(
      <ToolTile
        key={tool.id}
        id={tool.id}
        name={tool.name}
        image_url={tool.image_url}
        product={tool.product}
        description={tool.description}
        first_name={tool.user.first_name}
        last_name={tool.user.last_name}
        current_user={tool.current_user}
      />
    )
  })

  return (
    <div>
      <div className="hero-section">
          <div className='hero-section-text'>
            <h2>Share tools and build spaces</h2>
              <SearchBar
                setTools={setTools} />
          </div>
      </div>

      <div className="available-section">
        <h5>Available Tools to Borrow</h5>
      </div>

      <div className="grid-container" >
        <div className="grid-x">
        {toolTiles}</div>
      </div>
      
      <div class="footer-img"></div>
      
    </div>
  )
}

export default ToolsIndexContainer