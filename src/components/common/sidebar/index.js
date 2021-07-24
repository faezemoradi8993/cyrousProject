import React, { useState } from 'react'
import './sidebar.css'
import links from './links'
import { Link, useLocation } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <ClickAwayListener onClickAway={() => setIsOpen(!isOpen)}>
        <aside className="sidebar">
          <nav className="navbar">
            <ul>
              {links.map(item =>
                <li>
                  <Link key={item.id} to={item.to}
                    className={`${location.pathname === item.to ? "activelink" : ""}`}>
                    <span>
                      {item.icon}
                    </span>{item.title}</Link>
                </li>)}
            </ul>
          </nav>
        </aside>
      </ClickAwayListener>
    </>
  )
}

export default Sidebar
