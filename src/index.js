import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'

import Context from './Context'
import { Spinner } from './components/Spinner'

import './assets/styles/styles.css'

const App = lazy(() => import('./App'))
const ApolloClientProvider = lazy(() => import('./components/ApolloClientProvider'))

ReactDOM.render(
  <Context.Provider>
    <Suspense fallback={<Spinner />}>
      <ApolloClientProvider>
        <App />
      </ApolloClientProvider>
    </Suspense>
  </Context.Provider>,
  document.getElementById('app')
)
