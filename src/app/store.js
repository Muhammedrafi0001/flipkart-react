import {configureStore} from '@reduxjs/toolkit'

import  userReducer from '../slice/Userslices'
import cartReducer from '../slice/Cartslice'

export const store = configureStore({
    reducer:{
        userData:userReducer,
        cartData:cartReducer, 
    },
})