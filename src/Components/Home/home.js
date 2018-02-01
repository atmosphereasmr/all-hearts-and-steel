import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {

  spotify() {
    window.location.assign('https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix')
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="album-div">
          <div className="album" />
          </div>
          <div className="songs-div">
          <div className="fancy" />
          <div className="song-text" onClick={() => this.spotify()}>➣  1. The Somebody Song 3:54</div>
          <div className="song-text" onClick={() => this.spotify()}>➣  2. Wild Irises 3:26</div>
          <div className="song-text" onClick={() => this.spotify()}>➣  3. Along Came Jody 4:37</div>
          <div className="song-text" onClick={() => this.spotify()}>➣  4. Must Have Been (Anything But Me) 3:23</div>
          <div className="fancy-upside" />
          </div>
        </div>
      </div>
    )
  }
}
