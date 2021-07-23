import React, { useState } from "react";
import "./home.css";
import Layout from "../../common/layout";
import methodesData from "./methodes/peyment-methods.data";
import Methode from "./methodes";
import Chats from "./profile/envelope"
import userimage from "../../../assets/userimage.png";
import { ReactComponent as BellIcon } from "../../../assets/bell.svg";
import { ReactComponent as EnvelopeIcon } from "../../../assets/envelope.svg";
import { ReactComponent as CalenderIcon } from "../../../assets/calendar.svg";
import PersonIcon from "@material-ui/icons/Person";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SecurityOutlinedIcon from "@material-ui/icons/SecurityOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import CloseIcon from '@material-ui/icons/Close';
import HttpsIcon from "@material-ui/icons/Https";
import Badge from "@material-ui/core/Badge";
import Collapse from "@material-ui/core/Collapse";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";
import Zoom from "@material-ui/core/Zoom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Home = () => {
  const profileClasses = ["item"];
  const securityClasses = ["item"];
  const accountSettingClasses = ["item"];
  const lock = <HttpsIcon />;
  const [editProfile, setEditProfile] = useState(false);
  const [userData, setUserData] = useState({
    name: "Faeze Moradi",
    password: "54684643515",
    email: "faeze.moradi8993@gmail.com",
    phoneNumber: "09123456789",
    image: false,
    imageSrc: false,
  });
  const [accountSettings, setAccountSettings] = useState(false);
  const [security, setSecurity] = useState(false);
  const [show, setShow] = useState(true);
  const [chatShow, setChatShow] = useState(false);
  const [picture, setPicture] = useState(false);
  const [src, setSrc] = useState(false);
  const backbtn = () => {
    setShow(true);
    setChatShow(false);
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

  // save change handlers
  const saveChangeProfile = () => {
    const formData = new FormData();
    formData.append("file", userData);
    console.log(formData);
    // $.ajax({
    //   url: "/some/api/endpoint",
    //   method: "POST",
    //   data: formData,
    //   cache: false,
    //   contentType: false,
    //   processData: false,
    //   success: function(response) {
    //     // Code to handle a succesful upload
    //   }
    // });
  };
  const saveChangeAccountSetting = () => {
    const formData = new FormData();
    formData.append("data", userData);
  };
  const saveChangeSecurity = () => {
    const formData = new FormData();
    formData.append("data", userData);
  };

  // profile input handlers
  const passwordChangeHandler = (e) => {
    const data = { ...userData };
    data.password = e.target.value;
    setUserData(data);
  };
  const emailChangeHandler = (e) => {
    const data = { ...userData };
    data.email = e.target.value;
    setUserData(data);
  };
  const phoneChangeHandler = (e) => {
    const data = { ...userData };
    data.phoneNumber = e.target.value;
    setUserData(data);
  };
  const handlePictureSelected = (event) => {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);
    const data = { ...userData };
    data.image = picture;
    data.imageSrc = src;
    setUserData(data);
  };

  // show chats
  const showChatHandler = () => {
    setShow(false);
    setChatShow(true);
  };
  const matches = useMediaQuery("(min-width: 768px)");
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
              height: !show ? "calc(100% )" : "500px",
              height: chatShow ? "calc(100% - 100px )" : "500px",
              transition: "all 1s ease",
              marginBottom: !show ? "20px" : "0px",
            }}
          >
            <span id="back-to-top-anchor" />
            {/* top area == avatar , name */}
            <div className="top-area">
              <div className="image-container">
                {userData.imageSrc ? (
                  <img src={userData.imageSrc} alt="user Image" />
                ) : (
                  <img src={userimage} alt="user Image" />
                )}
              </div>
              <p>{userData.name}</p>
            </div>
            {/* icon bar */}
            <Collapse
              in={show}
              style={{
                transformOrigin: "center",
                minWidth: "100%",
                opacity: show ? "1" : "0",
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
                  <div className="item" onClick={() => showChatHandler()}>
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
            {/* buttom area == edit , setting , security  */}
            <div className="buttom-area">
              <Collapse
                in={show}
                style={{
                  transformOrigin: "center",
                  minWidth: "100%",
                  opacity: show ? "1" : "0",
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
                  opacity: editProfile ? "1" : "0",
                }}
                {...(editProfile ? { timeout: 1000 } : {})}
              >
                <div id="edit-profile" className="edit-profile">
                  <div className="item">
                    <input type="text" placeholder="Change NickName" />
                  </div>
                  <div className="item">
                    <input
                      type="file"
                      name="uploadfile"
                      onChange={(event) => handlePictureSelected(event)}
                      id="img"
                      style={{ display: "none" }}
                    />
                    <label for="img">Change Profile Picture</label>
                  </div>
                  <div className="item action">
                    <div className="button-container">
                      <button className="reset">reset</button>
                      <button className="save" onClick={saveChangeProfile}>
                        save
                      </button>
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
                      <input
                        type="password"
                        id="pass"
                        onChange={(e) => passwordChangeHandler(e)}
                        value={userData.password}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <p>Change Email</p>
                    <div className="input" id="email">
                      <input
                        type="email"
                        onChange={(e) => emailChangeHandler(e)}
                        value={userData.email}
                      />
                    </div>
                  </div>
                  <div className="item">
                    <p>Change Phone Number</p>
                    <div className="input">
                      <input
                        type="number"
                        onChange={(e) => phoneChangeHandler(e)}
                        value={userData.phoneNumber}
                      />
                    </div>
                  </div>
                  <div className="item action">
                    <div className="button-container">
                      <button className="reset">reset</button>
                      <button
                        className="save"
                        onClick={saveChangeAccountSetting}
                      >
                        save
                      </button>
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
                      <button className="save" onClick={saveChangeSecurity}>
                        save
                      </button>
                    </div>
                  </div>
                </div>
              </Zoom>
            </div>
            <Zoom
              in={chatShow}
              style={{
                transformOrigin: "center",
                height: chatShow ? "fit-content" : "0",
                opacity: chatShow ? "1" : "0",
              }}
              {...(chatShow ? { timeout: 1000 } : {})}
            >
              <div id="chats" className="chats">
<Chats/>
              </div>
            </Zoom>
            <Zoom in={!show && !chatShow}>
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
            <Grow in={chatShow} {...(chatShow ? { timeout: 1000 } : {})}>
              <div className="closebtn">
              <CloseIcon style={{color:"white"}}
                onClick={() => backbtn()}
              />
              </div>
            
            </Grow>
            <Grow in={chatShow} {...(chatShow ? { timeout: 1000 } : {})}>
            <div
            className="top-icon"
            >
              <Badge
                badgeContent={8}
                overlap="circular"
                max="99"
                color="secondary"
              >
                <div className="icon-item" onClick={() => showChatHandler()}>
                  <EnvelopeIcon />
                </div>
              </Badge>
            </div>
            </Grow>
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
