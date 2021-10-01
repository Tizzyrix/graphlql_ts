import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useMutation, useQuery} from '@apollo/client'
import {GET_ALL_USERS} from '../../apollo/query/users'
import {USER_ADD, USER_DELETE} from '../../apollo/mutations/users'
import {LogInAction} from '../../redux/actions'
import UserList from './UsersList'

const RegForm = () => {
    const dispatch = useDispatch()

    const [newUser] =  useMutation(USER_ADD)
    const addUser = () => {
        newUser({
            variables: {
                "insertUsersObjects": {
                    "name": `${inputLogin}`,
                    "rocket": `${inputPassword}`
                }
            },
            refetchQueries: [GET_ALL_USERS]
        })
    }

    const [delUser] = useMutation(USER_DELETE)
    const deleteUser = () => {
        delUser({
            variables: {
                "deleteUsersWhere": {
                    "name": {
                        "_eq": `${inputLogin}`
                    }
                }
            },
            refetchQueries: [GET_ALL_USERS]
        })
    }

    const {data:usersObj, loading:isLoadingUsers, error:errorUsers} = useQuery(GET_ALL_USERS)
    const users = usersObj?.users

    const [inputLogin, setInputLogin] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const authStatus = useSelector(state => state.auth.isLoggedIn)

    const authValid = (usersArg) => {
        let neededId
        const arrofLogins = []
        for (let i = 0; i < usersArg.length; i++) {
            arrofLogins.push(usersArg[i].name)
            if (usersArg[i].name === inputLogin) neededId = i
        }

        if (arrofLogins.includes(inputLogin)) {
            if (usersArg[neededId].rocket === inputPassword) {
                dispatch(LogInAction())
            } else {
                console.log('неверный пароль')
            }
        } else {
            console.log('пользователь не найден')
        }
    }


    return(
        <div className='cont'>
            <div className='auth-status'>
                {
                   authStatus ?
                   <h1>Logged in</h1>
                   :
                   <h1>Please log in</h1>
                }
            </div>
            <div className='auth-form'>
                <form>
                    <div className='log-inp'>
                        <input
                        type='text'
                        value={inputLogin}
                        onChange={ e =>setInputLogin(e.target.value)}
                        />
                    </div>
                    <div className='pas-inp'>
                        <input
                        type='text'
                        value={inputPassword}
                        onChange={ e =>setInputPassword(e.target.value)}
                        />
                    </div>
                    <div className='btns'>
                        <div className='btn-login'>
                            <button
                            onClick={ e => {
                                e.preventDefault()
                                authValid(users)
                            }}
                            >Войти</button>
                        </div>
                        <div className='btn-registration'>
                            <button
                            onClick={ e => {
                                e.preventDefault();
                                addUser();
                            }}
                            >Зарегистрироваться</button>
                        </div>
                        <div className='btn-login'>
                            <button
                            onClick={ e => {
                                e.preventDefault();
                                deleteUser()
                            }}
                            >Удалить</button>
                        </div>
                    </div>
                </form>
            </div>
            <UserList users={users} isLoadingUsers={isLoadingUsers} errorUsers={errorUsers} />
        </div>
    )
}


export default RegForm