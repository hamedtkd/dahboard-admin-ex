import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REHYDRATE,
    persistReducer,
    persistStore,
    REGISTER,
} from "redux-persist";
import accessTokenReducer from "./modules/accessToken";
import storage from "redux-persist/lib/storage";
import { authApi } from "./api/authApi";
import { usersApi } from "./api/usersApi";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["usersApi", "authApi"],
};

const rootReducer = combineReducers({
    accessToken: accessTokenReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(authApi.middleware, usersApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunction = () => AppDispatch;
