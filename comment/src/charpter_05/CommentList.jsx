import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : '최민지',
        comment : '안녕하세요',
    },
    {
        name : '최민지',
        comment : '반갑습니다',
    },
    {
        name : '최민지',
        comment : '재미있어요',
    },
    
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );    
            })}
        </div>
    );
}

export default CommentList;