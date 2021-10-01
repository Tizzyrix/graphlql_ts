import React from 'react'

import RegForm from '../../components/auth/RegForm'
import UsersList from '../../components/auth/UsersList'


const Auth = () => {
    return(
        <div className='Auth'>
            <RegForm />
            <UsersList />
        </div>
    )
}

export default Auth