import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const createThunk = createAsyncThunk("fetchData", async()=>{
    try{
        let response = await fetch('https://fakestoreapi.com/products/categories')
    let apiData = await response.json()
    return apiData
    }catch(error){
        throw error
    }
})

export const dataSlicer = createSlice({
    name:'data',
    initialState:{
        status: '',
        datafetch : [],
        error : false
    },
    extraReducers:(builder)=>{
        builder.addCase(createThunk.pending,(state)=>{
            state.status = "loading"
        }).addCase(createThunk.fulfilled,(state,actions)=>{
            state.status = 'success'
            state.datafetch = actions.payload
        }).addCase(createThunk.rejected,(state,actions)=>{
            state.status = 'faild'
            state.datafetch = []
            state.error = actions.error.message
        })
    }
})
export default dataSlicer.reducer