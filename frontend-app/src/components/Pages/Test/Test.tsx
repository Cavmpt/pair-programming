import * as React from 'react'
import queryString from 'query-string'

export interface ITestProps {
  placeholder?: null
}

export default function Test(props: ITestProps) {
  const fetch = () => {
    fetch(process.env.REACT_APP_REST_BASE_URL + '/alerts', {
      method: 'GET',
      responseType: 'arraybuffer',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
    })
      .then(response => response.body)
      .then(body => createReadableStream(body))
      .then(stream => createArrayBuffer(stream))
      .then(result => {})
  }
  return <div></div>
}
