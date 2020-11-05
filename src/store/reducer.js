import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  // someFeature: someFeatureReducer
  // etc...
});

export default reducer;
