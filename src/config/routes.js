import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import TodosContainer from '../containers/TodosContainer.js'
import WinesContainer from '../containers/WinesContainer.js'

export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer} />
    <Route path='/wines' component={WinesContainer} />
  </Route>
)
