import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
    `;
export const Input = styled.input`
   border: 3px solid #FF9E00;
   font-size: 30px;
   width: 100%;
   height: 50px;
   border-radius: 20px 20px 20px 0px;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding: .5rem;
    height: auto;
    width: 80%;
`;
export const SearchIcon = styled(IoSearch)`
    width: 60px;
    height: 60px;
    color: #FF9100;
    padding-right: 5px;
`;

