import React from "react";
import "./layout.css";
import TemporaryDrawer from "../sidebar/sidebarmain";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Sidebar from "../sidebar/index";
import ScrollTop from "../totop"
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";





const Layout = (props) => {
  const { children, window } = props;
  const matches = useMediaQuery("(max-width:768px)");
  return (
    <>
      {matches ? (
        <div className="layoutContainer">
          <div className="minContainer">
        
            <TemporaryDrawer content={children} />
            <ScrollTop {...props}>
                <Fab
                  color="secondary"
                  size="small"
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </ScrollTop>
          </div>
        </div>
      ) : (
        <div className="layoutContainer">
          <div className="minContainer ">
        
            <Sidebar />

            <div className="contents ">
          
              {children}
              <ScrollTop {...props}>
                <Fab
                  color="secondary"
                  size="small"
                  aria-label="scroll back to top"
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </ScrollTop>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Layout;
