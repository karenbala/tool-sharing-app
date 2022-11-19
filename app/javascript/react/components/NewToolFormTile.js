import React, { useState } from 'react'

const NewToolFormTile = (props) => {
  const [newTool, setNewTool] = useState ({
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

  return (
    <div>Hello from the NewToolFormTile</div>
  )

}

export default NewToolFormTile