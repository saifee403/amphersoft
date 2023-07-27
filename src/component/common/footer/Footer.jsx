import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>AMPHERSOFT</h1>
            <span>Technology simplified for all</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Team</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li>Home</li>
              <li>Services</li>
              <li>Team</li>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
              <i class="fa-solid fa-location-dot"></i>
                56 A, First Floor,Comertial Area,near Dubai Islamic Bank, Central Park Housing Scheme - Gate 1 Ferozepur Road, Lahore.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by Muhammad Saif
        </p>
      </div>
    </>
  )
}

export default Footer