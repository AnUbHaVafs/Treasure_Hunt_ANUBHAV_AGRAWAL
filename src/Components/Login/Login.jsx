import React, { useEffect, useState } from 'react'
// import './Email.css';
import { Link } from 'react-router-dom';
import mapTwo from './tre.jpg';
import { useLocation } from 'react-router-dom'
import { getUser } from '../../api/index.js';
import { convertStringToValue } from '@syncfusion/ej2/maps';
const Login = () => {
    const [id, setId] = useState('')
    const [pass, setPass] = useState('')
    const location = useLocation();
    const { userid, userpass, email } = location.state;
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    // const Email = email;
    const Email = 'sample7@gmail.com';
    const validate = () => {
        if (userid == id && userpass == pass) {
            console.log(email)
            return true;
        }
        return false;
    }

    return (
        <div>
            <div className='mainDiv'>
                <div className='emailDiv'>
                    <div className='emailEnterDiv'>
                        <h2 className='emailHeading'>START NOW</h2>
                        <p className='emailSubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus?</p>
                        <div className='inputsDiv'>
                            <input className='emailInput' type='text' onChange={(e) => { setId(e.target.value) }} placeholder='Your Unique ID' /><br />
                            <input className='emailInput' type='text' onChange={(e) => { setPass(e.target.value) }} placeholder='Your Password' /><br />
                            {
                                validate() ? <Link state={{ email: Email }} to={"/home"}><button className='emailButton'>Start The Treasure</button></Link> :
                                    <Link to={"/login"}><button className='emailButton'>Type Correct Credentials</button></Link>
                            }


                        </div>
                    </div>
                </div>
                <img src={mapTwo} alt='mapTwo' className='mapImage' />
            </div>
        </div>
    )
}

export default Login