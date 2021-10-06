import {ApolloError} from '@apollo/client'

export interface IRocket {
    name: string,
    id: string
} 

export interface IShip {
    id: string,
    name: string,
    image: string
} 

export interface IUser {
    name: string,
    rocket: string,
    id: string
}

export interface IError {
    message: any
}

export type CustomHookResult = {
    loading: boolean,
    data: any,
    error: ApolloError
}

