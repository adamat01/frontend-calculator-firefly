import React from 'react';
import styled from '@emotion/styled'

const Readout = (props) => {
    let pad = '40px'
    let font = '45px'
    if(props.size > 41){
        pad = '55px'
        font = '20px'
    }
    else if(props.size > 13){
        pad = '55px'
        font = '30px'
    }
    const P = styled.p`
        padding-top: ${pad};
        font-size: ${font};
        color: #fff;
    `
    if(props.results === ''){
        return(<p id='placeholder' className='number-display'>0</p>);
    }
    else {
        return (
            <P className='number-display'>{props.results}</P>
        );
    }
}
 
export default Readout;