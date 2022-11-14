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
      setTools(responseBody)
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
        product={tool.product}
        description={tool.description}
      />
    )
  })

  return (
    <div>
      <div className="search-bar">
        <SearchBar
          setTools={setTools}
        />
      </div>
      <h5>Available Tools</h5>
      <div>
        {toolTiles}
      </div>
    </div>
  )
}

export default ToolsIndexContainer