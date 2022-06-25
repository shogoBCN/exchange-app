import React from 'react'
import { Framer, Amount } from './CurrexElements'

const CurrEx = () => {
  return (
    <>
      <Framer>
        <>
          <Amount>
            <label>Amount</label>
            <input type="number" />
          </Amount>
        </>
      </Framer>
    </>
  )
}

export default CurrEx