import React, { useEffect } from "react";
import moment from "moment";
import { fetchNext5Posts } from "../store/feed/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectPost } from "../store/feed/selector";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectPost);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="meta">
                {moment(post.createdAt).format("DD-MM-YYYY")}{" "}
                <span className="tags">
                  {post.tags.map((tag) => {
                    return (
                      <React.Fragment key={tag.id}>
                        <span className="Tag">{tag.tag}</span>{" "}
                      </React.Fragment>
                    );
                  })}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={() => dispatch(fetchNext5Posts)}>
            Show More Posts
          </button>
        )}
      </p>

      {/* TODO: render the list of posts */}

      {/* TODO: show a loading indicator when the posts are loading,
        or else a button to load more posts if not */}
    </div>
  );
}
