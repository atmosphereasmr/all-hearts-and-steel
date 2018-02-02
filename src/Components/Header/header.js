import React, { Component } from 'react'
import './header.css'
import axios from 'axios'

export default class Header extends Component {

  componentDidMount() {

    axios.get('/api/items')
    .then(response => {
      console.log(response)
    }).then(
      axios.interceptors.response.use(response => {
        return response.headers['content-type'] === 'application/json' ? response : Promise.reject(response);
      }, error => Promise.reject(error))
    )
  }

  itunes() {
    window.location.assign('https://itunes.apple.com/us/album/all-hearts-and-steel-ep/1318723897')
  }

  amazon() {
    window.location.assign('https://www.amazon.com/Along-Came-Jody-Deone/dp/B077TLSMN6/ref=as_li_ss_tl?s=dmusic&ie=UTF8&qid=1514096810&sr=1-1-mp3-albums-bar-strip-0&keywords=Deone&linkCode=sl1&tag=vinmarmansh00-20&linkId=51fa5b49db9cb2125929f5c3de4ddf4d')
  }

  spotify() {
    window.location.assign('https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix')
  }


  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-font">DeOne</div>
          <div className="header-font">Music</div>
          <div className="header-font">About</div>
        </div>
        <div className="header-pic">
          <div className="title-font">All Hearts And Steel</div>
          <div className="icon-container">
            <div className="itunes" onClick={() => this.itunes()} />
            <div className="amazon" onClick={() => this.amazon()} />
            <div className="spotify" onClick={() => this.spotify()} />
          </div>
        </div>
      </div>
    )
  }
}
