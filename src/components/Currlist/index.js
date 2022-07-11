import React, { useEffect, useState, useRef } from 'react'
import { Select } from '../SharedFiles/PagesStyles'
import { Link } from 'react-router-dom'
import { CurrExMain, Table, ConvertFrom, ConvertTo, SwitchButton, CurrExDiv, Input, BtnIcon, Title, FromTo, ChartDiv, Result, UpperChart, ListApp } from '../SharedFiles/PagesStyles'
import Flag from 'react-flagkit'; 
import currenciesObject from '../SharedFiles/currenciesObject'



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
    listOutput,
    fromCurr
  } = props;
  return (
    <Table>
      <tbody>
        <tr>
          <th>Currency</th>
          <th className="rate">Rate in {fromCurr}</th>
          <th className="symbol">Symbol</th>
        </tr>
        {Object.values(listOutput).map(listItem => {
          return (
          <tr key={listItem.name}>
            <td key={listItem.currency}>
              <Flag country={listItem.flag} />&nbsp;{listItem.name}
            </td>
            <td key={listItem.rate}>
              <Link to={`/currEx?fromCurr=${fromCurr}&toCurr=${listItem.currency}`}>{listItem.rate}</Link>
            </td>
            <td key={listItem.flag}>
              {listItem.currency} ({listItem.symbol}) 
            </td>
          </tr>
        )})}
      </tbody>
    </Table>
  )
}

function CurrList() {
  const [ currOptions, setCurrOptions ] = useState([])
  const [ fromCurr, setFromCurr ] = useState('EUR')
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
        setFromCurr(data.base)  
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
        setListObject(listObject)
        }
      })
  }, [fromCurr])

  return (
    <>
      <CurrExMain>   
        <ListApp>
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
          <CurrExDiv>  
            <div className='description-container'>
              <Flag country={currenciesObject[fromCurr].flag} />&nbsp;
              <div><span className='amount'>1 {fromCurr}</span> equals the following:</div>
            </div>
          </CurrExDiv>
          <CurrExDiv>
            <div className="list-container">
              <List 
              listOutput={listOutput} 
              fromCurr={fromCurr}
            />
            </div>
          </CurrExDiv>
        </ListApp>
      </CurrExMain>
    </>
  )
}

export default CurrList