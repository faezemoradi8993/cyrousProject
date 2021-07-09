import React from 'react'
import './button.css'
const MainButton = ({title , cliked}) => {
  return (
    <button className="mainButton" onClick={cliked}>
      {title}
    </button>
  )
}

export default MainButton
