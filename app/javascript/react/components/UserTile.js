import React from 'react';

const UserTile = (props) =>{
  const { user } = props
  return (
    <div className='about-people'>
      {/* TODO: REWORK CARD-CONTAINER TO LOOK SIMILAR TO LEFT-HAND SIDE OF PAGE */}
      
      <div className='about-people-profile'>
        <img className="profile-image" 
          src='https://nationaltoday.com/wp-content/uploads/2022/07/National-Rosie-the-Riveter-Day.jpg.webp' alt="Jeannie Bourke"></img>
          
        </div>

      <div className='about-people-borrower-lender'>
          <p className="borrower-lender-name">{user.first_name} {user.last_name}
          </p>
        
          <p>{user.city}, {user.state}   {user.zip}</p>
          <p>More About Me: </p>
          <blockquote>{user.description}</blockquote>
        
      </div>
      
    </div>
  )
}

export default UserTile