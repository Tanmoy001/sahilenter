import React from 'react'
import './contactform.css'
function Contactform() {
    return (
        <div className='contactus_form_section'>
            <div className='formheading'>
                <h6>Get In Touch</h6>
                <h5>Fill out the form and I will reach out, as soon as possible! </h5>
            </div>
            <div className='contactusform'>
                <form>
                    <div className='inputBox'>
                        <input type='text' name='name' placeholder='Enter Your Name' size='20' required />
                        <span className="line"></span>
                    </div>
                    <div className='inputBox'>
                        <input type='number' name='number' placeholder='Enter Your Phone Number' size="80" />
                        <span className="line"></span>
                    </div>
                    <div className='inputBox'>
                        <input type='email' name='email' placeholder='Enter Your Email' required/>
                        <span className="line"></span>
                    </div>
                    <div className='inputBox'>
                        <input type='text' name='subject' placeholder='Enter Your Subject' required/>
                        <span className="line"></span>
                    </div>
                    <div className='inputBox'>
                        <input type='text' name='message' placeholder='Enter Your Message' required/>
                        <span className="line"></span>
                    </div>
                    <button type='submit'>Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Contactform
