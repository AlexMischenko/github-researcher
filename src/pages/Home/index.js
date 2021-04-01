import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

import { getRepositories } from '../../services/github'
import Pages from '../../pages'
import SearchInput from '../../components/SearchInput'

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [queryPage, setQueryPage] = useState(1)

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await getRepositories({ query: searchQuery, page: queryPage })
      console.log('🚀 ~ file: index.js ~ line 17 ~ fetchRepositories ~ response', response)
      setSearchResults(response)
    }

    fetchRepositories()
  }, [searchQuery])

  const handleChangeSearchQuery = value => {
    console.log('🚀 ~ file: index.js ~ line 12 ~ handleChangeSearchQuery ~ value', value)
    setSearchQuery(value)
  }

  return (
    <View>
      <Text style={cs.mv10}>Home Screen</Text>

      <SearchInput onQueryChange={handleChangeSearchQuery} />

      <Pressable onPress={() => navigation.navigate(Pages.RepositoryDetails)}>
        <Text>RepositoryDetails</Text>
      </Pressable>
    </View>
  )
}

const cs = StyleSheet.create({
  mv10: {
    marginVertical: 10,
  },
})

export default Home
