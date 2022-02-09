import { useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "../App";

const Wrap = styled("div")`
    margin:50px auto;
    display: flex;
    width: 70%;
    height: 50px;
    line-height: 50px;
    justify-content:center;
    border:1px solid black;
`
const CustomTab = styled("div")`
    width: 33%;
    height: 50px;
    background-color: whitesmoke;
    transition: background-color 0.3s ease-in-out;
    &.active{
        background-color: purple;
        color: white;
    }
`

export default function Tab() {
    const [checkedId, setCheckedId] = useState();
    const [tabList,setTabList] = useState([
        {name:"tab1"},
        {name:"tab2"},
        {name:"tab3"}
    ])
    const addTabRef = useRef();

    const checkId = (id)=>{
        setCheckedId(id)
    }

    const addTab = (v) => {
        setTabList([...tabList,{name:v}])
    }
    
    return(
        <Section className="tab-section">
            <h2>Tab</h2>
            <input ref={addTabRef}/>
            <button onClick={()=>{addTab(addTabRef.current.value)}}>탭추가</button>
            <p>{checkedId===undefined?"Click menu!":"Clicked Tab" + checkedId} </p>
            <Wrap className="tab-wrap">
                {tabList.map((t,i)=>{
                    return <CustomTab 
                            onClick={()=>{checkId(i)}} 
                            className={checkedId===i?"tab active":"tab"}
                            key={i}
                            >
                                {t.name}
                            </CustomTab>;
                })}
            </Wrap>
        </Section>
    );
}