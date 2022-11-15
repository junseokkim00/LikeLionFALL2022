import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadingDiv,
  LoadingImg,
  PagenumberDiv,
  PagingSection,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  CursorDiv,
} from "./styledComponent";

import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "./loading.svg"
import EachPost from "./EachPost";

const initialPost = [
  {id:1, title: 'This is a Title'},
];

function ShowPostList() {
  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(true);
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  const addPost = () => {
    setPostList((postList) => [
      ...postList,{id:2, title: "Add new topic"},
    ]);
  }
  
  const goWrite = () => {
    navigate("/WritePost");
  }

  useEffect(()=>{
    setTimeout(()=>{
      setPostList(initialPost);
      setLoading(false);
    },500);
  },[])
    return (
        <>
            <PostSection>
              <PostTitleDiv>
                <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
                <PostTitle>익명게시판</PostTitle>
                <CursorDiv>
                  <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
                </CursorDiv>
  
              </PostTitleDiv>
              {loading ? (
              <LoadingDiv>
                <LoadingImg src={loadingIcon}/>
              </LoadingDiv>
              ):isPost ? (
                <>
                    <PostListDiv>
                        <ul>
                            {postList.map((element) => 
                                <EachPost 
                                  key={element.id} 
                                  title={element.title}
                                  postID={element.id}
                                />)}
                        </ul>
                    </PostListDiv>
                </>
                ): (
                <LoadingDiv>
                    기록된 글이 없습니다.
                </LoadingDiv>
                )
              }
            </PostSection>
            <PagingSection>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft} />
              </PagenumberDiv>
              <PagenumberDiv>2</PagenumberDiv>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowRight} />
              </PagenumberDiv>
            </PagingSection>
        </>
    );
}

export default ShowPostList;