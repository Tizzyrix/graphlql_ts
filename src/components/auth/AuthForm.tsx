import React, { useState, FC, MouseEventHandler} from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useGetAllUsers } from '../../graphql/hooks/use-get-all-users'
import { useAddUser } from '../../graphql/hooks/use-add-user'
import { useDeleteUser } from '../../graphql/hooks/use-delete-user'
import { authUser } from '../../utils/utils'
import { LogInAction } from '../../redux/actions'
import UserList from './UsersList'


const RegForm: FC = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector( (state: RootStateOrAny): boolean => state.auth.isLoggedIn)

    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const { data, loading, error } = useGetAllUsers()
    // Есть ли вариант лучше вытащить юзеров из даты ?
    const users = data?.users

    const submitHandler = (e: any): void => {
        e.preventDefault()
    } 
    const inputLoginHandler = (e: any): void => {
        setInputLogin(e.target.value)
    }
    const inputPasswordHandler = (e: any): void => {
        setInputPassword(e.target.value)
    }

    const deleteUser = useDeleteUser()
    const adduser = useAddUser()

    return(
        <>
            <div className='auth'>
                <form onSubmit={ e => submitHandler(e) } className='auth_form'>
                    <div className='auth_inputs'>
                        <div className='login_input'>
                            <input
                            type='text'
                            value={inputLogin}
                            onChange={ e => inputLoginHandler(e) }
                            />
                        </div>
                        <div className='password_input'>
                            <input
                            type='text'
                            value={inputPassword}
                            onChange={ e => inputPasswordHandler(e) }
                            />
                        </div>
                    </div>
                    <div className='auth_buttons'>
                        <div className='auth_button'>
                            <button
                            type='button'
                            onClick={ () => authUser(users, inputLogin, inputPassword, dispatch, LogInAction) }
                            >Войти</button>
                        </div>
                        <div className='registration_button'>
                            <button
                            type='button'
                            onClick={ () => adduser(inputLogin, inputPassword) }
                            >Зарегистрироваться</button>
                        </div>
                        <div className='delete_button'>
                            <button
                            type='button'
                            onClick={ () => deleteUser(inputLogin, inputPassword) }
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


export default RegForm