import React, {FC} from 'react'
import {IUser} from '../../types/types'
import LoadingSpinner from '../LoadingSpinner'
import ErrorMessage from '../ErrorMessage'

type UserListProps = {
    users: [],
    loading: any,
    error: any,
    isLoggedIn: boolean
}

const UserList:FC<UserListProps> = ({ users, loading, error, isLoggedIn}) => {
    
    if (loading) return <LoadingSpinner />
    if (error) return <ErrorMessage />
    if (!isLoggedIn) return <h1>U are not logged in</h1>

    return(
        <div className='user-list'>
            {
                users?.map( (user: IUser) =>
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.rocket}</h2>
                </div>)
            }
        </div>
    )
}

export default UserList