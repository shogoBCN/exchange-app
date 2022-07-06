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

function CurrExNew() {
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

  useEffect(() => {
    console.log(timeframe)
    const toDate = new Date((new Date()).getTime() - (timeframe * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    if (fromCurr != null && toCurr != null && fromCurr != toCurr) {
    fetch(`${API_URL}/${toDate}..?from=${fromCurr}&to=${toCurr}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const chartLabels = Object.keys(data.rates)
        const chartData = Object.values(data.rates).map(rate => rate[toCurr])
        const chartLabel = `${fromCurr}/${toCurr} - ${timeframe} days`
        const innerBuilder = function(labels, data, label) {
          builderCounter = Number(Object.keys(Chart.instances).toString())
          if ( Chart.instances[builderCounter] ) {
            Chart.instances[builderCounter].destroy()
          }       
          const graph = new Chart(ref.current.getContext('2d'), {
            type: 'line',
            data: {
              labels,
              datasets: [
                {
                  label: label,
                  data,
                  fill: false,
                  tension: 0,
                }
              ]
            },
            options: {
              responsive: true,
            }
          })
        }
        chartBuilder(innerBuilder(chartLabels, chartData, chartLabel))
      })
    }
  }, [fromCurr, toCurr, timeframe])

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
      <CurrExMain>   
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
          <CurrExMain>
            <Result value={amount}>
              {amount} {fromCurr} = {resultAmount} {toCurr}
            </Result>
          </CurrExMain>
        </Framer>
      </CurrExMain>
      <button onClick={() => setTimeFrame(timeframe=7)}>1week</button>
      <button onClick={() => setTimeFrame(timeframe=30)}>30days</button>
      <button onClick={() => setTimeFrame(timeframe=90)}>90days</button>
      <button onClick={() => setTimeFrame(timeframe=365)}>1year</button>
      <ChartDiv id='chart'>
        <canvas id='canvas' ref={ref} />
      </ChartDiv>
    </>
  )
}

export default CurrExNew