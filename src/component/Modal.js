import { useState } from "react";
import styled from "styled-components";
import { Section } from "../App";

const OpenBtn = styled("button")`
    background-color: royalblue;
    border: 0;
    width: 120px;
    height: 40px;
    border-radius: 40px;
    color: white;
    margin: 30px;
    font-weight: 700;
`

const CloseBtn = styled("button")`
    background-color: coral;
    border: 0;
    font-size: 25px;
    width: 40px;
    border-radius: 45px;
    margin: 30px;
    color: white;
    font-weight: 700;
    &:hover{
        background-color: lightgray;
    }
`
const ModalBackground = styled("div")`
    position:${props => props.isOpen?"fixed":"none"};
    left:0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`
const CustomModal = styled("div")`
    display: ${props => props.isOpen?"grid":"none"};
    flex-direction: row;
    background-color: white;
    width: 400px;
    height: 400px;
    border-radius: 40px;
    align-content: center;
    justify-content: center;
    z-index: -1;
`


export default function Modal() {
    
    const [isOpen, setIsOpen] = useState(false);
    const CloseModal = () => {
        setIsOpen(false)
    }
    const OpenModal = () => {
        setIsOpen(true)
    }
    
    return(
        <Section className="modal-section">
            <ModalBackground onClick={CloseModal} isOpen={isOpen}>
                <CustomModal isOpen={isOpen}>
                    <CloseBtn onClick={CloseModal}>x</CloseBtn>
                    <h2>모달 닫기</h2>
                </CustomModal>
            </ModalBackground>
            <h2>Modal</h2>
            <OpenBtn onClick={OpenModal}>모달 열기</OpenBtn>
        </Section>
    );
}