import React, { useEffect, useState } from 'react'

const UserShow = (props)=> {

  const [user, setUser] = useState ({})
  const getUser = async () => {
    try{
      const userId = props.match.params.userId
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      setUser({...fetchedUser.user})
      // debugger
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])
  
  return(
    <div>
      <div>Hello from the User Show Page</div>
      <p> </p>
      <p>Full Name:{user.first_name}{user.last_name}</p>
    </div>
  )
}

export default UserShow