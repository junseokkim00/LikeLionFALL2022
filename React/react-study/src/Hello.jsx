import React from "react";
import "./Hello.css";
import styled from "styled-components";

function Hello() {
    const sty = {
        marginTop: "10px",
        backgroundColor: "blue",
        color: "white"
    };
    const StyledButton = styled.button`
        color:red;
        background-color:gray;
    `
  return (
    <>
    <div style={sty}>
      Hello World!
    </div>
    <div className="classic">
      Hello World!
    </div>
    <div style={sty}>
      Hello World!
    </div>
    <StyledButton>
        button I've made
    </StyledButton>
    </>
    
  );
}

export default Hello;
