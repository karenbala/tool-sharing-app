import React, { useState } from 'react'

const SearchBar = (props) => {
  // const [tools, setTools] = useState('')
  const [searchString, setSearchString] = useState('')

  const handleChange = (event) => {
    const newSearchString = event.target.value
    setSearchString(newSearchString)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: searchString
    })
    try {
      const response = await fetch("/api/v1/tools/search", {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      props.setTools(
        responseBody.tools
      )
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
    
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
          <label className="search">Search for a Tool</label>
            <input 
              type='text' 
              name='searchString'
              value={searchString}
              onChange={handleChange}
            />
          <input className="button" type='submit' value='Let us help you find tools.' />
      </form>
    </div>
  )
}

export default SearchBar