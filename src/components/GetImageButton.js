import React from 'react';

export default class GetImageButton extends React.Component {
  render() {
     return <button onClick={this.props.fetchRoverImage}>Get Rover Image</button>
  }
}
