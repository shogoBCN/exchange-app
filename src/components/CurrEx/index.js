import React, { useEffect, useState, useRef } from 'react';
import { Select } from '../SharedFiles/PagesStyles'
import { CurrExMain, Amount, ConvertFrom, ConvertTo, SwitchButton, CurrExDiv, Input, BtnIcon, Title, FromTo, ChartDiv, Result, UpperChart, CurrApp } from '../SharedFiles/PagesStyles'
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
        <option id="options" key={option} value={option.replace(/ - .*/g,"$'")}>{option}</option>
      ))}
    </Select>
  )
}

function CurrExNew() {
  const [ currOptions, setCurrOptions ] = useState([])
  const [ fromCurr, setFromCurr ] = useState('EUR')
  const [ toCurr, setToCurr ] = useState('USD')
  const [ amount, setAmount ] = useState(1)
  const [ exchangeRate, setExchangeRate] = useState()
  const [ exchangeRateReverse, setExchangeRateReverse] = useState()
  const [ graph, chartBuilder] = useState();
  const [ urlFromCurr, setUrlFromCurr] = useState();
  const [ urlToCurr, setUrlToCurr] = useState();
  let [ timeframe, setTimeFrame ] = useState(30);
  const ref = useRef()

  let fromAmount, resultAmount, resultAmountReverse
  fromAmount = Number(amount)
  if (toCurr === fromCurr) {
    resultAmount = Number(amount)
  }
  else {
  resultAmount = parseFloat((Number(amount) * exchangeRate).toFixed(5))
  resultAmountReverse = parseFloat((Number(amount) * exchangeRateReverse).toFixed(5))
  }

  // fetch currency names; append value to label as string (to populate select options)
  useEffect(() => {
    fetch(API_URL+"/currencies")
      .then(response => response.json())
      .then(data => {
        let option = []
        if (Object.entries(data).length > 0) {
          Object.entries(data).forEach(item => {
            let selectable = []
            selectable.label = item.join(" - ")
            option.push(selectable.label)
          })
        }
        setCurrOptions(option)
      })
  }, [])


  useEffect(() => {
    if ( fromCurr === 'undefined' || fromCurr === false ) {
    fetch(API_URL+"/latest")
      .then(response => response.json())
      .then(data => {
        const initCurr = Object.keys(data.rates)[29]
        setFromCurr(data.base)
        setToCurr(initCurr)
        setExchangeRate(data.rates[initCurr])
      })
  }}, [fromCurr, toCurr])


  useEffect(() => {
    if (fromCurr != null && toCurr != null) {
      fetch(`${API_URL}/latest?from=${toCurr}`)
        .then(response => response.json())
        .then(data => setExchangeRate(data.rates[fromCurr])) 
    }
  }, [fromCurr, toCurr])

  useEffect(() => {
    if (fromCurr != null && toCurr != null) {
      fetch(`${API_URL}/latest?from=${fromCurr}`)
        .then(response => response.json())
        .then(data => setExchangeRateReverse(data.rates[toCurr])) 
    }
  }, [fromCurr, toCurr])

  useEffect(() => {
    const toDate = new Date((new Date()).getTime() - (timeframe * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    if (fromCurr != null && toCurr != null && fromCurr != toCurr) {
    fetch(`${API_URL}/${toDate}..?from=${fromCurr}&to=${toCurr}`)
      .then(response => response.json())
      .then(data => {
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
                  borderColor: "#007c89",
                  backgroundColor: "#000",
                }
              ]
            },
            options: {
              responsive: true,
              layout: {
                padding: {
                  top: 40,
                  bottom: 30,
                  left: 20,
                  right: 20
                }
              },
              plugins: {
                legend: {
                    display: false
                },
              }
            }
          })
        }
        chartBuilder(innerBuilder(chartLabels, chartData, chartLabel))
      })
    }
  }, [fromCurr, toCurr, timeframe])

  useEffect(() => {
    function getQueryVariable(variable) {
      let query = window.location.search.substring(1);
      let vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return(false);
    }
    setFromCurr(getQueryVariable('fromCurr'))
    setToCurr(getQueryVariable('toCurr'))
  }, [])


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
        <CurrApp>
          <CurrExDiv>  
            <div className='title'>
              <Title>Currency Exchange</Title>
              <FromTo>{fromCurr} → {toCurr}</FromTo>
            </div>
          </CurrExDiv>
          <CurrExDiv>
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
            <div className='butterino'>
              <SwitchButton onClick={switchButton}>
                <BtnIcon src="./left-right.png"></BtnIcon>
              </SwitchButton>
            </div>
            <ConvertTo>
              <label>To</label>
              <CurrencySelect 
                currOptions={currOptions}
                selectedCurr={toCurr}
                onChangeCurr={e => setToCurr(e.target.value)}
                amount={resultAmount}
              />
            </ConvertTo>
          </CurrExDiv>
          <CurrExDiv>
            <Result>
              <div className='from'>{amount} {fromCurr} =</div>
              <div className='to'>{resultAmount} {toCurr}</div>
              <div className='reverse'>( {amount} {toCurr} = {resultAmountReverse} {fromCurr} )</div>
            </Result>
          </CurrExDiv>
        </CurrApp>
      </CurrExMain>
      <UpperChart>
        <div className='subChart'>
          <div className='subButtons'>
            <button className='timeFrameBtn' onClick={() => setTimeFrame(timeframe=7)}>Week</button>
            <button className='timeFrameBtn' onClick={() => setTimeFrame(timeframe=30)}>Month</button>
            <button className='timeFrameBtn' onClick={() => setTimeFrame(timeframe=90)}>Quarter</button>
            <button className='timeFrameBtn' onClick={() => setTimeFrame(timeframe=366)}>Year</button>
          </div>
          <ChartDiv id='canvas' ref={ref} />
        </div>
      </UpperChart>
    </>
  )
}

export default CurrExNew