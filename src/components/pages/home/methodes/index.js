import React from "react";
import "./methodes.css";
import styled from "styled-components";
import Logo from "../../../../assets/aboutus.png"

const MethodeContainer = styled.div`
  width: fit-content;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MethodeBox = styled.div`
position:relative;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  color: white;
  padding: 5px;
  width: 90px;
  height: 90px;
  ${(props) =>
    props[0] + props[1] === "p1" &&
    `
  background: #7893ff;
`}
  ${(props) =>
    props[0] + props[1] === "p2" &&
    `
background:  #b778ff;

`}
${(props) =>
    props[0] + props[1] === "p3" &&
    `
background:  #ff7878;

`}
${(props) =>
    props[0] + props[1] === "p4" &&
    `
background:  #2e1f14;

`}
${(props) =>
    props[0] + props[1] === "p5" &&
    `
background:  #ffb378;

`}
`;

const Button = styled.button`
letter-spacing: 0.53px;
text-align: right;
color: #4b5aa7;
border-radius: 11px;
background-color: #b3bdef;
border:none;
margin-top: 7px;
    font-size: 9px;
    padding: 5px 10px;
    font-weight: 600;
`;
const Image = styled.div`
position:absolute;
top:1px;
left:1px;
width:58px;
height:58px;
background-image: url(${Logo});
background-position:center;
background-size:cover;
background-repeat: no-repeat;
`
const Shadow = styled.div`
position:absolute;
top: 7px;
    left: 6px;
    width: 52px;
    height: 52px;
border-radius: 50%;
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
-ms-border-radius: 50%;
-o-border-radius: 50%;
bacground-color:transparent;
box-shadow: 0 0 20px 1px white;

`
const Price = styled.p`
position:absolute;
border-radius: 6px;
background-color: #b0bcf9;
top:49px;
right:-3px;
padding:1px 7px;
font-size:11px;
font-weight:600;
letter-spacing: 2px;
`

const Package = styled.p`
position:absolute;
top:47px;
right:11px;
font-size:5px;
text-transform: uppercase;
opacity: 0.8;
`
const Title = styled.p`
position:absolute;
top:15px;
right:2px;
margin:0;
font-size:7px;
text-transform: uppercase;
  text-orientation: sideways;
  -webkit-text-orientation: sideways;
  writing-mode: vertical-rl;
  -webkit-writing-mode:;
  -ms-writing-mode:;
  color: #f8f8f8;
  font-weight: 900;
  opacity: 0.8;
  letter-spacing: 2px;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);

`
const Line1 = styled.div`
width:25px;
height:1px;
background-color:#f8f8f8;
position:absolute;
top:65px;
left:5px;
opacity:0.5;
`
const Line2 = styled.div`
width:15px;
height:1px;
background-color:#f8f8f8;
position:absolute;
top:73px;
left:5px;
opacity:0.5;
`
const Line3 = styled.div`
width:10px;
height:1px;
background-color:#f8f8f8;
position:absolute;
top:81px;
left:5px;
opacity:0.5;
`
const index = ({ type, price }) => {
  console.log(type);
  return (
    <MethodeContainer>
      {
        <MethodeBox {...type}>
          <Package>Package</Package>
          <Title>CYRUS</Title>
          <Price>{price}</Price>
          <Shadow></Shadow>
          <Line1></Line1>
          <Line2></Line2>
          <Line3></Line3>

          <Image />
        </MethodeBox>
      }

      <Button>Buy Package</Button>
    </MethodeContainer>
  );
};

export default index;
