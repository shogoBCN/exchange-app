import React from 'react'
import { Select } from './PagesStyles'

// Selector Dropdown
function CurrencySelect(props) {
  const {
    currOptions,
    selectedCurr,
    onChangeCurr,
    loading
  } = props;

  return (
    <Select 
      value={selectedCurr}
      onChange={onChangeCurr}
      disabled={loading}
    >   
      {currOptions.map(option => (
        <option id="options" key={option} value={option.replace(/ - .*/g,"$'")}>{option}</option>
      ))}
    </Select>
  )
}

export default CurrencySelect;