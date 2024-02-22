import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import {capitalizeFirstLetter} from "../../../app/utils/capitalizeFirstLetter";

type Item ={
    id: string;
    value: string;
}
type State ={
    userItem: Item[];
    mentorItem: Item[];
}
const initialState: State = {
    userItem: [],
    mentorItem: []
};

const slice = createSlice({
    name: 'draggeble',
    initialState,
    reducers:{
        addUserItem: (state, action: PayloadAction<{ data:  string }>) => {
            const newItem = {
                id: uuidv4() as string,
                value: capitalizeFirstLetter(action.payload.data)
            };
            state.userItem.push(newItem);
        },
        addMentorItem: (state, action: PayloadAction<{ data:  string }>) => {
            const newItem = {
                id: uuidv4() as string,
                value: capitalizeFirstLetter(action.payload.data)
            };
            state.mentorItem.push(newItem);
        },
        dragItem: (state, action: PayloadAction<{ id:  string, dropZoneName: string }>) => {
           if(action.payload.dropZoneName === 'userZone'){
               const mentorTack = state.mentorItem.find((el)=> el.id === action.payload.id)
               if(mentorTack) state.userItem.push(mentorTack)
               const index = state.mentorItem.findIndex((todo) => todo.id === action.payload.id);
               if (index !== -1) state.mentorItem.splice(index, 1)
           }
            if(action.payload.dropZoneName === 'mentorZone'){
                const userTack = state.userItem.find((el)=> el.id === action.payload.id)
                if(userTack) state.mentorItem.push(userTack)
                const index = state.userItem.findIndex((todo) => todo.id === action.payload.id);
                if (index !== -1) state.userItem.splice(index, 1)
            }
        },

    }
})

export const draggebleReducer = slice.reducer;
export const { addUserItem, addMentorItem, dragItem } = slice.actions;