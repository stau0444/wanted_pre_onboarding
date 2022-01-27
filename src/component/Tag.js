import { useState } from "react"
import styled from "styled-components"
import { Section } from "../App";

const Wrap = styled("div")`
    display: flex;
    margin: 40px auto;
    width: 90%;
    height: 40px;
    background: whitesmoke;
    border-radius: 40px;
    align-items: center;
    overflow-x: scroll;
    box-shadow: inset 1px 1px 1px gray;
    &::-webkit-scrollbar {
        height: 2px;
    }
`
const TagPiece = styled("div")`
    word-break:keep-all;
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 800;
    margin: 5px 5px;
    margin-right:1px ;
    padding: 0px 8px;
    height: 29px;
    line-height: 25px;
    border-radius: 40px;
    box-shadow: inset 1px 1px 1px whitesmoke;
    background-color: royalblue;    
    color: whitesmoke;
    transition: all 0.3s linear;
`
const CancleBtn = styled("div")`
    border-radius:50%;
    font-weight: 700;
    font-size: 18px;
    height: 50%;
    line-height: 13px;
    margin-left: 4px;
    width: 17px;
    background-color: white;
    color: coral;
    transition: all 0.2s linear;
    &:hover{
        background-color: coral;
        color: white;
    }
`
const TagInput = styled("input")`
    border:0px;
    background-color: inherit;
    margin-left: 10px;
    outline: none;
`
export default function Tag() {
    const [id , setId] = useState(0);
    const [tagList, setTagList ] = useState([]);

    const handleCancle = (id) => {
        setTagList(
            [...tagList.filter((t)=>{return t.id!==id })]
        )
    }
    const addTag = (e) => {
        
            console.log(e.key)
        if(e.key === "Enter"){
            if(tagList.length>3){
                alert("태그는 4개까지 선택할 수 있습니다.");
                return;
            }
            setId(id+1)
            setTagList([...tagList , {id:id , name:e.target.value}])
            e.target.value = ""
        }
    }
    return(
    <Section className="tag-section">
        <h2>Tag</h2>
        <Wrap>
            {tagList.map((t,i)=>{
                return<TagPiece
                        key={t.id}
                        >
                        {t.name}
                        <CancleBtn onClick={()=>{handleCancle(t.id)}}>-</CancleBtn>
                        </TagPiece>
            })}
            <TagInput onKeyPress={addTag} placeholder="태그를 추가해 주세요"/>
        </Wrap>        
    </Section>
    );
}