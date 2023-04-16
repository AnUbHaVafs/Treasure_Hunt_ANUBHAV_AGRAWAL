import React, { useState, useEffect } from 'react'
// import './Email.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import mapTwo from './tre.jpg';
import { updateUser } from '../../api/index.js';
const IdAndPassword = () => {
    // const [Email, setEmail] = useState('');
    const [id, setId] = useState('')
    const [pass, setPass] = useState('')
    const location = useLocation()
    const { email } = location.state
    // const Email = email;
    const Email = 'sample7@gmail.com';
    const handleChange = () => {
        if (id.length < 6 || pass.length < 6) {
            return false;
        }
        return true;
    }
    const handleClick = async () => {
        // setEmail(email)
        const data = { uniqueId: id, password: pass, email: email };
        console.log(data);
        try {
            const newUser = await updateUser(data);
            console.log(newUser);
        }
        catch (e) {
            console.log(e.message)
        }
    }
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    return (
        <div>
            <div className='mainDiv'>
                <div className='emailDiv'>
                    <div className='emailEnterDiv'>
                        <h2 className='emailHeading'>START NOW</h2>
                        <p className='emailSubHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, temporibus?</p>
                        <div className='inputsDiv'>
                            <input className='emailInput' onChange={(e) => { setId(e.target.value) }} type='text' placeholder='Enter New Unique ID' /><br />
                            <input className='emailInput' onChange={(e) => { setPass(e.target.value) }} type='text' placeholder='Enter New Password' /><br />
                            {
                                handleChange() ? <Link state={{ email: Email, userid: id, userpass: pass }} to={"/login"}><button onClick={handleClick} className='emailButton'>Create a Free Account</button></Link> :
                                    <Link to={"/idpassword"}><button className='emailButton'>Type atleast 6 digits both</button></Link>
                            }

                        </div>
                    </div>
                </div>
                <img src={mapTwo} alt='mapTwo' className='mapImage' />
            </div>
        </div>
    )
}

export default IdAndPassword