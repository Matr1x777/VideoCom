import React from "react";
import VideoPage from "./VideoPage";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

let VideoPageContainer = (props) => {
    let {idVideo} = useParams()
    let {genre} = useParams()
    let currentVideo = props.video[genre][idVideo]

    return(
        <>
            <VideoPage currentVideo = {currentVideo} recomendations={props.video[genre]}/>
        </>
    )
}
let mapStateToProps = (state) => {
    return{
        video:state.videoReducer.films
    }
}

export default connect(mapStateToProps,{})(VideoPageContainer);