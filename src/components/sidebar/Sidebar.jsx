import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";

export default function Sidebar() {
  const url = "http://localhost:5000/api";
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${url}/categories`);
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSeBH5ZMgU-wE4p4eHv0eu1-dMDRsUVAbvjGJ8DhduWaPX4_RI-IMbNkkQkJALKnkg8r4uqYEiCTnKMShY"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem"> {c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
