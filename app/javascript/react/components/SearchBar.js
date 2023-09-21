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
    
        <form className='hero-section' onSubmit={handleSubmit}>
      <div className="search-group search-group-rounded">
              <input class="search-group-field" 
                type='text' 
                name='searchString'
                value={searchString}
                onChange={handleChange}
              />
            <div className="search-group-button">
              <input className="button secondary" type='submit' value='Search Tools' />
            </div>
      </div>
        </form>
    
  )
}

export default SearchBar