import * as React from 'react'
import Box from './Box/Box'
import crypto from '../../../store/store'

import './Pannel.scss'

export interface IPannelProps {
  placeholder?: null
}

export default function Pannel(props: IPannelProps): JSX.Element {
  return (
    <div className='coin-pannel'>
      <div className='coin-pannel__boxes-wrapper'>
        {crypto.map(item => (
          <Box crypto={item.name} price={item.price} trend={item.trend} />
        ))}
      </div>
    </div>
  )
}
