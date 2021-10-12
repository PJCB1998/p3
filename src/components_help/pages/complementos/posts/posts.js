import "./posts.css";
import Post from "../post/post";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="images/s1.jpg" />
      <Post img="images/s2.jpg" />
      <Post img="images/s3.png" />
      <Post img="images/s4.jpg" />
    </div>
  );
}
