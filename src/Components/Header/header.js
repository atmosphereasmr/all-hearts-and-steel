import React, {Component} from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
      <div className="header-container">
      <img src={require('../../Assets/logo.jpg')} width="125px" height="75px" />
      <img src={require('../../Assets/contact.jpg')} width="125px" height="75px" />
      </div>
      <div className="header-pic">
      <h1 className="title-font">All Hearts And Steel</h1>
      <h1 className="available-font">Available on</h1>
      <div className="icon-container">
            <a href="https://itunes.apple.com/us/album/all-hearts-and-steel-ep/1318723897">
      <img src={require('../../Assets/itunes.png')} className="itunes"/>
      </a>
            <a href="https://open.spotify.com/album/2MaVAN6yJtZ2a4k0WS8hix">
      <img src={require('../../Assets/spotify.png')} className="spotify"/>
      </a>
      <a href="http://amzn.to/2C20iS6">
      <img src={require('../../Assets/amazon.png')} className="amazon"/>
      </a>
      </div>
      </div>
      </div>
    )
  }
}
