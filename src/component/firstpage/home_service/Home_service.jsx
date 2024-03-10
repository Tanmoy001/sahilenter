import React from 'react'
import pic from './emmmb.jpg';
import './home_service.css';
function Home_service() {
    return (
        <div className='home_service_section'>
            <div className='home_service_container'>
                <h3>Our services</h3>
                <div className='home_service'>
                    <div className='colors'></div>
                    <div className='servics_contents'>
                        <div className='services_sections'>
                            <div className='Hservice_img'>
                                <img src={pic} alt="" />
                            </div>
                            <h4>Ebrodary design</h4>
                            <p>fsakdfhsdn ashfjkdsh  asdjfhskj asdfhjksah </p>
                        </div>
                        <div className='services_sections'>
                            <div className='Hservice_img'>
                                <img src={pic} alt="" />
                            </div>
                            <h4>Ebrodary design</h4>
                            <p>fsakdfhsdn ashfjkdsh  asdjfhskj asdfhjksah </p>
                        </div>
                        <div className='services_sections'>
                            <div className='Hservice_img'>
                                <img src={pic} alt="" />
                            </div>
                            <h4>Ebrodary design</h4>
                            <p>fsakdfhsdn ashfjkdsh  asdjfhskj asdfhjksah </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home_service
