import React, { useState } from 'react'

const NewToolFormContainer = (props) => {
// debugger  
  const [newToolData, setNewToolData] = useState ({
    power_type: '',
    name: '',
    image_url: '',
    product: '',
    brand: '',
    size: '',
    weight: '',
    description: '',
    available: '',
  })

  const clearForm = () => {
    setNewToolData({
    power_type: '',
    name: '',
    image_url: '',
    product: '',
    brand: '',
    size: '',
    weight: '',
    description: '',
    available: '',
    })
  }

  const handleChange = (event) => {
    setNewToolData({
      ...newToolData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (Object.values(newToolData).includes("")){
      alert("Please answer all fields.")
    }
    else{
      props.postNewTool(newToolData)
      setNewToolData({
        power_type: '',
        name: '',
        image_url: '',
        product: '',
        brand: '',
        size: '',
        weight: '',
        description: '',
        available: '',
      })
    }
  }
  // debugger


  return (
  <div class="new-tool-form">
    <h5 class="text-center">Add a Tool</h5>

    <form onSubmit={handleSubmit}>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell">
            <div class="sign-up-field">
              <label class="new-tool-label">Power Type
              <input 
                  name="power_type"
                  id="power_type"
                  type="text"
                  value={newToolData.power_type} 
                  placeholder="hand tool or power tool"
                  onChange={handleChange}
              />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool Name
                <input 
                  name="name"
                  id="name"
                  type="text"
                  value={newToolData.name} 
                  placeholder="type in tool Name"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool Image
                <input 
                  name="image_url"
                  id="image_url"
                  type="text"
                  value={newToolData.image_url} 
                  placeholder="copy and paste a tool image"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool Category
                <input 
                  name="product"
                  id="product"
                  type="text"
                  value={newToolData.product} 
                  placeholder="ex. framing hammer, Philips screwdriver"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool Brand
                <input 
                  name="brand"
                  id="brand"
                  type="text"
                  value={newToolData.brand} 
                  placeholder="Tool brand"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool Size
                <input 
                  name="size"
                  id="size"
                  type="text"
                  value={newToolData.size} 
                  placeholder="type in approximate tool size"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool Weight
                <input 
                  name="weight"
                  id="weight"
                  type="text"
                  value={newToolData.weight} 
                  placeholder="tool weight"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Tool's Description
                <input 
                  name="description"
                  id="description"
                  type="text"
                  value={newToolData.description} 
                  placeholder="short tool description"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div class="sign-up-field">
              <label class="new-tool-label">Available
              <input 
                  name="available"
                  id="available"
                  type="text"
                  value={newToolData.available} 
                  placeholder="type in yes or no"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="sign-up-button">
        <a><button class="sign-up-text">Add Tool</button></a>
      </div>
      {/* <input className="button" type="submit" value="Add Tool" /> */}
    </form>
</div>
           
      
  )

}

export default NewToolFormContainer