import React from 'react'
import DropDown from '../APIcalls'

import { Framer, Amount, ConvertFrom, ConvertTo, SwitchButton, CurrExMain, Input, Button } from './CurrexElements'

const CurrEx = () => {

  return (
    <>
      <Framer>     
        <CurrExMain>
          <Amount>
            <label>Amount</label>
            <Input />
          </Amount>
          <ConvertFrom>
            <label>From</label>
              <DropDown />
          </ConvertFrom>
          <SwitchButton>
            <Button />
          </SwitchButton>
          <ConvertTo>
            <label>To</label>
            <DropDown />
          </ConvertTo>
        </CurrExMain>
      </Framer>
    </>
  )
}

export default CurrEx