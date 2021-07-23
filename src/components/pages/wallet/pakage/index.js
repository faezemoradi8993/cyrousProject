import React from 'react'
import "./pakage.css"
import CheckIcon from '@material-ui/icons/Check';
import MainButton from '../../../common/button'
import image from "../../../../assets/package-1.png"
import styled from "styled-components";
const Pakage = ({ type, maincolor, name, month, p1, p2, p3 }) => {

const Header=styled.div`
position: relative;
width: 100%;
height: 200px;
${(props) =>
    props[0] === "1" &&
    `&::before{  
  background: #d5d5d5;`}
  ${(props) =>
    props[0] === "2" &&
    `&::before{  
  background: #ffdc4a;`}
  ${(props) =>
    props[0] === "3" &&
    `&::before{  
  background: #39426f;`

}
`

// const Image = styled.div`
// position:absolute;
// top:1px;
// left:1px;
// width:58px;
// height:58px;
// background-image: url(${image});
// background-position:center;
// background-size:cover;
// background-repeat: no-repeat;
// `

    return (
    
        <div className="pakage">

            <Header className="header" {...type}>
                <div className="top">
                    <h3 style={{ color: `${maincolor}` }}>{name}</h3>
                    <h2 style={{ color: `${maincolor}` }}>{month}<span>month</span></h2>
                    <div className="cut"></div>
                </div>
                <div className="buttom">
                    <img src={image} alt="packageImage" />
                </div>
            </Header>
            <div className="divider" style={{ backgroundColor: `${maincolor}` }}></div>
            <div className="content" style={{ color: { maincolor } }}>
                <h5 style={{ color: `${maincolor}` }}><CheckIcon  />Profit <span>{p1}</span></h5>
                <h5 style={{ color: `${maincolor}` }}><CheckIcon  />COMISSION <span>{p2}</span></h5>
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
