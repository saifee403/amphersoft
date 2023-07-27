import React from 'react'
import Title from '../common/title/Title'
import { online } from '../../dummydata'

function OnlineService() {
  return (
    <>
    <section className='online'>
      <div className='container'>
        <Title  title='Industries we have served' />
        <div className='content grid3'>
          {online.map((val, index) => (
            <div className={`box-${index + 1}`}>
              <div className='img'>
                <img src={val.cover} alt=''/>
                {/* <img src={val.hoverCover} alt='' className='show' /> */}
              </div>
              <h1>{val.courseName}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  )
}

export default OnlineService