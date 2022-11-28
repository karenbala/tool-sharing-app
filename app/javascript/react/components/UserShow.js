import React, { useEffect, useState } from 'react'
import NewToolFormContainer from './NewToolFormContainer.js'
import ToolTile from './ToolTile.js'
import UserTile from './UserTile.js'
import RequestTile from './RequestTile.js'
import IssuedRequestTile from './IssuedRequestTile.js'

const UserShow = (props)=> {
// debugger
  const userId = props.match.params.userId
  const [requests, setRequests] = useState ([])

  const [user, setUser] = useState ({
    tools: [],
    borrowed_tools: [],
    issued_requests: [],
    received_requests: []
  })

  const getUser = async () => {
// debugger
    try{
      const response = await fetch(`/api/v1/users/${userId}`)
// debugger
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      setUser(fetchedUser.user)
// debugger
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  const getRequests = async () => {
// debugger
    try{
      const response = await fetch(`/api/v1/tools/tool_id/requests`)
      if (!response.ok) {
// debugger
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
// debugger
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
        ...user,
        responseBody.user
      ])
      setRequests(responseBody.request)
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
      />
    )
  })

  const issuedRequestTile = user.issued_requests.map((issue) => {
debugger
    return(
      <IssuedRequestTile
        key={issue.id}
        id={issue.id}
        tool_id={issue.tool_id}
        owner_id={issue.owner_id}
      />
    )
  })

  const requestTiles = requests.map ((request) => {
// debugger
    return(
      <RequestTile 
        key={request.id}
        id={request.id}
        tool={request.tool.name}
        owner={request.owner.first_name}
        borrower={request.borrower.first_name}
      />
    )
  })

  return(
    <div className="grid-x profile-container">
      <div className='cell large-auto left-column'>
        <h6 className='show-header-text'>Received Pending Requests for {user.first_name}'s Tools</h6>
        <p>{props.received_requests}</p>
        <h6 className='show-header-text'>{user.first_name}'s Requests to Borrow Tools</h6>
        <p className='call-out'>{issuedRequestTile}</p>
        <h6 className='show-header-text'>{user.first_name}'s Borrowed / Checked Out Tools {requestTiles}</h6>
        {/* <p>{user.borrowed_tools}</p> */}
        
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