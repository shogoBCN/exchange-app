import React, { useEffect, useState } from 'react';
import CurrencySelect from './CurrencySelect';
import { Framer, Amount, ConvertFrom, ConvertTo, SwitchButton, CurrExMain, Input, BtnIcon, Title, FromTo } from './CurrExNewElements'

const API_URL = 'https://altexchangerateapi.herokuapp.com'

function CurrExNew() {
  const [ currOptions, setCurrOptions ] = useState([])
  const [ fromCurr, setFromCurr ] = useState()
  const [ toCurr, setToCurr ] = useState()
  const [ amount, setAmount ] = useState(1)
  const [ exchangeRate, setExchangeRate] = useState()

  let fromAmount, resultAmount
  fromAmount = amount
  if (toCurr === fromCurr) {
    resultAmount = amount
  }
  else {
  resultAmount = amount * exchangeRate
  }

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
        console.log(data)
        const initCurr = Object.keys(data.rates)[29]
        setFromCurr(data.base)
        setToCurr(initCurr)
        setExchangeRate(data.rates[initCurr])
      })
  }, [])

  useEffect(() => {
    console.log("from",fromCurr,"to",toCurr)
    console.log(`${API_URL}/latest?from=${fromCurr}`)
    if (fromCurr != null && toCurr != null) {
      fetch(`${API_URL}/latest?from=${fromCurr}`)
        .then(response => response.json())
        .then(data => setExchangeRate(data.rates[toCurr])) 
    }
  }, [fromCurr, toCurr])

  function handleAmountChange(e) {
    setAmount(e.target.value)
  }

  function switchButton() {
    let tempFromCurr = fromCurr
    let tempToCurr = toCurr
    setFromCurr(tempToCurr)
    setToCurr(tempFromCurr)
  }

  return (
    <>
      <Framer>   
        <CurrExMain>  
          <Title>Currency Exchange</Title>
          <FromTo></FromTo>
        </CurrExMain>
        <CurrExMain>
          <Amount>
            <label>Amount</label>
            <Input 
              type="number"
              value={amount}
              onChange={handleAmountChange}
            />
          </Amount>
          <ConvertFrom>
            <label>From</label>
            <CurrencySelect 
              currOptions={currOptions}
              selectedCurr={fromCurr}
              onChangeCurr={e => setFromCurr(e.target.value)}
              amount={fromAmount}
              onChangeAmount={handleAmountChange}
            />
          </ConvertFrom>
          <SwitchButton onClick={switchButton}>
            <BtnIcon src="./left-right.png"></BtnIcon>
          </SwitchButton>
          <ConvertTo>
            <label>To</label>
            <CurrencySelect 
              currOptions={currOptions}
              selectedCurr={toCurr}
              onChangeCurr={e => setToCurr(e.target.value)}
              amount={resultAmount}
            />
          </ConvertTo>
        </CurrExMain>
        <CurrExMain value={amount}>
          {amount} {fromCurr} = {resultAmount} {toCurr}
        </CurrExMain>
      </Framer>
    </>
  )
}

export default CurrExNew