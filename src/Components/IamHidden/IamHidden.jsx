import React, { useEffect } from 'react'
import './IamHidden.css';
import { Link } from 'react-router-dom';
import { updateUser } from '../../api/index.js';
import { useLocation } from 'react-router-dom'
const IamHidden = () => {
    const location = useLocation();
    // const { email } = location.state;
    // const Email = email;
    const Email = 'sample7@gmail.com';
    const increaseLevel = async () => {
        const user = await updateUser({ email: Email, level: 4 })
        console.log(user)
    }
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    useEffect(() => {
        increaseLevel();
    }, [])
    return (
        <div className='fourMain'>
            <div className='fourMarginConfig'>
                <p className='fourMainHeading'>Click Me I'm Hidden Here in your screen only! </p>
            </div>
            <Link state={{ email: Email }} to={"/wiki"}><button className='colorRed hiddenClass newConfig emailButton'></button></Link>
        </div>
    )
}

export default IamHidden