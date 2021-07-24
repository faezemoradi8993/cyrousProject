import React from 'react'
import "./historytitle.css"
import icon from "../../../../assets/history.svg"
import {ReactComponent as History} from '../../../../assets/history.svg';
const index = () => {
    return (
        <div className="history-title" >
            <p><span><History/></span>RECENT TRANSACTIONS</p>
        </div>
    )
}

export default index
