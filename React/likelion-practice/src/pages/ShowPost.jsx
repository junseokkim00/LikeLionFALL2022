import React from 'react';
import { useState, useMemo } from 'react';
import { LoadingDiv, LoadingImg, PostReplDiv, PostSection, PostTitle, PostTitleDiv, ReplTitleDiv, ReplWriter, Repl, WriterDiv, ReplInput, ReplSubmitDiv } from '../styledComponent';
import { useEffect } from 'react';

const postData = {
    title: 'test',
    contents: 'This is a sample test for the program to check if it is working properly.',
};

const replData = [
    {id:2,content:"LGTM"},
    {id:3,content:"worked properly"},
];

const ShowPost = () => {
    const [post, setPost] = useState(null);
    const [repls, setRepls] = useState([]);
    const [postLoading, setPostLoading] = useState(true);
    const [replLoading, setReplLoading] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setPost(postData);
            setPostLoading(false);
        },1000)
    },[]);

    useEffect(()=>{
        setTimeout(()=>{
            setRepls(replData);
            setReplLoading(false);
        },2000);
    },[]);

    const [repl, setRepl] = useState('');

    const onchange = (e) => {
        setRepl(e.target.value)
    }

    const countRepls= (repls) => {
        console.log('리뷰 개수 세는 중');
        return repls.length;
    }

    const replCount = useMemo(()=> countRepls(repls),[repls]);
    
    return (
        <div>
            <PostSection>
                <PostTitleDiv>
                    <PostTitle>
                        {post && post.title}
                    </PostTitle>
                </PostTitleDiv>

                {postLoading ? (
                    <LoadingDiv>
                        <LoadingImg src={'/React/likelion-practice/src/loading.svg'}/>
                    </LoadingDiv>
                ):
                    <PostReplDiv>
                        {post && post.contents}
                    </PostReplDiv>
                }

                <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
                {replLoading ?(
                    <LoadingDiv>
                        <LoadingImg src={'/React/likelion-practice/src/loading.svg'}/>
                    </LoadingDiv>
                ) :(
                    repls &&
                    repls.map((element) => (
                        <PostReplDiv key={element.id}>
                            <ReplWriter>익명</ReplWriter>
                            <Repl>{element.content}</Repl>
                        </PostReplDiv>
                    ))
                    )
                }
                <WriterDiv>
                    <ReplInput onChange={onchange} value={repl}></ReplInput>
                    <ReplSubmitDiv>
                        <span>입력</span>
                    </ReplSubmitDiv>
                </WriterDiv>
            </PostSection>
        </div>
    );
};

export default ShowPost;