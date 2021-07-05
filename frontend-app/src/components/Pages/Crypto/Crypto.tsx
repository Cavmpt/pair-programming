import * as React from 'react'

import Pannel from '../../UIcomponents/Pannels/Pannels'

import './Crypto.scss'

export interface ICryptoProps {
  placeholder?: null
}

export default function Crypto(props: ICryptoProps): JSX.Element {
  return (
    <div className='stock-page'>
      <Pannel />
    </div>
  )
}
