import { createAction, createReducer } from '@reduxjs/toolkit'

export interface Auth {
    jwt: string,
    user: {
        id: number,
        username: string,
        email: string,
        confirmed?: boolean,

    }
    logged: boolean
}

const initialState: Auth = {
    jwt: "",
    user: {
        id: 0,
        username: "",
        email: "",

    },
    logged: false
}

export const isLogged = createAction<Auth>('LOGGED')
export const refreshed = createAction<Auth>('REFRESHED')
export const isLogout = createAction('LOGOUT')
export const authReducer = createReducer(initialState, builder => {
    builder
        .addCase(isLogged, (state, action) => {
            let copyState = state;
            copyState = {
                ...copyState,
                jwt: action.payload.jwt,
                user: action.payload.user,
                logged: true,
            }
            return { ...state, ...copyState }
        })
        .addCase(refreshed, (state, action) => {
            let copyState = state;
            copyState = { ...copyState, jwt: action.payload.jwt }
            return { ...state, ...copyState }
        })
        .addCase(isLogout, (state) => {
            return { ...initialState }
        })
})

