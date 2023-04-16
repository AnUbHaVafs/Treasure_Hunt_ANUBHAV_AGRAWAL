import React, { useEffect, useState } from 'react'
import './Findme.css';
import leftArrow from './leftArr.png';
import rightArrow from './rightArr.png';
import Cycle from './cycle.jpg';
import Mirror from './mirror.jpg';
import Instagram from './instagram.jpg';
import Shadow from './shadow.jpg';
import { Link } from 'react-router-dom';
import { updateUser } from '../../api/index.js';
import { useLocation } from 'react-router-dom'
let count = 0;
let accuracy;
const Findme = () => {
    const [curr, setCurr] = useState(1);
    const [ansOne, setAnsOne] = useState('');
    const [ansTwo, setAnsTwo] = useState('');
    const [ansThree, setAnsThree] = useState('');
    const [ansFour, setAnsFour] = useState('');
    const location = useLocation();
    // const { email } = location.state;
    // const Email = email;
    const Email = 'sample7@gmail.com';
    accuracy = (1000 - count) / 10;
    const increaseLevel = async () => {
        const user = await updateUser({ email: Email, level: 3 })
        console.log(user)
    }
    const setAnsOneF = (val) => {
        setAnsOne(val);
        count++;
    }
    const setAnsTwoF = (val) => {
        setAnsTwo(val);
        count++;
    }
    const setAnsThreeF = (val) => {
        setAnsThree(val);
        count++;
    }
    const setAnsFourF = (val) => {
        setAnsFour(val);
        count++;
    }
    const timecheck = () => {
        console.log(accuracy)
        if (accuracy < 95) {

            return false;

        }
        return true;
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

    const handleLeft = () => {
        if (curr == 1) {
            setCurr(4);
        }
        else {
            setCurr(curr - 1);
        }
    }
    const handleRight = () => {
        if (curr == 4) {
            setCurr(1);
        }
        else {
            setCurr(curr + 1);
        }
    }
    const Check = () => {
        if (ansOne != "Instagram" || ansTwo != "Cycle" || ansThree != "Shadow" || ansFour != "Mirror") {
            return false;
        }
        return true;
    }
    return (
        <div className='findmeMain'>
            <div className='findmeUpper'>
                <div className='findmeImgAndArrow'>
                    <div className='findmeArrLeft'>
                        <img onClick={() => { handleLeft() }} className='findmeLeftArrowImage' src={leftArrow} alt='leftArrows' />
                    </div>
                    {
                        (curr == 1 ? <img className='findmeImage' src={Instagram} alt='leftArrows' /> : (
                            (curr == 2) ? <img className='findmeImage' src={Cycle} alt='leftArrows' /> : (
                                (curr == 3) ? <img className='findmeImage' src={Shadow} alt='leftArrows' /> : (
                                    <img className='findmeImage' src={Mirror} alt='leftArrows' />
                                )
                            )
                        ))
                    }
                    <div className='findmeArrRight'>
                        <img onClick={() => { handleRight() }} className='findmeRightArrowImage' src={rightArrow} alt='leftArrows' />

                    </div>

                </div>
                <div className='findmeDescription'>
                    <p className='findmeHeading'>Welcome to Clue 3 !</p>
                    <p className='findmeHintText'>In this clue, your task is to find one object from each 4 images such that the object name must complete anyone of the below inputs. You MUST fill all 4 inputs to get to the next clue. </p>
                </div>
            </div>
            <div className='findmeLower'>
                <div className='findmeInputs'>
                    {/* // 4 inputs , one for each image */}
                    <input onChange={(e) => { setAnsOneF(e.target.value) }} className='emailInput marginConfig colorBlack' type='text' placeholder='____a____(1)' />
                    <input onChange={(e) => { setAnsTwoF(e.target.value) }} className='emailInput marginConfig colorBlack' type='text' placeholder='_y___(2)' />
                    <input onChange={(e) => { setAnsThreeF(e.target.value) }} className='emailInput marginConfig colorBlack' type='text' placeholder='Sh_d__(3)' />
                    <input onChange={(e) => { setAnsFourF(e.target.value) }} className='emailInput marginConfig colorBlack' type='text' placeholder='M_rr__(4)' />

                </div>
                <div className='findmeSubmit'>
                    {
                        (!timecheck() &&

                            <Link to={"/"}><button className='colorBlack newConfig emailButton'>Time Up! Start Again</button></Link>)
                    }
                    {
                        (!Check() && timecheck() ?

                            <Link to={"/wikiClue"}><button className='colorRed newConfig emailButton'>Unlock me!</button></Link> :
                            <Link state={{ email: Email }} to={"/iamhidden"}><button className='colorRed newConfig emailButton'>You Got it! Clue 3</button></Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Findme