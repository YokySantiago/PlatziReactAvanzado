import React, { useContext, lazy, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'
import { Spinner } from './components/Spinner'

const GlobalStyles = lazy(() => import('./assets/styles/GlobalStyles'))
const Home = lazy(() => import('./pages/Home'))
const Favs = lazy(() => import('./pages/Favs'))
const User = lazy(() => import('./pages/User'))
const Detail = lazy(() => import('./pages/Detail'))
const NotRegisteredUser = lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Navbar = lazy(() => import('./components/Navbar'))

const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegisteredUser path='login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </Suspense>
  )
}

export default App
