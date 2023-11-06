import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './reducers/authReducer';
const persistConfig = {
    key: 'root',
    version: 5,
    storage,

}

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { WebStorage } from 'redux-persist/lib/types';

export function createPersistStorage(): WebStorage {
    const isServer = typeof window === 'undefined';

    // Returns noop (dummy) storage.
    if (isServer) {
        return {
            getItem() {
                return Promise.resolve(null);
            },
            setItem() {
                return Promise.resolve();
            },
            removeItem() {
                return Promise.resolve();
            },
        };
    }

    return createWebStorage('local');
}


const rootReducer = combineReducers({
    auth: authReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatcher = typeof store.dispatch;
