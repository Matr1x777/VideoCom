import React from "react";
import styled from "styled-components";

const ComentItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`
const ChannelPhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`
const CometDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const ComentatorName = styled.label`
  font-size: 14px;
  color: grey;
  font-weight: bold;
`
const ComentText = styled.label`
  margin-top: 5px;
  font-size: 16px;
  color: #d0cfcf;
`
const ForComentLikeOrDis = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  
`
const Counters = styled.label`
  padding: 5px;
  &:hover {
    background-color: rgba(77, 76, 76, 0.19);
    border-radius: 5px;
  }
`
const ComentsStatCount = styled.label`
  color: grey;
  font-size: 11px;
 
`


let CommentsList = (props)=>{
    let comments= props.comments
    let comentsCount = comments.length
    if(comentsCount > 0){
       return (
           props.comments.map(comment => {
               return(
                   <ComentItem>
                       <ChannelPhoto src={comment.photo}/>
                       <CometDetails>
                           <ComentatorName>{comment.name}</ComentatorName>
                           <ComentText>{comment.text}</ComentText>
                           <ForComentLikeOrDis>
                               <Counters>👍 <ComentsStatCount>{comment.likeCount}</ComentsStatCount></Counters>
                               <Counters>👎 <ComentsStatCount>{comment.disCount}</ComentsStatCount></Counters>
                           </ForComentLikeOrDis>
                       </CometDetails>
                   </ComentItem>
               )
           })
       )
    }else {
        return (
            <>
                Коментарів ще немає
            </>
        )
    }

}

export default CommentsList;