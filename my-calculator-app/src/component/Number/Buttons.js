import React from 'react';
import styled from '@emotion/styled';

const Buttons = (props) => {

    let color1 = ""
    let color2 = ""
    let color3 = ""
    let color4 = ""
    let font = ""

    if(props.theme === "warm"){
        color1 = "#383838"
        color2 = "#db8700"
        color3 = "#a30000"
        color4 = "#fff"
        document.getElementsByTagName("body")[0].style.backgroundColor = "#383838"
    }
    else if(props.theme === "cool"){
        color1 = "#070085"
        color2 = "#000"
        color3 = "#00ddff"
        color4 = "#fff"
        document.getElementsByTagName("body")[0].style.backgroundColor = "#070085"
    }
    else if(props.theme === "firefly"){
        color1 = "#3fad00"
        color2 = "#8c0900"
        color3 = "#dbd516"
        color4 = "#000"
        document.getElementsByTagName("body")[0].style.backgroundColor = "#3fad00"
    }
    else {
        color1 = "#5b39b9"
        color2 = "#373a47"
        color3 = "#b9a639"
        color4 = "#fff"
        document.getElementsByTagName("body")[0].style.backgroundColor = "#5b39b9"
    }

    if(props.font === "times"){
        font = "Times"
    }
    else if(props.font === "georgia"){
        font = "Georgia"
    }
    else {
        font = "sans-serif"
    }

    const ButtonNumber = styled.button`
        background-color: ${color1};
        border: 4px solid ${color2};
        color: ${color4};
        font-family: ${font};
    `

    const ButtonFucntion = styled.button`
        background-color: ${color3};
        border: 4px solid ${color1};
        color: ${color1};
        font-family: ${font};
    `

    const ButtonClear = styled.button`
        background-color: ${color1};
        border: 4px solid ${color3};
        color: ${color4};
        font-family: ${font};
    `

    if(props.ButtonType === 'number'){
        return (
            <ButtonNumber className={props.class} onClick={e => props.onClick(e.target.name)} name={props.name}>{props.name}</ButtonNumber>
        );
    }
    else if(props.ButtonType === 'function'){
        return (
            <ButtonFucntion className={props.class} onClick={e => props.onClick(e.target.name)} name={props.name}>{props.name}</ButtonFucntion>
        );
    }
    else if(props.ButtonType === 'clear'){
        return (
            <ButtonClear className={props.class} onClick={e => props.onClick(e.target.name)} name={props.name}>{props.name}</ButtonClear>
        );
    }
}
 
export default Buttons;