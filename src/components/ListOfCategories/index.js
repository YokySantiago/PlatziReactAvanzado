import React, { useState, useEffect } from 'react'

import { Category } from './../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-yoky-betc1aut0.vercel.app/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return { categories, loading, error }
}

const ListOfCategories = () => {
  const [fixed, setFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      setFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [fixed])

  const renderList = (fixed) => (
    <List fixed={fixed} className='flex flex-row justify-center'>
      {loading
        ? (
          <Item key='loading'>
            <Category />
          </Item>
          )
        : (
            categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))
          )}
    </List>
  )

  return (
    <div className='py-2'>
      {renderList()}
      {fixed && renderList(fixed)}
    </div>
  )
}

const ListOfCategoriesComponent = React.memo(ListOfCategories)
export default ListOfCategoriesComponent
