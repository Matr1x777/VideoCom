import './App.css';
import Header from "./common/Header/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import styled from "styled-components";
import VideoPageContainer from "./VideoPage/VideoPageContainer";
import Navigation from "./MainPage/Navigation/Navigation";
import {useEffect, useState} from "react";

const AppBlock = styled.div`
  background-color: rgb(35, 32, 32);
  color: white;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
`

function App() {
    let [navStatus, setNavStatus] = useState(false)

    return (
        <BrowserRouter>
            <AppBlock className="App">
                <Header navStatus={navStatus}
                        setNavStatus={setNavStatus}
                />
                <Content>
                    <Navigation navStatus={navStatus}/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/:genre" element={<MainPage/>}/>
                        <Route path="/:genre/:idVideo" element={<VideoPageContainer/>}/>
                    </Routes>
                </Content>
            </AppBlock>
        </BrowserRouter>
    );
}

export default App;
