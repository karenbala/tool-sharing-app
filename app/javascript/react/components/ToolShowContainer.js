import React, { useEffect, useState} from 'react';
import ToolShowTile from './ToolShowTile.js';
import UserTile from './UserTile.js';

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
    <div className="grid-x">
      <div className="cell large-auto left-column"><h4>Meet the Tool</h4>
        <ToolShowTile
          tool = {tool}
        />
      </div>

      <div className='cell large-auto right-column'><h4>Meet the Owner</h4>
      <UserTile />
      </div>
    </div>
  )
}

export default ToolShowContainer