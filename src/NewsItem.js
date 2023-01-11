import React, { Component } from "react";
import def_img from "./depositphotos_59421835-stock-photo-internet-multimedia-server.jpg";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    let goTO = () => {
      console.log(url);
      window.open(url, "_blank");
    };
    let touchme = () => {
      document.getElementById("box").classList.add("mybox");
    };
    let Localdate = new Date(date);
    //console.log(Localdate);
    return (
      <div>
        <div
          className="card my-3 underline"
          id="box"
          key={url}
          onClick={goTO}
          onTouchStart={touchme}
          style={{ cursor: "pointer" }}
        >
          <div>
            <span
              className="badge rounded-pill "
              style={{
                position: "absolute",
                justifyContent: "flex-end",
                right: "3px",
                top: "5px",
                backgroundColor: "#ff0000",
              }}
            >
              {source}
            </span>
          </div>
          <img src={imageUrl ?? def_img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{title}... </h5>
            <p className="card-text" style={{ marginBottom: "7px" }}>
              {description}...{" "}
            </p>
            <p className="card-text" style={{ marginBottom: "12px" }}>
              <small className="text-muted">
                Author: {author ?? "Unknown"}
                <br />
                Date: {Localdate.toLocaleString()}
              </small>
            </p>
            <a
              href={url}
              className="btn btn-dark btn-sm"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#030303" }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
//api key-b0d7dd26147949dfab3104c618aabd89
