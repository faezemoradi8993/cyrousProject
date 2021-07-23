import React , {useState} from 'react'
import Layout from '../../common/layout'
import './wallet.css'
import MainButton from '../../common/button'
import Pakage from "./pakage"
import packageData from './package.data'
const Wallet = () => {
  const [showWallet , setshowWallet]=useState(false)
  return (
    <Layout>
      <div className="mainContainer ">
        <div className="mainContent wallet ">
        <span id="back-to-top-anchor" />
        
          {packageData.map(p => <Pakage key={p.id} type={p.type} maincolor={p.maincolor} name={p.name} image={p.image} month={p.month} p1={p.p1} p2={p.p2} p3={p.p3} />)}
          <div className="leftButton">
            <MainButton title="Back" clicked={() => console.log("cliked")} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Wallet
