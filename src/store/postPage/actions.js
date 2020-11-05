import axios from "axios";
import { API_URL } from "../../config";

export function startLoadingPost() {
  return {
    type: "post/startLoading",
  };
}

export function postFullyFetched(fullPost) {
  return {
    type: "post/fullyFetched",
    payload: fullPost,
  };
}

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    console.log("what is post response", postResponse);
    console.log("what is comment response", commentsResponse);
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
