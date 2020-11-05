export function selectPostAndComments(state) {
  return state.postPage.loading
    ? null
    : { post: state.postPage.post, comments: state.postPage.comments };
}
