import React from 'react'
import './Footer.css';

export const Footer = () => {
    const year= new Date();
  return (
    <footer id='footer-copy'>Copyright &copy; {year.getFullYear()}</footer>
  )
}
export default Footer;