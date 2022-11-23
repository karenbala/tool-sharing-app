import React from 'react';

const UserTile = (props) =>{
  const { user } = props
  return (
    <div className='card-container'>
      <div className='card-tool-user-img'>
        <img 
          src='https://nationaltoday.com/wp-content/uploads/2022/07/National-Rosie-the-Riveter-Day.jpg.webp' alt="Jeannie Bourke" className='tool-user-image'
        />
      </div>
        <h6>Name: {user.first_name} {user.last_name}
      </h6>
      <div className='tool-user-info'>
        <ul>
          <li>Location: {user.city}, {user.state}   {user.zip}</li>
          <li>More About Me: </li>
          <blockquote>{user.description}</blockquote>
        </ul>
      </div>
      
    </div>
  )
}

export default UserTile