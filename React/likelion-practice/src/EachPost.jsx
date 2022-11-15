import React from "react";
import {
    EachPostLi,
    PostLink,
    PostRepl,
    CursorDiv,
  } from "./styledComponent";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationPin} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
function EachPost({title, postID}){
    const navigate = useNavigate();
    const goPost = () => {
        navigate(`${"/ShowPost:"+postID}`);
    }
    return (
        <EachPostLi onClick={goPost}>
            <CursorDiv>
                <FontAwesomeIcon icon={faLocationPin}/>
                <PostLink>{title}</PostLink>
            </CursorDiv>
        </EachPostLi>
    );
}

export default EachPost;