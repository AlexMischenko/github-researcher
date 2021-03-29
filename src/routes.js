import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import RepositoryDetails from './pages/RepositoryDetails'

import Pages from './pages'

const Stack = createStackNavigator()

const Router = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Pages.Home} component={Home} />
      <Stack.Screen name={Pages.RepositoryDetails} component={RepositoryDetails} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Router
