import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';


// ex url = https://api.nasa.gov/planetary/apod?api_key=TWxJdaVFVvAtgp7IqxtPENyts0XuXiGicOzXtDRp
// Key TWxJdaVFVvAtgp7IqxtPENyts0XuXiGicOzXtDRp
class App extends Component {
  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
