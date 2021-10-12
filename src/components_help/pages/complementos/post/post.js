//import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
    </div>
  );
}
