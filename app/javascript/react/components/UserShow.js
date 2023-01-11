import React, { useEffect, useState } from 'react'
import NewToolFormContainer from './NewToolFormContainer.js'
import ToolTile from './ToolTile.js'
import UserTile from './UserTile.js'
import RequestTile from './RequestTile.js'
import IssuedRequestTile from './IssuedRequestTile.js'
import ReceivedRequestTile from './ReceivedRequestTile.js'

const UserShow = (props)=> {
  const userId = props.match.params.userId

  const [user, setUser] = useState ({
    tools: [],
    borrowed_tools: [],
    issued_requests: [],
    received_requests: []
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
      setRequests(responseBody.request)
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
      />
    )
  })

  const issuedRequestTile = user.issued_requests.map((issue) => {
    return(
      <IssuedRequestTile
        key={issue.id}
        id={issue.id}
        tool_name={issue.tool.name}
        tool_product={issue.tool.product}
        tool_owner_first_name={issue.owner.first_name}
        tool_owner_last_name={issue.owner.last_name}
      />
    )
  })

  const receivedRequestTile = user.received_requests.map((receivedItem) => {
    return (
      <ReceivedRequestTile
        key={receivedItem.id}
        id={receivedItem.id}
        received_tool_name={receivedItem.tool.name}
        received_tool_product={receivedItem.tool.product}
        received_tool_owner_first_name={receivedItem.owner.first_name}
        received_tool_owner_last_name={receivedItem.owner.last_name}
      />
    )
  })


  return(
    <div>
      <div className='show-header-container'>
        <h5 className='show-header-text'>Hello {user.first_name}!</h5>
      </div>

      <div className="grid-x">
        <div className='cell large-auto left-column'>
          <div className='people-you-might-know'>
            <div className='add-people-header'>
              <p className="header-title">Pending Requests for {user.first_name}'s Tools</p>
            </div>
            <div className="row add-people-section">
              <div className="small-12 medium-6 columns">
                {receivedRequestTile}
              </div>
            </div>
          </div>
          <div className='people-you-might-know'>
            <div className='add-people-header'>
              <p className='header-title'>{user.first_name}'s Requests to Borrow Tools</p>
            </div>
            <div className="row add-people-section">
              <div className="small-12 medium-6 columns">
                {issuedRequestTile}
              </div>
            </div>
          </div>

              <h6 className=''>{user.first_name}'s Borrowed / Checked Out Tools</h6>
          
        </div>

        <div className='cell large-auto right-column'>
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
    </div>
  )
}

export default UserShow