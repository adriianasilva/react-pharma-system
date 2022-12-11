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
        width: 80%;
        flex-direction: column;
        align-self: center;
        margin-left: 1rem;
        
        border-radius: 12px;
    }

    @media screen and (min-width: 900px) {
        img{
        display:flex;
        background-color: #FFFFFF;
        width: 100%;
        flex-direction: column;
        align-self: center;
        margin-left: 42vw;
    }
      }
`;


export const ContainerImg = styled.div `
    display: flex;
    z-index: 2;
`;

export const ContainerIcon = styled.div `
    display:flex;
    justify-content:center;
    z-index: 1;
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