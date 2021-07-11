import React from "react";
import "./layout.css";
import TemporaryDrawer from "../sidebar/sidebarmain";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Sidebar from "../sidebar/index";
const Layout = ({ children }) => {
  const matches = useMediaQuery("(max-width:768px)");
  return (
    <>
      {matches ? (
        <div className="layoutContainer">
          <div className="minContainer">
            <TemporaryDrawer content={children} />
          </div>
        </div>
      ) : (
        <div className="layoutContainer">
          <div className="minContainer">
            <Sidebar />
            <div className="contents ">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Layout;
