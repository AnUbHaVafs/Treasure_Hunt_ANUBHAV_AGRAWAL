import React, { useEffect, useState } from 'react'
import './Posts.css';
import iOne from './i1.jpg';
import iTwo from './i2.jpg';
import { useLocation } from 'react-router-dom'
import iThree from './i3.jpg';
import iFour from './i4.jpg';
import iFive from './i5.jpg';
import pOne from './p1.jpg';
import { Link } from 'react-router-dom';
import { updateUser } from '../../api/index.js';
let accuracyFactor = 0;
let accuracy;
const Posts = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [correctOne, setCorrectOne] = useState(false);
    const [correctTwo, setCorrectTwo] = useState(false);
    const location = useLocation();
    // const { email } = location.state;
    // const Email = email;
    const Email = 'sample7@gmail.com';
    useEffect(() => {
        window.onbeforeunload = function () {
            return true;
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);
    accuracy = (1000 - accuracyFactor) / 10;
    const increaseLevel = async () => {
        const user = await updateUser({ email: Email, level: 2 })
        console.log(user)
    }
    const timecheck = () => {
        console.log(accuracy)
        if (accuracy < 98) {

            return false;

        }
        return true;
    }

    useEffect(() => {
        increaseLevel();
    }, [])
    const handleLikes = (count) => {
        console.log(count)
        setLikes(count);
        if (count == 54) {
            console.log(count)
            // setCorrect(true);
            setCorrectOne(true);
        }
        accuracyFactor++;
    }
    const handleComments = (count) => {
        console.log(count)

        setComments(count);
        if (count == 60) {
            console.log(count)
            // setCorrect(true);
            setCorrectTwo(true);
        }
        accuracyFactor++;
    }
    console.log((1000 - accuracyFactor) / 10);
    const Check = () => {
        console.log(likes, comments)
        if (likes != 54 || comments != 65) {
            return false;
        }
        return true;
    }
    return (
        <div className='secondMain'>
            <div className='secondHeading'>Here is your clue 2! Given Below are some posts</div>
            <div className='combinedMainDiv'>
                <div className='secondMainDiv resp-secondMainDiv'>
                    <div className='secondCardDiv'>
                        <div className='secondCardUpper'>
                            <img className='wildlifeImage' src={iOne} alt='wildlifeImage' />
                        </div>
                        <div className='secondCardMiddle'>
                            {/* <img className='wildlifeImage' src={pOne} alt='wildlifeImage' /> */}
                        </div>
                        <div className='secondCardLower'>
                            <p>Anubhav Agrawal</p>
                            <p>Software Engineer</p>
                            <div className='secondIcons'>
                                <div className='secondLikeDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                    <h2>44</h2>
                                </div>
                                <div className='secondCommentDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg>
                                    <h2>51</h2>
                                </div>
                            </div>

                            {/* <i class="bi bi-chat-right-dots-fill"></i> */}
                        </div>
                    </div>
                    <div className='secondCardDiv'>
                        <div className='secondCardUpperTwo'>
                            <img className='wildlifeImage' src={iTwo} alt='wildlifeImage' />
                        </div>
                        <div className='secondCardMiddle'>
                            {/* <img className='wildlifeImage' src={pOne} alt='wildlifeImage' /> */}
                        </div>
                        <div className='secondCardLower'>
                            <p>Ankit Singh</p>
                            <p>PhotoGrapher</p>
                            <div className='secondIcons'>
                                <div className='secondLikeDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                    <h2>47</h2>
                                </div>
                                <div className='secondCommentDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg>
                                    <h2>53</h2>
                                </div>
                            </div>

                            {/* <i class="bi bi-chat-right-dots-fill"></i> */}
                        </div>
                    </div>
                    <div className='secondCardDiv'>
                        <div className='secondCardUpperThree'>
                            <img className='wildlifeImage' src={iThree} alt='wildlifeImage' />
                        </div>
                        <div className='secondCardMiddle'>
                            {/* <img className='wildlifeImage' src={pOne} alt='wildlifeImage' /> */}
                        </div>
                        <div className='secondCardLower'>
                            <p>Sophiya Singh</p>
                            <p>Software Developer</p>
                            <div className='secondIcons'>
                                <div className='secondLikeDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                    <h2>48</h2>
                                </div>
                                <div className='secondCommentDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg>
                                    <h2>54</h2>
                                </div>
                            </div>

                            {/* <i class="bi bi-chat-right-dots-fill"></i> */}
                        </div>
                    </div>
                    <div className='secondCardDiv'>
                        <div className='secondCardUpperFour'>
                            <img className='wildlifeImage' src={iFour} alt='wildlifeImage' />
                        </div>
                        <div className='secondCardMiddle'>
                            {/* <img className='wildlifeImage' src={pOne} alt='wildlifeImage' /> */}
                        </div>
                        <div className='secondCardLower'>
                            <p>Mayank Kumar</p>
                            <p>Management</p>
                            <div className='secondIcons'>
                                <div className='secondLikeDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                    <h2>53</h2>
                                </div>
                                <div className='secondCommentDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg>
                                    <h2>59</h2>
                                </div>
                            </div>

                            {/* <i class="bi bi-chat-right-dots-fill"></i> */}
                        </div>
                    </div>
                </div>
                <div className='secondMainDiv'>
                    <div className='secondCardDivTwo'>
                        <p className='secondTaskDesc'>Welcome to the Clue 2 ! <br />In this task, you are required to find the pattern in the likes of the squential posts. Perform same with the comments. Guess the unknown count of likes and comments in the remaining post.</p>
                    </div>
                    <div className='secondCardDiv'>
                        <div className='secondCardUpperFive'>
                            <img className='wildlifeImage' src={iFive} alt='wildlifeImage' />
                        </div>
                        <div className='secondCardMiddle'>
                            {/* <img className='wildlifeImage' src={pOne} alt='wildlifeImage' /> */}
                        </div>
                        <div className='secondCardLower'>
                            <p>Priyanshu Singh</p>
                            <p>CEO</p>
                            <div className='secondIcons'>
                                <div className='secondLikeDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                    {/* <h2>54</h2> */}
                                    <h2>?</h2>
                                </div>
                                <div className='secondCommentDiv'>
                                    <svg className='secondHeart' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-heart-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                    </svg>
                                    {/* <h2>60</h2> */}
                                    <h2>?</h2>
                                </div>
                            </div>

                            {/* <i class="bi bi-chat-right-dots-fill"></i> */}
                        </div>
                    </div>
                    <div className='secondCardDiv backClrOne'>
                        <input className='emailInput colorBlack' onChange={(e) => { handleLikes(e.target.value) }} type='text' placeholder='Likes' />
                        <input className='emailInput marginConfig colorBlack' onChange={(e) => { handleComments(e.target.value) }} type='text' placeholder='Comments' />
                        {
                            (!timecheck() &&

                                <Link to={"/"}><button className='colorBlack newConfig emailButton'>Time Up! Start Again</button></Link>)
                        }
                        {
                            (!Check() ?

                                <Link to={"/home"}><button className='colorBlack newConfig emailButton'>Click me to pass this Clue</button></Link> :
                                <Link state={{ email: Email }} to={"/wikiClue"}><button className='colorRed newConfig emailButton'>You Got it! Clue 3</button></Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts