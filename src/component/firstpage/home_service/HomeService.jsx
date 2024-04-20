import React, { useEffect,useState } from 'react';
import pic from './emmmb.jpg';
import './home_service.css';
import { useInView } from 'react-intersection-observer';
function HomeService() {
    const [para, setPara] = useState()
    const { ref, inView } = useInView();
    useEffect(() => {

        if (inView) {
           
            setPara('paraenable')
        }
  
     
    }, [inView]);
    return (
        <div className='home_service_section'>
            <div className='home_service_container' >
                <h3>Our services</h3>
                <div className='home_service'>
                    <div className='colors'></div>
                    <div className='servics_contents'>
                        <div className='services_sections'>
                            <div className='Hservice_img'>
                                <img src={pic} alt="" />
                            </div>
                            <h4 className={`h${para}`}>Ebrodary design</h4>
                            <p className={`p${para}`} ref={ref}>fsakdfhsdn ashfjkdsh  asdjfhskj asdfhjksah </p>
                        </div>
                        <div className='services_sections'>
                            <div className='Hservice_img'>
                                <img src={pic} alt="" />
                            </div>
                            <h4 className={`h${para}`}>Ebrodary design</h4>
                            <p className={`p${para}`} ref={ref}>fsakdfhsdn ashfjkdsh  asdjfhskj asdfhjksah </p>
                        </div>
                        <div className='services_sections'>
                            <div className='Hservice_img'>
                                <img src={pic} alt="" />
                            </div>
                            <h4 className={`h${para}`}>Ebrodary design</h4>
                            <p className={`p${para}`} ref={ref}>fsakdfhsdn ashfjkdsh  asdjfhskj asdfhjksah </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeService
