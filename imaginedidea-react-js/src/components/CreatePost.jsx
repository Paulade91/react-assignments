import { useState, useEffect } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const CREATED = 201;

  useEffect(() => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title;
    } else if (title.length < 4) {
      newErrors.title = "Title must be at least 4 characters.";
    } else if (title.length > 20) {
      newErrors.title = "Title must not exceed 20 characters.";
    }

    if (!body.trim()) {
      newErrors.body;
    } else if (body.length < 10) {
      newErrors.body = "Body must be at least 10 characters.";
    } else if (body.length > 200) {
      newErrors.body = "Body must not exceed 200 characters.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [title, body]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId: 1,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    };

    const postRequest = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    console.log(postRequest);

    if (postRequest.status === CREATED && postRequest.ok === true) {
      setSuccess(true);
      setBody("");
      setTitle("");
    }
  };

  return (
    <div className="container">
      {success && (
        <div className="alert alert-success">Post Created Successfully!</div>
      )}
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <small className="text-danger">{errors.title}</small>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Post Body</label>
          <textarea
            className="form-control"
            rows="3"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {errors.body && <small className="text-danger">{errors.body}</small>}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
