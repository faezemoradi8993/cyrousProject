import styled from 'styled-components';
export const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
export const DateRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
export const SelectBox = styled.select`
  background-color: #5162bb;
  border-radius: 22px;
  padding: 0 5px;
  height: 33px;
  cursor: pointer;
  color: #ebecf1;
`;
export const DateText = styled.div`
  font-size: 19px;
  color: black;
  font-weight: bold;
  line-height: 26px;
`;
export const Divider = styled.div`
  height: 2px;
  background-color: #a8a0a0;
  width: 100%;
  margin: 20px 0;
`;
export const TXRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  height: 66px;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const TypeAction = styled.div`
  display: flex;
  flex-direction: column;
  div {
    &:first-child {
      color: #000;
      font-size: 24px;
      span {
        font-weight: bold;
        margin-left: 5px;
      }
    }
    &:last-child {
      font-size: 15px;
      font-weight: bold;
      color: #000;
      position: relative;
      top: 8px;
    }
  }
`;
export const TypeTx = styled.div`
  height: 100%;
  width: 66px;
  margin-right: 10px;
  border-radius: 12px;
  box-shadow: 9px 6px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  font-size: 40px;
  line-height: 58px;
  text-align: center;
  color: ${props => props.receive ? "#6acc41" : "#f00"}
`;
export const AmountText = styled.div`
  display: flex;

`;
export const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    transform: ${props => props.receive ? "unset" : "rotate(180deg)"};
    fill: ${props=>props.receive ? "#6acc41" : "#f00"};
    margin: -8px 0;
    position: relative;
    top: 16px;
  }
`;
export const AmountTx = styled.div`
  font-size: 30px;
  letter-spacing: 2.06px;
`;