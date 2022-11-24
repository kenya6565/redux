import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

// 複数のreducerを1つにしたいときの処理
const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
