import React, { useEffect, useState} from 'react';
import ToolShowTile from './ToolShowTile.js';

const ToolShowContainer = (props) => {
  const [tool, setTool] = useState ({})

  const getTool = async () => {
    try {
        const toolId = props.match.params.toolId
        const response = await fetch(`/api/v1/tools/${toolId}`)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
        const fetchedTool = await response.json()
        setTool(fetchedTool)
        // debugger
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  useEffect(() => {
    getTool()
  }, [])

  return (
    <div>
      <ToolShowTile
        tool = {tool}
      />
    </div>
  )
}

export default ToolShowContainer