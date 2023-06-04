import { postReducer } from "./reducer/postReducer";
import thunk from "redux-thunk";
import{ createStore,applyMiddleware} from 'redux'


const store = createStore(postReducer,applyMiddleware(thunk));
export default store;