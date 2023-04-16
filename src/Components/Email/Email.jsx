import React, { useState, useEffect } from 'react'
import './Email.css';
import { Link } from 'react-router-dom';
import validator from "validator";
import mapTwo from './tre.jpg';
import { addUser } from '../../api/index.js';
const Email = () => {
    const [Email, setEmail] = useState('');
    const [message, setMessage] = useState(false);

    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    const validateEmail = (e) => {
        setEmail(e.target.value)
        var email = e.target.value;

        if (validator.isEmail(email) && email.includes('@gmail.com')) {
            setMessage(true);
        } else {
            setMessage(false);
        }
    };
    const handleNewUser = async () => {
        const data = { email: Email };
        try {
            const newUser = await addUser(data);
            console.log(newUser);
        }
        catch (e) {
            console.log(e.message.split(' ')[5])
        }
    }
    return (
        <div>
            <div className='mainDiv'>
                <div className='emailDiv'>
                    <div className='emailEnterDiv'>
                        <h2 className='emailHeading'>START NOW</h2>
                        <p className='emailSubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus?</p>
                        <div className='inputsDiv'>
                            <input type="email" onChange={(e) => validateEmail(e)} id="email" name="email" className='emailInput' placeholder='Enter your email' required /><br />
                            {/* <span
                                style={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                {message}
                            </span> */}
                            {message ? <Link state={{ email: Email }} to={"/idpassword"}><button onClick={() => { handleNewUser() }} className='emailButton'>Create a Free Account</button></Link> :
                                <Link to={"/"}><button className='emailButton'>Type your email</button></Link>
                            }
                        </div>
                    </div>
                </div>
                <img src={mapTwo} alt='mapTwo' className='mapImage' />
            </div>
        </div>
    )
}
export default Email