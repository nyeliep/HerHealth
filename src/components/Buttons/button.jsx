import React from "react";
import styled from "styled-components"

export default function Button({title,action,border}){
    return(
        <wrapper className="animate pointer raduis8 "
        onclick={action ? ()=> action() : null}
        border={border}
        >
        {title}
        </wrapper>
    );
}

const Wrapper = styled.button`
border:    1px solid ${(props)=>(props.border ? "#E52F8A": "#E52F8A")};
background-color: ${(props)=>(props.border ? "transparent":"#E52F8A")};
width:100%;
padding: 15px;
outline: none;
color: ${(props)=>(props.border ?"#707070":"#fff")}
:hover{
    background-color: ${(props)=> (props.border ?"transparent":"580cd2")};
    border: 1px solid #7620ff;
    color : ${(props)=>(props.border ? "#7620ff": "#fff")};
}
` 
;