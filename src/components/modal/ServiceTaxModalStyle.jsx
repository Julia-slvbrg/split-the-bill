import styled from "styled-components";

export const Backkground = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(56, 58, 58, 0.7); 
    z-index: 1000;
`
export const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px;
    background-color: #fff; //ajeitar isso depois
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`