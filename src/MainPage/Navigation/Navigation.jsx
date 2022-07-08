import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavigationBlock = styled.div`
  width: 230px;
  
  display: flex;
  flex-direction: column;
  
  padding-right: 10px;
  margin-top: 50px;
  
  border-right: 1px solid rgba(77, 75, 75, 0.6);
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 15px 10px 20px;
  border-bottom: 1px solid rgba(77, 75, 75, 0.6);
`
const Title = styled.label`
  color: rgba(141, 140, 140, 0.73);
  font-weight: bold;
  text-transform: uppercase;
  
  padding-bottom: 10px;
`
const NavElement = styled(NavLink)`
  color: white;
  font-weight: normal;
  text-decoration: none;

  padding: 7px 10px;

  &:hover {
    background-color: #5d5959;
    border-radius: 5px;
  }
`
const SubsriverElement = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  
  white-space: nowrap;
  overflow: hidden;
  
  padding: 7px 10px;
  &:hover{
    border-left: 2px solid white;
    border-radius: 10px;
    overflow: visible;
  }
`
const SubscriberImg = styled.img`
  width: 25px;
  height: 25px;
  
  margin-right: 5px;
  
  border-radius: 50px;
`
let Navigation = (props) => {
    if(props.navStatus){
        return(
            <NavigationBlock>
                <Nav>
                    <Title>Жанр</Title>
                    <NavElement to="/comedy">Комедії</NavElement>
                    <NavElement to="/fantasy">Фантастика</NavElement>
                    <NavElement to="/horrors">Жахи</NavElement>
                    <NavElement to="/fighters">Бойовики</NavElement>
                    <NavElement to="/melodrama">Мелодрами</NavElement>
                    <NavElement to="/mysticism">Містичні</NavElement>
                    <NavElement to="/detective">Детективи</NavElement>
                    <NavElement to="/cartoon">Мультфільми</NavElement>
                </Nav>
                <Nav>
                    <NavElement to="/">Головна</NavElement>
                    <NavElement to="/">Історія</NavElement>
                    <NavElement to="/">Пошук</NavElement>
                    <NavElement to="/">Сподобавшісь</NavElement>
                </Nav>
                <Nav>
                    <Title>Підписки</Title>
                    <SubsriverElement to="/">
                        <SubscriberImg src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
                        Жекич Дубровский
                    </SubsriverElement>
                    <SubsriverElement to="/">
                        <SubscriberImg src="data:image/jpeg;base64,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"/>
                        Джентельмени Синдикату
                    </SubsriverElement>
                    <SubsriverElement to="/">
                        <SubscriberImg src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFRUXFxcaFxgVFxUVFxgYFxgXFxcXFxUYHSggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0fHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMQBAQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAGAAQFBwECAwj/xABCEAABAwIEAwUGAwYFAgcAAAABAAIDBBEFEiExBkFREyJhcYEHMpGhscFC0fAUI1JikuEVM3KC8RbCFzRDU1Rjsv/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAAIFAQYH/8QANhEAAQMDAgMFBwMDBQAAAAAAAQACAwQRIRIxBRNBIlFhcbEGFDKBkaHwUsHRIzPhFjSCkvH/2gAMAwEAAhEDEQA/AHctVd9idFIPljtuEHcQ4u2GQtKFsQ4pdsz5r2j4AGB7jpC8/GyR57IurOdX20Zr9FBY4HEXfIB0AVfU+KTyva0POp5Imp6CTO0PuRcbo9LHGf6jXY8sldljdHhxRJwzSS2Ol2HkVPPw/K0nKG+SnaCJjI27AABQWM4j2zuyh/3H7LNNQ+eQ2FgpYNblAOIzudNlBJF7JxXYK6MGQus0c+aOcE4WYzvuHe8UG+0fFgT2MZ0bvbqtOGr5soih2AyVxsZO+ChObHZb2Dzl8SUVcK0UU7c7txuEAtjJXeXFHwNLWOIJ3sU1xCSOngLnHR5bnwTbqcOsGBWVj3FMNM3s2EX8OSAavigkktLvQW+aF5Zi43JufFa3K8RLxGU4YdI+/wAym46SNuXdo/b6KamxeR+7nnzcSPguIqAdHjTqN1HRkc05dqNEnzpb31n6lNtY0CwAHyCkqaqdAQWOI5joU7q8ZE4tINeo0KhZDeMeBTQSJqLidXGQRIcd9j6qjqeIm5GVMR0Jce64H5H4FF+H4fmYGg2IHqq/hqORUrQcQyQkAnOzo7ceR3BWrT8fd8MoA8R/CUqqVzwCw3t0/wAotHDznPA8UXQ8LMDBmFzZDOGY8yWxD/jo4eB6+aI4uImssHSNK1Jp55WtLDjwWWDmzht3qIxjhoj/ACxZCk2EVDHG1x5q14sSje2+YH1UVjNM6QAxkWV6biErDpeB81cdkEtz4Kq5qeWI318bLSGUyOAe6w+Gqsb/AALOw9oRm5IQxDAMr8o3K1YatkhtsQiiUEdsWPeo3Dwx0jhIM1xYee10+pOHZxJoCGcydBbxRJwxwvGz97IQ4jYckP8AFOMSulcwPIaDaw0CEZObKWx5tuTf7BW1FzrN2I6+q7w41+yyODHmw2siTEMX/aaEEjUuAQ9w/wAKGop3SHe/d8kSUVKyGjyyG1nX9UvUGHUCMua4XtugvDW4be/2W3BuHlpJPNO8R4hbTvc066rWl4gp42Eh9yBtbVBldWNkcXuN7lAZCZ5nOlBsh3IARTK81zbg2A5LXDeGjG6+e3korAql1y2IWuF3p5ZhO3M42zeiKY3s1MY4Bvd1VNQ63RP/AIX/ADlZUpkHULCyec78CNZv4VUXGOJw1Dw+M687oQnGq6vcuBROIStdGIh0WrDHoFkUezilElawHkCfUBXBPhDSNN1RnDVeYKiOQcj9VbbeK3u0DAUOCOV0bTHsPz90hW6Q+7u5Pq2nlLLZzZV1i2Kuglyscb87FF/EXFBZASG2cdFVDpy5+Z3M3K0aIOb/AHAMnwVIIQ86jkBWBT8U1XZ5c2435qDmpC83OpKKsIw1r4WuHMKOxyZsfcZvzKs+tgpA54ba26FGyR7wG7lDNaGxNJ+Hmhh4c8k9eZRFVw9oQXvDGDa+58cvNcn09MN3PefgPkvGVvEJKuTW/wCQ7h+br0EdPobYfXvUB2Q6rUtHVS0sUB2Dh63+qZT0o3abj4H4JQOV9JTOydRbWTdg1T5osbKEqALaYWj8yo4qUrxcAepUaWqNUcEgsvdsumRLIu3USpqgsN1Nxsc8AsN/C+qg8qc0VS6JwIWrwzijqN9jlp3Hd4hAmh1i43RlgmHTyHKD81ZHCvD0mXLI8gKu6GvLmtliOo+R8U7k4mrCdJCPJerqGS1Tf6Tm2PVYYtqOsZHdhWfiOHxU7S97wB480FY7kMZlGhO3WyFq6pqZjeR7nHlmP2TWXtSWxuJ1PVUpeGvZYvkBPXyV3WdgWstJeIJWgsYbDqtcIw4zPBdrc63U9PwvoCeQ1TWiY4l3Z/hOlui0hPHpPKwepUMga2zRZGL8SbTxiNltBZMqGE1RLXe7qoGKnke6xB9VY3DOFZWDRY1QGUzL37R6oWXnwVW8S4T+zvIcbDceIUDh7O1ks33QrN9sOCEwtmaPdNnfZCfCGFlsReRq7ZXgrnyhvdbPmmNYjiJvm9gifgmkHf6gBS9Thg32tqhyCZ8DszND9U7OPyzER6NvzCpLHK6QvacFJNe0ts7dO/2g/wASSZf4Q/qUlNEf6gp2u5VCd0i1dgxYe1VdSnSXFeg1LWnNnDzCsmgeGMD3c9lWjXWIPQqTkxyRzmknRtrAbaKtJMxrSx5tlLVcDpSNPS6mOMa7M5rBy3QwtqqpL3Fx5lasTQkbI7Qzorwx8tgBVgcHY8BTujd+HY+CiqhzpXOO3UnYBR+FDKxx6p9VO7OIDmRmP2XluOz3m5Y6b+aZo4GtLpO/0/8AVFVhhYdbvd1J0+Cjnzxn8PzTeqfclN1khuEy5+bJ25g/C4jwK5knyK5sKdRRk8rruy5uuNr681IdnmLSOadUeDOfsCiPC+GX3F2oT5WhFZE47BC9ZTm1vj+SaR0LjrZWc3g97jcjRPY+CwN0H3kBH91cSqpNEQuL6dWtU8LsAtZDuI4EG3soKlpUdSuCCDT9LFcy0hSFdTZDsmDpLJkG4Sjm2wnWF4g+F+ZvqORHirSwCOGZrZLCzh8DzCqRj2lGPCWNNhBZIe4Tv/Ceq1+HVj43comzT9is+tpw4cxouR6I6xOOKNhNgTZBZzukD7ag3CJjU00gv27CPEqRwqgicbtLXDqNV6aGdsLSTclZBuTjCiMXq5zCNAM3TdQ3D0/7PMC/3XaH1VgVFK2Qhg2CgeKMEDWXGllKeqj08oi2pdJIzdFNNQRvAe2xB6IioYw0Kl8Lx2ejNmuzN/hOoRlR+0SO37xhafDULOq6GfZvaCsHN3RBx40OpHtPOwHndBlJAGMDRyAUdxLx2J5GtAIjB581wxDiWKNtwbm3JHpqWWKIBw3yl52vc8WB8E/xKZrASSEHUmPtFWwj3A4An1UVjWNyTnXRvRQwaqzVD4zpYL960KagsCZNz9l6L/aIf4h8Ul5//wAQl/jd8Uktdvire5v7wsOBWhT5lIStJaZw5L0stG49oJoPGyYvXElPDBdcxTarDquH1DnYajB4WkYTuFicMw1wbciy6UbNVs0FCYW6n7oD5Qb2T1seoaPD4rbHH/YLNO/975XPwTfFDcA+H0K+bzyGSVzz1JWowWZZDs53K0ibzXSqb9SsRnQef5Kw2Quq3p4i91gFaPCHBbpWhzhYIX4AwntZgSNAvRGB0zWsAA5JSV5LtATcbA1mshReHcKxRtAyhSUeFMbs0KXc1alTlNXee4qMfSjom8sIUo9N526Ib2DoiNkPVDWIsQfi0W6OMSahTEYrpN2CnRlqrzHaO+oQnNpcKx6+DcIJx2lyOutCnkvhZtRH1CiGuspfCn3uDsfuoiye4W+zk07ZKN3TfUFGPAONGKXI49131Q1UwWc7zK1pSWuBG4K9ZSRSDTfLXD1Sc7A9pb+XXoTB2c0y48NoNOZUZwdxVE9gbI4NeBz5qTxKVtVI1jSHNbq62qry3x1F3jZYzsNt1QRhODvmOjfiu+L8Jyw2cdWdRy81Z+E4c1o0FlIYnTMMLw+2XKb35aK0nF3NkwMI7KU6bk5VE1uCstqbKGqsPA0bc+i5x47JFK4g52hxFnagi6McBxyKo0FKwO8CtT3oOu0ZsppmhbqJuEFVkDbC24GqbSQ6DxVhYrwy1+Z2xsTYIJAAJa7UA2TdOI5QbZRoZiR5KN7IJKUyRJIvucX6UTneacwU0jhfKsytNrEKYkxVoFhYJk6obJpzRWyPJuW2CT1k5thRYjIOi6wQEvBIT4RBqzBKxp74uPgiGQkYCuZb7BaVrhYqEiks4IlrMUhIs2No890O4gBbM0WB0SdRM6OkkeRazT6FEpd9JG6d4TqXHqD87rE4u0jm1x+B/wCE4wOPujyJ+wTGeTLIehuF8s64XoOiYVNMSzMOR18lHM0RJQ2zlh2cPr+vmoSvp8jiOh0RGuzZDe3qrJ9mVh8ldOHP0CoP2eVfeAV3YXNdoWeTpmK0QNUIsp4uWjitGOWXJq9wk7WXMuXCcrd5Wj9kIlGAUTWR3Q/iECI8RnZG0ucbAdVUvEvGD5XmOmH+79bIBjLjYJrmBouU8xlzW8wEGYyBI02N1J0+ExnvVE5e8/hadPUrSvo4w3uNsFdmlhwUF4c4ZFggdd6N3eC1qWWeQsQmxWjusy1iiKlp+0eG23Ca1tE6N5aRspbheZolY48v+FP47TslkuyxB+q93weo1UsTXDABF/IlZdVNypndyC4Wv5XRXw5XTxHuHU731WI8IfbutTjBZWslyyaHbVaU72PYQBfwScs2vYWRLFxPWtOzLf6SnWM19VUUkrSQCWnRoIuOYXUGMN1It5haYXiMbiWBwI2+K8+5rD2mxi4VdbwbalRMpsSDuFJYBiZhkBG3NPeKcLYyokGa3eNkP5LGyuxk0Lw8i7T18CtQFkzLHqrbfjDXUzn31IsPVAjpGC99bm6iXVD8uXMbdFpC0la9M5sbyxoOUuymLRkqT7RnRJNewKS09StpHen9Rhzxs4FF/C3CodHnk/FshOKaVx20Rnw1xO2Jojl0A2O6TrjUCK0e/gl3F2ztkxxnh50ThqchO/Rb1eBtMWZhuiPEOI6Rw1eCEwlx+BzC2OyzmVNQQ24Nx9EEix39VW9dTlhsta8Whj8SfknOLzZ5LBJ8eZ0beTAL+ZN7fIfFE49UaKF193WC0aYFzmX81K4XDlb5N+ygcR6+aKAMrHdcuvmSEKYw+2novmzDdy2nYasF5FnBYxgZu95fT/lYLe6En6tLfC49ETqq9F24UruzlHmr1wLGYi0Xe0eZAXnWBhuLaIxw3DYQzNNUOB6NS9RGC7VeyZppHadFrq+m43A0aysHm4LZuOQO2lYfIhedK58A9x8rh1OUBdMDqIc4BkkafMW9SFLENv8AsuWaXWPqvRYnDtWm6b1dSGAk9Loe4VqiLMuSORKkuLgWRF46JfmXaXBMaA14aqr41rp53EySZIhyF9fRAj6l1iGd1t7HUAk+JO58Aiyoilqi4M1N+6CbXN9PQb+imYcMqY4mxsiiYQ0sL2tzOIcbm5dpe+ua1xyR4Xta3tlAmY5x7Cr6ppJ4chdYF17NzEu0NjcctUTUELjF3zclPqXhJ5fnkJcfHU/FPZWxDuNe0u2sNfDcLr383EYvbewv+fNdihc3Liq6xyDK+6jWbok4rgsL+KGmpmI3YEpM2z1K0lQWgEcjb4o/4UxWB/dlAD+RPNVvTOu1wSc8gXB1H0Wxw/iPJjML/hJuLdO/6pCqpRLZwwV6DhjZbu29EE8W4LI6QvjGnghjhvjV8VmSklvVWxgdXHO0Oa4OB/WoWtTVQjPNjN1kPY9hs4W9FS2ICeL3i4D1UtwjUSPkAGpB3Vo47w5FMw3AUDgVBBSEi4zH4p9tY17S4fRWfIHM0Fue9MuIODnTu7VpsT7w+6h3cFsA70ov5o9q8T0yi2ulhugHF6VwqCxpJub/ABV6R8sg0OIAG2OiqJHNw12yxR8INe6wfcLgzA2xz9m70PVEeH0MkDS8m2myEsRxNz5S479U3E573nSQQAo18j8XKJf+nmpIc/xaT+JySH/V/Wq8t/4U6np8mhIPkoWvl6InqcIeG8z1Q9iGGlgLjceafhlaRclWgc3VlRQaXGw1TuOgk8vVd8LaMmYanmnU0mVpcTYLhlY1peTgZumZJnatLQouVnZ+LipbCKXW51y6uPVx2HkAoynbrnPvH3R0uiClGWOw309SSvnnGeKOrJLNwwbfz5rYpYNGXbred37suP4nfJv9ygmtlzvNttkTcU1PZsEY3ygfHU/VC9OzvALKiFhdGl3spN7e7bwH0TVj+80eBT6qFjbwH0CjWjvA9AVYLhSaNU7qKeRze7qE3jNyUX8OwhwsUGWTRlHhZr7Kg8GpKd7R2pka8HvWsczb7MJaQ0+YU2zDmvDYoqbLrcSOuZLWAGot0ufE7I9wjhyI2dlF/JFlFhTGWs0fBD96c8dkIgpmM+IplwlgfYxNDtSBvt8uSIsWohNTlp6ELrCywXePUELrGDY9UOSQkg9yo/D6b9nqXNPVG9bi8UMYc8Ek6NaBqT57AeJQvxfCY6hzrWubhTeDU0VZB2cl8hte2h0IO/LZBgdEJWma+jrbfCckB0nTv0UNNPPWnKwWaT7kZOotuX2u75N33Uhh3AoAzTOsP4WmwB8XaEjyt4ko1poIaZmWNoaByG5t1O59UP4/ijyCAbDwVajj9TKDDw9nJi/UfiPr+/ml4oXPN3ZVSe0NrWEtaQRmsLeHloghE3Gsl3jzQ0n6YWiF8pWq/uFd6Q970KyH6rWnNrnwWj+SMg9E4pMPkmk7OJuZ591ugJ8BdS+HsraOUDLJE6+zgR/YqKlJZkkaS1w2I0II2IKuz2ccZCuiFPXsa87NlIGvg7x8U1TOcHam9O5LVJAb2rfPZRdJxhN2dpGjNbfZB1dijnSkg6k6q58c4BiLHGEWuNBv8FSM+HuhqC14tlJvdey4XUUslywWKyBGWuIl+SJ6WpbTwGZ5u86NBUVgWLN7UyP7ztTZT/DXB7sQOeYubENGgaXWtZ7L5YayNkT80b9cx3aBvfquS11PE5zHnJ38B3BWZEDHcqNxjikvBY0WvoSteEOFpMQeQzuxt9+Qjbwb1KKcc9lDv2mIQP8A3D/8xzt2W3t1urJwvDoqWJsELcrGj1J5knmSvL8Y9q4KWAsp8E/VOQUZcc/NCH/hRR/+5L/UEkcJL53/AKpqvH6/5Wj7ixVlCx8vdijLz4DT1KHONOGq8t0pnEdWWd8grvgDWCzGho8NFq+Q9V6Kp9uWDETcFIU/CXhwdI65H0XlGOeameWvY5p5teCPqnFRXOksXaAbBXL7WcGZUU+cgdoy5a62viCqQAvbyTVJxx9dTEAkC+R+dE+aVjH6iMqSpncz+uQU3gp7R+uwLT6NBKGpJbAAKfwiTJFM/oLDzIshvGEyzdQmLT9rM938xt+vJccPhu66cwQdzMfP1Og+QKcUUNhdXvYWVbXKxVDvn0+35KJkNhdTFY6zj+th/dDtXLcrrBdcebLNNU2cb7G/zRvwpWtJFjdV6n+FVhikBvod1J4eY023UgnLHZ2Xo3AZgQETwgWVW8KYxcDVWBR1twNVmQnR2StSdmoagpWWWwXWmlAtdMYRmKWKYYZA0tkewg37p0Pgb8k0HO+IC6TLG4aShb2iQxvaCSG63udBa/MofwKubTymMEEGxNtrlFGM4W6Q5XakC4v4IAdDklOY6g6pN5JcSnmtAaBurHlrA5uhQtjM2hXWGvZYNzAE7C6aYmzulULiSEUNsqu4q1cfNDyIeK3963ioSnhLjYLZhwwLEqMyFbsZp5/RcSbuTqqs0aeX5pvA1EQ7dE5kBc0DofsrS4LoWMiZfTS5QPwpgktW9zIW5nBua17aDx9UX0TZ2uFOY3NlcQ0NII9b9PFa/DZqdjHa3AO/ZY/FNRLW2uEYj2ix0jwwkyM59R5dUTVWBUOIsbUZAS4Ah40PkeqHKH2ZU+jqh5e/mG6NCM6CjZBGIohlaNl5vifHqeF5dCdvHPqmKWlkc3TIMePRc42MpIzmIEbBuOg8FxwesM4NQWlodpEDvl/iPmn0rA5pa4AtO4KyxgAAAsALAdF5ir9o5Zo7AWK0GUrW+S2DysLZJede97zdxumwANlrZJZSXLeCi0Oi5uct3rgUJFAUPxLS9pBIP5Hf/krzm5tv14r0VxPiDYKaWRx/CQPFzhYBec5JLu8F7P2aDuU89LhDqDssgXI81OP7tIBzkeT6NICiKeIueGjcusPVS+KPAe2Me7G0N/NehcchCbsSuFc8NaxvqfsukhytA6kD6KNnmzStHj9E5e++T4/Uqxaq3TXEZ+871UGU8q5Lkn0TJGaLBBcblJYWVhWVEccGYhcZb95v05FWlg9USBqqAw2tdDIHt5bjqOYVx8K4zHMwOafMcwehCy62ItOsbFa9FMHDQd1YtFWNYLucB5lN8S4ygj0a4OPW/dHqmYhZMLOAI6FMpeHomHOynjd/tb90NkrgLIxhjLruUPi3tBaQ4Nddx0uxtz6WCEpHTyAuELmj+KTu39FYVRXNYP8Ay+Q/yxj7KGxOvdUEDI4Dy3/JQvbvujhtvAeCGsConCQyPNzsOg8gp/GajLH6LaOlLRtYBCXG+L5QIwe8fkOZVG3lkCE8iNhKDsWn7SUnkNAto3BjbD3j8gmTVtI/8lsBthZYpdcklaSuzFdmiwXJosLrqDouqquD2CUfdqJrblrB6XcfqFbEsDS4PLRmGxsLj1VN+yjjWlpYDTVDuzOdzg8glpzW3I2I8Vb1DiEUzQ6KRsjTsWODh8l4ji01RFUPLgQ07YxsBujBjSAu1luEkl52+UZJJJJWuokkkkpgKJJJWSRtfguWTdxXOQgC50HNbAIA9rHEvYRfs0Z/eSDvEfhZz+P63VaSmdUzNiZufsikhqDfaBxK6vqG00GsbXZW2/E7YuPh9kGYlCGSmNuuU5fUboj4TjFPBNXvGoBZAD/EdC5CrHEuL3anUnxJX0imgZAzlRjDfuUo4l2Sp7AGBrnzO2jaSP8AUdvkowyl2Zx3JuU6qZMkLYuZ1f5nW30HombGFwsPUq7dyVdxwAuVOLvc7o0/Emyd1jsoPUAD5JUjATptceoG6b4nL+vHkiblU2CjJjy9T6rjZbgX1WHIqDZaLKwVkhdXElJYJXvhkBa6yjgth1VXAOFirNOk3CufhvizbtBbxGysbDa5kgBBBBXn7hzEARldujPD6iSPWN5Hhy+CyHt5TlrtcJW5VtzNYRsFF1MUQ1NkJNxmoI1IQ9juKVBFs5HkoZQ7Fl0R6Be6mOLMeigadQTyaNyqcr6p0sjpH7uPwHQKRr2kklxJPUqJlH1TlNGG3PUpSplLrDoFxDltbZc+acBnveGibKSXCU8l2i6JRxZikWW9FFLdVmZugKxTVUkZzRvew9WOLT8k6gaHC3X6pnJEQbFQG+CoR1RFhftAxGAgtqnvA/DL+8B/q1+aMcJ9tkosKimY/q6JxYf6XXHzVSlJJTcLo5vjjHywftZQPcNivRWGe1jDZbBz3wn/AOxmn9TbhFeGY3TVAvDPHJ/oe0n4bryatopSwhzSWkbFpII9Qsmb2Yp3Zje5vnYj9iriY9QvYN0rrzZgPtJr6Ygdr2zB+Cbv6eD/AHgrHwT2w0kthUMfA7mf8yO/m3UeoWHU8BrIMtGsd7f43RWytKsy6SGf+u8O/wDmw/1BZWd7tP8Aod/1P8K9x3hS9dVNhjfI7ZgJPovO2N1j62pc4nvSvyjwaN/10ara9rNeY6QMBsZHH4NF/rZVBw9YOdK78Iyt8zq75fVen9nKYMhdUEZdgeQ/z6LkhzZSnGc7WQw07NBuB0Y3n6n6IapW3d4DU+myWL1Zlmc8+Q8ANgs0xs0+K9EBpahnJTkMzd47XTetqPwM0HMqQpm3ieNtAo0yNYdBmPU7fD81G7rpOE7jIjjuemnVQU8he5d6ypLtyuMG9+gRGttlCceizILaD9dVweF2ZusSjZXCqVxIWwasuboukWo8l1QBcmDkst0Ky8apPCi6u1M/I4FG+D1hIHeP1QEw30+Cm8FrbGxS1RHqbdMU79JsrGhmNkzrmZhqFzoK7Rb1lVcXNll2sVqagQhHGW2Nuag3s3RFLHmL3ne9h4KCAuXef3WlCcWWbMM3TGnbd4808gbdrz/P+a4Ure+PNSGHRXjl8C0+h0TDjZLtGVxw5upC3qobO80g3I7y+hTrEG3aHBVvldthRsJyutyT/Eqa4Dx6qPkdfVS+HyZ4nMO4Gn2UfjKje5D0rFzT2rZax5FcA1EBQiMrSyxZbFiQarXXLLSyyslYcouLCSWVJXXFdHtvqLGBvLJIfmwKrqeotGG9ST6n+wCsv25Rns6d/i9h9QCPoVU0D9W+YWFwQA0MdvH1Kclw+yddl3b9T+awZha3S4UlJB+5Hr8ioALUb2kM4U3Qz3a4dWlRlSdfT6i6k6GC2bwZ9VHVTdbfyj6LjbXXTsmTyto+a1WzN0VDXSMarNQzS6UY1TuWO4I9fsVW9l0DCYDb0WsbrFKIpEaKyqfBbyhc2nkstdceS0K6FEinMMtiCm6w0rh2XQbIsoay48VIh+YIdwoXAsbFFuDYO+UOIewNaLuJv3fMW30SL4yDhPRy4TSans0nkfqP18kMsbaTKeYKNawtyiOM5yXtF7aC5G/j4IGxSS1Q+2zXED/aVenac3VJ3jFkuxyyKVwiMEub/G0j13C2q6bM0SN9fXZNKKYtcRsRqPqiE3CCMFZq4+6H9O6/05rjDL3Sw+if4g8A5wLskHeHQjQqFnGW1jdv4T9iusyLKOwuLzYp3htRlkB5HQ+v90ylN1gFFtcWQ72T+tj7xZ5/2UdH8wpXEDd7T1aFGS6OVWHC69Ya/VZkPwWkv1SadEQIa1OywStlq1XCqsJLaywpdRXl7a2D9hB5iZtv6SqTg3HmkkvP+zv+y/5FN1P9wIsmH7pvmf8AtQrH7w80klrRdVSToiWL/wBT/S37qFrPePp9Eklxu6sUw5nzW7EkkcoC7tHeT940HqPSySSG5FChZPeSH3SSRENY5lIpJLqiwxJ25WElFxO6OQi9kXMqXMpQ1psHlubqduaSSFIisT3E6gxzNiYA1kQOQAc7HU9T4qvQblxO+/rdJJci6qSdEYYAczQ06gt1TDEoQ27he7TofzSSQx8ZVz8IS3a8HbQ+pGqiBuRySSRGKjk0duspJIoQypWq/B/pH2UZU+8fP7rKSGxWcsTe6PNc41hJFCokVhqSSuqJJJJKqi//2Q=="/>
                        Майстерня Синдикату
                    </SubsriverElement>
                    <SubsriverElement to="/">
                        <SubscriberImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA73D3QltIDvk4GCa1fzqINVgO-enubpjIg&usqp=CAU"/>
                        Автосалон Сендикату
                    </SubsriverElement>
                    <SubsriverElement to="/">
                        <SubscriberImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdApzzKwnuc3dW-T8AI7171iTRkLAkePR5Ww&usqp=CAU"/>
                        Жекич Дубровский
                    </SubsriverElement>
                </Nav>
                <Nav>
                    <NavElement to="/">Налаштування</NavElement>
                    <NavElement to="/">Скарги</NavElement>
                    <NavElement to="/">Пропозиції</NavElement>
                </Nav>
            </NavigationBlock>
        )
    }else {

    }

}
export default Navigation;