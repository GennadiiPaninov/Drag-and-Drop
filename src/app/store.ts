import {configureStore} from "@reduxjs/toolkit";
import {draggebleReducer} from "../feature/DraggebleItem/model/draggeble.reducer";

export const store = configureStore({
    reducer: {
        draggebl:draggebleReducer
    },});

export type AppRootStateType = ReturnType <typeof store.getState>



export type AppDispatch = typeof store.dispatch;
// @ts-ignore

window.store = store; // для доступа к store в console