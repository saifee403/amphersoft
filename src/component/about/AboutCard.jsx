import React from 'react'
import Awrapper from './Awrapper'
import Title from '../common/title/Title'

import { homeAbout } from '../../dummydata'
import "./about.css"

function AboutCard() {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
    
            <img src="https://www.quba.solutions/wp-content/uploads/2020/10/cross-legged-woman.png.webp" alt="" />
          </div>
          <div className='right row'>
            <Title subtitle='Excellence, Integrity, People Centric Approach' title='Digitizing your vision into working solutions' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper/>
    </>
  )
}

export default AboutCard