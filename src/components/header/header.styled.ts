import styled from "styled-components";
import { GiHealthNormal } from 'react-icons/gi';

export const OrangeBox = styled.div `
    display: flex; 
    background: #FF9100;
    width: 100%;
    height: 170px;
    
    img {
        background-color: #FFFFFF;
        width: 177px;
        height: 148px;
        left: 616px;
        top: 37px;
        margin-left: 10px;
        margin-top: 10px;
    }
`;
export const CruzIcon = styled(GiHealthNormal)`
    width: 80px;
    height: 70px;
    color: #3C096C;
    margin-left: 30px;
    margin-top: 55px;
`;

export const ContainerSearch = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70px;
    margin-top: 30px;
    `;
export const Input = styled.input`
   border: 3px solid #FF9E00;
   width: 90%;
   height: 30px;
`;
export const Content = styled.div`
    border: 1px solid #3C096C;
    padding: .5rem;
    width: 90%;
    img {
        height: 30px;
        width: 30px
    }
`;