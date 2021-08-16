import React, { useState } from "react";
import "./send.css";
import MainButton from "./../../../common/button/index";
const Index = () => {
  const [zIndex1, setZIndex1] = useState(0);
  const [zIndex2, setZIndex2] = useState(0);
  return (
    <>
      <div className="content">
        <div className="item-container">
          <div id="cyrus" className="item1" style={{ zIndex: zIndex2 }}>
            <input type="number" placeholder="50" onFocus={() => setZIndex2(10)} onBlur={() => setZIndex2(0)} /> <p>of<span>400</span>CYRUS
            </p>
          </div>
          <div id="usd" className="item2">
            <p>65</p>
            <p>USD</p>
          </div>
        </div>
        <div className="item-container">
          <div id="address" className="item1" style={{ zIndex: zIndex1 }}>
            <input placeholder="ADDRESS" type="text" style={{ width: "80%" }} onFocus={() => setZIndex1(10)} onBlur={() => setZIndex1(0)} />
          </div>
          <div id="memo" className="item2">
            <input type="text" placeholder="MEMO" />
          </div>
        </div>
        <div className="item-container">
          <div id="netFee" className="item1">
            <p>
              NETWORK Fee
            </p>
          </div>
          <div id="free" className="item2">
            <p>FREE FOR CYRUS blockchain</p>
          </div>
        </div>
      </div>
      <div className="sendbtn-container">
        <MainButton title="send"
          clicked={() => console.log("sent")} />
      </div>
    </>
  );
};

export default Index;
