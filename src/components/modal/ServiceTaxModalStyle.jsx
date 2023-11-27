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
    padding: 35px;
    background-color: #fff; 
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContentContainer = styled.div`
    width: 15em;
    height: 9em;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    
`
export const CloseBtnSection = styled.section`
    grid-row: 1/2;
    justify-items: end;
    padding-left: 13em;
`
export const CloseBtn = styled.button`
    justify-items: end;
    align-items: end;
    height: 2em;
    width: 2em;
    display: flex;
    justify-content: center;
    .material-symbols-outlined{
        scale: .6;
    } 
`
export const Heading = styled.h1`
    font-size: 1.2em;
    text-justify: distribute-all-lines;
`
export const TaxBtnSection = styled.section`
    display: flex;
    flex-direction: row;
    gap: 2em;
    justify-content: center;

    & button{
        margin-top: 1em;
        height: 2em;
        width: 4em;
    }
`