import React from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard/VideoCard";
import {NavLink, useParams} from "react-router-dom";

const StartBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding:0 20px;
  
`
const GenreBlock = styled.div`
  margin-bottom: 10px;
  padding:20px 20px 0 20px;
`
const GenreTitle = styled(NavLink)`
  color: #cebdbd;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: white;
  }
`
const GenreFilmsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
 
  margin-top: 10px;
`
const ListVideosBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
`


let ListVideos = (props) => {
    let {genre} = useParams();

    if(genre){
        return (
            <ListVideosBlock>
                {props.video[genre].map(video => {
                    return (
                        <VideoCard
                            key={Math.random()}
                            video={video}
                            genre={genre}
                        />
                    )
                })}
            </ListVideosBlock>
        )
    }else {
        return (
            <StartBlock>
                <GenreBlock>
                    <GenreTitle to="/comedy">Комедії</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="comedy"  video={props.video.comedy[0]}/>
                        <VideoCard  genre="comedy"  video={props.video.comedy[1]}/>
                        <VideoCard  genre="comedy"  video={props.video.comedy[2]}/>
                        <VideoCard  genre="comedy"  video={props.video.comedy[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/fantasy">Фантастика</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="fantasy"  video={props.video.fantasy[0]}/>
                        <VideoCard  genre="fantasy"  video={props.video.fantasy[1]}/>
                        <VideoCard  genre="fantasy"  video={props.video.fantasy[2]}/>
                        <VideoCard  genre="fantasy"  video={props.video.fantasy[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/horrors">Жахи</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="horrors" video={props.video.horrors[0]}/>
                        <VideoCard  genre="horrors" video={props.video.horrors[1]}/>
                        <VideoCard  genre="horrors" video={props.video.horrors[2]}/>
                        <VideoCard  genre="horrors" video={props.video.horrors[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/fighters">Бойовики</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="fighters"  video={props.video.fighters[0]}/>
                        <VideoCard  genre="fighters" video={props.video.fighters[1]}/>
                        <VideoCard  genre="fighters" video={props.video.fighters[2]}/>
                        <VideoCard  genre="fighters" video={props.video.fighters[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/melodrama">Мелодрами</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="melodrama" video={props.video.melodrama[0]}/>
                        <VideoCard  genre="melodrama" video={props.video.melodrama[1]}/>
                        <VideoCard  genre="melodrama" video={props.video.melodrama[2]}/>
                        <VideoCard  genre="melodrama" video={props.video.melodrama[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/mysticism">Містичні</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="mysticism"  video={props.video.mysticism[0]}/>
                        <VideoCard  genre="mysticism"  video={props.video.mysticism[1]}/>
                        <VideoCard  genre="mysticism"  video={props.video.mysticism[2]}/>
                        <VideoCard  genre="mysticism"  video={props.video.mysticism[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/detective">Детективи</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="detective" video={props.video.detective[0]}/>
                        <VideoCard  genre="detective" video={props.video.detective[1]}/>
                        <VideoCard  genre="detective" video={props.video.detective[2]}/>
                        <VideoCard  genre="detective" video={props.video.detective[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
                <GenreBlock>
                    <GenreTitle to="/cartoon">Мультфільми</GenreTitle>
                    <GenreFilmsList>
                        <VideoCard  genre="cartoon" video={props.video.cartoon[0]}/>
                        <VideoCard  genre="cartoon" video={props.video.cartoon[1]}/>
                        <VideoCard  genre="cartoon" video={props.video.cartoon[2]}/>
                        <VideoCard  genre="cartoon" video={props.video.cartoon[3]}/>
                    </GenreFilmsList>
                </GenreBlock>
            </StartBlock>
        )
    }
}
export default ListVideos;