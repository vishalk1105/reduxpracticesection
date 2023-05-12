import { configureStore } from "@reduxjs/toolkit";
import postReducers from "./features/posts/postSlice";
import counterReducer from "./features/counter/counterSlice";
import userReducer from "./features/users/userSlice";
const store = configureStore({
  reducer: {
    posts: postReducers,
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
