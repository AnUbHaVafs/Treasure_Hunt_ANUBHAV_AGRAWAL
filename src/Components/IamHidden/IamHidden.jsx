import React from 'react'
import './IamHidden.css';
import { Link } from 'react-router-dom';
const IamHidden = () => {
    return (
        <div className='fourMain'>
            <div className='fourMarginConfig'>
                <p className='fourMainHeading'>Click Me I'm Hidden Here in your screen only! </p>
            </div>
            <Link to={"/wiki"}><button className='colorRed hiddenClass newConfig emailButton'></button></Link>
        </div>
    )
}

export default IamHidden