import styled from 'styled-components'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  margin-bottom: 4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `,

Link: styled.a`
  border-bottom: solid #413fb5 3px;
  text-decoration: none; 
  color: black;
  `,
  
Paragraph: styled.span`
  font-size: 14px;
  font-family: system-ui;
  font-weight: 500;
  `,
}

const TextBox = ({Text, TextLink}) => {
    return (

    <S.Section>
      <S.Paragraph>{Text} <S.Link href="#">{TextLink}</S.Link></S.Paragraph>
    </S.Section>
    )
    }
  
    export default TextBox;