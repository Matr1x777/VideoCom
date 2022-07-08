import React from "react";
import styled from "styled-components";
import ListVideoContainer from "./ListVideos/ListVideoContainer";

const MainBlock = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  
  margin-top: 50px;
`

let MainPage = () => {
    return(
        <MainBlock>
            <ListVideoContainer/>
        </MainBlock>
    )
}
export default MainPage;