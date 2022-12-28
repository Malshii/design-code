import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import Credit from "../../images/icons/credit.svg"
import Bell from "../../images/icons/icon-ring.svg"

export default function PurchaseButton(props) {
    const { title, subtitle } = props
    return (
    <Wrapper>
        <IconWrapper>
            <Icon src={Credit} className="icon"/>
            <Ring src={Bell} />
        </IconWrapper>
        <TextWrapper>
            <Title>{title || "Get Pro Access"}</Title>
            <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>        
    </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 280px;
    height: 77px;
    padding: 12px;
    background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border: 0px;
    display: grid;
    grid-template-columns: 53px auto;
    justify-content: start;
    align-items: center;
    gap: 20px;

    /* This is the hover effect */
    :hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(23, 0, 102, 0.5),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);   

        /*Apply Transition to Everything*/
        *,
        & {
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        } 

        /*This is the transform effect*/
        transform: translateY(-3px);

        .icon {
            transform: scale(1.2);
        }
    }
`
const Title = styled(Caption2)`
	color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`
const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    position: relative;

    /* filter - graphical effects */
    ${Wrapper}:hover & {
        filter: hue-rotate(10deg);
    }
`
const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  ${Wrapper}:hover & {
  transform: rotate(30deg) scale(1.2) translate(1px, 1px);}
`
