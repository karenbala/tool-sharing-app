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
      <div className="hero-container">
          <img src='https://www.ikea.com/images/a-person-seated-at-a-white-lagkapten-adils-desk-below-a-bunk-1e51cae5449bc30981d4cce9e4ce91f4.jpg?f=sg' height="300" />
          <div className='hero-text'><h2>Explore tuulbox</h2></div>
      </div>
       
      <div className="search-bar">
        <SearchBar
          setTools={setTools}
        />
      </div>
      <h5>Available Tools</h5>
      <div className="grid-x">
        {toolTiles}
      </div>
      
    </div>
  )
}

export default ToolsIndexContainer