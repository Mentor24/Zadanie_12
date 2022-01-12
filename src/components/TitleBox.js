import styled from 'styled-components'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  `,

  p: styled.span`
  font-size: 18px;
  font-weight: 700;
  font-family: system-ui;
  `,
}

const TitleBox = ({TitleBoxText}) => {
    return (

    <S.Section>
    <S.p>{TitleBoxText}</S.p>
    </S.Section>
    )
    }
  
    export default TitleBox;