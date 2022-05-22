import { configureStore } from "@reduxjs/toolkit";

import { foodApi } from "./Redux/TastyApi";
// import { newsApi } from "../Redux Services/NewsApi";

export default configureStore ({
    reducer: {
        [foodApi.reducerPath] : foodApi.reducer,
        // [newsApi.reducerPath] : newsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware)
    
})