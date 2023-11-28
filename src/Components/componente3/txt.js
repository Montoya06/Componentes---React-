import React from 'react';
import './texto.css'
const Text = ({ content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac purus ut ex tincidunt efficitur. Vestibulum magna elit, eleifend at dictum in, porta in tortor. Curabitur ornare odio nec ultrices efficitur. Vivamus sollicitudin mi sit amet ultricies consectetur. Donec malesuada faucibus erat tincidunt volutpat. Maecenas pulvinar risus urna, id imperdiet odio pulvinar a. Pellentesque orci diam, rhoncus at ipsum a, tempor ullamcorper erat. Fusce feugiat eros sed pellentesque maximus. Vestibulum malesuada ipsum eget tellus dapibus malesuada. Fusce sit amet augue aliquam, placerat turpis quis, tincidunt felis" }) => {
  return <p class="container">{content}</p>;
  
};

export default Text;