import React, { useState } from "react";
import "./home.css";
import Layout from "../../common/layout";
import methodesData from "./methodes/peyment-methods.data";
import Methode from "./methodes";
import userimage from "../../../assets/userimage.png";
import { ReactComponent as BellIcon } from "../../../assets/bell.svg";
import { ReactComponent as EnvelopeIcon } from "../../../assets/envelope.svg";
import { ReactComponent as CalenderIcon } from "../../../assets/calendar.svg";
import PersonIcon from "@material-ui/icons/Person";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import HttpsIcon from "@material-ui/icons/Https";
import Badge from "@material-ui/core/Badge";
import Collapse from "@material-ui/core/Collapse";
import Grow from "@material-ui/core/Grow";
import Zoom from "@material-ui/core/Zoom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Home = () => {
  const profileClasses = ["item"];
  const securityClasses = ["item"];
  const accountSettingClasses = ["item"];
  const lock = <HttpsIcon />;
  const [editProfile, setEditProfile] = useState(false);
  const [accountSettings, setAccountSettings] = useState(false);
  const [security, setSecurity] = useState(false);
  const [show, setShow] = useState(true);
  const backbtn = () => {
    setShow(true);
    setEditProfile(false);
    setAccountSettings(false);
    setSecurity(false);
  };
  const openEditProfile = () => {
    setShow(false);
    setEditProfile(true);
    setAccountSettings(false);
    setSecurity(false);
  };
  const openAccountSettings = () => {
    setShow(false);
    setEditProfile(false);
    setAccountSettings(true);
    setSecurity(false);
  };
  const openSecurity = () => {
    setShow(false);
    setEditProfile(false);
    setAccountSettings(false);
    setSecurity(true);
  };
  const matches = useMediaQuery('(min-width: 768px)');
  return (

    <Layout>
      <div className="mainContainer home">
        <div className="center-container">
          <div className="search-container">
            <span>
              <SearchOutlinedIcon />
            </span>
            <input type="text" placeholder="Search in Dashboard..." />
          </div>
          <div className="payment-methodes">
            <h1>Payment Methodes</h1>
            <div className="methods-container">
              {methodesData.map((item) => (
                <Methode key={item.id} type={item.type} price={item.price} />
              ))}
            </div>
          </div>
          <div className="income-overview"></div>
          <div className="yourLink">
            <div className="textContainer ">
              <div className="caption">
                <p>
                  Your Referral Link :<span></span>
                </p>
                <p>
                  Your Code :<span></span>
                </p>
              </div>
              <div className="circleTitle">
                <p>45</p>
                <p>Invited Friends</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div
            className="profile-container "
            style={{
              height: !show ? "calc(100vh - 85px)" : "500px",
              transition: "all 1s ease",
              marginBottom: !show ? "20px" : "0px",
            }}
          >
            <span id="back-to-top-anchor" />
            {/* top area == avatar , name */}
            <div className="top-area">
              <div className="image-container">
                <img src={userimage} alt="user Image" />
              </div>
              <p>Amir Ebrahimi</p>
            </div>
            {/* icon bar */}
            <Collapse
              in={show}
              style={{
                transformOrigin: "center",
                minWidth: "100%" ,
                 opacity:show? "1":"0" 
              }}
              {...(show ? { timeout: 1000 } : {})}
            >
              <div className="icon-bar">
                <Badge
                  badgeContent={2}
                  overlap="circular"
                  max="99"
                  color="secondary"
                >
                  <div className="item">
                    <BellIcon />
                  </div>
                </Badge>
                <Badge
                  badgeContent={8}
                  overlap="circular"
                  max="99"
                  color="secondary"
                >
                  <div className="item">
                    <EnvelopeIcon />
                  </div>
                </Badge>

                <div className="item">
                  <CalenderIcon />
                </div>
              </div>
              {/* switch bar */}
              <div className="switch-bar">
                <p className="item active">Profile</p>
                <p className="item disabeld">
                  History<span className="lock">{lock}</span>
                </p>
              </div>
            </Collapse>
            {/* buttom area == edit , setting ,ب security  */}
            <div className="buttom-area">
              <Collapse
                in={show}              
                style={{
                  transformOrigin: "center",
                  minWidth: "100%" ,
                  opacity:show? "1":"0" 
                }}
                {...(show ? { timeout: 1000 } : {})}
              >
                <div
                  className={profileClasses}
                  onClick={() => openEditProfile()}
                >
                  <p>Edit Profile</p>
                  <span>
                    <PersonIcon />
                  </span>
                </div>
                <div
                  className={accountSettingClasses}
                  onClick={() => openAccountSettings()}
                >
                  <p>Account Settings</p>
                  <span>
                    <SettingsOutlinedIcon />
                  </span>
                </div>
                <div className={securityClasses} onClick={() => openSecurity()}>
                  <p>Security</p>
                  <span>
                    <SecurityOutlinedIcon />
                  </span>
                </div>
              </Collapse>
              {/* Edit Profile */}
              <Zoom
                in={editProfile}
                style={{
                  transformOrigin: "center",
                  height: editProfile ? "100%" : "0",
                  opacity:editProfile? "1":"0" 
                }}
                {...(editProfile ? { timeout: 1000 } : {})}
              >
                <div id="edit-profile" className="edit-profile">
                  <div className="item">
                    <p>Change NickName</p>
                  </div>
                  <div className="item">
                    <p>Change Profile Picture</p>
                  </div>
                  <div className="item action">
                    <div className="button-container">
                      <button className="reset">reset</button>
                      <button className="save">save</button>
                    </div>
                  </div>
                </div>
              </Zoom>
              {/* Account Settings */}
              <Zoom
                in={accountSettings}
                style={{
                  transformOrigin: "center",
                  height: accountSettings ? "100%" : "0",
                  opacity: accountSettings ? "100%" : "0",
                }}
                {...(accountSettings ? { timeout: 1000 } : {})}
              >
                <div id="account-setting" className="account-setting">
                  <div className="item">
                    <p>Change Password</p>
                    <div className="input ">
                      <input type="password" id="pass" value="7656745343234" />
                    </div>
                  </div>
                  <div className="item">
                    <p>Change Email</p>
                    <div className="input" id="email">
                      <input type="email" value="faeze.moradi8993@gmail.com" />
                    </div>
                  </div>
                  <div className="item">
                    <p>Change Phone Number</p>
                    <div className="input">
                      <input type="number" value="09123456789" />
                    </div>
                  </div>
                  <div className="item action">
                    <div className="button-container">
                      <button className="reset">reset</button>
                      <button className="save">save</button>
                    </div>
                  </div>
                </div>
              </Zoom>
              {/* Security */}
              <Zoom
                in={security}
                style={{
                  transformOrigin: "center",
                  height: security ? "100%" : "0",
                  opacity: security ? "100%" : "0",
                }}
                {...(security ? { timeout: 1000 } : {})}
              >
                <div id="security" className="security">
                  <div className="item">
                    <p>Authentication</p>
                  </div>
                  <div className="item">
                    <p>Two-Facktor Authentication</p>
                  </div>
                  <div className="item">
                    <p>Sms Backup Authentication</p>
                  </div>
                  <div className="item action">
                    <div className="button-container">
                      <button className="reset">reset</button>
                      <button className="save">save</button>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <Zoom in={!show}>
              <ArrowUpwardRoundedIcon
                onClick={() => backbtn()}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  background: "black",
                  fill: "white",
                  borderRadius: "50%",
                  transition: "all 0.4s ease",
                }}
              />
            </Zoom>
          </div>
          <Collapse
            in={show}
            style={{ minWidth: show ? "100%" : "100%" }}
            {...(show ? { timeout: 1000 } : {})}
          >
            <div className="other-info-container">
              <div className="info-item">
                <div className="circle"></div>
                <div className="circle2">
                  <h5>$</h5>
                </div>
                <p>COMISSION WALLET</p>
                <h5>57,421</h5>
              </div>
              <div className="info-item">
                <div className="circle"></div>
                <div className="circle2">
                  <h5>$</h5>
                </div>
                <p>TOTAL INVESTMENT</p>
                <h5>125.65</h5>
              </div>
              <div className="info-item">
                <div className="circle"></div>
                <div className="circle2">
                  <h5>$</h5>
                </div>
                <h5>87.89</h5>
                <p>PROFIT WALLET</p>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
