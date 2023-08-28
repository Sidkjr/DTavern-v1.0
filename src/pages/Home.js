import React from "react";
import { defaultImgs } from "../defaultimgs";
import "./Home.css";
import { Icon, TextArea } from "web3uikit";

const Home = () => {
  return (
    <>
      <div className="mainContent">
        <div className="profileTweet">
          <img
          src={defaultImgs[0]}
          className="profilePic">

          </img>
          <div className="tweetBox">
            <TextArea label=""
            name="tweetTxtArea"
            value="GM World"
            type="text"
            width="95%">

            </TextArea>
            <div className="imgOrTweet">
              <div className="imgDiv">
                <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
              </div>
              <div className="tweetOptions">
                <div className="tweet">Convey</div>
                <div className="tweet" style={{ backgroundColor: "#8247e5"}}>
                  <Icon fill="#ffffff" size={20} svg="matic"></Icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
