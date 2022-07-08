import React from "react";
import styled from "styled-components";
import {NavLink, useParams} from "react-router-dom";

const RecomendItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  
  padding: 10px ;
  text-decoration: none;
  &:hover {
    border-radius: 20px;
    border-right: 2px solid red;
    border-bottom: 2px solid red;
    padding: 10px 8px 8px 10px;
  }
`
const ItemImg = styled.img`
  width: 180px;
  height: 100px;
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`
const ItemName = styled.label`
  margin-bottom: 10px;
  color: #cccaca;
`
const SomeInfo = styled.label`
  margin-bottom:3px;
  font-size: 14px;
  color: grey;
`

let Recommendations = (props) => {
    let {genre}=useParams()
    return(
        <RecomendItem to={"/"+genre+"/"+props.recomendVideo.filmId}>
            <ItemImg src={props.recomendVideo.img}/>
            <ItemInfo>
                <ItemName>{props.recomendVideo.name}</ItemName>
                <SomeInfo>{props.recomendVideo.viewsCount} переглядів</SomeInfo>
                <SomeInfo>{props.recomendVideo.presentData} рік виходу</SomeInfo>
            </ItemInfo>
        </RecomendItem>
    )
}

export default Recommendations;