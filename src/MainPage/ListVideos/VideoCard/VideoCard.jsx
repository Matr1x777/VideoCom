import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const VideoCardBlock = styled(NavLink)`
  width: 22%;

  margin: 0 15px 30px 0;
  padding-bottom: 10px;
  
  text-decoration: none;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 10px 2px #605b5b;
  }
`
const PrewVideoBlock = styled.div`

`
const PrewVideoImg = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`
const VideoInformation = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  
  margin-top: 10px; 
`
const RatingBlock = styled.div`
  width: 25%;
  
  padding: 5px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const RatingTitle = styled.label`
  color: #afa8a8;
  font-size: 11px;
  font-weight: bold;

`

const RatingValue = styled.label`
  color: grey;
  font-size: 11px;
`
const RatingB = styled.b`
  font-size: 14px;
  color: #b70606;
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
`
const ForTitle = styled.div`
  width: 100%;
  max-height: 45px;
  overflow: hidden;
`
const VideoTitle = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: white;
`
const InfoAbout = styled.label`
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  color: grey;
  
  padding: 3px;
`
let VideoCard = (props) => {


    return(
        <VideoCardBlock to={"/"+props.genre+"/"+props.video.filmId}>
            <PrewVideoBlock>
                <PrewVideoImg src={props.video.img}/>
            </PrewVideoBlock>
            <VideoInformation>
                <RatingBlock>
                    <RatingTitle>Рейтинг</RatingTitle>
                    <RatingValue><RatingB>{props.video.rating}</RatingB> /10 </RatingValue>
                </RatingBlock>
                <Col>
                    <ForTitle>
                        <VideoTitle>{props.video.name}</VideoTitle>
                    </ForTitle>
                    <InfoAbout>{props.video.chanelOwner}</InfoAbout>
                    <InfoAbout>∙ Переглядів: {props.video.viewsCount}</InfoAbout>
                    <InfoAbout>∙ Рік виходу: {props.video.presentData}</InfoAbout>
                </Col>
            </VideoInformation>
        </VideoCardBlock>
    )
}
export default VideoCard;