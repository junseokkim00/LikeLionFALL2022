import React from 'react';
import { ContentsInput, PostSection, PostSubmit, PostSubmitDiv, PostTitle, PostTitleDiv, PostWriteDiv, TitleInput } from '../styledComponent';
import { useState } from 'react';

const WritePost = () => {
    const [inputs, setInputs] = useState({
        'title':'',
        'content':'',
    });
    const {title, content} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value,
        });
    }

    return (
        <PostSection>
            <PostTitleDiv>
                <PostTitle>글쓰기</PostTitle>
            </PostTitleDiv>
            <PostWriteDiv>
                <TitleInput name='title' onChange={onChange} placeholder='제목을 입력해주세요. 15자 이내' value={title}/>
                <ContentsInput name='content' onChange={onChange} cols="30" rows="30" value={content}></ContentsInput>
            </PostWriteDiv>
            <PostSubmitDiv>
                <PostSubmit>작성완료</PostSubmit>
            </PostSubmitDiv>
        </PostSection>
    );
};

export default WritePost;