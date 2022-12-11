import styled from "styled-components";
import { GiHealthNormal } from 'react-icons/gi';

export const Container = styled.div `
     heigth: 100%;
`;
export const OrangeBox = styled.div `
    display: flex; 
    background: #FF9100;
    border-radius: 0px 0px 0px 150px;
   

    img{
        display:flex;
        background-color: #FFFFFF;
        width: 300px;
        height: 300px;
        flex-direction: column;
        align-self: center;
        margin-left: 42vw;
    }
`;
export const ContainerIcon = styled.div `
    display:flex;
    justify-content:center;
`;
export const CruzIcon = styled(GiHealthNormal)`
    display:flex;
    width: 450px;
    height: 523px;
    color: #3C096C;
    margin-left: auto;
    margin-right: -60px;
    margin-top: -50px;
    margin-bottom: -50px;
`;

export const CruzIconOrange = styled(GiHealthNormal)`
    display:flex;
    width: 450px;
    height: 523px;
    color: #FF9100;
    margin-bottom: 170px;
    margin-left: -75px;
`;
export const CruzIconDarkPurple = styled(GiHealthNormal)`
    display: flex;
    width: 450px;
    height: 523px;
    color: #240046;
    margin-top: 170px;
    margin-right:-75px;
`;