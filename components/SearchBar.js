import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const StyledSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'yellowgreen',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  searchInput: {
    fontSize: 16,
    color: 'black',
  },
});

export default StyledSearchBar;
