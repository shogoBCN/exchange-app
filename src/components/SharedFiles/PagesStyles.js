import styled from 'styled-components'

export const CurrExMain = styled.div`
  margin-top: 40px;
  align-items: end;
  justify-content: center;
  display: flex;
  background-color: #D6E2E5;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const CurrApp = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
    border: solid 5px;
    border-color: #D6E2E5;
  }
` 

export const Title = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: #007c89;
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`

export const FromTo = styled.div`
  padding-top: 12px;
  color: grey;
`

export const CurrExDiv = styled.div`
  margin-top: 30px;
  align-items: end;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
  .title {
    text-align: center;
  }
  .butterino {
    display: flex;
    justify-content: center;
  }
`

export const Result = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
  .from {
    font-size: 20px;
    color: grey;
    font-weight: bold;
  }
  .to {
    font-size: 30px;
    color: #007c89;
    font-weight: bold;
  }
  .reverse {
    font-size: 13.5px;
    color: grey;
  }
`

export const Amount = styled.div`
  margin: 0 15px 0 15px;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    padding: 15px 0 15px 0;
  }
`

export const Input = styled.input`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 6px;
  width: 100%;
  min-height: 36px;
  background-color: #D6E2E5;
  border: 1px solid #007c89;
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  :focus{
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }          
`

export const ConvertFrom = styled.div`
  margin: 0 15px 0 15px;
  align-items: center;
  flex-direction: row;
`

export const ConvertTo = styled.div`
  margin: 0 15px 0 15px;
  align-items: center;
  flex-direction: row;
`

export const Select = styled.select`
  padding: 0 8px;
  vertical-align: middle;
  border-radius: 6px;
  width: 100%;
  min-height: 36px;
  background-color: #D6E2E5;
  border: 1px solid #007c89;
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  :focus{
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`

export const SwitchButton = styled.button`
  border: none;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    padding: 15px 0 15px 15px;
  }
`

export const BtnIcon = styled.img`
  margin-bottom: -5px;
  height: 45px;
  border: 1px solid #007c89;
  border-radius: 30px;
  &:active {
    border: 2px solid #007c89;
  }
`

export const UpperChart = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #D6E2E5;
  height: 600px;
  @media screen and (max-width: 1000px) {
    height: 550px;
  }
  @media screen and (max-width: 768px) {
    height: 475px;
  }
  @media screen and (max-width: 650px) {
    height: 400px;
  }

  .subChart {
    width: 90%;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 5px 0 5px;
    }
  }

  .subButtonDiv {
    margin: 10px 0 10px 0;
  }

  .timeFrameBtn {
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background-color: white;
    border-radius: 8px;
    padding: 8px 16px;
    margin: 0 3px 2px 0;
    font-size: 16px;
    font-weight: 600;
    color: #2d3748;
    border: 1px solid #cbd5e0;
    line-height: 16px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06); 
    :hover{
      background-color: #F7FAFA;
      border-color: #D5D9D9;
    }         
  }
`

export const ChartDiv = styled.canvas`
  background-color: white;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 8px;
  max-height: 500px;
`


