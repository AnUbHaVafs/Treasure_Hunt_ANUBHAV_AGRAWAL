import React from 'react'
import './Email.css';
import { Link } from 'react-router-dom';
import mapTwo from './tre.jpg';

const Email = () => {
    return (
        <div>
            <div className='mainDiv'>
                <div className='emailDiv'>
                    <div className='emailEnterDiv'>
                        <h2 className='emailHeading'>START NOW</h2>
                        <p className='emailSubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus?</p>
                        <div className='inputsDiv'>
                            <input className='emailInput' required type='text' placeholder='Enter your email' /><br />
                            <Link to={"/idpassword"}><button className='emailButton'>Create a Free Account</button></Link>
                        </div>
                    </div>
                </div>
                <img src={mapTwo} alt='mapTwo' className='mapImage' />
            </div>
        </div>
    )
}
export default Email