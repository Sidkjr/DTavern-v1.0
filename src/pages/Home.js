import React from "react";
import { defaultImgs } from "../defaultimgs";
import "./Home.css";
import { Icon, TextArea } from "web3uikit";
import { useState, useRef } from "react";
import TweetInFeed from "../components/TweetInFeed";

const Home = () => {

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();


  const onImageClick = () => {
    inputFile.current.click();
  };

  const changeHandler = (event) => {
    const img = event.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };



  return (
    <>
    <div className="pageIdentify">Home</div>
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
            {selectedFile && (
              <img src={selectedFile} className="tweetImg"></img>
            )}
            <div className="imgOrTweet">
              <div className="imgDiv" onClick={onImageClick}>
                <input type="file"
                        name="file"
                        ref={inputFile}
                        onChange={changeHandler}
                        style={{ display: "none"}}/>
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
        <TweetInFeed profile={false}/>
      </div>
    </>
  );
};

export default Home;
