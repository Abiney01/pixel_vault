import {configureStore} from "@reduxjs/toolkit"
import searchSlice from "../redux/features/searchSlice"
import collectionSlice from "../redux/features/collectionSlice"
export const store = configureStore({
    reducer : {
        search : searchSlice,
        collection : collectionSlice
    }
})