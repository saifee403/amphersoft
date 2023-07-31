import React from 'react'
import { coursesCard } from '../../dummydata'
import "./service.css"

function ServiceCard() {
  return (
<>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val, index) => (
            <div key={index} className={`items-${index + 1}`}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  {/* <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div> */}

                </div>
              </div>
              {/* <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button> */}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServiceCard