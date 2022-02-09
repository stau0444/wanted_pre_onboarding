import { useState } from "react";
import styled from "styled-components";
import { Section } from "../App";

const Wrap = styled("div")`
    margin:20px 0;
`
const FormControl = styled("div")`
    margin:20px;
`
const Result = styled("p")`
    margin:10px;
`
const CustomInput = styled("input")`
    margin-left: 10px;
    width: 40%;
    height: 13px;
    transition: all 0.1s linear;
    &:focus{
        width: 45%;
        height: 20px;
    }
`
export default function ClickToEdit() {
    const [name,setName] = useState('?');
    const [age,setAge] = useState('?');
    return(
        <Section className="clickToEdit-section">
            <h2>ClickToEdit</h2>
            <Wrap>
                <FormControl>
                    <label htmlFor="name">이름</label>
                    <CustomInput id="name" onBlur={(e)=>{setName(e.target.value)}}/>
                </FormControl>
                <FormControl>
                    <label htmlFor="age">나이</label>
                    <CustomInput id="age" onBlur={(e)=>{setAge(e.target.value)}}/>
                </FormControl>
                <Result>이름은 <strong>{name}</strong> 나이는 <strong>{age}</strong> 세</Result>
            </Wrap>
        </Section>
    );
}