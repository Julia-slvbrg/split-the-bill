import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 1em;
    & button{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: .8em;
        border: none;
        border-radius: 5px;
        color: #d3cfe2ae;

        &:active{
            text-decoration: underline;
            color: #fff;
        }
    }
     .resetTableBtn{
        margin-top: 1em;
        margin-bottom: 1em;
        height: 2em;
        width: 16em;
    } 
    .addValueBtn, .closeCheckgBtn{
        @media screen and (max-width: 365px) {
            width: 25em;
        }
        @media screen and (min-width: 366px) and (max-width: 390px) {
            width: 27em;
        }
        @media screen and (min-width: 420px) and (max-width: 460px) {
            width: 31em;
        }
        width: 29.5em;
        height: 2em;
        margin: .4em 0;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const FormSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Input = styled.input`
    margin: 1.5em 0 1em .8em;
    height: 1.4em;
    width: 10em;
    border-radius: .45em;
    border: .1px solid #0b031a;
    background-color: rgba(112, 110, 110, 0.432);
`
export const CheckSection = styled.section`
    margin: .5em 0 .8em 0;
    display: grid;
    grid-template-columns: 160px 160px;
    justify-content: start;
    align-items: center;
    row-gap: .3em;
`
export const Division = styled.div`
    margin: 1em 0;
    background-color:  #d3cfe2ae;
    width: 20em;
    height: .06em;

    @media screen and (min-width: 360px) and (max-width: 365px) {
        width: 25em;
    }
    @media screen and (min-width: 366px) and (max-width: 390px) {
        width: 21.55em;
    }
    @media screen and (min-width: 395px) and (max-width: 419px) {
        width: 23.6em;
    }
    @media screen and (min-width: 420px) and (max-width: 460px) {
        width: 24.8em;
    }
`