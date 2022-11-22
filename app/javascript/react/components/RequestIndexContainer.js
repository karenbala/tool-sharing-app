import React, { useState, useEffect } from 'react'


const RequestIndexContainer = (props) => {
  const [requests, setRequests] = useState ([])

  const getRequests = async () => {
    try {
      const response = await fetch("/api/v1/requests")
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

  const requestTiles = requests.map ((request) => {
    return(
      <RequestTile 
        key={request.id}
        id={request.id}
        tool={request.tool}
        owner={request.owner}
        borrower={request.borrower}
      />
    )
  })
  return(
    <div>
      {requestTiles}
    </div>
  )
}

export default RequestIndexContainer