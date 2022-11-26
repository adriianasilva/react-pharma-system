import styled from "styled-components";
import { GiHealthNormal } from 'react-icons/gi';

export const Container = styled.div `
     heigth: 100%;
`;
export const OrangeBox = styled.div `
    display: flex; 
    background: #FF9100;
    
    img{
        background-color: #FFFFFF;
        width: 207px;
        height: 198px;
        left: 616px;
        top: 37px;
    }
`;
export const CruzIcon = styled(GiHealthNormal)`
    width: 175px;
    height: 523px;
    color: #3C096C;
`;

export const CruzIconOrange = styled(GiHealthNormal)`
    width: 175px;
    height: 523px;
    color: #FF9100;
`;