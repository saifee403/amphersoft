import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

function Hero() {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO AMPHERSOFT" title="Our Passion is to Deliver Software that Helps You Succeed"/>
                    <p>We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!</p>
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