import React from "react";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import Results from "../Results";
import styled from "styled-components";
import "./index.css";
import { songCreators } from "../../redux/reducers/songReducer";

const { Search } = Input;
const Title = styled.h1`
  font-size: 4em;
  font-weight: bolder;
  color: #03256c;
  margin-top: 1em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

function HomePage({ dispatchSongPhrase, dispatchLocale }) {
  const onSearch = (value) => {
    console.log(dispatchSongPhrase);
    dispatchSongPhrase(value);
    // props.songCreators.requestSimilarSongs(value)
  };

  return (
    <div>
      <Title>Search Your Favourite Book</Title>

      <Search
        style={{ margin: 10, width: 600 }}
        placeholder="Search your music"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />

      <Results />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  const { requestSimilarSongs } = songCreators;
  return {
    dispatchSongPhrase: (songPhrase) =>
      dispatch(requestSimilarSongs(songPhrase)),
  };
}

export default connect(null, mapDispatchToProps)(HomePage);
