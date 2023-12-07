import styled from "styled-components";

export const CardBtnSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
        
    & p{
        width: 25em;
    }
    .removeClientBtn{
        width: 1.8em;
        height: 1.2em;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .material-symbols-outlined{
        scale: .5;
        justify-content: center;
        align-items: center;
    }
`
export const CardValueSection = styled.section`
    .clientName{
        margin-bottom: -1em;
    }
    .value{
        margin-left: .6em;
    }
`