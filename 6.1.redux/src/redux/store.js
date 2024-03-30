import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    books: [],
}


const reducer = (state = initialState) => {

return state
} 

const enchancer = devToolsEnhancer()
const store = createStore(reducer, enchancer)

export default store