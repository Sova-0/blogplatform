import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from './article/articlesReducer';
import usersReducer from './user/userReducer';


const store = configureStore({
    reducer: {
        articles: articlesReducer,
        user: usersReducer,
    }
})

export default store;