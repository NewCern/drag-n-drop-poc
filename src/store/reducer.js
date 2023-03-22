import { combineReducers } from "redux";
import { boardReducer } from "./board/actions.reducers";

const rootReducer = combineReducers({
    todoBoard: boardReducer,
})

export default rootReducer;