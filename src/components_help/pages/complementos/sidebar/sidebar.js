import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">HOT LINES</span>
        <img src="images/hotline.jpg" alt="" />
        <p>
          Argentina:800 5555 5522, Brazil:0800 891 7391, Canada: 866 246 9224,
          Colombia:800 5555 5522, Mexico:001 800 514 3716, España:800 5555 5522,
          Estados Unidos:866 2469224
        </p>
      </div>
    </div>
  );
}
