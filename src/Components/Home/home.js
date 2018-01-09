import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="album-div">
            <img
              className="album-pic"
              src={require("../../Assets/album.jpg")}
              width="600px"
              height="600px"
            />
          </div>
          <div className="song-div">
            <img
              src={require("../../Assets/fancy.png")}
              width="450px"
              height="200px"
            />
            <a href="https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix">
              <h1 className="song-line">➤ 1. The Somebody Song (3:55)</h1>
            </a>
            <a href="https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix">
              <h1 className="song-line">➤ 2. Wild Irises (3:26)</h1>
            </a>
            <a href="https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix">
              <h1 className="song-line">➤ 3. Along Came Jody (4:37)</h1>
            </a>
            <a href="https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix">
              <h1 className="song-line">➤ 4. Must Have Been (3:24)</h1>
            </a>
            <img
              src={require("../../Assets/fancy-upside.png")}
              width="450px"
              height="200px"
            />
          </div>
        </div>
      </div>
    );
  }
}
