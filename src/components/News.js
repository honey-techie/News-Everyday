import React, { Component } from "react";
import NewsItem from "../NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import icon from "./images.png";
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static deafaultProps = {
    country: "in",
    pageSize: 22,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeHadler = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeHadler(
      this.props.category === "null" ? this.props.query : this.props.category
    )} - News Everyday`;
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://eoqkfgurku48lr8.m.pipedream.net/general`;
    if (this.props.category !== "null") {
      url = `https://eoqkfgurku48lr8.m.pipedream.net/${this.props.category}`;
    } else {
      url = `https://eo2grd9cktitvoh.m.pipedream.net/${this.props.query}`;
    }
    console.log(url);
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    console.log(data);
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles ?? this.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = () => {
    //we don't need this for it since page size is already enough for all data
    //but if we had to we will just copy the handleNextClick() and in its this.setState article:articles +parseData.articles(these are articles from the new page)
  };
  handlePrevClick = async () => {
    let url = `https://eod7o2waw6i7n1z.m.pipedream.net/${this.props.category}`;
    //`https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=b0d7dd26147949dfab3104c618aabd89&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(this.props.category);
    this.setState({
      articles: parseData.articles ?? this.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=b0d7dd26147949dfab3104c618aabd89&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        articles: parseData.articles ?? this.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div
        className={
          this.props.setSide
            ? "container my-container harsh"
            : "  my-releaser harsh"
        }
        // style={{ width: "90%" }}
      >
        {/* <Sidebar setSide={1} /> */}

        <h1
          className="text-center fw-bold"
          style={{
            marginBottom: "20",
            marginTop: "70px",
            fontWeight: "700",
            fontFamily: "sans-serif",
            // padding: "3px",
            // backgroundColor: "grey",
          }}
        >
          <hr style={{ marginBottom: "32px" }} />
          <img
            src={icon}
            style={{
              width: "50px",
              height: "55px",
              paddingBottom: "9px",
              paddingRight: "8px",
              borderRadius: "100px",
              color: "#030303",
            }}
            alt=""
          />
          News Everyday - Top HeadLines
          {/* {this.capitalizeHadler(this.props.category)}  */}
        </h1>
        <hr style={{ marginBottom: "1px", marginTop: "25px" }} />
        {this.state.loading && <Spinner />}
        <div className="scroller">
          {/* <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            style={{ display: "inline" }}
          > */}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div
                  className="col-md-4"
                  key={element.url}
                  style={{ padding: "15px" }}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          {/* </InfiniteScroll> */}
        </div>
        <div className="container d-flex justify-content-between my-4"></div>
      </div>
    );
  }
}

export default News;
