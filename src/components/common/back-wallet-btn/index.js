import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import "./index.css"
const index = ({clicked}) => {
    return (
        <div className="closebtn-wallet"  onClick={() =>clicked()}>
        <CloseIcon style={{color:"white"}}
         
        />
        </div>
    )
}

export default index
