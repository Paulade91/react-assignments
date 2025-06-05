import { useState } from "react";

function showHideText() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleText = () => {
    setIsVisible(!isVisible);
  };
}
return (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <button onClick={toggleText} className="btn btn-primary">
      {isVisible ? "Hide" : "Show"}
    </button>

    {isVisible && (
      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Welcome to Imagined Idea React Class!
      </p>
    )}
  </div>
);

export default showHideText;
