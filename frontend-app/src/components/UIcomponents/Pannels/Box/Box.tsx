import * as React from 'react'
import './Box.scss'

export interface IBoxProps {
  crypto: string
  price: number
  trend: string
}

export default function Box(props: IBoxProps): JSX.Element {
  const {crypto, price, trend} = props
  return (
    <div className='box'>
      <div className='box__title'>{crypto}</div>
      <div className='box__price-trend-wrapper'>
        <div className='box__price'>{price}</div>
        <div className='box__trend'>{trend}</div>
      </div>
    </div>
  )
}
