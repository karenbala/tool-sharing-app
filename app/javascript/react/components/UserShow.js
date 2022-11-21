import React, { useEffect, useState } from 'react'
import NewToolFormContainer from './NewToolFormContainer.js'
import ToolTile from './ToolTile.js'

const UserShow = (props)=> {
  const userId = props.match.params.userId
  // const [tools, setTools] = useState([])
  const [user, setUser] = useState ({
    tools: [],
    borrowedTools: []
  })

  const getUser = async () => {
    try{
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      // debugger
      setUser(fetchedUser.user)
      // setUser({...fetchedUser.user})
      // setTools(fetchedUser.user.tools)
      // debugger
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  // const getTools = async () => {
  //   try {
  //     const response = await fetch("/api/v1/tools")
  //     if (!response.ok) {
  //       const errorMessage = `${response.status} (${response.statusText})`
  //       const error = new Error(errorMessage)
  //       throw(error)
  //     }
  //     const responseBody = await response.json()
  //     setTools(responseBody.tools)
  //   } catch(err) {
  //     console.error(`Error in fetch: ${err.message}`)
  //   }
  // }
  // useEffect(() => {
  //   getTools()
  // }, [])

  const postNewTool = async(formPayLoad) => {
    // debugger
    try{
      const response = await fetch(`/api/v1/users/${userId}/tools`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayLoad)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      // rework here with tool state removed
      setTools([
        ...tools,
        responseBody.tools
      ])
    } catch (err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  
  const toolTiles = user.tools.map((tool) => {
    return(
      <ToolTile
        key={tool.id}
        id={tool.id}
        name={tool.name}
        image_url={tool.image_url}
        product={tool.product}
        description={tool.description}
        // user={tool.user.first_name}
      />
    )
  })
  return(
    <div className="grid-x profile-container">
      <div className='cell large-auto left-column profile-info'>
        <h6 className='show-header-text'>Received Requests for {user.first_name}'s Tools</h6>
        <h6 className='show-header-text'>{user.first_name}'s Requests to Borrow Tools</h6>
      </div>
      <div className='cell large-auto right-column'>
        <h4 className='show-header-text'>Hello {user.first_name}!</h4>
      <div>
        <NewToolFormContainer
          postNewTool = {postNewTool} />
      </div>
      <div>
        {toolTiles}
      </div>
      </div>
    </div>
  )
}

export default UserShow