import React, { useEffect, useState } from 'react'
import NewToolFormContainer from './NewToolFormContainer.js'
import ToolTile from './ToolTile.js'
import UserTile from './UserTile.js'
import RequestTile from './RequestTile.js'

const UserShow = (props)=> {
  // debugger
  const userId = props.match.params.userId
  const [user, setUser] = useState ({
    tools: [],
    borrowed_tools: [],
    issued_requests: [],
    received_requests: []
  })
  // const [requests, setRequests] = useState ([])


  const getUser = async () => {
    // debugger
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
        ...user,
        responseBody.user
      ])
    } catch (err){
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  const toolTiles = user.tools.map((tool) => {
    // debugger
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

  // const requestTiles = requests.map ((request) => {
  //   // debugger
  //   return(
  //     <RequestTile 
  //       key={request.id}
  //       id={request.id}
  //       tool={request.tool_id}
  //       owner={request.owner_id}
  //       borrower={request.borrower_id}
  //     />
  //   )
  // })

  return(
    <div className="grid-x profile-container">
      <div className='cell large-auto left-column'>
        <h6 className='show-header-text'>Received Requests for {user.first_name}'s Tools</h6>
        <h6 className='show-header-text'>{user.first_name}'s Requests to Borrow Tools</h6>
        {/* {requestTiles} */}
      </div>
      <div className='cell large-auto right-column'>
          <h4 className='show-header-text'>Hello {user.first_name}!</h4>
          <div>
            <UserTile
            user = {user} 
            />
          </div>
          <div>
            <NewToolFormContainer
              postNewTool = {postNewTool} />
          </div>

        <div className="card-container">
          {toolTiles}
        </div>
      </div>
    </div>
  )
}

export default UserShow