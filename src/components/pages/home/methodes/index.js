import React from "react";
import "./methodes.css";
import styled from "styled-components";

const MethodeContainer = styled.div`
  width: fit-content;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MethodeBox = styled.div`
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
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

const index = ({ type, price }) => {
  console.log(type);
  return (
    <MethodeContainer>
      {
        <MethodeBox {...type}>
          <p>{price}</p>
        </MethodeBox>
      }

      <Button>Buy Package</Button>
    </MethodeContainer>
  );
};

export default index;
