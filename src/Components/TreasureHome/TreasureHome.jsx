import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './TreasureHome.css';
import { updateUser } from '../../api/index.js';
import { columnSelectionComplete } from '@syncfusion/ej2-react-grids';
// import { useLocation } from 'react-router-dom'
let count = 0;
let accuracy;
const TreasureHome = () => {
    const [unlock, setUnlock] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(true);
    const [firstAccuracy, setFirstAccuracy] = useState(0);
    const [firstcluetime, setFirstClueTime] = useState(0);
    // const [start, setStart] = useState(0);
    // const [end, setEnd] = useState(0);
    const answer = 'turing';
    const [userInput, setUserInput] = useState('');
    const location = useLocation();
    accuracy = (1000 - count) / 10
    // const { email } = location.state;
    // const Email = email;
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    const Email = 'sample7@gmail.com';

    const timecheck = () => {
        console.log(accuracy)
        if (accuracy < 98) {

            return false;

        }
        return true;
    }
    // console.log((1000 - count) / 10);
    const handleClueOneAnswer = (val) => {
        count++;
        setFirstAccuracy(count);
        setUserInput(val);
    }
    const increaseLevel = async () => {
        const user = await updateUser({ email: Email, level: 1, firstClueAccuracy: '95' })
        console.log(user)
    }
    useEffect(() => {
        increaseLevel();
    }, [])
    const handleCheck = () => {
        if (userInput == answer) {
            setWrongAnswer(true);
            setUnlock(true);
        }
        else {
            setUnlock(false);
            setWrongAnswer(false);
        }
    }
    return (
        <div className='treasureHome'>
            <p className='firstHeading'>Find the first synonym!</p>
            <div className='firstCenterDiv'>
                <div className='firstLeftDiv'>

                    <p className='firstDescription'>Welcome to Stage 1 of your treasure Hunt ! In order to
                        reach to the next clue you must clear the given task. In this task, you need to find the first synonym or a word which has
                        a similar meaning to the below sentence.  </p>
                    <h1 className='firstHint'>A person skilled in mathematics</h1>
                    <a className='firsthintSize firstResource' href="https://www.youtube.com/watch?v=dOqlfUkDnTU">Solve Me and I'll help you to reach to the next clue</a>
                </div>
                <div className='secondRightDiv'>
                    {/* <input type='text' placeholder='Answer' onChange={(e) => { handleClueOneAnswer(e.target.value) }} /> */}
                    <input className='firstMarginLeft emailInput' type='text' placeholder='Answer' onChange={(e) => { handleClueOneAnswer(e.target.value) }} />
                    {/* <button onClick={handleCheck} >Click me to pass this Clue</button> */}
                    <Link to={"/home"}><button onClick={handleCheck} className='emailButton'>Click me to pass this Clue</button></Link>
                    {
                        // timecheck
                        !timecheck() && (
                            <>
                                <Link to={"/"}><br /><br /><button className='emailButton firstPassedClue backRed'>Time Up! Start Again</button></Link>
                            </>
                        )
                    }
                    {
                        // timecheck
                        unlock && timecheck() && (
                            <>
                                <Link state={{ email: Email }} to={"/posts"}><br /><br /><button className='emailButton firstPassedClue backRed'>You Found Me! Go Clue 2 </button></Link>
                            </>
                        )
                    }
                    {
                        !wrongAnswer && (
                            <>
                                <p className='firstFailedClueMsg'>Well Try! But I cannot help you to reach to the next level.</p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TreasureHome