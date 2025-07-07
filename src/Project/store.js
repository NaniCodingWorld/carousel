import { configureStore } from "@reduxjs/toolkit" 
import CounterReducer from '../redux/countersilce'
import  dataSlicer  from "../redux/fetch-api"
import { data } from "jquery"


export const store = configureStore({
    reducer:{
        counter : CounterReducer,
        data : dataSlicer
    }
}) 