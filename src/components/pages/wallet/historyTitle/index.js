import React from 'react'
import "./historytitle.css"
import icon from "../../../../assets/history.svg";
import Transactions from './history.object';
import { ReactComponent as History } from '../../../../assets/history.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    DateRow, MainContainer, SelectBox, DateText, Divider, TXRow,
    TypeTx, TextContainer, TypeAction, AmountText,AmountTx, SvgContainer
} from './history.styled'
const index = () => {
    return (
        <>
            <div className="history-title" >
                <p><span><History /></span>RECENT TRANSACTIONS</p>
            </div>
            <MainContainer>
                <DateRow>
                    <DateText>TODAY | 27 APRIL,2021</DateText>
                    <SelectBox>
                        <option>today</option>
                        <option>yesterday</option>
                    </SelectBox>
                </DateRow>
                <Divider />
                {
                    Transactions.map(item => (
                        <TXRow key={item.id}>
                            <TextContainer>
                                <TypeTx receive={item.receive}>{item.receive ? "+" : "-"}</TypeTx>
                                <TypeAction>
                                    <div>
                                        {item.text}
                                        <span>{item.person}</span>
                                    </div>
                                    <div>
                                        {item.subject}
                                    </div>
                                </TypeAction>
                            </TextContainer>
                            <AmountText>
                                <SvgContainer receive={item.receive}>
                                    <ExpandMoreIcon />
                                    <ExpandMoreIcon />
                                </SvgContainer>
                                <AmountTx>{item.amount}</AmountTx>
                            </AmountText>
                        </TXRow>
                    ))
                }
            </MainContainer>
        </>
    )
}

export default index
