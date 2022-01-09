import React from 'react'
import styled from 'styled-components'
import TOLogo from './images/TOLogo.png'
import gym from './images/gym.jpg'
import fbIcon from './images/fbIcon.png'
import instaIcon from './images/instaIcon.png'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'

const S = {
  View: styled.div`
  display: flex;
  flex-direction: column;
  `,

  Header: styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `,

  Content1: styled.div`
  height: 85vh;
  display: flex;
  justify-content: center;
  `,

  Content2: styled.div`
  height: 80vh;
  width: 50%;
  display: flex;
  border: solid 1px;
  border-radius: 10px;
  `,

  Left: styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space evenly;
  align-items: center;
  `,

  Right: styled.div`
  width: 50%;
  background-image: url(${gym});
  background-size: cover;
  background-position: 50%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: grey;
  `,

  Section1: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  border: solid 1px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  `,

  Section2: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  border: solid 1px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `,

  Section3: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  margin-bottom: 4%;
  border: solid 1px;
  border-radius: 10px;
  `,

  s1: styled.div`
  flex:1; 
  height:100%; 
  display: flex; 
  align-items: center; 
  justify-content:center;
  `,

  s2: styled.div`
  flex:1; 
  height:100%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  `,

  s3: styled.div`
  height:100%;
  width:47%; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  `,

  StyledButton: styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #413fb5;
  font-weight: 700;
  font-size: 20px;
  font-family:system-ui; 
  `,

  StyledTextField: styled(TextField)`
  width: 100%;
  height:100%;
  `,

  hr: styled.span`
  width: 95%;
  `,
}

function App() {
  return (
    <S.View>
      <S.Header>
      <img src={TOLogo} alt='Logo'/>
      </S.Header>
      <S.Content1>
        <S.Content2>
          <S.Left>
            <S.Section1>
              <p>Zarejestruj się jako trener</p>
            </S.Section1>
            <S.Section1>
              <img src={fbIcon} alt='fbIcon'/>
              <a href='https://www.facebook.com'>Rejestracja przez Facebook</a>
            </S.Section1>
            <S.Section1>
              <img src={instaIcon} alt='instaIcon'/>
              <a href='https://www.instagram.com'>Rejestracja przez Facebook</a>
            </S.Section1>
            <S.Section1>
              <S.s1><S.hr><hr/></S.hr></S.s1>
              <S.s2><p> Lub za pomocą maila</p></S.s2>
              <S.s1><S.hr><hr/></S.hr></S.s1>
            </S.Section1>
            <S.Section2>
              <S.s3>
              <S.StyledTextField id="outlined-basic" label="First name..." variant="outlined"/>
              </S.s3>
              <S.s3>
              <S.StyledTextField id="outlined-basic" label="Last name..." variant="outlined"/>
              </S.s3>
              </S.Section2>
            <S.Section1>
            <S.StyledTextField id="outlined-basic" label="Email address..." variant="outlined"/>
            </S.Section1>
            <S.Section1>
              <S.StyledTextField id="outlined-basic" label="Password..." variant="outlined"/>
            </S.Section1>
            <S.Section1>
            <Checkbox/>
            </S.Section1>
            <S.Section1>
              <S.StyledButton variant="contained" color="inherit">Zarejestruj się za darmo</S.StyledButton>
            </S.Section1>
            <S.Section3></S.Section3>
          </S.Left>
          <S.Right></S.Right>
        </S.Content2>
      </S.Content1>
    </S.View>
  )
}

export default App