import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {useDispatch} from "react-redux";
import {homePageInfoReducer} from "./reducers/home-page-reducer";
import {appReducer} from "./reducers/app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    homePageInfo: homePageInfoReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

// Types
export type AppRootStateT = ReturnType<typeof rootReducer>
export type AppDispatchT = typeof store.dispatch

// Custom hooks
export const useAppDispatch = () => useDispatch<AppDispatchT>()