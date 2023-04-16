import React, { useEffect, useState } from 'react'
import './Wiki.css';
import { Link } from 'react-router-dom';
import { updateUser } from '../../api/index.js';
import { useLocation } from 'react-router-dom'
let count = 0;
let accuracy;
const Wiki = () => {
    const location = useLocation();
    const { email } = location.state;
    const Email = email;
    // const Email = 'sample7@gmail.com';
    accuracy = (1000 - count) / 10;
    const increaseLevel = async () => {
        const user = await updateUser({ email: Email, level: 5 })
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
    const [finalans, setFinalans] = useState('');
    const setFinalansF = (val) => {
        setFinalans(val);
        count++;
    }
    const checkAns = () => {
        if (finalans == "in according capsule") {
            return true;
        }
        return false;
    }
    const timecheck = () => {
        console.log(accuracy)
        if (accuracy < 94) {

            return false;

        }
        return true;
    }
    return (
        <div className='wikiMain'>
            <div className='wikiUpperDiv'>
                <div className='wikiLeftDiv'>
                    <p className='wikiMainHeading'>Destination to Japan</p>
                    <p className='wikiDescriptionOne'>Welcome to the final Clue of your treasure!<br /> In this task you have to travel from Dubai to Japan using the given link.</p>
                    <p className='wikiDescriptionOne'>I'm in the first Para of Wiki</p>
                    <p className='wikiDescriptionOne'>Use the hyperlinks to reach the destination. Destination must be reach using exactly 3 hyperlinks. You have a suitcase with you in which you will carry the next word (may or may not be a hyperlink) of the hyperlink whenever you click on one to reach the destination. If you reached the destination in less than 3 jumps or more than 3 jumps. You will not able to unlock your treasure. I'm the sentence made from picked words squentially. Best of Luck!</p>
                    <a className='firstResource wikiMarginConfig' href="https://en.wikipedia.org/wiki/Dubai">Solve Me ! This is your last Clue!</a>                </div>
                {
                    !timecheck() && <Link to={"/"}><button className='colorRed marginConfigFour newConfig emailButton'>Time Up! Start Again</button></Link>
                }
                {
                    ((checkAns()) && timecheck()) ?
                        (
                            <div className='wikiRightDiv'>
                                <p className='wikiMainHeading wikiConfig'>Congratulations !</p>
                                <p className='wikiMainHeading'>You Found the Treasure.</p>
                                <h3 className='marginConfigThree'>Thank You for playing this game !</h3>
                                <h3 className='marginConfigThree'></h3>
                                <Link to={"/"}><button className='colorRed marginWikiTop marginConfigFour newConfig emailButton'>Your score is 500</button></Link>
                            </div>
                        ) :
                        <p> </p>
                }
                {/* // dubai--> hotel rating --> hotel --> japan */}
                {/* in according capsule */}

            </div>
            <div className='wikiLowerDiv'>
                <input onChange={(e) => { setFinalansF(e.target.value) }} className=' emailInput colorBlack wikiMarginConfigTwo' type='text' placeholder='Next Letters' />
            </div>
        </div>
    )
}

export default Wiki