import React from 'react'
import styled from 'styled-components'
import TOLogo from './images/TOLogo.png'
import gym from './images/gym.jpg'
import Button from '@mui/material/Button'

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
  `,

  Section2: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  margin-bottom: 4%
  border: solid 1px;
  border-radius: 10px;;
  `,

  StyledButton: styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #413fb5;
  font-weight: 700;
  font-size: 20px; 
  `,
}

function App() {
  return (
    <S.View>
      <S.Header>
      <img src={TOLogo} alt="Logo"/>
      </S.Header>
      <S.Content1>
        <S.Content2>
          <S.Left>
            <S.Section1></S.Section1>
            <S.Section1></S.Section1>
            <S.Section1></S.Section1>
            <S.Section1>
              
            </S.Section1>
            <S.Section1>

            </S.Section1>
            <S.Section1></S.Section1>
            <S.Section1>
              <S.StyledButton variant="contained">Zarejestruj się za darmo</S.StyledButton>
            </S.Section1>
            <S.Section2></S.Section2>
          </S.Left>
          <S.Right></S.Right>
        </S.Content2>
      </S.Content1>
    </S.View>
  )
}

export default App