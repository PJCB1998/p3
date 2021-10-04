import React from "react";
import "../../App.css";
import ReactPlayer from "react-player";
function Products() {
  return (
    <div className="products">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        width="50%"
        height="50%"
        position=""
        controls
        playing
      />
    </div>
  );
}
export default Products;
