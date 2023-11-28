import React from 'react';
import './footer.css';
import fot from '../../assets/describir moto.jpeg'
const Footer = () => {
  return (
    <footer>
      <img class="fot"src={fot} alt="" />
      <a href=''>Hecho por Esteban Montoya</a>
    </footer>
  );
};

export default Footer;