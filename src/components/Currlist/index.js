import React, { useEffect, useState, useRef } from 'react'
import { Select } from '../SharedFiles/PagesStyles'
import currenciesObject from '../SharedFiles/currenciesObject'
import { CurrExMain, Amount, ConvertFrom, ConvertTo, SwitchButton, CurrExDiv, Input, BtnIcon, Title, FromTo, ChartDiv, Result, UpperChart, CurrApp } from '../SharedFiles/PagesStyles'
import Flag from 'react-flagkit'; 


const API_URL = 'https://altexchangerateapi.herokuapp.com'

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

function List(props) {
  const {
    listOutput
  } = props;
  Object.values(listOutput)
  return (
    <div>
      {Object.values(listOutput).map(entries => {
        console.log(entries)
      })}
    </div>
  )
}


function CurrList() {
  const [ currOptions, setCurrOptions ] = useState([])
  const [ fromCurr, setFromCurr ] = useState()
  const [ exRates, setExRates ] = useState([])
  const [ listOutput, setListObject ] = useState({})
  
  // fetch currency names; concat value and label as string
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
    fetch(API_URL+"/latest")
      .then(response => response.json())
      .then(data => {
        let ratios = []
        setFromCurr(data.base)  
        if (Object.entries(data).length > 0) { 
          Object.entries(data.rates).forEach(item => {
            ratios.push([
              item[0],
              item[1]
            ])
          })
        }
        setExRates(ratios)
        //console.log(ratios)
      })
  }, [])

  useEffect(() => {
    fetch(`${API_URL}/latest?from=${fromCurr}`)
      .then(response => response.json())
      .then(data => {
        if (Object.entries(data).length > 0) {
        const listObject = Object.keys(data.rates)
          .filter(currency => currency !== fromCurr)
          .map(currency => ({
            currency,
            rate: data.rates[currency],
            name: currenciesObject[currency].name,
            symbol: currenciesObject[currency].symbol,
            flag: currenciesObject[currency].flag
          }))   
        //console.log(listObject)
        setListObject(listObject)
        }
      })
  }, [fromCurr])

  return (
    <>
      <CurrExMain>   
        <CurrApp>
          <CurrExDiv>  
            <div className='title'>
              <Title>Exchange Rates</Title>
            </div>
          </CurrExDiv>
          <CurrExDiv>
            <div>
              <label>Base Currency</label>
              <CurrencySelect 
                currOptions={currOptions}
                selectedCurr={fromCurr}
                onChangeCurr={e => setFromCurr(e.target.value)}
              />
            </div>
          </CurrExDiv>
          <List
            listOutput={listOutput}
          />
        </CurrApp>
      </CurrExMain>
    </>
  )
}

export default CurrList