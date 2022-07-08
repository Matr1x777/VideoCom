import React,{useContext} from "react";
import styled from "styled-components";
import Recommendations from "./Recommendations/Recommendations";
import CommentsList from "./CommentsList";
import UserContext from "../Context/User/UserContext";

const VideoPageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  margin-top: 55px;
`
const VideoPath = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: black;
`
const Iframe = styled.iframe`
  width: 90%;
  height: 70vh;
`
const MainImg = styled.img`
  width: 90%;
  height: 70vh;
`
const VideoInformation = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`
const VideoTitle = styled.label`
  font-size: 21px;
  font-weight: bold;
`
const CountAndData = styled.label`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #b2b0b0;
  margin-top: 10px;
  margin-left: 10px;
`
const LikeAndDisCount = styled.label`
  padding: 5px 18px 8px 15px;
  border: 1px solid grey;
  border-radius: 10px;

  margin: 5px;
  
  font-size: 16px;
  text-transform: uppercase;
`
const LikeCount = styled(LikeAndDisCount)`
  &:hover {
    background-color: rgba(0, 128, 0, 0.3);
    border-color: white;
  }
`
const DislikeCount = styled(LikeAndDisCount)`
  &:hover {
    background-color: rgba(128, 0, 0, 0.3);
    border-color: white;
  }
`
const Description = styled.label`
  width: 70%;
  
  margin: 20px 0;
  color: #9a9797;
  font-size: 16px;
`
const ChannelPhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`
const BottomPath = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 15px 50px;
`
const CommentsBlock = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-top: 1px solid #ffffff;

`
const CreateComent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding: 20px 0;
`
const ComentInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-left: 10px;
  background:none;
  color: white;
  border-right: none;
`
const ComentSendBtn = styled.button`
  color: white;
  background-color: #575555;
  border: none;
  padding: 7px 20px;

  &:hover {
    background-color: #807d7d;
  }
`

const Recommends = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`



let VideoPage = (props) => {
    let user = useContext(UserContext)

    let Descriptions = () => {
        if (props.currentVideo.description === ""){
            return(
                <Description>
                    Оскільки добавляти опис до кожного відео у мене зайнялоб ну дууже багато часу, я не хочу цього робити.
                    Це буде стандартний шаблон який буде аід кожним відео де не було добавленого опису. <br/>
                    Прошу віднестися з розумінням :)
                </Description>
            )
        }else {
            return (
                <Description>{props.currentVideo.description}</Description>
            )
        }
    }

    return(
        <VideoPageBlock>
            <VideoPath>
               {/* <Iframe src={"https://www.youtube.com/embed/"+props.currentVideo.link}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></Iframe>*/}
                <MainImg src={props.currentVideo.img}/>
            </VideoPath>
           <BottomPath>
               <VideoInformation>
                   <VideoTitle>{props.currentVideo.name}</VideoTitle>
                   <Row>
                       <CountAndData>{props.currentVideo.viewsCount} переглядів </CountAndData>
                       <CountAndData>◉ {props.currentVideo.presentData} рік</CountAndData>
                   </Row>
                 <Descriptions/>
                   <Row>
                       <LikeCount>👍 {props.currentVideo.likeCount}</LikeCount>
                       <DislikeCount>👎 {props.currentVideo.disLikeCount}</DislikeCount>
                   </Row>

                   <CommentsBlock>
                        <CreateComent>
                            <ChannelPhoto src={user.photo}/>
                            <ComentInput type="text" placeholder={user.name+", ваш коментар будуть бачити всі користувачі"}/>
                            <ComentSendBtn>Опублікувати</ComentSendBtn>
                        </CreateComent>
                       <div>
                           <CommentsList comments={props.currentVideo.comments}/>
                       </div>
                   </CommentsBlock>
               </VideoInformation>
               <Recommends>
                   {props.recomendations.map(rec => {
                       return(
                           <Recommendations recomendVideo={rec}/>
                       )
                   })}
               </Recommends>
           </BottomPath>
        </VideoPageBlock>
    )
}
export default VideoPage;