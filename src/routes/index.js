import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from "../components/pages/home"
import AboutUs from "../components/pages/aboutUs"
import ContactUs from "../components/pages/contactus"
import Genealogy from "../components/pages/genealogy"
import Document from "../components/pages/document"
import Wallet from "../components/pages/wallet"
import Exchange from "../components/pages/exchange"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genealogy" component={Genealogy} />
          <Route path="/document" component={Document} />
          <Route path="/exchange" component={Exchange} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default Routes
