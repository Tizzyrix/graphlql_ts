import React from 'react'
import Loader from '../app/Loader'
import Error from '../app/Error'


const UserList = ({ users, isLoadingUsers, errorUsers}) => {

    if (isLoadingUsers) return <Loader />
    if (errorUsers) return <Error />

    return(
        <div className='user-list'>
            {
                users?.map(user => <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h2 style={{'fontSize':'16px'}}>{user.rocket}</h2>
                </div>)
            }
        </div>
    )
}

export default UserList