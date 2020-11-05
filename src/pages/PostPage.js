import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const postWithComments = useSelector(selectPostAndComments);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("what is postId", id);
  console.log("what is postWithComments", postWithComments);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      <h3>This is the post Page</h3>
      <div>
        {postWithComments === null ? (
          <p>...Loading</p>
        ) : (
          <>
            <p>Searching Done!</p>
            <h1>{postWithComments.post.title}</h1>
            <p className="meta">
              Date Written: {postWithComments.post.createdAt} Author:
              {postWithComments.post.developer.name} Tags:
              {postWithComments.post.tags.map((tag) => {
                return <div key={tag.id}>{tag.tag}</div>;
              })}
            </p>
            <ReactMarkdown source={postWithComments.post.content} />
            <h2>Comments</h2>
            <p>TODO</p>
          </>
        )}
      </div>
    </div>
  );
}
