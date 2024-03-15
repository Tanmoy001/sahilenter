import React, { useState, useEffect } from 'react';
import './aboutcom.css';
import pic from './img_2.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
function Aboutcom() {
    const [animationTriggered, setAnimationTriggered] = useState();
    const [active, setActive] = useState('about')
    const{ref, inView}=useInView();
    useEffect(() => {
        if(inView){
            setAnimationTriggered("animatet");
            const timer = setTimeout(()=>{
                setActive('activeabout')
            },500);
        return () =>  clearTimeout(timer);
        }
        
    }, [inView]);
    return (
        <>
            <div className="about_company_section">
                <div className='about_company'>
                    <div className='compat_one'>
                        <div className='pic_container'>
                            <img src={pic} alt="companypic" />
                        </div>
                    </div>
                    <div className='compat_two'>
                        <div className='compat_two_container'>
                            <div className='lines'></div>
                            <div className='content_container'>
                                <div className='content'>
                                    <h2 className={`title${animationTriggered}`}ref={ref}>About Company</h2>
                                    <p className={`about ${active}`}>Established in Kolkata (West Bengal), India in the year 2007, ESSDEE PROJECTS ENGINEERING PVT LTD. (formerly known as D.S. ENGINEERING & CONSTRUCTION COMPANY) has been a trusted name in the field of Civil and Mechanical construction services.
                                        At ESSDEE PROJECTS, our mission is to deliver excellence in every project we undertake. We are committed to providing high-quality, cost-effective, and timely solutions that exceed our clients’ expectations.</p>
                                </div>
                                <br />
                                <h5>Our Values</h5>
                                <div className='points_check'>
                                    <p><FaCheckCircle />&nbsp;Good Straching</p>
                                    <p><FaCheckCircle />&nbsp;Good Straching</p>
                                    <p><FaCheckCircle />&nbsp;Good Straching</p>
                                    <p><FaCheckCircle />&nbsp;Good Straching</p>
                                    <button>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutcom
