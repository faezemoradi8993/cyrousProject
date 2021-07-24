import {ReactComponent as Home} from '../../../../assets/home.svg';
import {ReactComponent as Man} from '../../../../assets/male.svg';
import {ReactComponent as Doc} from '../../../../assets/doc.svg';
import {ReactComponent as Exchange} from '../../../../assets/exchange.svg';
import {ReactComponent as Wallet} from '../../../../assets/wallet.svg';
import {ReactComponent as Contact} from '../../../../assets/contactus.svg';
import {ReactComponent as About} from '../../../../assets/about.svg';
export default [
  { id: 0, icon: <Home/>, title: "Home", to: "/" },
  { id: 1, icon: <Man/>, title: "Genealogy", to: "/genealogy" },
  { id: 2, icon: <Doc/>, title: "Document", to: "/document" },
  { id: 3, icon: <Exchange/>, title: "Exchange", to: "/exchange" },
  { id: 4, icon: <Wallet/>, title: "Wallet", to: "/wallet" },
  { id: 5, icon: <Contact/>, title: "Contact us", to: "/contact-us" },
  { id: 6, icon: <About/>, title: "About Us", to: "/about-us" },
]