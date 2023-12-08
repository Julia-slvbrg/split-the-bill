import styled from "styled-components";

export const MainPageContainer = styled.div`
   
`
export const Wrapper = styled.div`
    padding: 2em;
    & button{
        color: #FFFF;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: .8em;
        border: none;
        border-radius: .5em;
        height: 100%;
        background-color: #d3cfe26f;

        &:active{
            text-decoration: underline;
            color: #fff;
        }
    }
`
export const Title = styled.h1`
    font-size: 1.6em;
    line-height: 1.1;
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: .5em;
    margin-bottom: 1.2em;
    height: 2em;
`
export const Input = styled.input`
    height: 90%;
    width: 40em;
    border-radius: .5em;
    border: .5px solid #0b031a;
    background-color: rgba(112, 110, 110, 0.432);
    padding-left: 1em;
`
export const AddValueSection = styled.section`
    height: 2.2em;
    width: 20em;
    margin-bottom: 1.5em;
    .addValueBtn{
        width: 18em;
    }
`
export const Division = styled.div`
    background-color:  #d3cfe2ae;
    width: 20em;
    height: .06em;
    @media screen and (min-width: 280px) and (max-width: 359px) {
        width: 17em;
    }
    @media screen and (min-width: 360px) and (max-width: 365px) {
        width: 19em;
    }
    @media screen and (min-width: 366px) and (max-width: 390px) {
        width: 20em;
    }
    @media screen and (min-width: 395px) and (max-width: 419px) {
        width: 22em;
    }
    @media screen and (min-width: 420px) and (max-width: 460px) {
        width: 23em;
    }
`
