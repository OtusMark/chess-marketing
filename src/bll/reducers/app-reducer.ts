import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: StateType = {
    isFetching: false
}

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setIsFetching(state, action: PayloadAction<{isFetching: boolean}>) {
            state.isFetching = action.payload.isFetching
        }
    }
})

export const appReducer = slice.reducer

export const {setIsFetching} = slice.actions

// Types
type StateType = {
    isFetching: boolean
}