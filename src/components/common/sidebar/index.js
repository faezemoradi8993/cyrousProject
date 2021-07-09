import React from 'react'
import './sidebar.css'
import links from './links'
import { Link, useLocation } from 'react-router-dom'
const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <aside className="sidebar">
      <nav className="navbar">
        <ul>
          {links.map(item => <li><Link key={item.id} to={item.to}
            className={`${location.pathname === item.to ? "activelink" : ""}`}>
            <span>
              <img src={item.icon} alt={item.title} />
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="33.5" height="33.5" viewBox="0 0 33.5 33.5">
                <path fill="#b2b7d2" d="M24.75 8A16.75 16.75 0 1 0 41.5 24.75 16.753 16.753 0 0 0 24.75 8zm0 7.429a2.837 2.837 0 1 1-2.837 2.837 2.837 2.837 0 0 1 2.837-2.837zm3.782 17.155a.811.811 0 0 1-.81.81h-5.944a.811.811 0 0 1-.81-.81v-1.62a.811.811 0 0 1 .81-.81h.81v-4.323h-.81a.811.811 0 0 1-.81-.81V23.4a.811.811 0 0 1 .81-.81H26.1a.811.811 0 0 1 .81.81v6.754h.81a.811.811 0 0 1 .81.81z" transform="translate(-8 -8)" />
              </svg> */}
            </span>{item.title}</Link></li>)}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
