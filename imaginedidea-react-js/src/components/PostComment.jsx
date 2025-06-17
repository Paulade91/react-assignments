import { useEffect, useState } from "react";

function PostComment({ post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [post.id]);

  return (
    <div>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostComment;
