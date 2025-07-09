import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";



let initialData={
    users :[],
    status:"",
    error:false
}
 export let createThunk = createAsyncThunk('user/hetch', async ()=>{
       try{
          let response = await fetch('https://fakestoreapi.com/products/categories')
         let data = await response.json()
         return data
       }catch(error){
          throw  error
       }
 })


export const apiSlice = createSlice({
    name: 'dataFetch',
    initialState:initialData,
    reducers:{

    },
    //pending, success, error
    extraReducers:(builder)=>{
      builder.addCase(createThunk.pending,(state)=>{
            state.status = "loading"
      }).addCase(createThunk.fulfilled,(state,actions)=>{
             state.status = "suucess"
             state.users = actions.payload
      }).addCase(createThunk.rejected,(state,actions)=>{
               state.status = 'rejected'
               state.users = []
               state.error = actions.error.message
      })
    }
})
export default apiSlice.reducer