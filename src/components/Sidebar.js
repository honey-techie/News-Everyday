import React from "react";
import "./sb.css";
import icon from "./images.png";
import icon1 from "./download.jpg";
import { Link } from "react-router-dom";
export default function Sidebar(props) {
  // const sidebarClass = this.props.setSide ? "sidebar open" : "sidebar";
  // document.getElementById("mySidebar").style.width = "250px";
  return (
    <div className={`${props.setSide ? "sidebar open" : "sidebar"} `}>
      <div
        style={{
          paddingLeft: "10px",
          fontSize: "1.6rem",
          paddingRight: "11px",
        }}
      >
        <img
          src={icon}
          style={{
            width: "37px",
            height: "42px",
            paddingBottom: "5px",
            paddingRight: "4px",
          }}
          alt=""
        />
        News Everyday
        <hr style={{ paddingBottom: "2px" }} />
      </div>
      <div
        style={{
          backgroundColor: "f6f6fcc7",
          margin: "7px 12px 5px 12px",
        }}
      >
        <div
          style={{
            fontSize: "1.3rem",
            paddingLeft: "19px",
            paddingBottom: "5px",
          }}
        >
          <img
            src={icon1}
            style={{
              width: "25px",
              height: "30px",
              paddingBottom: "5px",
              paddingRight: "4px",
            }}
            alt=""
          />
          News Sources
        </div>
        <Link to="/bbc-news">BBC-News</Link>
        <Link to="/business-insider">Business-insider</Link>
        <Link to="/engadget">Engadget</Link>
        <Link to="/cnn">CNN</Link>
        <hr style={{ paddingBottom: "3px", paddingTop: "3px" }} />
        <Link to="/google-news">Google-News</Link>
        <Link to="/Hindustan-times">Hindustan Times</Link>
        <Link to="/Moneycontrol">Moneycontrol</Link>
        <Link to="/News18">News18</Link>
        <Link to="/the-times-of-india">The Times of India</Link>
        <Link to="/the-washington-post">The Washington Post</Link>
        <hr style={{ paddingBottom: "3px", paddingTop: "3px" }} />
      </div>
    </div>
  );
}
