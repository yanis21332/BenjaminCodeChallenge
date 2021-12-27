import React, { useState } from "react";
import FirstImg from './pics/firstImg.jpg';
import SecondImg from './pics/secondImg.jpg';
import TherdImg from './pics/therdImg.jpg';

const App = () => {
  const [firstPicClass,setFirstPicClass] = useState("full")
  const [secondPicClass,setSecondPicClass] = useState("normal")
  const [therdPicClass,setTherdPicClass] = useState("normal")

  const onHoverInPic = (number) => {
    if(number==="first"){
      setFirstPicClass("full")
      setSecondPicClass("normal")
      setTherdPicClass("normal")
    }else if(number==="second"){
      setFirstPicClass("normal")
      setSecondPicClass("full")
      setTherdPicClass("normal")
    }else if(number==="therd"){
      setFirstPicClass("normal")
      setSecondPicClass("normal")
      setTherdPicClass("full")
    }
  }
  const onHoverInGreenButton = () => {
    document.querySelector(".GObuttonParent .greenBloc").style.height = 0;
    document.querySelector(".GObuttonParent .maronBloc").style.height = '100%'
  }
  const onLeaveInGreenButton = () => {
    document.querySelector(".GObuttonParent .greenBloc").style.height = "100%";
  }
  return (
    <>
      <header className="headerOfPage">
        <div className="contentOfHeader">
          <div className="bigLeftPart">
            <div className="leftPart">
              <div className="contentOfLeftPart">
                <h3>Skillex<span className="dot">.</span></h3>
              </div>
            </div>
            <div className="middlePart">
              <div className="contentOfMiddlePart">
                <ul className="navBarOfPage">
                  <li className="btn">All Categories</li>
                  <li className="btn">Pricing</li>
                  <li className="btn">For Business</li>
                  <li className="btn">Search</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rightPart">
            <div className="contentOfRightPart">
              <div className="inputs">
                <button className="btn loginButton">Log In</button>
                <button className="btn freeTrialButton">Free Trial</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bodyOfPage">
        <div className="contentOfBody">
          <div className="left">
            <div className="contentOfLeft">
              <div className="bigTitle">
                <h2>Watch.</h2>
                <h2>Learn.</h2>
                <h2>Grow.</h2>
              </div>
              <div className="strangeInputs">
                <div className="speContent">
                  <div className="theStrangeInput">
                    <input type="text" placeholder="Find your passion" />
                  </div>
                  <div className="btn GObuttonParent">
                    <button onMouseLeave={onLeaveInGreenButton} onMouseOver={onHoverInGreenButton} className="btn GObutton">Go</button>
                    <div className="greenBloc newBloc" style={{backgroundColor:"#96c67f"}}></div>
                    <div className="maronBloc newBloc" style={{backgroundColor:"#feb17d"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contentOfRight">
              <div className="Pics">
                <div onMouseOver={()=>{onHoverInPic("first")}} className={`btn firstPic pic ${firstPicClass}`}>
                  <div className="gradient"></div>
                  {firstPicClass==="normal"?
                  <div className="verticaleProffision proffision">
                    <p>Cooking</p>
                  </div>
                  :<div className = "horizenaleProfission proffision">
                    <p>Cooking</p>
                    <div className="Points">
                      <p className="bigPoints">100</p>
                      <p className="smalltext">TOPICS</p>
                    </div>
                  </div>}
                  <img src={FirstImg} alt="moi" />
                </div>
                <div onMouseOver={()=>{onHoverInPic("second")}} className={`btn secondPic pic ${secondPicClass}`}>
                  <div className="gradient"></div>
                  {secondPicClass==="normal"?
                  <div className="verticaleProffision proffision">
                    <p>Writting</p>
                  </div>
                  :<div className = "horizenaleProfission proffision">
                    <p>Writting</p>
                    <div className="Points">
                      <p className="bigPoints">100</p>
                      <p className="smalltext">TOPICS</p>
                    </div>
                  </div>}
                  <img src={SecondImg} alt="encore moi" />
                </div>
                <div onMouseOver={()=>{onHoverInPic("therd")}} className={`btn therdPic pic ${therdPicClass}`}>
                  <div className="gradient"></div>
                  {therdPicClass==="normal"?
                  <div className="verticaleProffision proffision">
                    <p>Business</p>
                  </div>
                  :<div className = "horizenaleProfission proffision">
                    <p>Business</p>
                    <div className="Points">
                      <p className="bigPoints">100</p>
                      <p className="smalltext">TOPICS</p>
                    </div>
                  </div>}
                  <img src={TherdImg} alt="re encore moi" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
