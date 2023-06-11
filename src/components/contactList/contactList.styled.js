import styled from 'styled-components';

export const List = styled.ul`
    padding-left: 30px;
`;

export const Item = styled.li`
    padding-left: 5px;
    font-size: 17px;
`;  

export const Text = styled.p`
    display: inline-block;
    min-width: 200px;
    font-family: cursive;
    
`;

export const Button = styled.button`
    width: 80px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin-left: 40px;
    border: 2px solid #20B2AA;
    border-radius: 7px;
    cursor: pointer;
    font-family: cursive;
    background-color: transparent;
    transition: background-color 0.2s cubic-bezier(0.21, 0.85, 0.46, 0.23) 0s;

    &:hover,
    &:focus {
    background-color: #20B2AA;
    }
`;