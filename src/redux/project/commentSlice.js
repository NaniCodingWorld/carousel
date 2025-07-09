import { createSlice } from "@reduxjs/toolkit";


export const  commentSlice = createSlice({
    name: 'newSubscriber',
    initialState:{
        users :[]
    },
    reducers:{
        addUsers:(state,actions)=>{
             state.users.push(actions.payload)
        }
    }
})

export const {addUsers} = commentSlice.actions
export default commentSlice.reducer