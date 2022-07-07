import React, { useEffect, useState, useRef } from 'react';
import { Select } from '../SharedFiles/PagesStyles'
import { Framer, Amount, ConvertFrom, ConvertTo, SwitchButton, CurrExMain, Input, BtnIcon, Title, FromTo, ChartDiv, Result } from '../SharedFiles/PagesStyles'
import Chart from 'chart.js/auto';

const API_URL = 'https://altexchangerateapi.herokuapp.com'
let builderCounter = 0


function CurrencySelect(props) {
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

function CurrList() {
  const [ currOptions, setCurrOptions ] = useState([])
  const [ fromCurr, setFromCurr ] = useState()
  const [ toCurr, setToCurr ] = useState()
  const [ amount, setAmount ] = useState(1)
  const [ exchangeRate, setExchangeRate] = useState()
  const [ graph, chartBuilder] = useState();
  let [ timeframe, setTimeFrame ] = useState(30);
  const ref = useRef()


  let fromAmount, resultAmount
  fromAmount = Number(amount)
  if (toCurr === fromCurr) {
    resultAmount = Number(amount)
  }
  else {
  resultAmount = parseFloat((Number(amount) * exchangeRate).toFixed(5))
  }

  // fetch currency names; concat value and label as string
  useEffect(() => {
    fetch(API_URL+"/currencies")
      .then(response => response.json())
      .then(data => {
        let option = []
        if (Object.entries(data).length > 0) {
          Object.entries(data).forEach(item => {
            let selectable = []
            selectable.value = item[0]
            selectable.label = item.join(" - ")
            option.push(selectable.label)
          })
        }
        setCurrOptions(option)
      })
  }, [])

  useEffect(() => {
    fetch(API_URL+"/latest")
      .then(response => response.json())
      .then(data => {
        const initCurr = Object.keys(data.rates)[29]
        setFromCurr(data.base)
        setToCurr(initCurr)
        setExchangeRate(data.rates[initCurr])
      })
  }, [])

  useEffect(() => {
    if (fromCurr != null && toCurr != null) {
      fetch(`${API_URL}/latest?from=${fromCurr}`)
        .then(response => response.json())
        .then(data => setExchangeRate(data.rates[toCurr])) 
    }
  }, [fromCurr, toCurr])


  return (
    <>
      <CurrExMain>  
      <Title>Currency Rates</Title>
      </CurrExMain>
      <CurrExMain>   
        <ConvertTo>
          <CurrencySelect 
            currOptions={currOptions}
            selectedCurr={toCurr}
            onChangeCurr={e => setToCurr(e.target.value)}
            amount={resultAmount}
          />
        </ConvertTo>
      </CurrExMain>
    </>
  )
}

export default CurrList