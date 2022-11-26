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
        user={tool.user.first_name}
      />
    )
  })

  return (
    <div>
      <div className="hero-container">
          <img className="hero-img" src='https://www.ikea.com/images/a-person-seated-at-a-white-lagkapten-adils-desk-below-a-bunk-1e51cae5449bc30981d4cce9e4ce91f4.jpg?f=sg' />
          <div>
            <h2 className='hero-text'>Share tools and build spaces</h2>
          </div>
          <div className="search-bar">
            <SearchBar
              setTools={setTools} />
          </div>
      </div>
       
      <h5>Available Tools</h5>
      <div>
        {toolTiles}
      </div>
      
    </div>
  )
}

export default ToolsIndexContainer