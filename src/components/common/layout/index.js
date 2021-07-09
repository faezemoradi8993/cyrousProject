import React from 'react'
import "./layout.css"
import Sidebar from '../sidebar'
const Layout = (props) => {
  return (
    <div className="layoutContainer">
     <Sidebar/>
      {props.children}
    </div>
  )
}

export default Layout
