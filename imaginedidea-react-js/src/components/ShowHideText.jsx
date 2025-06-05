import { useState } from "react";

function showHideText() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button onClick={toggleText} className="btn btn-primary">
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            color: "burlywood",
          }}
        >
          Welcome to Imagined Idea React Class!
        </p>
      )}
    </div>
  );
}
export default showHideText;
