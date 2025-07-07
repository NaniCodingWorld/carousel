import { createSlice } from "@reduxjs/toolkit";

const Counterslicer = createSlice({
         name : 'counetr',
         initialState:{
          counter : 0
         },
         reducers:{
           increment:(state)=>{
                state.value += 1
           },
           decrement:(state)=>{
                state.value -= 1
           }

         }
})
export const {increment,decrement} = Counterslicer.actions

export default Counterslicer.reducer