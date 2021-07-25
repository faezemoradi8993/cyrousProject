import React from "react";
import "./send.css";
import MainButton from "./../../../common/button/index";
const index = () => {
  return (
    // <div className="send-manage">
    <>
      <div className="content">
        <div className="item-container">
          <div id="cyrus"  className="item1">
           <input type="number" placeholder="50" /> <p>of<span>400</span>CYRUS
            </p>
          </div>
          <div id="usd" className="item2">
            <p>65</p>
            <p>USD</p>
          </div>
        </div>
        <div className="item-container">
          <div id="address" className="item1">
            <p>
              ADDRESS
            </p>
          </div>
          <div id="memo" className="item2">
            <p>MEMO</p>
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
    {/* </div> */}
    </>
  );
};

export default index;
