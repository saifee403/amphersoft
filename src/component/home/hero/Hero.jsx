import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

function Hero() {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO AMPHERSOFT" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum magnam eum ducimus quis voluptatibus! Beatae recusandae cum, consequatur similique, quo laudantium labore"/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum magnam eum ducimus quis voluptatibus! Beatae recusandae cum, consequatur similique, quo laudantium labore, aut rem esse quis nobis ea repudiandae saepe.</p>
                    <div className="button">
                        <button className="primary-btn">
                            Get Started <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                        <button>
                            Services <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero