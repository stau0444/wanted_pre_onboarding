import { useEffect, useState } from "react";
import styled from "styled-components";
import { Section } from "../App";


const Wrap = styled("div")`
    margin:10px auto;
    margin-bottom: 10px;
    display: inline-block;
    width: 50px;
    height: 24px;
    padding: 0.5px 0px;
    background-color: ${props => props.isOn?"purple":"lightgray"};
    border-radius:  12px 12px 12px 12px;  
    transition : background-color 0.2s ease-in-out ;
`


const Round = styled("div")`
    transition: all 0.2s ease-in;
    width: 40%;
    height: 85%;
    margin-left: ${props => props.isOn?"5px":"25px"};
    margin-top: 1.5px;
    border-radius: 100%;
    background-color: white;
`




function Toggle() {
    const [isOn , setIsOn] = useState();
    const handleSwitch = () => {isOn?setIsOn(false):setIsOn(true)}
    

    return (
        <>

            <Section className="switch-section">
                <h2>Toggle</h2>
                    <Wrap onClick={handleSwitch} isOn={isOn} className="switch-wrap">
                        <Round isOn={isOn} onClick={handleSwitch} className="switch-round"/>
                    </Wrap>            
                {
                    isOn?
                    <p>Toggle Switch ON</p>
                    :
                    <p>Toggle Switch OFF</p>
                }
            </Section>
            
        </>
    );
  }
export default Toggle;