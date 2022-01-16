import React from 'react'
import styled, {css} from 'styled-components'
import TOLogo from './images/TOLogo.png'
import gym from './images/gym.jpg'
import fbIcon from './images/fbIcon.png'
import instaIcon from './images/instaIcon.png'
import {TitleBox, LogoBox, HrBox, TextFieldBox, TextFieldBox2, ButtonBox, CheckboxBox, TextBox} from './components';

const common = css`
  display: flex;
  justify-content: center;
  `;

const S = {
  View: styled.div`
  ${common};
  flex-direction: column;
  `,

  Header: styled.div`
  ${common};
  height: 108px;
  align-items: center;
  `,

  Content1: styled.div`
  ${common};
  `,

  Content2: styled.div`
  width: 40%;
  display: flex;
  border: solid 1px;
  border-radius: 10px;
  height: 756px;
  width: 768px;
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
            <TitleBox TitleBoxText='Zarejestruj się jako trener'></TitleBox>
            <LogoBox Icon = {fbIcon} alt='fbIcon' link='https://www.facebook.com' LogoBoxText='Rejestracja przez Facebook'></LogoBox>
            <LogoBox Icon = {instaIcon} alt='instaIcon' link='https://www.instagram.com' LogoBoxText='Rejestracja przez Instagram'></LogoBox>
            <HrBox HrBoxText = 'Lub za pomocą maila'></HrBox>
            <TextFieldBox2 label1 = 'First Name...' label2 = 'Last Name...'></TextFieldBox2>
            <TextFieldBox label = 'Email address...'></TextFieldBox>
            <TextFieldBox label = 'Password...'></TextFieldBox>
            <CheckboxBox Text = 'I have read the ' TextLink = 'Terms & Conditions'></CheckboxBox>
            <ButtonBox ButtonText = 'Zarejestruj się za darmo'></ButtonBox>
            <TextBox Text = 'Masz już konto ?' TextLink = 'Zaloguj się'></TextBox>
          </S.Left>
          <S.Right></S.Right>
        </S.Content2>
      </S.Content1>
    </S.View>
  )
}

export default App