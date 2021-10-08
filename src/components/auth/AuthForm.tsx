import React, { useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { useGetAllUsers } from '../../graphql/hooks/use-get-all-users'
import { useAddUser } from '../../graphql/hooks/use-add-user'
import { useDeleteUser } from '../../graphql/hooks/use-delete-user'
import { LogInAction } from '../../redux/actions'
import {IUser} from '../../types/types'
import UserList from './UsersList'


const AuthForm: FC = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useTypedSelector(state => state.auth.isLoggedIn)

    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const { data, loading, error } = useGetAllUsers()
    const users = data?.users || []

    const authUser = (users: Array<IUser>, inputLogin: string, inputPassword: string) => {
        const index = users.findIndex( (item: IUser) =>  item.name === inputLogin  )
        if (index === -1) return console.log('пользователь не найден')
        if ( users[index]?.rocket !== inputPassword) return console.log('неверный пароль')
        dispatch(LogInAction())
    }

    const deleteUser = useDeleteUser()
    const addUser = useAddUser()

    return(
        <>
            <div className='auth'>
                <form onSubmit={ e => e.preventDefault() } className='auth_form'>
                    <div className='auth_inputs'>
                        <div className='login_input'>
                            <input
                            type='text'
                            value={inputLogin}
                            onChange={ e => setInputLogin(e.target.value) }
                            />
                        </div>
                        <div className='password_input'>
                            <input
                            type='text'
                            value={inputPassword}
                            onChange={ e => setInputPassword(e.target.value) }
                            />
                        </div>
                    </div>
                    <div className='auth_buttons'>
                        <div className='auth_button'>
                            <button
                            type='button'
                            onClick={ () => authUser(users, inputLogin, inputPassword) }
                            >Войти</button>
                        </div>
                        <div className='registration_button'>
                            <button
                            type='button'
                            onClick={ () => addUser(inputLogin, inputPassword) }
                            >Зарегистрироваться</button>
                        </div>
                        <div className='delete_button'>
                            <button
                            type='button'
                            onClick={ () => deleteUser(inputLogin) }
                            >Удалить</button>
                        </div>
                    </div>
                </form>
            </div>
            <UserList
            users={users} 
            loading={loading}
            error={error}
            isLoggedIn={isLoggedIn}
            />
        </>
    )
}


export default AuthForm