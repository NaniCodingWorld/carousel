

import { configureStore } from '@reduxjs/toolkit'
import  counterSlise  from './project/counterSlice'
import commentReducer from './project/commentSlice'
export const store = configureStore({
   reducer:{
        counter : counterSlise,
        newSubscriber : commentReducer
   }
})

