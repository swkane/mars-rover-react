import React from 'react';

export default ({images}) => (
  <ul>
    {images.map(image =>
      <li key={image.id}><img src={image.img_src} alt="mars" /></li>)}
  </ul>
);
