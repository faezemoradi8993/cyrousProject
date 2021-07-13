import React from "react";
import "./home.css";
import Layout from "../../common/layout";
import methodesData from "./methodes/peyment-methods.data";
import Methode from "./methodes";
import userimage from "../../../assets/userimage.png"
import {ReactComponent as BellIcon} from '../../../assets/bell.svg';
import {ReactComponent as EnvelopeIcon} from '../../../assets/envelope.svg';
import {ReactComponent as CalenderIcon} from '../../../assets/calendar.svg';
const Home = () => {
  return (
    <Layout>
      <div className="mainContainer home">
        <div className="center-container">
          <div className="search-container">
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
            Your Referral Link :  
              <span>
              
              </span>
            </p>
            <p>
            Your Code : 
              <span>
              
              </span>
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
            <div className="top-area">
              <div className="image-container">
                <img src={userimage}/>
              </div>
              <p>Amir Ebrahimi</p>
            </div>
            <div className="icon-bar">
              <div className="item"><BellIcon/></div>
              <div className="item"><EnvelopeIcon/></div>
              <div className="item"><CalenderIcon/></div>
            </div>
            <div className="buttom-area">
              <div className="item"><p>Edit Profile</p><span>icon</span></div>
              <div className="item"><p>Account Settings</p><span>icon</span></div>
              <div className="item"><p>Security</p><span>icon</span></div>
            </div>
          </div>
          <div className="other-info-container">
            <div className="info-item">
              <div className="circle">57,421</div>
              <p>COMISSION WALLET</p>
            </div>
            <div className="info-item">
              <div className="circle">125.65</div>
              <p>TOTAL INVESTMENT</p>
            </div>
            <div className="info-item">
              <div className="circle">87.89</div>
              <p>PROFIT WALLET</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
