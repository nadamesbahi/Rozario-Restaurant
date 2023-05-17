import React from 'react'
import '../MesComposants/style.css'

export default function Footer() {
  const repretoire = './picturesProjet/'
  return (
    <footer className='container-fluid'>
      <div className='contentP'>
        <div className='content1'>
          <img src={repretoire + 'logo.svg'} alt="Logo" id='log' />
          <p>Thank you for being a friend. Travelled  <br />
            down the road and back again. Your heart  <br />is true you're a pal and a confidant.</p>
        </div>
        <div className="content2">
          <h5>WORKING HOURS</h5>
          <span>Monday - Sunday</span>
          <p>9.00 AM to 11.00 PM</p>
        </div>
        <div className="content3">
          <h5>SUBSCRIBE</h5>
          <input type="email" name="email" id="email" placeholder='Email' />
          <i className="bi bi-send h4" id='em'></i>
        </div>
      </div>
      <div className="row content4">
        <p id='pF'>Rozario all Rights Reserved.Designed By <span>Nada Mesbahi</span></p>
      </div>
      <div className="icons">
        <div className="icons">
          <a href="https://web.facebook.com/nada.mesbahi.56"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/nada_mesbahii/"><i className="bi bi-instagram"></i></a>
          <a href="https://www.twitter.com"><i class="bi bi-twitter"></i></a>
        </div>
      </div>

    </footer>
  )
}
