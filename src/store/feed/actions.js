import axios from "axios";
import { API_URL } from "../../config";

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postFetch(posts) {
  return {
    type: "feed/postsFetched",
    payload: posts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());
  const offset = getState().feed.posts.length;

  const res = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);
  console.log("this is res", res);
  const morePosts = res.data.rows;
  dispatch(postFetch(morePosts));
}
