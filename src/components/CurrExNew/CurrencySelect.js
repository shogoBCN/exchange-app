import React from 'react'
import { Select } from './CurrExNewElements'


export default function CurrencySelect(props) {
  const {
    currOptions,
    selectedCurr,
    onChangeCurr
  } = props;

  return (
    <Select 
    value={selectedCurr}
    onChange={onChangeCurr}
    >   
      {currOptions.map(option => (
        <option key={option} value={option.replace(/ - .*/g,"$'")}>{option}</option>
      ))}
    </Select>
  )
}


