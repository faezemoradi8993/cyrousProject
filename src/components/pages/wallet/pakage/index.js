import React from 'react'
import "./pakage.css"
import CheckIcon from '@material-ui/icons/Check';
import MainButton from '../../../common/button'
import image from "../../../../assets/package-1.png"
const Pakage = ({ backcolor, maincolor, name, month, p1, p2, p3 }) => {

    return (

        <div className="pakage">

            <div className="header">
                <div className="top">
                    <h3 style={{ color: `${maincolor}` }}>{name}</h3>
                    <h2 style={{ color: `${maincolor}` }}>{month}<span>month</span></h2>
                    <div className="cut"></div>
                </div>
                <div className="buttom">
                    <img src={image} alt="packageImage" />
                </div>
            </div>
            <div className="divider" style={{ backgroundColor: `${maincolor}` }}></div>
            <div className="content" style={{ color: { maincolor } }}>
                <h5 style={{ color: `${maincolor}` }}><CheckIcon />Profit <span>{p1}</span></h5>
                <h5 style={{ color: `${maincolor}` }}><CheckIcon />COMISSION <span>{p2}</span></h5>
                <h5 style={{ color: `${maincolor}` }}><CheckIcon />The amount is <span>{p3}</span></h5>
                <h5 style={{ color: `${maincolor}` }}>investment </h5>
            </div>
            <div className="btn">

                <MainButton title="Invest" clicked={() => console.log("cliked")} />
            </div>
        </div>
    )
}

export default Pakage
