import { ADD_USER } from "../constants/action-types";

const initialState = {
  articles: [],
  id:0
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      id:action.id+1
    });
  }
  return state;
}

export default rootReducer;
