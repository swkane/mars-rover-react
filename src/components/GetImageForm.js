import React from 'react';

const API_KEY = "TWxJdaVFVvAtgp7IqxtPENyts0XuXiGicOzXtDRp";

export default class GetImageForm extends React.Component {
  state = {
    rover: "Curiosity",
    camera: "FHAZ",
    images: [],
    sol: ""
  }

  handleRover = (e) => {
    // write a function here
  }

  handleCamera = (e) => {
    // write a function here
  }

  handleSol = (e) => {
    // write a function here
  }


  fetchRoverImage = () => {
    let camera = this.state.camera;
    let rover = this.state.rover;
    let sol = this.state.sol;
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;
    fetch(imageUrl)
      .then(response => response.json())
      .then(data => {
        debugger
        // this is where you will fetch your images
      });
  }
      render() {
        return (
          <form>
            <label htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.rover}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
            <label htmlFor="camera">Camera</label>
            <select onChange={this.handleCamera} id="camera" value={this.state.camera}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
          </form>
        )
      }
  }
