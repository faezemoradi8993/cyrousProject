import React, { useState } from "react";
import Layout from "../../common/layout";
import "./wallet.css";
import MainButton from "../../common/button";
import Pakage from "./pakage";
import packageData from "./package.data";
import Zoom from "@material-ui/core/Zoom";
import WalletManage from "./walletManage"
import HistoryTitle from "./historyTitle"
import AddPlan from "./addPlan"
import Send from "./send"
const Wallet = () => {
  const [showWallet, setShowWallet] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const addplan=()=>{
    setShowWallet(true)
    console.log("wallettrue");
  }
  const backhandler=()=>{
    setShowWallet(false)
    console.log("walletfalse");
  }
  const sendhandler=()=>{
    setShowSend(true)
    console.log("sendtrue");
  }

  return (
  
    <Layout>
        {!showWallet&& <div className="mainContainer wallet">
        <div className="center-container"> <span id="back-to-top-anchor" />
        <p className="wallet-title ">Wallet</p>
        {!showSend&&<WalletManage sendClick={sendhandler}/>}
        {showSend&&<Send />}
        <HistoryTitle/>
        </div>
        <div className="right-container"> 
        <AddPlan onClick={addplan} />
        </div>
        </div>}
      {/* show 3 pakage */}
      {showWallet && (
        <div className="mainContainer ">
          <div className="mainContent wallet ">
            <span id="back-to-top-anchor" />

            {packageData.map((p) => (
              <Pakage
                key={p.id}
                type={p.type}
                maincolor={p.maincolor}
                name={p.name}
                image={p.image}
                month={p.month}
                p1={p.p1}
                p2={p.p2}
                p3={p.p3}
              />
            ))}
            <div className="leftButton">
              <MainButton title="Back" cliked={backhandler} />
            </div>


          </div>
        </div>
      )}
    </Layout>
  );
};

export default Wallet;
