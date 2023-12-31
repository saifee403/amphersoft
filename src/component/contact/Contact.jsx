import React from 'react'
import Back from '../common/back/Back'
import "./contact.css"

function Contact() {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27264.47526207908!2d74.3742454!3d31.329732399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1690377835793!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
    <Back title='Contact us' />
    <section className='contacts padding'>
      <div className='container shadow flexSB'>
        <div className='left row'>
          <iframe title='map' src={map} frameborder="0"/>
        </div>
        <div className='right row'>
          <h1>Contact us</h1>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className='items grid2'>
            <div className='box'>
              <h4>ADDRESS:</h4>
              <p>56 A, First Floor,Comertial Area,near Dubai Islamic Bank, Central Park Housing Scheme - Gate 1Ferozepur Road, Lahore.</p>
            </div>
            <div className='box'>
              <h4>EMAIL:</h4>
              <p> info@yoursite.com</p>
            </div>
            <div className='box'>
              <h4>PHONE:</h4>
              <p> + 1235 2355 98</p>
            </div>
          </div>

          <form action='https://formspree.io/f/moqojepp' method='POST'>
            <div className='flexSB'>
              <input name='name' type='text' placeholder='Name' />
              <input name='email' type='email' placeholder='Email' />
            </div>
            <input name='msg' type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'>
              Create a message here...
            </textarea>
            <button className='primary-btn'>SEND MESSAGE</button>
          </form>

          <h3>Follow us here</h3>
          <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
        </div>
      </div>
    </section>
  </>
  )
}

export default Contact