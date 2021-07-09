import React from 'react'
import './aboutUs.css'
import Layout from '../../common/layout';
import Image from "../../../assets/aboutus.png"
const AboutUs = () => {
  return (
    <Layout>
      <div className="mainContainer">
        <p className="title">About <br />Us</p>
        <div className="aboutus">
          <div className="horizentalTitle"><p>CYRUS</p></div>
          <div className="aboutContent">
            <p>
              n 2021, given that digital currencies in the financial arena They arelooking for a big revolution, in order to mechanize Financial automation, banking as well as in technology advances and Ease of handling Cyrusteam finances decided to offer two Currency code with the name CYRUSCOIN on its exclusive blockchain platform and CYTUSTOKEN hasalso performed ERC20-ERC777-ERC1155 in the Ethereum bed. Therefore, it should be noted that This currency code is for supply as acurrency code and user interface Made between Altcoins as you recallCyrus in Greek means Cyrus and in fact CYRUS THE GERAT COIN means the coin of Cyrus the Great And since no taxes were levied in the time of Cyrus We also charge the NETWORK FEE fee inside the wallet DedicatedCYRUSCOIN for sending and receiving transactions and We have alsomade SWAP and EXCHANGE free. The Cyrus team intends to furtherboost its members’ incomes help . Because our income depends on you and also our team The more he tries to be by your side and the better future together Let’s make it ourselves
            </p>
            <div className="aboutImage">
            <img src={Image} />
          </div>
          </div>
        

        </div>

      </div>
    </Layout>
  )
}

export default AboutUs
