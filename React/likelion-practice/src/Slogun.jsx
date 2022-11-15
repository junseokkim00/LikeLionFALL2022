import React from "react";
import {
    CursorDiv,
  SlogunBig,
  SlogunSection,
  SlogunSmall,
} from "./styledComponent";
import { useNavigate } from "react-router-dom";

function Slogun() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }


    return (
        <SlogunSection>
            <CursorDiv>
                <SlogunBig onClick={goHome}>Hack Your Life</SlogunBig>
            </CursorDiv>
            <SlogunSmall>내 손으로 실현한다.</SlogunSmall>
        </SlogunSection>
    );
}

export default Slogun;