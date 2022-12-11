import styled from "styled-components";
import { GiHealthNormal } from 'react-icons/gi';
import { IoSearch } from "react-icons/io5";

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
        border-radius: 12px;
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
    border: 3px solid #FF9100;
    font-size: 30px;
    width: 90%;
    height: 50px;
    border-radius: 20px 20px 20px 0px;
 `;
 export const Content = styled.div`
     display: flex;
     flex-direction: row;
     padding: .5rem;
     height: auto;
     width: 90%;
 `;
 export const SearchIcon = styled(IoSearch)`
    width: 60px;
    height: 60px;
    color: #3C096C;
    padding-right: 5px;
`;