import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

import Pages from '../../pages'
import SearchInput from '../../components/SearchInput'

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')

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
