import PropTypes from 'prop-types'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

import Pages from '../../pages'

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate(Pages.RepositoryDetails)}>
        <Text>RepositoryDetails</Text>
      </Pressable>
    </View>
  )
}

export default Home
