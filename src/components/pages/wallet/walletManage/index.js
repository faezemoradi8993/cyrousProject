import React from 'react'
import "./walletManage.css"
const index = ({sendClick , receiveClick}) => {
    return (
        // <div className="wallet-manage">
        <>
            <div className="content">
                <p className="head">YOUR BALANCE</p>
                <h1 className="balance"><span>40</span>CYRUS</h1>
                <p className="saving"><span>Saving A/C </span>: x x x x x x x x 445</p>
            </div>
<div className="actions">
    <button onClick={sendClick} className="send">Send</button>
    <button onClick={receiveClick} className="resive">Recive</button>
</div>
         </>  
        // </div>
    )
}

export default index
