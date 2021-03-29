import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const SearchInput = ({ style, initialValue, onQueryChange, debounce }) => {
  const [query, setQuery] = useState(initialValue)

  const debouncedOnQueryChange = useRef(_.debounce(value => onQueryChange(value), debounce)).current
  // const debouncedOnQueryChange = _.debounce(value => onQueryChange(value), debounce)
  // const [debouncedOnQueryChange] = useState(_.debounce(value => onQueryChange(value), debounce))

  const handleTextChange = value => {
    setQuery(value)
    debouncedOnQueryChange(value)
  }

  return <TextInput style={[cs.inputBlock, style]} onChangeText={handleTextChange} value={query} />
}

SearchInput.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  style: PropTypes.object,
  debounce: PropTypes.number,
}

SearchInput.defaultProps = {
  initialValue: '',
  debounce: 500,
}

const cs = StyleSheet.create({
  inputBlock: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#B3B4BB',
  },
})

export default SearchInput
