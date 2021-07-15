import React from "react";
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
import HttpsIcon from "@material-ui/icons/Https";
import Badge from "@material-ui/core/Badge";

const Home = () => {
  const lock = <HttpsIcon />;
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
          <div className="profile-container">
            {/* top area == avatar , name */}
            <div className="top-area">
              <div className="image-container">
                <img src={userimage} />
              </div>
              <p>Amir Ebrahimi</p>
            </div>
            {/* icon bar */}
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
            {/* buttom area == edit , setting ,ب security  */}
            <div className="buttom-area">
              {/* Edit Profile */}
              <div className="item">
                <p>Edit Profile</p>
                <span>
                  <PersonIcon />
                </span>
              </div>
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
              {/* Account Settings */}
              <div className="item">
                <p>Account Settings</p>
                <span>
                  <SettingsOutlinedIcon />
                </span>
              </div>
              <div id="account-setting" className="account-setting">
                <div className="item">
                  <p>Change Password</p>
                  <div className="input "  >
<input type="password" id="pass" value="7656745343234" />
                  </div>
                </div>
                <div className="item">
                  <p>Change Email</p>
                  <div className="input" id="email">
<input type="email"  value="faeze.moradi8993@gmail.com" />
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
              {/* Security */}
              <div className="item">
                <p>Security</p>
                <span>
                  <SecurityOutlinedIcon />
                </span>
              </div>
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
            </div>
          </div>
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
        </div>
      </div>
    </Layout>
  );
};

export default Home;
