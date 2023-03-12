import React from 'react'
function UserDetails({ userDetails }) {

    return (
        <div>
            <h1>Your Details</h1>
            <img src={userDetails.picture} />
            <h3>Name :</h3>
            <p>{userDetails.name}  </p>
            <h3>Email Id:</h3>
            <p>{userDetails.email}</p>
        </div>
    )
}

export default UserDetails