import React from 'react'
import { Match } from 'react-router'
import Landing from './landing'
import Details from './details'

const App = () => {
  return (
    <div className='app'>
      <Match exactly pattern='/' component={Landing} />
      <Match
        pattern='/details/:id'
        component={(props) => <Details {...props} />}
      />
    </div>
  )
}

export default App
