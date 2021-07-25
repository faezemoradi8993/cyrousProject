import React from 'react'
import "./receive.css"
import qrcode from "../../../../assets/qrcode.png"
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
const index = () => {
  return (
    <>
    {/* <div className="recive-manager"> */}
      <img src={qrcode} alt="qrcode" />
      <div className="code">
        <p>0xE61013558B4ABB180ae77557adF6a83d4cCFfcF0</p>
      </div>
      <div className="copy-container">
        <FileCopyOutlinedIcon />
        <p>Copy</p>
      </div>
    {/* </div> */}
    </>
  )
}

export default index
