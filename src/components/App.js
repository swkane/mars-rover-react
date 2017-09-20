import React, { Component } from 'react';
import '../styles/App.css';
import GetImageForm from './GetImageForm';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';


// ex url = https://api.nasa.gov/planetary/apod?api_key=TWxJdaVFVvAtgp7IqxtPENyts0XuXiGicOzXtDRp
// Key TWxJdaVFVvAtgp7IqxtPENyts0XuXiGicOzXtDRp
class App extends Component {
  render() {
    return (
      <div>
        <div>
        <GetImageForm />
        <GetImageButton />
        </div>
      </div>
    );
  }
}

export default App;
