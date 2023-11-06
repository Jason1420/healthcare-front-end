'use client'
import { persistor, store } from "@/store/store"
import { Provider } from "react-redux"
import React from 'react'
import { PersistGate } from "redux-persist/integration/react"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}