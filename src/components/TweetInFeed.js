import React from "react";
import './TweetInFeed.css';
import golf from "../images/golf.png"
import canoe from "../images/canoe.png"
import { defaultImgs } from "../defaultimgs";
import { Icon } from "web3uikit";


const TweetInFeed = () => {
  

  return (
    <>
    <div className="feedTweet">
      <img src={defaultImgs[0]} className="profilePic"></img>
      <div className="completeTweet">
        <div className="who">
          Sid
          <div className="accWhen">0x42..314 . 1h</div>
        </div>
        <div className="tweetContent">
          Nice Day Golfing today Shot 73 (+2)
          <img src={golf} className="tweetImg"></img>
        </div>
        <div className="interactions">
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="messageCircle"></Icon>
          </div>
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="star"></Icon>
          </div>
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="matic"></Icon>
          </div>
        </div>
      </div>
    </div>

    <div className="feedTweet">
      <img src={defaultImgs[0]} className="profilePic"></img>
      <div className="completeTweet">
        <div className="who">
          Sujal
          <div className="accWhen">0x71..539 . 1h</div>
        </div>
        <div className="tweetContent">
          Going on a Canoe ride
          <img src={canoe} className="tweetImg"></img>
        </div>
        <div className="interactions">
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="messageCircle"></Icon>
          </div>
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="star"></Icon>
          </div>
          <div className="interactionNums">
            <Icon fill="#3f3f3f" size={20} svg="matic"></Icon>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default TweetInFeed;

