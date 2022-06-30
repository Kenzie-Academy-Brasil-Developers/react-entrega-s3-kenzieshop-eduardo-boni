import styled from "styled-components";

export const Header = styled.header`
  background-color: black;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  
  h2 {
    color: white;
    margin: auto;
    margin-left: 10%;
    a {
      color: white;
      text-decoration:none;
      margin: 0;
    }
  }
  a {
    margin: auto 10%;

    div {
      margin-top: 1px;
      width: 15px;
      display: flex;
      position: absolute;
      background-color: white;
      border-radius: 50px;
      color: black;
      background-color: blue;
      color: #fff;
      p {
        margin: auto;
      }
    }
    svg {
      color: white;
      height: 60px;
      width: 30px;
    }
  }
`;