const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "post/startLoading": {
      return {
        loading: true,
        post: null,
        comments: [],
      };
    }
    case "post/fullyFetched": {
      console.log("action.payload", action.payload);
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
