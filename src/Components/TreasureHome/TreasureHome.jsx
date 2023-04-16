import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './TreasureHome.css';
let count = 0;
const TreasureHome = () => {
    const [unlock, setUnlock] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(true);
    const answer = 'turing';
    const [userInput, setUserInput] = useState('');
    console.log((1000 - count) / 10)
    const handleClueOneAnswer = (val) => {
        count++;
        setUserInput(val);
    }
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
                        a similar meaning to the below sentence. Click on Solve me and you will be redirected to different page. </p>
                    <h1 className='firstHint'>A person skilled in mathematics</h1>
                    <a className='firstResource' href="https://www.youtube.com/watch?v=dOqlfUkDnTU">Solve Me and I'll help you to reach to the next clue</a>
                </div>
                <div className='secondRightDiv'>
                    {/* <input type='text' placeholder='Answer' onChange={(e) => { handleClueOneAnswer(e.target.value) }} /> */}
                    <input className='firstMarginLeft emailInput' type='text' placeholder='Answer' onChange={(e) => { handleClueOneAnswer(e.target.value) }} />
                    {/* <button onClick={handleCheck} >Click me to pass this Clue</button> */}
                    <Link to={"/home"}><button onClick={handleCheck} className='emailButton'>Click me to pass this Clue</button></Link>
                    {
                        unlock && (
                            <>
                                <Link to={"/posts"}><br /><br /><button className='emailButton firstPassedClue backRed'>You Found Me! Go Clue 2 </button></Link>
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