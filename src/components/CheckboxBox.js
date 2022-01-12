import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  `,

  link: styled.a`
  border-bottom: solid #413fb5 3px;
  text-decoration: none; 
  color: black;
  `,
  
  p: styled.span`
  font-size: 14px;
  font-family: system-ui;
  font-weight: 500;
  `,

}

const CheckboxBox = ({Text, TextLink}) => {
    return (

        <S.Section>
        <Checkbox/>
        <S.p>{Text} <S.link href="#">{TextLink}</S.link></S.p>
        </S.Section>
    )
    }
  
    export default CheckboxBox;