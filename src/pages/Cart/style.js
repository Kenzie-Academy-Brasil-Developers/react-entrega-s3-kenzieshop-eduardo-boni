import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    
    .Cont{
        margin: auto;
        width: 650px;
        background-color: white;
        border-radius: 5px;
        border: 2px solid black;
        margin-bottom: 10px;
    }

    .TotalValue {
        text-align: center;
        margin: 30px 100px;
        height: 180px;
        width: 350px;
        background-color: white;
        border-radius: 5px;
        border: 2px solid black;
        margin-bottom: 10px;
    }

    header {
        margin: 15px;

        font-weight: bold;
        font-size: 14pt;
        font-family: Arial, Helvetica, sans-serif;

        display:flex;
        flex-direction:row;
        justify-content:space-between;

        border-bottom: 2px dotted gray;
    }

    .TotalValue header{
        margin: 15px;
      
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border-bottom: 1px dotted gray;
        color: #000;
        
        font-size: 14pt;
        font-family: Arial;
    }

    .Value {
        display: flex;
        justify-content: flex-start;
        gap: 10px;

        font-size: 14pt;
        font-weight: bold;

        padding-left: 15px;

        color: #4e5861;
    }

    button {
        width: 14vw;
        height: 6vh;

        margin: 30px;

        font-size: 13pt;
        font-family: Arial;
        font-weight: bold;

        color: #fff;
        border: 2px solid yellow;
        border-radius: 5px;

        background: #000;

        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  }
`