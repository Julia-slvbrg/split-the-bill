import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 1em;
`
export const Title = styled.h1`
    font-size: 1.6em;
    line-height: 1.1;
    margin-bottom: 1.8em;
`
export const ResetTableBtn = styled.button`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: .8em;
    border: none;
    border-radius: .5em;
    height: 100%;
    background-color: #d3cfe26f;
    color: #FFFF;
    height: 2.5em;
    width: 28em;
    margin-top: 3em;

    &:active{
        text-decoration: underline;
        color: #fff;
    }
    @media screen and (max-width: 365px) {
        width: 25em;
    }
    @media screen and (min-width: 366px) and (max-width: 390px) {
        width: 27em;
    }
    @media screen and (min-width: 420px) and (max-width: 460px) {
        width: 31em;
    }
`