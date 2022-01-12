import styled from 'styled-components'

const S = {

Section: styled.div`
  flex:1;
  width: 85%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  `,

  s: styled.div`
  flex:1; 
  height:100%; 
  display: flex; 
  align-items: center; 
  justify-content:center;
  `,

  hr: styled.span`
  width: 95%;
  `,

  p: styled.span`
  font-size: 11px;
  font-family: system-ui;
  `,

}

const HrBox = ({HrBoxText}) => {
    return (

    <S.Section>
        <S.s><S.hr><hr/></S.hr></S.s>
        <S.s><S.p>{HrBoxText}</S.p></S.s>
        <S.s><S.hr><hr/></S.hr></S.s>
    </S.Section>
    )
    }
  
    export default HrBox;