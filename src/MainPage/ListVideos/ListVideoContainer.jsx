import React from "react";
import {connect} from "react-redux";
import ListVideos from "./ListVideos";

let ListVideoContainer = (props) => {
    return(
        <ListVideos video={props.video}/>
    )
}
let mapStateToProps = (state) => {
    return{
        video:state.videoReducer.films
    }
}

export default connect(mapStateToProps,{})(ListVideoContainer);