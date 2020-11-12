import React from 'react';
import Buttons from './Buttons';

const Numpad = (props) => {
    return (
        <div className="numpad">
                <table>
                    <tr>
                        <td><Buttons ButtonType='clear' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='C'/></td>
                        <td><Buttons ButtonType='clear' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='CE'/></td>
                        <td><Buttons ButtonType='function' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='/'/></td>
                        <td><Buttons ButtonType='function' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='*'/></td>
                    </tr>
                    <tr>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='7'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='8'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='9'/></td>
                        <td><Buttons ButtonType='function' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='-'/></td>
                    </tr>
                    <tr>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='4'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='5'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='6'/></td>
                        <td><Buttons ButtonType='function' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='+'/></td>
                    </tr>
                    <tr>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='1'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='2'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='3'/></td>
                        <td rowSpan='2'><Buttons ButtonType='function' theme={props.theme} font={props.font} onClick={props.onClick} class='tall-button special' name='='/></td>
                    </tr>
                    <tr>
                        <td colSpan='2'><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='wide-button special' name='0'/></td>
                        <td><Buttons ButtonType='number' theme={props.theme} font={props.font} onClick={props.onClick} class='normal-button normal' name='.'/></td>
                    </tr>
                </table>
            </div>
    );
}
 
export default Numpad;