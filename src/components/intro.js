import React from 'react'
import './intro.css'
import monitor from '../assets/monitor (1).png'
function Intro() {
    return (
        <div className='app__intro__container'>
            <div className='app__intro__text'>
                <div className='app__intro__header'>
                    <h1>ANYBooks for selling and exchanging and donations books</h1>
                </div>
                <div className='app__intro__desccription'>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking
                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                        at its layout. The point of using Lorem Ipsum is that it has a more-or-less

                    </p>
                </div>
                <div className='app__intro__button'>
                    <button className='contact__US'>Contact us</button>
                </div>
            </div>
            <div className='app__intro__image'>
                <img src={monitor} />
            </div>

        </div>
    )
}

export default Intro