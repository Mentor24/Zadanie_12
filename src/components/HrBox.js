import styled from 'styled-components'

const S = {

Section: styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  margin-top: 4%;
  `,

HorizontalRuler: styled.span`
  width: 30%;
  `,

Paragraph: styled.span`
  font-size: 11px;
  font-family: system-ui;
  font-weight: bold;
  `,
}

const HrBox = ({HrBoxText}) => {
    return (

    <S.Section>
      <S.HorizontalRuler><hr/></S.HorizontalRuler>
      <S.Paragraph>{HrBoxText}</S.Paragraph>
      <S.HorizontalRuler><hr/></S.HorizontalRuler>
    </S.Section>
    )
    }
  
    export default HrBox;