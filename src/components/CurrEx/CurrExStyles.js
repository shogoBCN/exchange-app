import styled from 'styled-components'


export const Framer = styled.div`
  padding: 10px;
  border-radius: .25rem!important;
  box-shadow: rgb(58 78 95 / 20%) 0 10px 16px, rgb(58 78 95 / 5%) 0 -5px 16px;
  background-color: #fff;
  min-height: 30vh;
  width:100%
` 

export const Title = styled.div`
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`

export const Result = styled.div`
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`

export const FromTo = styled.div`

`


export const ChartDiv = styled.div`
  margin-top: 50px;
  background-color: white;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 8px;

`

export const CurrExMain = styled.div`
  margin-top: 30px;
  align-items: end;
  justify-content: center;
  display: flex;


  @media screen and (max-width: 768px) {
    display: block;
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

export const ConvertFrom = styled.div`
  width: 250px;
  margin: 0 15px 0 15px;
  align-items: center;
  flex-direction: row;
`

export const ConvertTo = styled.div`
  width: 250px;
  margin: 0 15px 0 15px;
  align-items: center;
  flex-direction: row;
`

export const Input = styled.input`
  width: 150px;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  transition: all 100ms;
  box-sizing: border-box;

  &:focus {
    border: 2px solid black;
  }
`

export const BtnIcon = styled.img`
  height: 38px;
  &:active {
    border: 2px solid black;
  }
`

export const Select = styled.select`
  width: 250px;
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 0;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  transition: all 100ms;
  box-sizing: border-box;

  &:focus {
    border: 2px solid black;
  }

  @media screen and (max-width: 768px) {
    width: 400px;
  }
`

export const SwitchButton = styled.button`
  border: none;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    padding: 15px 0 15px 15px;
  }
`