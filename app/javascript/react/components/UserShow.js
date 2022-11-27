import React, { useEffect, useState } from 'react'
import NewToolFormContainer from './NewToolFormContainer.js'
import ToolTile from './ToolTile.js'
import RequestTile from './RequestTile.js'

const UserShow = (props)=> {
  const userId = props.match.params.userId
  const [user, setUser] = useState ({
    tools: [],
    borrowedTools: []
  })
  const [requests, setRequests] = useState ([])


  const getUser = async () => {
    try{
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      setUser(fetchedUser.user)

    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  const getRequests = async () => {
    try {
      const response = await fetch("/api/v1/tools/tool_id/requests")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
      setRequests(responseBody.requests)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  useEffect(() => {
    getRequests()
  }, [])

  const postNewTool = async(formPayLoad) => {
    
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
      setUser([
      // rework here with tool state removed
        ...user,
        responseBody.user
      ])
    } catch (err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
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

  const requestTiles = requests.map ((request) => {
    // debugger
    return(
      <RequestTile 
        key={request.id}
        id={request.id}
        tool={request.tool_id}
        owner={request.owner_id}
        borrower={request.borrower_id}
      />
    )
  })

  return(
    <div className="grid-x profile-container">
      <div className='cell large-auto left-column profile-info'>
        <h6 className='show-header-text'>Received Requests for {user.first_name}'s Tools</h6>
        <h6 className='show-header-text'>{user.first_name}'s Requests to Borrow Tools</h6>
        {requestTiles}
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