import React,{useState,useEffect} from 'react'
import './service.css'
import pic from './emmmb.jpg';
import { IoCall } from 'react-icons/io5';
import { useInView } from 'react-intersection-observer';
function Services() {
    const [serani, setSerani] = useState("first")
    const { ref, inView } = useInView();
    useEffect(() => {

        if (inView) {
           
            setSerani('service_animation')
        }
  
     
    }, [inView]);
    return (
        <div className='Servies_container'>
            <div className='service_section'>
                <div className='service-header'>
                    <div className='service-header-background'>
                        {/* <img src={pic} alt='Service Image'/> */}

                        <div className='service_header-text'>
                            <h4>Our Service Includes</h4>
                            <p>We provide efficient and best services</p>
                            <button ><IoCall className='icon'/> &nbsp;Contant now
      </button>
                        </div>
                    </div>
                </div>
                <div className='services_section'>
                    <div className='services_column'>
                        <div className={`service_card service_ani`}ref= {ref}>
                            <div className='service_img'>
                                <img src={pic} alt='Service' />
                            </div>
                            <div className='service-card-content'>
                                <h4>Streaching</h4>
                                <p>We excel in the fabrication and erection of pipelines, ensuring seamless and reliable transportation of fluids or gases. Our skilled team utilizes state-of-the-art techniques and materials to deliver durable and efficient pipelines</p>
                            </div>
                        </div>
                        <div className={`service_card service_ani`}ref= {ref}>
                            <div className='service_img'>
                                <img src={pic} alt='Service' />
                            </div>
                            <div className='service-card-content'>
                                <h4>Streaching</h4>
                                <p>We excel in the fabrication and erection of pipelines, ensuring seamless and reliable transportation of fluids or gases. Our skilled team utilizes state-of-the-art techniques and materials to deliver durable and efficient pipelines</p>
                            </div>
                        </div>
                        <div className={`service_card service_ani`}ref= {ref}>
                            <div className='service_img'>
                                <img src={pic} alt='Service' />
                            </div>
                            <div className='service-card-content'>
                                <h4>Streaching</h4>
                                <p>We excel in the fabrication and erection of pipelines, ensuring seamless and reliable transportation of fluids or gases. Our skilled team utilizes state-of-the-art techniques and materials to deliver durable and efficient pipelines</p>
                            </div>
                        </div>
                        <div className={`service_card ${serani}`}ref= {ref}>
                            <div className='service_img'>
                                <img src={pic} alt='Service' />
                            </div>
                            <div className='service-card-content'>
                                <h4>Streaching</h4>
                                <p>We excel in the fabrication and erection of pipelines, ensuring seamless and reliable transportation of fluids or gases. Our skilled team utilizes state-of-the-art techniques and materials to deliver durable and efficient pipelines</p>
                            </div>
                        </div>
                        <div className={`service_card ${serani}`}ref= {ref}>
                            <div className='service_img'>
                                <img src={pic} alt='Service' />
                            </div>
                            <div className='service-card-content'>
                                <h4>Streaching</h4>
                                <p>We excel in the fabrication and erection of pipelines, ensuring seamless and reliable transportation of fluids or gases. Our skilled team utilizes state-of-the-art techniques and materials to deliver durable and efficient pipelines</p>
                            </div>
                        </div>
                        <div className={`service_card ${serani}`}ref= {ref}>
                            <div className='service_img'>
                                <img src={pic} alt='Service' />
                            </div>
                            <div className='service-card-content'>
                                <h4>Streaching</h4>
                                <p>We excel in the fabrication and erection of pipelines, ensuring seamless and reliable transportation of fluids or gases. Our skilled team utilizes state-of-the-art techniques and materials to deliver durable and efficient pipelines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Services
