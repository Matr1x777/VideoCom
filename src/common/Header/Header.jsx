import React, {useContext} from "react";
import styled from "styled-components";
import logoImg from "./../../assets/image/logoImg.png";
import lupa from "./../../assets/image/lupa.png";
import liked from "./../../assets/image/liked.png";
import notification from "./../../assets/image/notification.png";
import {NavLink} from "react-router-dom";
import UserContext from "../../Context/User/UserContext";

const HeaderBlock = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  padding: 5px 20px;
  background-color: rgba(35, 32, 32, 0.85);
  border-bottom: 1px solid rgba(77, 75, 75, 0.6);
`
const NavAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const NavigationBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 25px;
  height: 20px;
  margin-right: 10px;

  background-color: #4f4b4b;

  &:hover {
    background-color: #6c6969;
  }
`
const NavLine = styled.div`
  width: 100%;
  height: 5.5px;
  
  background-color: rgb(35, 32, 32);
`
const Logo = styled(NavLink)`
   display: flex;
  flex-direction: row;
  align-items: center;
  
  color: white;
  text-decoration: none;
  &:hover{
    border-bottom: 1px solid white;
  }
`
const LogoText = styled.label`
  margin-left: 5px;
  
  font-size: 24px;
`
const LogoB = styled.b`
  color: #b40404;
`
const Search = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  width: 400px;
  height: 20px;
  
  padding: 5px;
  
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px 0 0 5px;
`
const SearchBtn = styled.button`
  height: 30px;
  padding: 0 15px;

  background-color: #949191;
  border: none;
  border-radius: 0 5px 5px 0;
  &:hover {
    background-color: #726f6f;
  }
`
const SearchImg = styled.img`
  height: 15px;
`
const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Buttons = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const ProfileIcons = styled.img`
  height: 25px;
`
const ToProfile = styled.div`
  width: 40px;
  height: 40px;
`
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;

  &:hover {
    width: 39px;
    height: 39px;
    border: 0.5px solid #000000;
  }
`

let Header = (props) => {
    let user = useContext(UserContext)
    let openNavigation = () =>{
       if (props.navStatus){
           props.setNavStatus(false)
       }else {
           props.setNavStatus(true)
       }
    }

    return(
        <HeaderBlock>
            <NavAndLogo>
                <NavigationBtn title="Навігація" onClick={openNavigation}>
                    <NavLine></NavLine>
                    <NavLine></NavLine>
                </NavigationBtn>
                <Logo to="/">
                    <img src={logoImg} alt="VideoCom"/>
                    <LogoText>Video<LogoB>Com</LogoB></LogoText>
                </Logo>
            </NavAndLogo>
            <Search>
               <Input type="text" placeholder="Введіть текст..."/>
                <SearchBtn>
                    <SearchImg src={lupa}/>
                </SearchBtn>
            </Search>
            <User>
                <Buttons>
                    <ProfileIcons src={notification}/>
                    <ProfileIcons src={liked}/>
                </Buttons>
                <ToProfile>
                    <Avatar src={user.photo}/>
                </ToProfile>
            </User>
        </HeaderBlock>
    )
}
export default Header;