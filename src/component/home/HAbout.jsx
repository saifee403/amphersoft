import React from 'react'
import Title from '../common/title/Title'
import { coursesCard } from '../../dummydata'

function HAbout() {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Title subtitle='Top Services' title='DIGITIZING YOUR VISION INTO WORKING SOLUTIONS' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val, index) => (
                <div className={`items-${index + 1}`}>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default HAbout