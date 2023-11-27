import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 1em;
    & button{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        font-size: .8em;
        border: none;
        border-radius: .5em;
        color: #d3cfe2ae;
    }
     .resetTableBtn{
        margin-top: 1em;
        height: 2em;
        width: 16em;
    } 
    .addValueBtn, .closeCheckgBtn{
        width: 28em;
        height: 2em;
        margin: .4em 0;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    margin: 1.5em 0 1em .8em;
    height: 1.4em;
    border-radius: .45em;
    border: .1px solid #0b031a;
    background-color: rgba(112, 110, 110, 0.432);
`
export const CheckSection = styled.section`
    margin: .5em 0 .3em 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    align-items: center;
    row-gap: .3em;
`
export const Division = styled.div`
    margin: 1em 0;
    background-color:  #d3cfe2ae;
    width: 22em;
    height: .06em;
`