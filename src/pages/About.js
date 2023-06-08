import React, { Component } from 'react';
import "./About.css";
import slim_profile_pic from "../assets/slim_profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src = {slim_profile_pic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Sam Lim (Slim)</div>
              <div className="brief_description">
                Hi! My name is Slim and I am a rising junior at Rice University majoring in Computer Science. In my free time I enjoy playing volleyball, making ceramics, and rock climbing. 
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}